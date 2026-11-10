# 通过 GitHub Actions 部署

推送代码后，如需发布，在 `DPswxz/DPsWeb1` 的 Actions 页面打开 `Deploy production server`，点击 `Run workflow` 并选择 `main` 分支。

服务器 Windows runner 标签为 `game-price-radar`，运行文件位于 `%USERPROFILE%\actions-runner-game-radar`。独立工作区安装依赖、运行测试，再调用 `scripts/Deploy-GamePulse.ps1`。

`production.json` 指向原部署目录，沿用该目录的 `.env` 和 `deploy/data`，Compose 项目固定为 `dpstools01`。不要删除或将这些运行文件提交到 GitHub。部署只更新应用容器，价格历史、译名缓存及封面缓存继续保留。

Runner 通过 Windows 启动目录的 `GameRadarGitHubRunner.vbs` 在用户登录后隐藏启动，失败后自动重连。服务器需要开机、登录 Lenovo 用户并运行 Docker Desktop；当前网络代理 `127.0.0.1:7897` 需要可用。

查看部署结果：GitHub → Actions → Deploy production server。页面每 15 秒检查版本，部署产生新版本后自动刷新。

远程开发完成后使用 `git push github main`。拉取此仓库的新电脑可直接推送它的 `origin main`。

生产工作流仅接受手动触发，部署任务只在 `main` 分支运行。应仅给予可信维护者仓库写入权限。
