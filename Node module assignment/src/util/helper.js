// Problem 2
// Module 2 : src/util/helper.js

// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler


const date = new Date();

function printDate(){
    console.log(Date());
}

function printMonth(){
    console.log(date.getMonth())
}

function getBatchInfo(batch_name, week, Day, topic){
    console.log(`${batch_name}, ${week}${Day}, the topic for today is ${topic}`)
}

module.exports = {printDate, printMonth, getBatchInfo};