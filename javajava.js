//ingles para evitar la Ñ añadir

//icono de agregar carrito
const addToCartButtons = document.querySelectorAll('.addToCart')
addToCartButtons.forEach(addButton => {
    addButton.addEventListener('click', addClicked)
})

const dishCartContainer = document.querySelector('.dishCartContainer')

function addClicked(event) {
    const button = event.target
    const dish = button.closest('.card')

    const dishTitle = dish.querySelector('.dishTitle').textContent
    const dishPrice = dish.querySelector('.dishPrice').textContent
    const dishImage = dish.querySelector('.dishImage').src

    addDishToCart(dishTitle, dishPrice, dishImage)
}

//agrega fila con datos al carrito
function addDishToCart(dishTitle, dishPrice, dishImage) {
    const cartRow = document.createElement('div')
    const cartContent = `
<div class="fila">
    <div class="cart-dish">
        <img src=${dishImage} width=50px>
        <p class="shopping-cart-item-title shoppingCartItemTitle">${dishTitle}</p>
    </div>
    <div class="cart-price">
        <p class="item-price dishPrice">${dishPrice}</p>
    </div>
    <div class="cart-quantity ">
        <input class="shopping-cart-quantity-input dishQuantity" type="number"
            value="1">
        <button class="buttonDelete" type="button">X</button>
    </div>
</div>`
    cartRow.innerHTML = cartContent
    dishCartContainer.append(cartRow)

    cartRow.querySelector('.buttonDelete').addEventListener ('click', removeCartDish)

    updateCartTotal()
}

//funcion  para actualizar total del carrito
function updateCartTotal(){
    let total = 0
    const cartTotal = document.querySelector('.cartTotal')

    const cartDishes = document.querySelectorAll('.fila')

    cartDishes.forEach(fila => {
        const cartPriceDishElement = fila.querySelector('.dishPrice')
        const cartPriceDish = Number(cartPriceDishElement.textContent.replace('$',''))
//utilizo number para cambiar string a tipo numero
        const cartQuantityDishElement = fila.querySelector('.dishQuantity')
        const cartQuantityDish = Number(cartQuantityDishElement.value)

        total = total + cartPriceDish * cartQuantityDish
    })
    cartTotal.innerHTML = `$${total}`
}

function removeCartDish(event) {
    const buttonClicled = event.target
    buttonClicled.closest('.fila').remove()
    updateCartTotal()
}

//corregir cartQuantityDish,,, no superposicion,, y aplique updateCartTotal por x cantidad