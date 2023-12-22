const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
    target: 'https://cdn.jsdelivr.net',
    pathRewrite: {
        '^/jsd/': '/'
    },
    onProxyRes: onProxyRes,
    changeOrigin: true
}

function onProxyRes(proxyRes, req) {
    //console.log(proxyRes.headers);
    if (proxyRes.headers['location']) {
        // 修改Location重定向
        let hl = proxyRes.headers['location'];
        if (hl.includes('//jsdelivr.com')) {
            delete proxyRes.headers['location'];
            proxyRes.headers['location'] = `/jsd${hl}`;
        }
    }
    console.log(`[PROXY][JSDELIVR] /jsd${req.path} => ${req.path}`);
}
module.exports = createProxyMiddleware(options);