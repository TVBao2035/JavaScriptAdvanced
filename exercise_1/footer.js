import card from "./card.js";


function footer(){
    function eventOnFooter(){
        alert("event on FOOTER page!!!")
    }
    return `
    <div class="footer_container">
        <h1>Footer</h1>
        ${card("sản phẩm của footer", "photo/img.png", eventOnFooter)}
    </div>
    `
}

export default footer;