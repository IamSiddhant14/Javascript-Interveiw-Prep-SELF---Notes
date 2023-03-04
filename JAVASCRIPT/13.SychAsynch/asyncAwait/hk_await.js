//npm init -- To initiate a node project
//npm install puppeteer / npm i puppeteer 

//Automation avoid manuale intervation and is also helpfull in testing an application

// Zoom link : https://zoom.us/rec/play/QjGYyyUZeZbuYLXlICnUkifXhS5xgaSD-YM3IqS7RhIlRwuVFrPIpNK0g4MKcMIAKQmBvw0pUfwzLUI.jWCUPjdPOXDCMLo4?continueMode=true&_x_zm_rtaid=e8J3iR95SnGbj5kbdr6AzA.1649809224017.c6043ebfb1f9f3ad4209d84f794a6bc2&_x_zm_rhtaid=129

let puppeteer = require('puppeteer');

const loginLink = "https://www.hackerrank.com/auth/login";
 

const codeFile = require('./code');

let page;
console.log("Before");


(async function () {

    try {

        let browserWillbeLaunced= await puppeteer.launch({
            headless: false, //changing the headless prop to false as of which it Unhides all the activities performed by puppeteer
            defaultViewport: null,
        })

        let newTab = await browserWillbeLaunced.newPage();
        page = newTab;

        // let pageWillbeOpened = await newTab.goto(loginLink); since we dont require its value any where else therfore we will not  catch its value in a variable

        await newTab.goto(loginLink); 

        await newTab.type('input[id="input-1"]',email , {delay : 50})//Method provided by puppeter for typing

        await newTab.type('input[id="input-2"]',password , {delay : 50})//Method provided by puppeter for typing

        await newTab.click('button[data-analytics="LoginPassword"]',{delay : 100});//Click is been used for clicking the login button

        await waitAndClick('.topic-card a[data-attr1="algorithms"]',newTab );

        await waitAndClick('input[value="warmup"]', newTab );

        let ChallengesArr = await  newTab.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");

        console.log("Total Question ->" + ChallengesArr.length );

        await questionSolver(page, ChallengesArr[0], codeFile.answers[0]);

    } catch (error) {
         console.log(error);
    }


})();

//This is an promised based function of puppeteer which will return promise, currently it is in pending stage when resolved returns browser instance

//Return statement in every promise is important

// let browserWillbeLauncedPromise = puppeteer.launch({
//     headless: false, //changing the headless prop to false as of which it Unhides all the activities performed by puppeteer
//     defaultViewport:null,
// });

// browserWillbeLauncedPromise.then(function(browserInstance){

//     let newTabPromise = browserInstance.newPage();//This will open a new tab/page
//     return newTabPromise;

// }).then(function(newTab){

//     page = newTab;
//     let pageWillbeOpenedPromise =  newTab.goto(loginLink);//open this link in the newly opened tab

//     return pageWillbeOpenedPromise;

// }).then(function(){//Since here we dont need it further therefore we will not be taking in the resolve parameters

//     let typedEmailPromise = page.type('input[id="input-1"]',email , {delay : 50})//Method provided by puppeter for typing

//     return typedEmailPromise;

// }).then(function(){//Since here we dont need it further therefore we will not be taking in the resolve parameters

//     let typePasswordPromise = page.type('input[id = "input-2"]',password , {delay : 50} );//Type is been used for typing

//     return typePasswordPromise

// }).then(function(){

//     let loginPromise = page.click('button[data-analytics="LoginPassword"]',{delay : 100})//Click is been used for clicking the login button

//     return loginPromise;

// }).then(function(){

//     //Here the promise is been resolved but the loder is still working as because of which we are not been currently been directed to a new page as of which the below commented code will not work

//     // let algoWillBeclickedPromise = page.click('.topic-card a[data-attr1="algorithms"]',{delay: 100});

//     let algoWillBeclickedPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]', page );//Here waitandclick function will wait for new page to load (promise will not reslove until new page is loaded)
//     return algoWillBeclickedPromise

// }).then(function(){

//     console.log('Algo Section Clicked');
//     let getToWarmupPromise = waitAndClick('input[value="warmup"]', page);
//     return getToWarmupPromise;

// }).then(function(){

//     console.log("Redircting to warm-up");
//     let ChallengesArr = page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");//Query selector all
//     return ChallengesArr;

// }).then(function(questionsArr){
//   console.log("QuestionsArr is of Length -> " +questionsArr.length);
// //   console.log(questionsArr[0]);

