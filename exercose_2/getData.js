import dataBefor from "./data.js";
window.addEventListener("DOMContentLoaded", (event) => {
    var btn = document.getElementById("btnAdd");
    if(btn){
        btn.addEventListener("click", function(){
            dataBefor.push(...dataBefor,{
                id: 2,
                name: "Bao"
            })
            console.table(dataBefor)
            console.log("newData: " + newData)
        } )  
    }

});
var newData = [...dataBefor];
console.log("newData: " + newData)
export default newData;