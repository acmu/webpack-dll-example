import _ from 'lodash';
import moment from 'moment';

function component() {
  const element = document.createElement('div');

  element.innerHTML = `
    <h1>Home Page</h1>
    <p>Current Time: ${moment().format('LLLL')}</p>
    <p>Lodash version: ${_.VERSION}</p>
  `;

  return element;
}

document.body.appendChild(component());
