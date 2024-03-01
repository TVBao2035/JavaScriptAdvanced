import header from './header.js';
import card from './card.js'
import footer from './footer.js';

var root = document.getElementById('root');

var data = [
    {
        title: 'Sản Phẩm 1',
        img: 'photo/img.png'
    },
    {
        title: 'Sản Phẩm 2',
        img: 'photo/img.png'
    },
    {
        title: 'Sản Phẩm 3',
        img: 'photo/img.png'
    },
    {
        title: 'Sản Phẩm 4',
        img: 'photo/img.png'
    },
    {
        title: 'Sản Phẩm 5',
        img: 'photo/img.png'
    },
    {
        title: 'Sản Phẩm 6',
        img: 'photo/img.png'
    },
    {
        title: 'Sản Phẩm 7',
        img: 'photo/img.png'
    },
    {
        title: 'Sản Phẩm 8',
        img: 'photo/img.png'
    }
]

function alertClick()
{
    alert("Welcome to shop!!!");
}


root.innerHTML += header();

root.innerHTML += data.map((e)=>card(e.title, e.img, alertClick));

root.innerHTML += footer();





    
    


