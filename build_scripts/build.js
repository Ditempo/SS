const fse = require('fs-extra'),
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
// const distPath = process.env.NODE_ENV === 'production' ? '/docs' : '/public';
const distPath = './docs';
// docs 폴더 안에 있던 기존 파일들을 삭제 합니다. 
console.log('Cleaning docs dir...');
fse.emptyDirSync(distPath);

//src 폴더 안에 assets 파일들을 복사 합니다.
console.log('Copy src assets files...');
fse.copySync(`${srcPath}/assets`, `${distPath}/assets`);

const globFunc = new Promise ((resolve, reject) => {
    glob("**/*.md", { cwd: `${srcPath}/pages` }, (err,files) => {
        if(err) reject(err);
        resolve(files);
    });
});

globFunc
    .then(files => {
        console.log(files);
        files.forEach(file => {
            const filePath = path.parse(file);
            const destPath = path.join(distPath, filePath.dir);
            console.log(destPath);
            fse
                .mkdirs(destPath)
                .then(() => 
                    fse.readFile(`${srcPath}/pages/${file}`, 'utf-8')
                )
                .then(data => 
                    frontMatter(data)
                )
                .then(pageData => {
                    let title = pageData.attributes.title,
                        description = marked(pageData.attributes.description),
                        content = marked(pageData.body);

                    let layout = pageData.attributes.layout || 'posts';
                    let layoutFileName = `${srcPath}/layouts/${layout}.ejs`;
                    let layoutFile = fse.readFileSync(layoutFileName, 'utf-8');
                    let completePage = ejs.render(
                        layoutFile,
                        
                    )


                    return content;
                })
                .then(str => {
                    // save the html file
                    fse.writeFile(`${destPath}/${filePath.name}.html`, str);
                })
                .catch(err => {
                    console.error(err);
                });
        });
    })
    
    .catch(err => {
        console.error(err);
    });