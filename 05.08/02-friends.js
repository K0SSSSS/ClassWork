/*
 * Работа з колекцією (масивом обʼєктів)
 */

/*
 * Отримуємо імена всіх друзів
 */

/*
 * Отримуємо імена лише друзів, які онлайн
 */

const findFriend = 'Diana';
const friends = [
  { name: 'John', online: true },
  { name: 'Jane', online: true },
  { name: 'Mary', online: false },
  { name: 'Mike', online: true },
  { name: 'Adam', online: false },
  { name: 'Lisa', online: true },
];

console.table(friends);

// // Шукаємо друга за іменем
// function findFriendByName(allFriends, findFriend){
//   for(const friend of allFriends){
//     console.log(friend);
//     if(friend.name === findFriend){
//       return `Знайшли ${findFriend}`
//     }
//     return `${findFriend} Не знайшли`
//   }
// }
// console.log(findFriendByName(friends, "Adam")); 

// // отримати імена всіх друзів

// function getAllNames(allFriends){
//   const names = []
//   for(const friend of allFriends){
//     names.push(friend.name)
//   }
//   return names
// }
// console.log(getAllNames(friends));


// // Отримати імена друзів які онлайн

// function getFriendsOnline(allFriends){
//   const friendsOnline = []
//   for(const friend of allFriends){
//     if(friend.online){
//       onlineFriends.push(friend)
//     }
//     return onlineFriends
//   }

// }
// console.log(getFriendsOnline(friends));


// створити 2 масива онлайн та офлайн

function getFriendsByStatus(allFriends) {
  const friendsByStatus = {
    online: [],
    ofline: [],
  }
  for(const friend of allFriends){
    // if(friend.online){
    //   friendsByStatus.online.push(friend)
    //   continue
    // }
    // friendsByStatus.ofline.push(friend)


    const key = friend.online ? "online" : "offline";
    friendsByStatus[key].push(friend)
  }
  return friendsByStatus
}
console.log(getFriendsByStatus(friends));