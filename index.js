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

    let productsInContainer = await fetchProductsData();
    // console.log(productsInContainer)
    
    for(i = 0; i < productsInContainer.length; i++){
        let myCurrentProductInContainer = productsInContainer[i];

        let newProductInContainer = document.createElement("p");
        newProductInContainer.classList.add("productItems")

        newProductInContainer.innerText = myCurrentProductInContainer.title

        container.appendChild(newProductInContainer);
    }
}

async function renderPostContainer() {
    let container = document.getElementById("posts-container")

    let postInContainer = await fetchProductsData();
    console.log(postInContainer)
    
    for(i = 0; i < postInContainer.length; i++){
        let myCurrentPostContainer = postInContainer[i];
        // console.log(myCurrentPostContainer)

        let productTitle = document.createElement("h3");
        let productDescription = document.createElement("p");
        let productPrice = document.createElement("p");
        let productDiscountPercentage = document.createElement("p");
        let productImage = document.createElement("img");

        productTitle.innerText = myCurrentPostContainer.title;
        productDescription.innerText = `Description: ${myCurrentPostContainer.description}`;
        productPrice.innerText = `Price: $${myCurrentPostContainer.price}`;
        productDiscountPercentage.innerText = `Discount: $${myCurrentPostContainer.discountPercentage}`;
        productImage.src = myCurrentPostContainer.images[0]

        
        container.appendChild(productTitle);
        container.appendChild(productImage)
        container.appendChild(productDescription);
        container.appendChild(productPrice);
        container.appendChild(productDiscountPercentage);

    }
}

async function init(){
    renderProductContainer()
    renderPostContainer()
}

init()