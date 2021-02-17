let data;
// console.log("Hello");
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
    data = await response.json(); 
    console.log(data); 
   
    //Populates page with pull from api unsorted
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
        <button class="addToCart">Add to Cart</button>
    </div>`; 
    } 
    // Setting innerHTML as card variable 
    document.getElementById("productContainer").innerHTML = card; 
} 
/* Filter dropdown:  When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
function filterFunction() {
    let input, filter, ul, li, a, i;
    //collects user input from the search input field
    input = document.getElementById("myInput");
    // console.log(input.value)
    //setting input to handle case sensitivity 
    filter = input.value.toUpperCase();

    div = document.getElementById("myDropdown");
    //pulls value from the a tag
    a = div.getElementsByTagName("a");
    //compares the userinput to the innertext to find a match
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }


// Sort products by price in ascending order:
function ascendProducts(data){
  //returns a sorted array based on comparing elements a and b  
  data.sort(function(a, b) {
        return a.price - b.price;
    });
    show(data);
}

// For descending order use
function descendProducts(data){
    data.sort((a, b) => (b.price) - (a.price));
    show(data);
}


// Filter by category
function searchUserInput (data, selection){ 
    const hairProducts = data.filter( p => p.category === 'haircare');
    const makeupProducts = data.filter( p => p.category === 'makeup');
    const toolProducts = data.filter( p => p.category === 'tools');
    const skinProducts = data.filter( p => p.category === 'skincare');
    const giftProducts = data.filter( p => p.category === 'gift');
    // make one for each category and then run show(data) to display
    if (selection === 'haircare'){
      show(hairProducts);
    }
    if (selection === 'makeup'){
      show(makeupProducts);
    }
    if (selection === 'tools'){
      show(toolProducts);
    }
    if (selection === 'skincare'){
      show(skinProducts);
    }
    if (selection === 'gift'){
      show(giftProducts);
    }    
}  