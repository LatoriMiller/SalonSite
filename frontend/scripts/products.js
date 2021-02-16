let data;
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
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    // console.log(input.value)
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
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
    data.sort(function(a, b) {
        return a.price - b.price;
         //console.log(pArray);
        //return parseFloat(a.price) - parseFloat(b.price);
    });
    show(data);
}

// For descending order use
function descendProducts(data){
    data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    show(data);
}



//FILTER BY CATEGOREY
// const ByProduct = (props, type) => {
//     console.log(props)
//     let temp = props.Data.filter(item => item.tag === type);
//     return temp;
// }

// https://www.youtube.com/watch?v=US63Q6AL0GI
// function checkInput(pArray){
//     const filtered = pArray.filter(function(value){
//         return value >= 0
//         //I believe I could subsitute if then statements here

//     })
//     console.log(filtered)
// }

// WORKS NEED TO WRAP IN A FUNCTION THAT IS CALLED ON CLICK AND WILL WORK WITH THE DATA OBJECT, USER INPUT AND ALL CATEGORIES AND .LOWERCASE
// function searchUserInput (data){ 
//   let haircare = data.map(function(p) {
//     if (p.category === 'haircare'){
//       return p
//   }) 
//     // console.log("haircare ", haircare);
//     //set data = haircare;
//     //show(data);
//   }

  // let makeup = data.map(function(p) {
  //   if (p.category === 'makeup'){
  //     return p;
  //   }) 
  //   // console.log("makeup ", makeup);

  // let skincare = data.map(function(p) {
  //     if (p.category === 'skincare'){
  //       return p;
  //     }) 
  //     // console.log("skincare ", skincare);

  // let gifts = data.map(function(p) {
  //   if (p.category === 'gifts'){
  //     return p;
  //   })
  //   // console.log("gifts ", gifts);

  // let tools = data.map(function(p) {
  //     if (p.category === 'tools'){
  //       return p;
  //     })
      // console.log("tools ", tools);



 //Suggestions on the index loop that compares the last two using index greater >= 2
  // testing index of
    // return Math.sqrt(num)
//   const index = newTodos.findIndex(function(todo, index){
//     console.log(todo)
//     return todo.title === "gym"
// }) 
// console.log(index)

