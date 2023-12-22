const proxies = [
    {
        name: 'unpkg',
        path: '/unpkg/'
    },
    {
        name: 'jsdelivr',
        path: '/jsd/'
    }
]

module.exports = {
    load
}

function load(app) {
    proxies.forEach((prs) => {
        app.use(prs.path, require(`./proxies/${prs.name}`));
    })
}