import listUsers from './users.js';

const users = listUsers;
console.table(users);

// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => users
//     .map(user=> {
//         const arr = [];
//         const setUsers = user.friends
//         const t = setUsers.filter(friend => {
//             if(friendName === friend){
//                 arr.push(user.name)
//             }
//         } )
//         return arr 
//     })

    const getUsersWithFriend = (users, friendName) => users
    .map(user => user.friends)




console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]



// const arr = [ '1', '2', '3', '4']


// const sortArr = (item, elem )=> item.find(item => item===elem)


// console.log(sortArr(arr, '3'));
// const names = ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner" , 'Goldie Gentry']

// const sortArr = (item, elem )=> item.find(item => item===elem)

// console.log(sortArr(names, 'Goldie Gentry'));

