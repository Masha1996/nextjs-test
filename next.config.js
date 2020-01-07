module.exports = {
    exportTrailingSlash: true,
    exportPathMap: async function() {
        const paths = {
            '/': { page: '/' }
        };

        const shows = [{id: 'ru'}, {id: 'en'}];

        shows.forEach(show => {
            paths[`/test/${show.id}`] = { page: '/test/[id]', query: { id: show.id } };
        });

        return paths;
    }
};
