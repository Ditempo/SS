module.exports={
    site: {
        title: '길상우',
        description: 'Static site generator',
        basePath: process.env.NODE_ENV === 'production' ? '/SS' : '',
        githubPath: 'https://github.com/Ditempo/',
        aboutPath: '/about'
    },
    build: {
        outputPath: process.env.NODE_ENV === 'production' ? './docs' : './public'
    }
};