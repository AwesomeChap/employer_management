# Getting started
* do `npm install` in both the directories `/server` as well as `/frontend`
* create `config.js` file at the root of `/server` directory and paste the and paste the code block shown below
```
  export const {
  PORT = 5000,
  NODE_ENV = 'development',
  MONGO_URI = PASTE_YOUR_GENERATED_MONGO_URI_HERE,
  SESS_NAME = 'sid',
  SESS_SECRET = 'secret!session',
  SESS_LIFETIME = 1000 * 60 * 60 * 2
} = process.env;
```
* Setup a new project in MongoAtlas. Create a clusture and click on connect to generate the MongoURI key, now replace the default text with the MongoURI in MongoURI field.
* In both the directories do `npm start` and project should be up and running.

