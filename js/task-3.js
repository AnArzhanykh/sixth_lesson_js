import listUsers from './users.js';

const users = listUsers;
console.table(users);

const getUsersWithGender = (users, gender) => {
    return users.filter(user => {
        if(user.gender === gender){
            return user.gender;
        }
        
    })
    // твой код
};

  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]