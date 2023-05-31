const Base_URL = "https://dummyjson.com"

async function fetchProductsData () {
    try {

        let response = await fetch(`${Base_URL}/products`);
        // console.log(response);

        let translatedData = await response.json();
        // console.log(translatedData)

        let actualProductData = translatedData.products
        // console.log(actualProductData)

        return actualProductData

    }
    catch(error) {
        console.log(error);

    }
};

async function renderProductContainer() {
    let container = document.getElementById("products-container")

    let productInContainer = await fetchProductsData();
    // console.log(productInContainer)
    
    for(i = 0; i < productInContainer.length; i++){
        let myCurrentProduct = productInContainer[i];
        // console.log(myCurrentProduct)

        let productTitle = document.createElement("h3");
        let productDescription = document.createElement("p");
        let productPrice = document.createElement("p");
        let productDiscountPercentage = document.createElement("p");
        let productImage = document.createElement("img");

        productTitle.innerText = myCurrentProduct.title;
        productDescription.innerText = `Description: ${myCurrentProduct.description}`;
        productPrice.innerText = `Price: $${myCurrentProduct.price}`;
        productDiscountPercentage.innerText = `Discount: $${myCurrentProduct.discountPercentage}`;
        productImage.src = myCurrentProduct.images[0]
        
        container.appendChild(productTitle);
        container.appendChild(productImage)
        container.appendChild(productDescription);
        container.appendChild(productPrice);
        container.appendChild(productDiscountPercentage);
    }
}
    
async function fetchPostData () {
    try {

        let response = await fetch(`${Base_URL}/posts`);
        // console.log(response);

        let translatedData = await response.json();
        // console.log(translatedData)

        let actualProductData = translatedData.posts
        // console.log(actualProductData)

        return actualProductData

    }
    catch(error) {
        console.log(error);

    }
};

async function renderPostContainer() {
    let container = document.getElementById("posts-container")

    let postInContainer = await fetchPostData();
    // console.log(postInContainer)
    
    for(i = 0; i < postInContainer.length; i++){
        let myCurrentPostContainer = postInContainer[i];
        // console.log(myCurrentPostContainer)

        let postTitle = document.createElement("h3");
        let postBody = document.createElement("p");

        postTitle.innerText = myCurrentPostContainer.title;
        postBody.innerText = myCurrentPostContainer.body;
           
        container.appendChild(postTitle);
        container.appendChild(postBody)
    }
}

async function init(){
    renderProductContainer()
    renderPostContainer()
}

init()