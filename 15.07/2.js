// const a = 5 
// const b = "5"
// console.log(typeof a);
// console.log(typeof b);
// console.log(a!==b); 



// const x1 = 10
// const x2 = 30
// const number = 55

// console.log(`Число ${number} попадає в проміжок до ${x1}`, number<x1);
// console.log(`Число ${number} попадає в проміжок більше ${x2}`, number>x2);

// const result = number > x1 || number < x2
// console.log(result);


// const isFriend = true
// const isOnline = true
// const isDnd = false

// const canOpenChat = isFriend || (isOnline && isDnd)
// console.log("Можна відкрити чат?", canOpenChat);


// const sub = "free"


// const canAccessContent = sub === "pro" || sub === "vip"
// console.log("Є доступ до контенту?", canAccessContent);



// if(5 < 30){
//     console.log("Умова виконалась");
// }else{
//   console.log("Умова не виконалась");  
// }



const salary = 6000


if(salary <= 0){
    console.log("Покупка скасована");
}else if(salary > 500){
    console.log("Тобі вистачить");
} else if(salary<500){
    console.log("Товару недостатньо");
}
else{
  console.log("Допобачення");  
}



const balance = 2000
const message1 = balance >= 0 ? "Позитивний баланс" : "Негативний баланс"
console.log(message1);