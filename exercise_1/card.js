function card(title, img, handle = function(){}){
    return `
    <div class="container">
        <div class="block-photo">
            <img src=${img} alt="">
        </div>
        <div class="block-title">
            <h4>${title}</h4>
        </div>
        <div class="block-active">
            <button onclick='handleClick(${handle})'  type="button">Buy</button>
        </div>
    </div>
    `
}



export default card;