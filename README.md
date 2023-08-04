# waka.dev

The source of [waka.dev](https://waka.dev).

## Start worker for development

- Get your GitHub Access Token (for reading issues)

```
$ npx wrangler dev src/index.ts --env dev --var BUILD_DATE:$(date '+%a, %d %b %Y %H:%M:%S GMT') GH_ACCESS_TOKEN:$(YOUR_GITHUB_ACCESS_TOKEN)
```

## Deploy worker manually

```
$ npx wrangler deploy --env production --var BUILD_DATE:$(date '+%a, %d %b %Y %H:%M:%S GMT') GH_ACCESS_TOKEN:$(YOUR_YOUR_GITHUB_ACCESS_TOKEN)
```
