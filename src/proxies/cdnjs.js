const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
    target: 'https://cdnjs.cloudflare.com',
    pathRewrite: {
        '^/cdnjs/': '/'
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
            proxyRes.headers['location'] = `/cdnjs${hl}`;
    }
    console.log(`[PROXY][CDNJS] /cdnjs${req.path} => ${req.path}`);
}
module.exports = createProxyMiddleware(options);