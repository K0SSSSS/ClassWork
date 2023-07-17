// const stars = 5;
// let price;



// if(stars === 1){
//     price = 20
// } else if(stars===2){
//     price = 30
// } else if(stars===3){
//     price = 50
// } else if(stars===4){
//     price = 70
// } else if(stars===5){
//     price = 120
// } else{
//     console.log('Такої кількості зірок немає');
// }
// console.log(price);



// switch (stars){
//     case 1:
//         price = 20
//         break;
//         case 2:
//             price = 30
//             break;
//             case 3:
//                 price = 50
//                 break;
//                 case 4:
//                     price = 70
//                     break;
//                     case 5:
//                         price = 120
//                         break;
//                     default:
//                         console.log('Такої кількості зірок немає');
//     }
//     console.log(price);




// const stars = 5
// let price



// if(stars === 1 || stars === 2){
//     price = 20
// } else if(stars ===3 || stars===4){
//     price = 30
// } else if(stars===5){
//     price = 120
// } else{
//     console.log('Такої кількості зірок немає');
// }
// console.log(price);




// switch (stars){
//     case 1:
//         case 2:
//             price = 20
//             break
//                 case 3:
//                     case 4:
//                         price = 30
//                         break
//                             case 5:
//                                 price =120
//                                 break
//                                     default:
//                                         console.log('Такої кількості зірок немає');
                                    
// }
// console.log(price);





// const options = 1
// let message = "Замовлення не знайдено"


// switch (options){
//     case 1:
//         message = "Ви можете забрати товар завтра з 12:00 в нашому магазині";
//         break;
//             case 2:
//                 message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00"
//                 break;
//                     case 3:
//                         message = "Посилка буде надіслана сьогодні"
//                         break;
//                             default:
//                                 console.log("Вам зателефонує наш менеджер")
// }
// console.log("Статус вашого замовлення:" ${message});




// let mood = prompt("Який твій настрій?")
// switch (mood){
//     case "happy":
//         alert("😄")
//         break;
//         case "sad":
//             alert("☹")
//             break;
//             case "angry":
//                 alert("😡")
//                 break;
//                 default:
//                     alert("😎")
// }




// --------------------------Cicles----------------------------

// for(let i = 0; i<10; i++){
// console.log("Це кожна ітерація", i);
// }



// const word = "SaMSung";
// let result = '';

// for (let i = 0; i < word.length; i++){
//     // console.log(word [i]);
//     if(word[i]=== word[i].toUpperCase()){
//         result += word[i].toLowerCase();
//     } else {
//         result += word[i].toUpperCase();
//     }
// }
// console.log(result);




// const employees = 12
// const minSalary = 500
// const maxSalary = 5000
// let totalSalary = 0

// for(let i = 0; i < employees; i++){ // перебираємо працівників циклом
// const salary = Math.round(Math.random()*(maxSalary - minSalary) + minSalary)// генеруємо зп співробітників
// console.log(`Зарплата співробітника ${i+1}:  ${salary}`);
// totalSalary += salary;
// }
// console.log("totalSalary:", totalSalary);



// const min = 10
// const max = 50
// let total = 0

// for(let i = min; i < max; i++){
//     if(i % 2 !==0){
//         console.log("Непарне число" , i);
//         continue;
//     }
//     console.log("Парне число:" , i);
//     total += i;
// }
// console.log("Total:", total);



// let balance = 10000
// const payment = 15000

// console.log(`Загальна варість замовлення ${payment} кредитів. Перевіряємо к-ть доступних коштів на рахунку`);

// if(payment <= balance){
//     balance -= payment;
//     console.log(`"На рахунку залишилось ${balance} кредитів"`);
// } else{
//     console.log('На рахунку недостатньо коштів для проведення транзакції!');
// }
// console.log('Операцію завершено');






let totalSpent = 2
let payment = 500
let discount = 0

if(totalSpent >= 100 && totalSpent <= 1000){
    console.log(`Бронзовий партнер, знижка 2%`);
    discount = 0.02;
} else if(totalSpent > 1000 && totalSpent <=5000){
    console.log(`Срібний партнер, знижка 5%`);
    discount = 0.05;
} else if(totalSpent > 5000){
    console.log(`Золотий партнер, знижка 10%`);
    discount = 0.1;
} else {
    console.log(`Хто ти? Ми тебе не знаємо! в тебе немає знижки`);
}
payment -= payment*discount;
console.log(`Оформляємо замовлення на суму ${payment} грн зі знижкою ${discount*100}%`);

totalSpent += payment;
console.log(`Загальна сума витрачених коштів в магазині: ${totalSpent}`);