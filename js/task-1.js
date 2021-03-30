import listUsers from './users.js';

const users = listUsers;


const getUserNames = users => {
    return users.map( user => user.name)
    // твой код
};

console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]