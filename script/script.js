

function onToggleMenu(e) {
    let navLink = document.getElementById('dropdown');

    e.name = e.name === 'menu' ? 'close' : 'menu';

    console.log(e.name)
    e.name === 'menu' ? navLink.classList.add('hidden')
        :
        navLink.classList.remove('hidden')
}

// function onToggleMenu() {
//     var menu = document.getElementsByClassName('nav-link');
//     if (menu) {
//         menu.classList.toggle('active');
//     } else {
//         console.log("Menu element not found.");
//     }
// }
