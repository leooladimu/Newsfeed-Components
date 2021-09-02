// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

//   The 'menuMaker' takes an array of menu items as its only argument.

//   Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
//   Add those items to the <ul>

//   Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

const fuckingPlastered = document.querySelector('menu-button');

const fuckingPlastered = [
  { imageURL: './assets/menu.png' }
]
fuckingPlastered.forEach(imgObj => {
  const imgElement = makeImage(imgObj);
  document.body.prepend(imgElement);
})

//   Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

//   Step 5: Don't forget to return your div.menu.

//   Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
// */

// const menuMaker = menuItems.map(item => {
//   return makeMenu(item);
// })

function menuMaker(menuItems) {

  const menu = document.createElement('div');
  const unli = document.createElement('ul');
  menuItems.forEach(item => {
    item.document.createElement('li');
  })
  // const students = document.createElement('li');
  // const faculty = document.createElement('li');
  // const whatsNew = document.createElement('li');
  // const techTrends = document.createElement('li');
  // const music = document.createElement('li');
  // const logOut = document.createElement('li');

  for (let i = 0; i < menuItems.length; i++) {
    const listItem = menuItems[i];
    listItem.appendChild(unli);
  }
  const xx = document.querySelector('menu-button');

  xx.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  
  })

  return menu
}
