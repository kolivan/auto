const {test,expect,request} = require('@playwright/test');
const { RegistrationPage } = require('../pages/registrationPage');
//const { WebApiBase } = require('../utils/baseAPI');
//const {loginAPI} = require('../utils/loginAPI');
//const {doctorsAPI} = require('../utils/doctorsAPI');
const {payloads} = require('../../test-data/payloads');
const {config} = require('../configs/stage.config');


test('Page first test', async ({page})=>{
    const registrationPage = new RegistrationPage(page);
    await registrationPage.open();
    await registrationPage.register('ha kol','annkol@test.com','Tester_123');
    await expect(page.locator('h2')).toHaveText('Login form');
});


test('API first test', async ({request})=>{
    const loginPayload = payloads.login;
    const response = await request.post(config.use.apiURL
        +'/auth/local',{
        data: loginPayload,
    })
    const responceBody = JSON.parse(await response.text());
    /*const responceLoginBody = await response.body().then(b => { 
        let data = JSON.parse(b.toString()); 
        return data.jwt;
    });*/
    console.log(responceBody.jwt);
    await expect(response).toBeOK();
});

test('API second test', async ({request})=>{
    let webApiBase = new WebApiBase(request);
    const token = await webApiBase.getToken('admin02.nolimit','123qweQ!');
    console.log('token = '+token);
    const response = await request.post('http://stage.qa.nolimit.school/back-office/api/doctors',{
        headers: {
         authorization: 'Bearer '+token,
        },
        data: {
            data:{
                  fullName: 'testauto testt',
                  gender: 'male',
                  address: 'testyty  yyt',
                  specialization: 'tstyty',
                  department: '1'}
          }
        },)
    const responceBody = JSON.parse(await response.text());
    console.log(responceBody);

});

test('API login test', async ({request})=>{
    let login= new loginAPI(request);
    let doctors= new doctorsAPI(request);
    const token = await login.getToken('admin02.nolimit','123qweQ!');
    console.log('token = '+token);
    const doctor = await doctors.addDoctors(doctorPayload,token);
    console.log(typeof(doctor));
    //await expect(doctor).toBeOK();
    console.log(doctor);
    //await expect(doctor).toBeOK();
    
    /*const response = await request.post('http://stage.qa.nolimit.school/back-office/api/doctors',{
        headers: {
         authorization: 'Bearer '+token,
        },
        data: {
            data:{
                  fullName: 'testauto testt',
                  gender: 'male',
                  address: 'testyty  yyt',
                  specialization: 'tstyty',
                  department: '1'}
          }
        },)*/
    //const responceBody = JSON.parse(await doctor);
    

});


