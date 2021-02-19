const { users, userDetails } = require('./data');
const render = require('./render');
const userList = document.getElementById('user-list');

// console.log(users);
// console.log(userDetails);

let curr = window.location.hash.slice(1) * 1;

const _render = () => {
  //this func has been wrapped in _render function to reduce repeition of code
  render({ users, userDetails, userList, curr });
};

_render();

window.addEventListener('hashchange', () => {
  curr = window.location.hash.slice(1) * 1;
  _render();
  console.log(curr);
});
