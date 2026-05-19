# 本地开发：将占位符替换为真实密钥
# 用法：
#   $env:BAIDU_TOKEN = "你的百度token"
#   $env:GITALK_CLIENT_SECRET = "你的Gitalk secret"
#   .\scripts\setup-secrets.ps1
param()

if (-not $env:BAIDU_TOKEN -or -not $env:GITALK_CLIENT_SECRET) {
    Write-Output "请先设置环境变量："
    Write-Output '  $env:BAIDU_TOKEN = "你的百度token"'
    Write-Output '  $env:GITALK_CLIENT_SECRET = "你的Gitalk secret"'
    Write-Output "然后重新运行此脚本"
    exit 1
}

(Get-Content _config.yml) -replace 'BAIDU_TOKEN_PLACEHOLDER', $env:BAIDU_TOKEN | Set-Content _config.yml
(Get-Content _config.redefine.yml) -replace 'GITALK_CLIENT_SECRET_PLACEHOLDER', $env:GITALK_CLIENT_SECRET | Set-Content _config.redefine.yml

Write-Output "密钥已注入到本地配置文件"
Write-Output "为避免意外提交密钥，请运行："
Write-Output "  git update-index --skip-worktree _config.yml _config.redefine.yml"
