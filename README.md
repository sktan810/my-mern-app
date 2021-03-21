# my-mern-app
MERN stacks Web App Project Practice

CLI
- Heroku
- Node.js
- Git

Deployment
- Front End: Netlify
- Back End: Heroku
- Database: MongoDB Atlas 

Build and run @ localhost
- setup PORT (Default) and CONNECTION_URL in env file at server path.
- setup url in api file at client path
- deploy and run @localhost

Cmd [Server & Client]
- npm start

Build and run @ remote
- remove PORT in env file and commit push to Heroku.
- setup url in api file at client path with Heroku url.
- deploy frontend code to Netlify.

Cmd [Server]
- git add .
- git commit -am "commit messages"
- git push heroku master

Cmd [Client]
- npm run build
- pull or dnd build folder to Netlify.

** Can try https://zeet.co/ for deploy both frontend & backend as well as DB in Docker
