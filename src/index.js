const faker = require('faker');
// console.log(faker.helpers.userCard());
// console.log(faker.address.city());

//create an array of users
const users = new Array(10).fill('').map((_) => faker.helpers.userCard());

const userList = document.getElementById('user-list');

const userDetails = users.reduce((acc, user) => {
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

// console.log(users);
// console.log(userDetails);

let curr = window.location.hash.slice(1) * 1;

const render = () => {
  const html = `
    ${users
      .map(
        (user, idx) => `
      <li>
        <a href='#${idx}'>${user.name}</a>
        ${
          curr === idx
            ? `
         <ul>
        ${userDetails[user.name]
          .map(
            (detail) => `
            <li>
              ${JSON.stringify(detail).slice(1, -1).split('"').join('')}
            </li>
            `
          )
          .join('')}
        </ul>
          `
            : ''
        }
      </li>
      `
      )
      .join('')}
  `;
  userList.innerHTML = html;
};

render();

window.addEventListener('hashchange', () => {
  curr = window.location.hash.slice(1) * 1;
  render();
  console.log(curr);
});
