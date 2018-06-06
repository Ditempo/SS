module.exports={
    site: {
        title: '길상우',
        description: 'Static site generator',
        basePath: process.env.NODE_ENV === 'production' ? '/static-web-generator' : '',
        githubPath: 'https://github.com/Ditempo/',
        aboutPath: '/about'
    },
    build: {
        outputPath: process.env.NODE_ENV === 'production' ? './docs' : './public'
    }
};