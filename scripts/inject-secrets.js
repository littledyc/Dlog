// 本地开发时从环境变量注入密钥
// GitHub Actions 中由 deploy.yml 的 sed 命令处理

hexo.on('generate', function () {
  if (process.env.BAIDU_TOKEN) {
    hexo.config.baidu_url_submit.token = process.env.BAIDU_TOKEN;
  }
});

// redefine 主题配置注入（_config.local.yml 无法覆盖主题配置）
if (process.env.GITALK_CLIENT_SECRET) {
  hexo.on('ready', function () {
    var cfg = this.config;
    if (cfg.theme_config && cfg.theme_config.comment && cfg.theme_config.comment.gitalk) {
      cfg.theme_config.comment.gitalk.clientSecret = process.env.GITALK_CLIENT_SECRET;
    }
  });
}
