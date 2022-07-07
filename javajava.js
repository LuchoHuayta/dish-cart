//icono de agregar carrito
const addToCartButtons = document.querySelectorAll('.addToCart')
const dishCartContainer = document.querySelector('.dishCartContainer')
let cart = []

addToCartButtons.forEach(addButton => {
    addButton.addEventListener('click', addClicked)
})

function addClicked(event) {
    const button = event.target
    const dish = button.closest('.card') //obten contenedor mas cercano a clase card

    const dishTitle = dish.querySelector('.dishTitle').textContent
    const dishPrice = dish.querySelector('.dishPrice').textContent
    const dishImage = dish.querySelector('.dishImage').src

    const newDish = {
        title: dishTitle,
        price: dishPrice,
        img: dishImage,
        quantity: 1
    }

    addDishToCart(newDish)
}

function addDishToCart(newDish) {

    const inputElement = dishCartContainer.getElementsByClassName('dishQuantity')
    for(let i = 0; i< cart.length; i++){
        if(cart[i].title.trim() === newDish.title.trim()){
            cart[i].quantity ++
            const inputValue = inputElement[i]
            inputValue.value++

            updateCartTotal()
            return null
        }
    }

    cart.push(newDish)

    renderCart()
}

function renderCart() {
    dishCartContainer.innerHTML = ''
    cart.map(dish => {
        const cartRow = document.createElement('div')
        cartRow.classList.add('dishesCart')
        const cartContent = `
<div class="fila">
    <div class="cart-dish">
        <img src=${dish.img} width=50px>
        <p class="dishTitle">${dish.title}</p>
    </div>
    <div class="cart-price">
        <p class="dishPrice">${dish.price}</p>
    </div>
    <div class="cart-quantity ">
        <input class="dishQuantity" type="number" min="1" value=${dish.quantity}>
        <button class="buttonDelete">x</button>
    </div>
</div>`
        cartRow.innerHTML = cartContent
        dishCartContainer.append(cartRow)

        cartRow.querySelector(".buttonDelete").addEventListener('click', removeDish)
    })
    updateCartTotal()
}

function updateCartTotal() {
    let total = 0
    const cartTotal = document.querySelector('.cartTotal')

    cart.forEach((dish) => {
        const price = Number(dish.price.replace("$", ''))
        total = total + price * dish.quantity
    })

    cartTotal.innerHTML = `Total $${total}`
    console.log(total)
}

function removeDish(event) {
    const deleteButton = event.target
    const cartRow = deleteButton.closest(".dishesCart")
    const title = cartRow.querySelector('.dishTitle').textContent
    for(let i=0; i<cart.length; i++){
        if(cart[i].cartRow.trim() === title.trim()){
            cart.splice(i, 1) // eliminar de la posicion i 1 solo
            console.log('hola mundo')
        }
    }
    cartRow.remove()
    updateCartTotal()
}