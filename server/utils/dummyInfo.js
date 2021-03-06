const randomName = require('node-random-name');
const User = require('..//models/user');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  // The maximum is exclusive and the minimum is inclusive
}
let itterationsToDo = 100;
let i = 0;
function addNewUser() {
  const newuser = new User();
  const random = Math.random;
  if (random() > 0.5) newuser.gender = 'male'; else newuser.gender = 'female';
  newuser.name = randomName({ random, gender: newuser.gender });
  newuser.email = `${newuser.name}@mail.com`.replace(/ /g, '');
  newuser.admin = true;
  newuser.password = 'orrin1!';
  newuser.phone = '4354144320';

  newuser.dOB = `${getRandomInt(1900, 2017).toString()}-${getRandomInt(1, 13).toString()}-${getRandomInt(0, 31).toString()}`;

  if (random() > 0.5) newuser.hOH = true; else newuser.hOH = false;

  if (random() > 0.5) newuser.gender = 'male'; else newuser.gender = 'female';
  skills.forEach((skill) => {
    if (random() > 0.6) {
      newuser.skills.push(skill);
    }
  }, this);
  if (newuser.skills.length === 0) {
    newuser.skills.push(skills[getRandomInt(0, 15)]);
  }
  if ((i % 100) === 0) {
    console.log(i);
  }
  User.registerUser(newuser, () => {
    if (i < itterationsToDo) {
      i++;
      addNewUser();
    } else {
      console.log('finished');
    }
  });
}
module.exports = (itterations) => {
  itterationsToDo = itterations;
  addNewUser();
};
