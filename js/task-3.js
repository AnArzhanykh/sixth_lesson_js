import listUsers from './users.js';

const users = listUsers;
console.table(users);

// const getUsersWithGender = (users, gender) => {
    // const sex = [] ;
    // const t1 = users.filter(user => {
    //     if(user.gender === gender){
    //         sex.push(user.name)
    //     }
    // })
    // return sex
// };

const getUsersWithGender = (users, gender) =>users.filter(user=>user.gender===gender).map(user => user.name)

  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]