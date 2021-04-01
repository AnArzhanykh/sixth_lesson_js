import listUsers from './users.js';

const users = listUsers;
console.table(users);


// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => users.sort((prev, next) =>prev.friends.length - next.friends.length).map(user => user.name)
  // твой код
  console.table(users);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]