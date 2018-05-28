module.exports={
    site: {
        title: 'Ditempo',
        description: 'Static site generator',
        basePath: process.env.NODE_ENV === 'production' ? '/static-web-generator' : ''
    },
    build: {
        outputPath: process.env.NODE_ENV === 'production' ? './docs' : './public'
    }
};