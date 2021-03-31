import listUsers from './users.js';

const users = listUsers;
console.table(users);

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => users
                                .map(user=> user.balance)
                                .reduce( (acc, next) => acc+=next , 0)

console.log(calculateTotalBalance(users)); // 20916