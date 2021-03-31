import listUsers from './users.js';

const users = listUsers;


const getUserNames = users => users.map( user => user.name);

console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]