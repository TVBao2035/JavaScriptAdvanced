import card from "./card.js";


function eventOnHeader(){
    alert("event on HEADER page!!!")
}

function header(){
    
    return `
    <div class="header_container">
        <h1>Header</h1>
        <ul class="header_list--item">
            <li class="header_item">home</li>
            <li class="header_item">contract</li>
            <li class="header_item">menu</li>
            <li class="header_item">cart</li>
        </ul>
        ${card("sản phẩm của header", "./photo/img.png", eventOnHeader)}
    </div>
    `
}

export default header;