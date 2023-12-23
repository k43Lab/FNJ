# FNJ

Fast Nya Just - CDN站镜像

## Usage

镜像站缓存时效12小时。

当前镜像列表：

- `https://fnj.1l1.icu/unpkg/` => 回源 `https://unpkg.com/`
- `https://fnj.1l1.icu/jsdelivr/` => 回源 `https://cdn.jsdelivr.net/`
- `https://fnj.1l1.icu/cdnjs/` => 回源 `https://cdnjs.cloudflare.com/`

将对应源地址替换即可。

## Deploy by yourself

Envrionment: Node.js 18+

### Install dependencies

```bash
npm install
// or other package manager
// yarn install
// pnpm install
```

### Start proxy server

```bash
npm run start
```
