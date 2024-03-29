import { ShoppingCart } from "./classes/ShoppingCart.js";
import { ProductsShop } from "./classes/ProductsShop.js";
import { formCard } from "./utils/Card.js";
import { TV } from "./classes/Products/TV.js";
import { Phone } from "./classes/Products/Phone.js";
import { Bicycle } from "./classes/Products/Bicycle.js";
const newCard = (product) => {
    const cardList = document.querySelector("#listCards");
    if (cardList) {
        const colDiv = document.createElement('div');
        colDiv.className = 'col';
        colDiv.innerHTML = formCard(product);
        cardList.append(colDiv);
    }
};
const loadProducts = (products) => {
    products.productList.forEach(item => {
        if (item instanceof TV || item instanceof Bicycle || item instanceof Phone) {
            newCard(item);
        }
    });
};
const updateValueTotal = () => {
    var _a, _b;
    const element = document.querySelector("#valorCarrinho");
    element.textContent = `${productsCart.showCurrentPrice().toFixed(2)} R$`;
    const iconAlert = document.querySelector("#cartCount");
    const priceCart = document.querySelector("#cartCountPrice");
    if (productsCart.productList.length) {
        iconAlert.textContent = productsCart.productList.length.toString();
        (_a = iconAlert.closest("li")) === null || _a === void 0 ? void 0 : _a.classList.replace("opacity-0", "opacity-100");
        priceCart.classList.replace("opacity-0", "opacity-100");
    }
    else {
        (_b = iconAlert.closest("li")) === null || _b === void 0 ? void 0 : _b.classList.replace("opacity-100", "opacity-0");
        priceCart.classList.replace("opacity-100", "opacity-0");
    }
};
const addToCart = (event) => {
    const card = event.target;
    const productId = card.dataset.productId;
    productsCart.insertProduct(listProducts.getProduct(parseInt(productId)));
    updateValueTotal();
};
const setupButtons = () => {
    const btns = document.querySelectorAll("button");
    const libtn = document.querySelectorAll(".openCart");
    btns.forEach(btn => {
        if (btn.textContent == "Adicionar no Carrinho") {
            btn.addEventListener("click", addToCart);
        }
    });
    libtn.forEach(libtn => {
        libtn.addEventListener("click", function () {
            loadModal(productsCart);
        });
    });
};
const formModalProduct = (product) => {
    return `
    <th scope="row">${product.manufacturer}</th>
    <td>${product.model}</td>
    <td>R$ ${product.price}</td>
    <td>
        <button class="btn btn-danger" data-product-id="${product.id}">Remover</button>
    </td>
    `;
};
const removeProductCart = (event) => {
    const product = event.target;
    const productId = parseInt(product.dataset.productId);
    productsCart.deleteProduct(productId);
    loadModal(productsCart);
    updateValueTotal();
};
const loadModal = (cartProcts) => {
    const modalTable = document.querySelector("#modalTable > tbody");
    if (modalTable) {
        modalTable.innerHTML = "";
        cartProcts.productList.forEach(product => {
            const ul = document.createElement("tr");
            ul.innerHTML = formModalProduct(product);
            modalTable.append(ul);
        });
        const btns = document.querySelectorAll("tbody button");
        btns.forEach(btn => {
            if (btn.textContent == "Remover") {
                btn.addEventListener("click", removeProductCart);
            }
        });
    }
};
const productsCart = new ShoppingCart();
const listProducts = new ProductsShop();
loadProducts(listProducts);
setupButtons();
