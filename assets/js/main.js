// const data = [
//     {name: "Farid", surname: "Yusif"},
//     {name: "Fid", surname: "Yif"},

// ];

// document.querySelector("#create-data").addEventListener("click",()=>{
// localStorage.setItem("user-data", JSON.stringify(data));
// });

// document.querySelector("#get-data").addEventListener("click", ()=>{
//     let userData = localStorage.getItem("user-data");
//     console.log(JSON.parse(userData));
// })

// document.querySelector("#log-out").addEventListener("click",()=>{
//     localStorage.removeItem("user-data")
// })

// !====================================================

document.querySelector("#get-data").addEventListener("click", ()=>{
    fetch("https://fakestoreapi.com/products")
            .then((res) =>res.json())
            .then((json) =>
            json.map(item=>{
                document.querySelector(".card-box").innerHTML += `
                <div class= "card" id="card">
            <img src=${item.image}/>
            <h3>${item.title.slice(0, 45)}</h3>
            <p>${item.description.slice(0, 20)}...</p>
            <p>${item.price} <span>$</span></p>
        </div>
             `;
            }));
})