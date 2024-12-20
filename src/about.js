import moment from 'moment';
import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = `
    <h1>About Page</h1>
    <p>Current Time: ${moment().format('LLLL')}</p>
    <p>Lodash version: ${_.VERSION}</p>
  `;

  return element;
}

document.body.appendChild(component());


// console.log('first', _.VERSION)

// document.body.appendChild(document.createElement('div')).innerText = 'About Page'