import newData from "./getData.js";

var htmtTags = newData.map((e)=>{
    return `<p>${e.id}</p>
            <p>${e.name}</p>`;
})
console.table(newData)
document.getElementById("root").innerHTML = htmtTags;