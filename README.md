# Game-Price-Radar / GAME PULSE

游戏价格与官方榜单雷达，包含 Nintendo Switch / Switch 2 日服和港服、PlayStation 港服和日服、Steam 中国区和全球热销榜。

前端位于 `dist/`；收集器位于 `collector/`，通过 Playwright Chromium 和官方接口采集数据。仓库自带静态快照，首次打开页面即可显示已有数据，随后使用收集器更新。

## 服务器要求

- 推荐 Ubuntu 22.04 / 24.04 或 Debian 12，安装 Git、Docker Engine 和 Docker Compose v2（建议 2.20+）。Docker 安装参考 https://docs.docker.com/engine/install/ 。
- 建议至少 2 核 CPU、4 GB 内存、10 GB 可用磁盘；浏览器采集时需要额外内存。
- 服务器需要能访问 Nintendo、PlayStation、Steam 官方网站，以及构建时的 npm、Docker Hub 和 Playwright 下载地址。
- 无需在宿主机额外安装 Node.js 或 Chromium，镜像会安装依赖与浏览器。
- 支持 x86_64 / ARM64 Linux；浏览器是否能读取官方页面仍受服务器网络、地区和官方限流影响。

## 方式一：同一台服务器部署网站和收集器

```bash
git clone https://github.com/DPswxz/DPsWeb1.git Game-Price-Radar
cd Game-Price-Radar
cp .env.example .env
docker compose up -d --build --wait
```

打开 `http://服务器IP:8080`，在安全组或防火墙放行网站端口 8080。网站经 Nginx 转发收集器接口和图片，收集器 8787 默认仅绑定本机，不需要对外开放。

需要换端口时修改 `.env` 的 `WEB_PORT`。域名与 HTTPS 可以通过已有 Nginx、Caddy 或服务器面板反向代理到 `127.0.0.1:8080`；使用已有代理时可将 `WEB_BIND=127.0.0.1`。

默认每 60 分钟检查并采集过期数据，重启后自动恢复服务。首次采集可能需要几分钟；`/health` 表示服务可用，各平台的 `count`、`updatedAt` 和 `stale` 表示实际采集状态。官方临时限流时保留上次成功缓存。

## 方式二：网站和收集器分别部署在两台服务器

### 收集器服务器 B

```bash
git clone https://github.com/DPswxz/DPsWeb1.git Game-Price-Radar
cd Game-Price-Radar
cp .env.example .env
```

修改 B 的 `.env`：

```dotenv
COLLECTOR_BIND=0.0.0.0
COLLECTOR_PORT=8787
REFRESH_MINUTES=60
```

启动收集器：

```bash
docker compose -f compose.collector.yaml up -d --build --wait
curl http://127.0.0.1:8787/health
```

在 B 的安全组和防火墙中，仅允许前端服务器 A 的 IP 访问 8787。建议使用内网 / VPN 地址；跨公网也可以给收集器配置 HTTPS 域名。刷新和设置接口没有管理员认证，不应把 8787 向所有公网 IP 开放。CORS 设置不是访问控制。

### 网站服务器 A

```bash
git clone https://github.com/DPswxz/DPsWeb1.git Game-Price-Radar
cd Game-Price-Radar
cp .env.example .env
```

修改 A 的 `.env`，把地址替换成 A 可以连接的 B 的真实地址，地址末尾不要加 `/` 或路径：

```dotenv
WEB_PORT=8080
COLLECTOR_UPSTREAM=http://192.168.1.20:8787
# 或 COLLECTOR_UPSTREAM=https://collector.example.com
```

启动网站：

```bash
docker compose -f compose.web.yaml up -d --build --wait
curl http://127.0.0.1:8080/health
```

打开 `http://A的IP:8080`。访问者只连接 A，A 负责转发 `/api/`、`/health` 到 B，无需修改 `dist/config.js`。该方式支持 HTTPS 网站连接内网 HTTP 收集器。

更改 `COLLECTOR_UPSTREAM` 后再次执行启动命令，Compose 会重建配置变化的容器。

## 数据持久化与服务器迁移

价格历史使用 `deploy/data/price-history.sqlite`（SQLite），仅记录实际价格变化。游戏标识单独存储，金额以整数分、时间以整数毫秒保存；复合主键支持按游戏和日期检索。接口支持批量游戏查询、日期范围及分页，前端只请求当前页游戏最近6个月的数据，点开详情后再读取该游戏的完整历史。

首次升级会自动迁移旧 `price-history.json`，保留毫秒时间和同日价格变化，并生成经验证的 `price-history.json.gz` 备份。请备份整个 `deploy/data/` 目录；运行中备份数据库需使用 SQLite 备份工具，或先停止收集器再复制，不能仅复制活跃数据库的主文件。手动运行需要 Node.js 22.13 或更新版本。

收集器缓存、语言缓存、采集图片全部保存在宿主机 `deploy/data/`，通过 `DATA_DIR` 可改为其他目录。更新镜像和删除容器不会删除这个目录。`.env` 和运行数据不会上传到 GitHub。

