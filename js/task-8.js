import listUsers from './users.js';

const users = listUsers;
console.table(users);

// Массив имен всех пользователей у которых есть друг с указанным именем.


    const getUsersWithFriend = (users, friendName) => users.filter(user =>user.friends.includes(friendName)? user : null).map(user=> user.name)


console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]




