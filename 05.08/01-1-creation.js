// /*
//  * Об'єкти (робимо плейлист музики: ім'я, рейтинг, треки, кількість треків)
//  * - Літерал об'єкта
//  * - Властивості, ключі (ім'я) та значення
//  * - Як відрізнити об'єкт від області видимості
//  */

// const playlist = {
//     name: "Мій плейлист",
//     rating: 5,
//     tracks: ["track-1", "track-2", "track-3"],
//     play: true,
//     trackCount: 3,

// };

// // console.dir(playlist);

// // const x = {};
// // console.log(x);

// // function fn(playlist) {
// //     console.log(playlist.name);
// //     if(playlist.play){
// //         console.log(`${playlist.name} має рейтинг ${playlist.rating} та включає ${playlist.tracks.length} трека`);
// //         return;
// //     }
// //     console.log('Запустіть плейлист');
// //     }
// //     fn(playlist);
    


// /*
//  * Доступ до властивості
//  * - obj.key
//  * - obj['key']
//  * - Відсутні властивості
//  */

// console.log(playlist.rating);
// console.log(playlist['rating']);
// console.log(playlist.propertyName );
// console.log(playlist['propertyName'] );

// /*
//  * Короткий запис властивостей
//  */

// // const userName = prompt('Дай імя');``
// // const email = `${userName}@mail.com`;

// // const signupData = {
// //     userName,
// //     email,
// // };
// // console.log(signupData);
// /*
//  * Обчислювані властивості
//  */
// {/* <input name="color" value="black"></input> */}

// const inputName = 'color'
// const inputValue = 'black'

// const colorPickerData ={
//     [inputName]: inputValue,
// };
// console.log(colorPickerData);


// /*
//  * Масиви та функції це об'єкти
//  */





// const a = [1,2,3]
// a.hello = '😁'
// console.dir(a.hello);

// function fn(){
//     console.log('hello');
// }
// fn.hello = '😁'

// console.dir(fn.hello);