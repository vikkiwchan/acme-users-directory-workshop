const faker = require('faker');
// console.log(faker.helpers.userCard());
// console.log(faker.address.city());

let users, userDetails;

// 13.
// OPTIONAL - wrapping users and userDetails in a condition will keep fake data the same
users = JSON.parse(window.localStorage.getItem('users'));
userDetails = JSON.parse(window.localStorage.getItem('userDetails'));

if (!users || !userDetails) {
  //create an array of users
  users = new Array(10).fill('').map((_) => faker.helpers.userCard());
  window.localStorage.setItem('users', JSON.stringify(users));

  userDetails = users.reduce((acc, user) => {
    acc[user.name] = [
      { username: user.username },
      { email: user.email },
      {
        address: `${user.address.street} ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
      },
      { phone: user.phone },
    ];
    return acc;
  }, {});
  window.localStorage.setItem('userDetails', JSON.stringify(userDetails));
}

module.exports = {
  users,
  userDetails,
};