// let questionWillBeSolvedPromise = questionSolver(page , questionsArr[0],codeFile.answers[0]);

// for( let i =0; i<questionsArr.length ; i++){
//     let questionWillBeSolvedPromise = questionSolver(page , questionsArr[i],codeFile.answers[i]);
// }



// })

//This is not by default a promise driven(returning) function as the other method present above, in order to return a promise by this function we will have to use a syantx like this, promise driven function return resolve or reject which is later been handled by "then" or "catch" keywords


function waitAndClick(selector ,cPage){//we are making this function

    return new Promise(function(resolve , reject ){
        console.log("Current Selector Name --> ",selector);
        let waitForModalPromise = cPage.waitForSelector(selector);//It will not resolve until it has found the given selector, and after that this function will return promise

        waitForModalPromise.then(function(){

            let clickModalPromise = cPage.click(selector , {delay : 100 })//In built function provided by puppeter
            return clickModalPromise; 

        }).then(function(){
            resolve();

        }).catch(function(){
            reject();

        })

    })

}



async function questionSolver( page , question , answer ){

    try {

        await question.click();

        await  waitAndClick('.monaco-editor.no-user-select.vs' , page );

        await waitAndClick(' .checkbox-input' , page)

        await page.waitForSelector('.text-area.custominput')

        await page.type('.text-area.custominput', answer , {delay:2});

        await page.keyboard.down('Control');
            
        await page.keyboard.press('A', {delay : 10});

        await page.keyboard.press('X', {delay : 10});

        await page.keyboard.up('Control');

        await waitAndClick('.monaco-editor.no-user-select.vs' , page );

        await page.keyboard.down('Control');

        await page.keyboard.press('A', {delay : 10});

        await page.keyboard.press('V', {delay : 10});

        await page.keyboard.up('Control');

        await page.click('.hr-monaco__run-code', {delay : 20});

        
    } catch (error) {

        console.log(error);
        
    }


};

// function questionSolver( page , question , answer ){

//     return new Promise(function(resolve , reject){

//         let questionWillBeSolvedPromise = question.click();
//         questionWillBeSolvedPromise.then(function(){


//             let waitForEditorPromise = waitAndClick('.monaco-editor.no-user-select.vs' , page );
//             return waitForEditorPromise;

//         }).then(function(){

//             console.log('Question Clicked'); 
//             return waitAndClick(' .checkbox-input' , page)

//         })
//         .then(function(){

//             return page.waitForSelector('.text-area.custominput')

//         })
//         .then(function(){

//             console.log("Custom text area selected")
//             return page.type('.text-area.custominput', answer , {delay:2});


//         }).then(function(){

//             console.log('Answer typed')
//             let ctrlonHoldPromise = page.keyboard.down('Control');
//             return ctrlonHoldPromise

//         }).then(function(){

//             let AisPressedPromise = page.keyboard.press('A', {delay : 10});
//             return AisPressedPromise ;

//         }).then(function(){
//             console.log('Select all is implemented');
//             let XisPressedPromise = page.keyboard.press('X', {delay : 10});
//             return XisPressedPromise ;

//         }).then(function(){
//             console.log('cut implemented');
//             let ctrlIsRealeasedPromise = page.keyboard.up('Control');
//             return ctrlIsRealeasedPromise ;

//         }).then(function(){

//             console.log('ctrl is Released');
//             let waitForEditorPromise = waitAndClick('.monaco-editor.no-user-select.vs' , page );
//             return waitForEditorPromise;

//         }).then(function(){

//             console.log('Answer typed')
//             let ctrlonHoldPromise = page.keyboard.down('Control');
//             return ctrlonHoldPromise

//         }).then(function(){

//             let AisPressedPromise = page.keyboard.press('A', {delay : 10});
//             return AisPressedPromise ;

//         }).then(function(){

//             console.log('Paste is implemented');
//             let XisPressedPromise = page.keyboard.press('V', {delay : 10});
//             return XisPressedPromise ;

//         }).then(function(){

//             console.log('Done');
//             let ctrlIsRealeasedPromise = page.keyboard.up('Control');
//             return ctrlIsRealeasedPromise ;

//         }).then(function(){

//             return page.click('.hr-monaco__run-code', {delay : 20})

//         }).then(function(){
//             resolve();
//         }).catch(function(){
//             reject();
//         })

//     })

// }

console.log("After");     