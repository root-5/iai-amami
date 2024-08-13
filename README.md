# iai-amami.com
https://iai-amami.com

# 構成
- ドメイン: お名前.com
- インフラ: AWS (S3 + CloudFront + Route53 + ACM)
- CI/CD: GitHub Actions 使用、mainブランチにpushされた際に S3 にデプロイ、CloudFront のキャッシュを削除

## 参考
### AWS　を使った静的サイトの構築
- https://qiita.com/ushi_osushi/items/a32d7b710567c2313faa#%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E3%81%8C%E4%BF%9D%E7%95%99%E4%B8%AD%E3%81%AE%E6%A4%9C%E8%A8%BC%E3%81%8B%E3%82%89%E5%A4%89%E3%82%8F%E3%82%89%E3%81%AA%E3%81%84%E5%A0%B4%E5%90%88
- https://zenn.dev/kou_taka/articles/40070e74004ee2#route53%E3%81%A7%E7%8B%AC%E8%87%AA%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E3%81%A7%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0

### CI/CD
- https://zenn.dev/rescuenow/articles/1976c01e28b3cc
- https://zenn.dev/kou_pg_0131/articles/gh-actions-oidc-aws