//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const userNames = ['Dallin', 'Joe', 'Gage'];
let isOldUser = false;
let canAdd = false;

router.post('/addUser', (req, res, next) => {
  const newUser = req.body.username;
  
  canAdd = userNames.includes(newUser);

  if (!canAdd)
    userNames.push(newUser);
    
  res.redirect('/teamActivities/02');
});

router.post('/removeUser', (req, res, next) => {
  const oldUser = req.body.remove;
  
  // get user index
  let index = userNames.indexOf(oldUser);

  // check if user is in our array
  if (index !== -1) {
    userNames.splice(index, 1);
    isOldUser = false;
  }
  else 
    isOldUser = true;

  console.log(index);

  res.redirect('/teamActivities/02');
});

router.get('/', (req, res, next) => {
  res.render('pages/teamActivities/ta02', {
    title: 'Team Activity 02',
    path: '/02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    user: userNames,
    oldUser: isOldUser,
    isAddable: canAdd
  }); 
});



module.exports = router;
