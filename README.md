# Dlog

小戴的个人博客与知识库入口。

- 网站：https://littledai.cn/
- 源码：Hexo 6 + Redefine 主题
- 发布：构建静态文件后推送到 `littledyc/Dlog` 的 `main` 分支

## 本地部署

在项目根目录运行：

```powershell
npm run deploy
```

脚本会构建站点、生成 GitHub 可识别的 `README.md`、保留 `.nojekyll`，并检查 Git push 的返回码。首次使用前请先完成 GitHub 身份认证。