旧服务器先停止收集器再备份，避免采集过程中产生不完整文件：

```bash
# 同机部署
docker compose stop collector
# 独立收集器部署则执行：
# docker compose -f compose.collector.yaml stop collector
tar -czf game-pulse-backup.tar.gz .env deploy/data
```

将备份通过 `scp` 等方式传到新服务器。新服务器拉取仓库，进入仓库根目录，解压备份，然后按所选方式启动：

```bash
git clone https://github.com/DPswxz/DPsWeb1.git Game-Price-Radar
cd Game-Price-Radar
tar -xzf /备份所在目录/game-pulse-backup.tar.gz
docker compose up -d --build --wait
# 仅收集器则执行：
# docker compose -f compose.collector.yaml up -d --build --wait
```

如果设置了自定义 `DATA_DIR`，备份和恢复实际数据目录，并确保新服务器的 `.env` 指向该目录。迁移 B 后，在 A 的 `.env` 更新 `COLLECTOR_UPSTREAM` 并重新启动网站。纯网站服务器只需迁移 `.env`，不需要收集器数据目录。

迁移旧采集数据时，先停止旧收集器，将原数据目录中的 JSON 文件放入服务器 `deploy/data/`，再启动服务器。浏览器收藏、设置和价格记录使用 localStorage，属于各浏览器的本地数据，不在服务器备份中。

## 更新、日志与停止

同机部署：

```bash
git pull --ff-only
docker compose up -d --build --wait
docker compose ps
docker compose logs -f --tail=100 collector
docker compose down
```

独立部署时，所有 Compose 命令加 `-f compose.collector.yaml` 或 `-f compose.web.yaml`，例如：

```bash
git pull --ff-only
docker compose -f compose.collector.yaml up -d --build --wait
docker compose -f compose.collector.yaml logs -f --tail=100
```

网站 `/health` 返回 502：检查 A 到 B 的网络、B 的监听地址、安全组，以及 `COLLECTOR_UPSTREAM`。接口正常但 `count=0`：查看收集器日志和官方站点连通性。配置只提供运行状态检查，不保证第三方网站一定能成功采集。

## 当前更新流程

生产项目运行在服务器上，本机用于修改和验证代码。验证通过后提交并推送：

```bash
git add -A
git commit -m "说明本次修改"
git push github main
```

需要发布时，在 GitHub Actions 选择 `Deploy production server`，点击 `Run workflow` 并选择 `main`。服务器 runner 安装依赖、测试并更新 Docker 服务，沿用服务器原有环境配置和数据库。部署结果见 GitHub Actions，详细说明见 [部署文档](deploy/GITHUB-AUTO-DEPLOY.md)。本机不需要启动网站、Docker 或 Cloudflare Tunnel。

## 手动部署

不使用 Docker 时，可在安装 Node.js 22+ 的服务器运行整站：

```bash
cd collector
npm ci
npx playwright install --with-deps chromium
cp .env.example .env
node --env-file=.env src/server.mjs
```

默认整站地址 `http://服务器IP:8787`，生产环境通过 systemd 等进程管理器运行。`.env` 中设置 `SERVE_FRONTEND=0` 可以只运行收集器。默认缓存目录 `collector/data/`，港服封面通过 `/api/nintendo/image` 转发官方图片，仅使用有容量限制的内存缓存，不保存本地图片文件。

纯静态托管时，将 `dist/` 作为网站根目录，在 `dist/config.js` 中设置收集器 HTTPS 地址，并在收集器设置 `ALLOWED_ORIGINS=https://你的前端域名`。此时浏览器需要能直接访问收集器，港服图片也从收集器加载。推荐使用前述 Nginx 代理方式部署。

## 验证

```bash
cd collector
npm ci
npm test
```

GitHub Actions 自动运行测试，并验证 Docker 镜像、Chromium 启动、同机部署、分离部署的接口转发和持久化图片访问。部署测试关闭启动采集，避免依赖官方网站实时响应。
# 游戏名翻译

在根目录 `.env` 设置 `GOOGLE_TRANSLATE_API_KEY`，部署后由收集器调用 Google Cloud Translation Basic，将新出现的日语或英语名称翻译为简体中文。现有中文译名优先，同名跨平台共用缓存，忽略商标符号、全角字符和多余空格的差异。

翻译与调用记录存储在 `deploy/data/title-translations.sqlite`，备份时与价格数据库一起保存。成功译名永久复用；每个新名称最多调用一次，失败、超时、重启后也不会自动重复请求。接口连接失败暂停新请求1小时，权限错误或超限暂停24小时；已有译名照常显示，无译名显示原名。网页每30秒同步服务器缓存，该同步不会调用翻译API。机器翻译不一定是官方中文游戏名，可在 `collector/src/title-overrides.json` 中添加准确名称，部署后优先使用。

