const getElementValueById = (id) => {
    const field = document.getElementById(id);
    const value = field.value;
    field.value  = '';
    return value;
}

const addItemsToCart = () => {
    const item = getElementValueById('item');
    const quantity = getElementValueById('quantity');

    saveItemToLocalStorate(item, quantity);
    addItemsToDisplay(item, quantity);
} 

const getShoppingCartFromLocalStorage = () =>{
    let savedCart = localStorage.getItem('cart');
    let cart  = {};
    if(savedCart){
        cart = JSON.parse(savedCart);
    }

    return cart;
}

const saveItemToLocalStorate = (item, quantity) =>{
    const cart = getShoppingCartFromLocalStorage();
    cart[item] = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
}

const addItemsToDisplay = (item, quantity) =>{
    const container = document.getElementById('cart-container');

    const li = document.createElement('li');
    li.innerText = `${item}: ${quantity}`;
    container.appendChild(li);
}

const displaySavedCart = () =>{
    const cart = getShoppingCartFromLocalStorage();
    for (const key in cart) {
        addItemsToDisplay(key, cart[key]);
    }
}

displaySavedCart();