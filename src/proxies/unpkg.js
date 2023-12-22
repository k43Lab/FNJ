const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
    target: 'https://unpkg.com',
    pathRewrite: {
        '^/unpkg/': '/'
    },
    onProxyRes: onProxyRes,
    changeOrigin: true
}

function onProxyRes(proxyRes, req) {
    //console.log(proxyRes.headers);
    if (proxyRes.headers['location']) {
        // 修改Location重定向
        let hl = proxyRes.headers['location'];
        delete proxyRes.headers['location'];
        proxyRes.headers['location'] = `/unpkg${hl}`;
    }
    console.log(`[PROXY][UNPKG] /unpkg${req.path} => ${req.path}`);
}
module.exports = createProxyMiddleware(options);