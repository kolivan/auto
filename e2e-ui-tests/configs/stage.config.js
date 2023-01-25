const {PlaywrightTestConfig} = require('@playwright/test');

const config ={
    use:{
    env:'stage',
    baseURL: 'http://stage.qa.nolimit.school/',
    loginURL:'http://stage.qa.nolimit.school/sign-in',
    apiURL: 'http://stage.qa.nolimit.school/back-office/api',
},
};

exports.config = config;