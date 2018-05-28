module.exports={
    site: {
        title: 'Ditempo',
        description: 'Static site generator',
        basePath: process.env.NODE_ENV === 'production' ? '/static-web-generators' : ''
    },
    build: {
        outputPath: process.env.NODE_ENV === 'production' ? './docs' : './public'
    }
};