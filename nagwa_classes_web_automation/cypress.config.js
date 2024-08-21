const { defineConfig } = require("cypress");
const { Client } = require('pg')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
module.exports = defineConfig({
e2e: {
async setupNodeEvents(on, config) {
    on("task", {
        async connectDB(query){
        const client = new Client({
        host: '',
        user: '',
        password: '',
        database: '',
        port: 5432
          })
          await client.connect()
          const res = await client.query(query)
          await client.end()
          return res.rows;
        }


        ,
        async NagwaClassesDB(query){
          const client = new Client({
          host: '',
          user: '',
          password: '',
          database: '',
          port: 5432
            })
            await client.connect()
            const res = await client.query(query)
            await client.end()
            return res.rows;
          }



      })
const bundler = createBundler({
plugins: [createEsbuildPlugin(config)],
});
 

on("file:preprocessor", bundler);
await addCucumberPreprocessorPlugin(on, config);

return config;
},
specPattern: "cypress/e2e/features/*.feature",
baseUrl: "https://www.nagwa.com",
env: {
    language: 'en',
    baseURL: 'https://api-users.nagwa.com/',
    new_user_email: 'salma.ehab@nagwa.com',
    new_user_mobile:'01159144599'
},

  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": false,
    "html": true,
    "json": true
  }
}, 
});




  


   

