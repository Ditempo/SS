const fs = require('fs-extra'),
    path = require('path'),
    glob =require('glob'),
    frontMatter = require('front-matter'),
    marked = require('marked');
    //md 파일위의
    //----
    //title
    //desc
    //----
    //부분을 json으로 정리해줍니다.
const srcPath = './src';
const distPath = process.env.NODE_ENV === 'production' ? '/docs' : '/public';
// docs 폴더 안에 있던 기존 파일들을 삭제 합니다. 
console.log('Cleaning docs dir...');
fs.emptyDirSync(docsPath);

//src 폴더 안에 assets 파일들을 복사 합니다.
console.log('Copy src assets files...');
fs.copySync(`${srcPath}/assets`, `${docsPath}/assets`);

const globFunc = new Promise ((resolve, reject) => {
    glob("**/*.md", { cwd: `${srcPath}/pages` }, (err,files) => {
        if(err) reject(err);
        resolve(files);
    });
});

globFunc
    .then(files => {
        files.forEach(file => {
            const filePath = path.parse(file);
            const destPath = path.join(distPath, filePath.dir);
            fs.mkdirs(destPath)
                .then(()=> 
                   frontMatter(fs.readFile(`${srcPath}/pages/${file}`, 'utf-8'))
                )
                .then(data => {
                        let title = data.attributes.title,
                            description = marked(data.attributes.description),
                            layout = data.attributes.layout || 'posts',
                            content = marked(data.body);
                    }
                )
        });
    })
    .catch(() => {
        console.log("error ");
    });