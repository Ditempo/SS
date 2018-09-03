### SS - 웹 정적 생성기 Static Site Genertor 
SSG(Static Site Generator) 라고 하기에는 부족한 부분이 있어서 G를 뺏다     
JS와 EJS를 사용해 개발했다.     
NPM에 많이 의존해 개발하였고 사용한 NPM은     
fs-extra, glob, frontMatter, marked, ejs 가 있다.
                
### 작동방식      
작동방식은 아주 간단하다.    
1. 본인에 레포에 깃페이지 설정 후 해당 래포를 클론한다.
2. CLI에서 npm install 을 실행한다.
3. /src/pages/blog/[URL]/[FILE_NAME].md 구조로 파일을 저장한다.
4. site.config.js 파일에 자신에게 맞는 사이트 정보를 입력한다.
5. /src/assets 나 /src/layouts 를 수정해 자신에게 맞는 템플릿으로 변형한다.
6. 수정이 끝났다면 npm run build 후 git에 push 해준다.

### 후   
웹 프로그래밍 과제로 간단하게 만들은 프로젝트인데 너무 아쉽다.    
그래서 React를 사용해서 다시 한번 만들어볼까한다.   
언젠가?
