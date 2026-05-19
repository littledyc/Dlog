#!/bin/bash
# 本地开发：将占位符替换为真实密钥
# 用法：设置环境变量后运行此脚本
#   export BAIDU_TOKEN="你的百度token"
#   export GITALK_CLIENT_SECRET="你的Gitalk secret"
#   bash scripts/setup-secrets.sh

set -e

if [ -z "$BAIDU_TOKEN" ] || [ -z "$GITALK_CLIENT_SECRET" ]; then
  echo "请先设置环境变量："
  echo "  export BAIDU_TOKEN=\"你的百度token\""
  echo "  export GITALK_CLIENT_SECRET=\"你的Gitalk secret\""
  echo "然后重新运行此脚本"
  exit 1
fi

sed -i "s/BAIDU_TOKEN_PLACEHOLDER/$BAIDU_TOKEN/" _config.yml
sed -i "s/GITALK_CLIENT_SECRET_PLACEHOLDER/$GITALK_CLIENT_SECRET/" _config.redefine.yml

echo "密钥已注入到本地配置文件"
echo "为避免意外提交密钥，请运行："
echo "  git update-index --skip-worktree _config.yml _config.redefine.yml"
