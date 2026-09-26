function loadcategories(){
    fetch(`https://fakestoreapi.com/products/categories`)
    .then(function(response){
        return response.json();
    })
    .then(function(categories){
        categories.unshift("all");
           console.log(categories);
       categories.map(function(category){
     
         var option = document.createElement("option");
            option.text= category.toUpperCase();
            option.value= category;
            document.getElementById("lstcategories").appendChild(option);
       })  
    })
}
function bodyload(){
    loadcategories();
    loadproducts(`https://fakestoreapi.com/products`);
}
function loadproducts(url){
    document.querySelector("main").innerHTML = "";
     fetch(url)
     .then(function(response){
        return response.json();
     })
     .then(function(products){
        products.map(function(product){  
        var div=document.createElement("div");
        div.className="card m-2 p-2";
        div.style.width="200px";
        div.innerHTML=` 
         <img class="card-img-top" height="120" width="200px" src=${product.image}> 
         <div class="card-header" style="height:130px;">
         ${product.title}
         </div>
         <div class="card-body">
         <dl>
         <dt>price</dt>
         <dd>${product.price}<dd>
         <dt>Rating</dt>
         <dd>${product.rating.rate}<span class="bi bi-star-fill text-success"></span></dd>
         </dl>
         </div>
         <div class="card-footer">
         <button class="btn btn-warning w-100 bi bi-cart4" onclick="addclick(${product.id})">Add to Cart</button>
         </div>
        `;
        document.querySelector("main").appendChild(div);
        })
      
     })
    }
function selectchange(){
    var categoryname=document.getElementById("lstcategories").value;
    if (categoryname==='all'){
        loadproducts('https://fakestoreapi.com/products/');
    }else{
        console.log(`https://fakestoreapi.com/products/category/${categoryname}`);
         loadproducts(`https://fakestoreapi.com/products/category/${categoryname}`);
    }
}
function searchclick(){
    var categoryName=document.getElementById("txtsearch").value;
    if(categoryName===""){
        loadproducts('https://fakestoreapi.com/products');
    }else{
        loadproducts(`https://fakestoreapi.com/products/category/${categoryName}`);
    }
}
var cartitem=[];
function getcartcount(){
    document.getElementById("lblcount").innerHTML=cartitem.length;
}
function addclick(id){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then (function(response){
        return response.json();
    })
    .then (function(product){
        cartitem.push(product);
        alert(`${product.title}\nAdded to Cart`);
        getcartcount();
    })
}