// place args in object so order doesn't matter
const render = ({ users, userDetails, userList, curr }) => {
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

module.exports = render;
