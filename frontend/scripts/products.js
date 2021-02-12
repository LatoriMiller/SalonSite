console.log("Hello");
// fetch('http://localhost:8000/products')
//   .then(response => response.json())
//   .then(data => console.log(data));

// api url 
const api_url =  
      'http://localhost:8000/products'; 
  
// Defining async function 
async function getapi(url) { 
    
    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    console.log(data); 
   
    show(data); 
} 
// Calling that async function 
getapi(api_url); 
  
// Function to define innerHTML for product container
function show(data) { 
    let card = ``; 
    
    // Loop through all products
    for (let p of data) { 
        card += `
        <div class="card">
        <a href="detail.html">
            <img src="${p.image}" alt="${p.name}">
        </a>    
        <h1>${p.name}</h1>
        <p class="price">\$${p.price}</p>
        <p>${p.description}</p>
    </div>`; 
    } 
    // Setting innerHTML as card variable 
    document.getElementById("productContainer").innerHTML = card; 
} 