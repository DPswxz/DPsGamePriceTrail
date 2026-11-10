# GAME PULSE

游戏价格与官方榜单观测站，覆盖 Nintendo Switch / Switch 2 日服与港服、PlayStation 港服与日服，以及 Steam 中国区与全球热销榜。前端在 `dist/`，自带榜单快照。采集器在 `collector/`，负责更新榜单并记录价格变化。

## Docker 部署

安装 Git、Docker 和 Docker Compose v2。部署主机需要能访问各平台商店和依赖下载地址。

```bash
git clone https://github.com/DPswxz/DPsGamePriceTrail.git
cd DPsGamePriceTrail
cp .env.example .env
docker compose up -d --build --wait
```

打开 `http://服务器IP:8080`。通过 `.env` 的 `WEB_PORT` 修改网站端口。使用本机反向代理时，可设 `WEB_BIND=127.0.0.1`。采集器端口 8787 默认仅监听本机。

- **分开部署**。采集器设 `COLLECTOR_BIND=0.0.0.0`，用 `docker compose -f compose.collector.yaml up -d --build --wait` 启动，防火墙仅允许前端服务器访问 8787。前端设置 `COLLECTOR_UPSTREAM=http://采集器IP:8787`，用 `docker compose -f compose.web.yaml up -d --build --wait` 启动。
- **Cloudflare Tunnel**。已有隧道可将网站回源设为 `http://web:80`，在 `.env` 填写 `CLOUDFLARE_TUNNEL_TOKEN`，再运行 `docker compose -f compose.yaml -f compose.cloudflare.yaml up -d --build --wait`。
- **运行状态**。访问 `/health` 查看各区服的条目数和更新时间。采集失败时保留上次成功的数据。用 `docker compose logs --tail=100 collector` 查看日志。

## Node.js 直跑

需要 Node.js 22.13 或更新版本。从仓库根目录执行：

```bash
cd collector
npm ci
npx playwright install chromium
cp .env.example .env
node --env-file=.env src/server.mjs
```

打开 `http://localhost:8787`。Linux 如缺少 Chromium 系统依赖，可运行 `npx playwright install --with-deps chromium`。直跑默认使用 `collector/data/`，恢复 Docker 备份时可将该路径链接到 `deploy/data/`。

## 更新与备份

更新 Docker 部署时，保留现有 `.env` 和数据目录，执行 `git pull --ff-only`，再用部署时的 Compose 文件重新构建并启动。

Docker 默认将价格历史、译名、榜单和封面保存在 `deploy/data/`。迁移时先停止采集器，备份 `.env` 和整个数据目录，再恢复到新部署。若设置了 `DATA_DIR`，以实际目录为准。在线备份 SQLite 时使用 SQLite 备份工具。浏览器收藏和设置保存在各浏览器中。

## 译名与测试

人工译名维护在 `collector/src/title-overrides.json`。可在部署环境设置 `GOOGLE_TRANSLATE_API_KEY`，为没有译名的游戏启用机器翻译。

```bash
cd collector
npm ci
npm test
```
