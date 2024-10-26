const productList = document.getElementById("product-list");
const selectedProductDetailsDiv = document.getElementById("selected-product-details");

productList.addEventListener("click", function(e) {
    let productId = e.target.getAttribute("id");
    const childElement = document.getElementById(productId);
    let parentElement = childElement.parentElement;
    let clonedParentElement = parentElement.cloneNode(true);
    const button = clonedParentElement.querySelector(".add-to-cart");
    if (button) {
        button.remove();
    }
    selectedProductDetailsDiv.appendChild(clonedParentElement);
})