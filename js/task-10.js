import listUsers from './users.js';

const users = listUsers;
console.table(users);

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => users.map(user =>user.skills).reduce((acc, val)=>acc.concat(val), []).filter((item, pos, arr) => arr.indexOf(item) === pos ).sort()



console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud