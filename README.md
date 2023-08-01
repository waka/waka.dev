# waka.dev

The source of [waka.dev](https://waka.dev).

## Start worker for development

- Get your GitHub Access Token (for reading issues)

```
$ npx wrangler dev src/index.ts --env dev --var BUILD_DATE:$(date -d day '+%Y-%m-%d') GH_ACCESS_TOKEN:$(YOUR_GITHUB_ACCESS_TOKEN)
```