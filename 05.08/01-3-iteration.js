/*
 * Перебір через for...of та Object.keys|values|entries
 */

const feedback = {
    good: 15,
    neutral: 10,
    bad: 3,

};

let totalFeedback = 0

//Object.keys

const keys = Object.keys(feedback)
console.log(keys);
// const values = Object.values(feedback)
// console.log(values);
// const data = Object.entries(feedback)
// console.log(data);
// console.log(data[0]);

// for(const key of keys){
//     console.log(key);
//     console.log(feedback[key]);
//     totalFeedback += feedback[key]
// }
// console.log(totalFeedback);



const values = Object.values(feedback)
console.log(values);

for(const value of values){
    totalFeedback += value
}
console.log(totalFeedback);