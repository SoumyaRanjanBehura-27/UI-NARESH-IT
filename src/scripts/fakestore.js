function loadcategories(){
    fetch(`https://fakestoreapi.com/products/categories`)
    .then(function(response){
        return response.json();
    })
    .then(function(categories){
        categories.unshift("All");
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
         <img class="card-img-top" height="120" src=${product.image}> 
         <div class="card-header" style="height:100px;">
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
         <button class="btn btn-warning w-100 bi bi-cart4" onclick="addclick()">Add to Cart</button>
         </div>
        `;
        document.querySelector("main").appendChild(div);
        })
      
     })
    }
