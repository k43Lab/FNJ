const proxies = [
    {
        name: 'unpkg',
        path: '/unpkg/'
    },
    {
        name: 'jsdelivr',
        path: '/jsd/'
    },
    {
        name: 'cdnjs',
        path: '/cdnjs/'
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