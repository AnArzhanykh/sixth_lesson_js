import listUsers from './users.js';

const users = listUsers;
console.table(users);

const getInactiveUsers = users =>  users.filter(user => !user.isActive)


console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]