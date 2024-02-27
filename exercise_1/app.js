

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

function createCard(title, img){
    return `    
        <div class="container">
            <div class="block-photo">
                <img src=${img} alt="">
            </div>
            <div class="block-title">
                <h4>${title}</h4>
            </div>
            <div class="block-active">
                <button type="button">Buy</button>
            </div>
        </div>
    `
}

root.innerHTML += data.map(
    function(card){
        return createCard(card.title, card.img);
    }
)




