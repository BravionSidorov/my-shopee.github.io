const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function checkingStatus(notification) {
    notification.classList.remove("new-notif");

    //  Coding here with this variable: notification.classList
}

function modalInteract() {
    console.log("succeed!");
    $(".modal-sign-in").classList.toggle('hide-selector');
}

function searchingRange(range) {
    let places = [...$$(".header__nav-tools .search li.search-places__items i")];
    let currentPlace = $(".header__nav-tools .search span");
    places.find(function (element) {
        return element.classList == 'ti-check';
    }).classList.remove('ti-check');
    range.getElementsByTagName('i')[0].classList.add('ti-check');
    currentPlace.innerText = range.innerText;

    //  Coding here with this variable: currentPlace.innerText
}

function deleteProduct(thisProduct) {
    let products = [...$$(".header__nav-tools .cart .product-list__items")];
    let productIds = [...$$(".header__nav-tools .cart .product-list__items a")];

    let thisProductId;
    for (let index in productIds) {
        if (productIds[index] === thisProduct) {
            thisProductId = index;
        }
    }
    products[thisProductId].remove()
    //  Coding here with this variable: thisProductId
}

function findProduct(product) {
    alert('We will search "' + product + '" in Shopee!');
    //  Coding here with this variable: product
}

function findOldProduct(product) {
    let input = $(".header__nav-tools .search input.search-inp");
    input.value = product;
    handlerFindProduct(input);
}

function handlerFindProduct(input) {
    let searchHistoryBlock = $(".header__nav-tools ul.search-history__list");
    searchHistoryBlock.innerHTML =
        (`<li onclick="findOldProduct(this.innerText)" class="search-history__items">${input.value}</li>`) + searchHistoryBlock.innerHTML;

    let historyList = searchHistoryBlock.getElementsByTagName("li");
    if (historyList.length > 5) {
        historyList[5].remove();
    }

    findProduct(input.value);
    input.value = null;
}

function ratingStars(thisStar) {
    let stars = [...$$(".information .ti-star")];
    console.log(thisStar);
}


(function () {
    let searchInput = $(".header__nav-tools .search-inp");
    let searchBtn = $(".header__nav-tools .search-btn");
    searchInput.onkeyup = function (e) {
        if (e.which == 13) handlerFindProduct(e.target);
    }
    searchBtn.onclick = () => {
        handlerFindProduct(searchInput);
    };
})();
function favouriteBehaviour(heartSelector) {
    heartSelector.classList.toggle("loving-product");
    
}