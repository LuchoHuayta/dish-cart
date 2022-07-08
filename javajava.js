//LUCIANO HUAYTA DISH PAULINAS RESTO TEST
const addToCartButtons = document.querySelectorAll('.addToCart')
const dishCartContainer = document.querySelector('.dishCartContainer')
let cart = []

//boton de agregar dishessssss
addToCartButtons.forEach(addButton => {
    addButton.addEventListener('click', addClicked)
})

//sacar data del html
function addClicked(event) {
    const button = event.target
    const dish = button.closest('.card') //obten contenedor mas cercano a clase card

    const dishTitle = dish.querySelector('.plato').textContent
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

//agregar dishes al cart
function addDishToCart(newDish) {

    addToast('success','Added dish!')

    const inputElement = dishCartContainer.getElementsByClassName('dishQuantity')
    for(let i = 0; i< cart.length; i++){
        if(cart[i].title === newDish.title){
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

// pintar cart en base a dish agregados
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
    <div class="cart-quantity">
        <input class="dishQuantity" type="number" min="1" value=${dish.quantity}>
        <button class="buttonDelete">x</button>
    </div>
</div>`
        cartRow.innerHTML = cartContent
        dishCartContainer.append(cartRow)

        cartRow.querySelector(".buttonDelete").addEventListener('click', removeDish)
        cartRow.querySelector(".dishQuantity").addEventListener('change', inputQuantity)
    })
    updateCartTotal()
}

// actualizar precio
function updateCartTotal() {
    let total = 0
    const cartTotal = document.querySelector('.cartTotal')

    cart.forEach((dish) => {
        const price = Number(dish.price.replace("$", ''))
        total = total + price * dish.quantity
    })

    cartTotal.innerHTML = `Total $${total}`
    addLocalStorage()
}

//borrar una fila de un dish
function removeDish(event) {

    addToast('error','Removed dish!')

    const deleteButton = event.target
    const cartRow = deleteButton.closest(".dishesCart")
    const title = cartRow.querySelector('.dishTitle').textContent
    for(let i=0; i<cart.length; i++){
        if(cart[i].title === title){
            cart.splice(i, 1) // eliminar de la posicion i 1 solo
        }
    }
    cartRow.remove()
    updateCartTotal()
}

//input de cantidad, no es posible menor a 1
function inputQuantity(event) {
    const inputAddition = event.target
    const cartRow = inputAddition.closest(".dishesCart")
    const title = cartRow.querySelector('.dishTitle').textContent
    cart.forEach(dish => {
        if(dish.title === title){
            inputAddition.value < 1 ? (inputAddition.value = 1) : inputAddition.value
            dish.quantity = inputAddition.value
            updateCartTotal()
        }
    })
}

//agrega el localstorage al navegador, se pasa a string y luego se parsea a la normalidad
function addLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

//chao JSON e imprimir local
window.onload = function() {
    const storage = JSON.parse(localStorage.getItem('cart'))
    if(storage){
        cart = storage
        renderCart()
    }
}

//sweetalert2 para tostadas de dishes agregados y borrados
const addToast = (icon, title) => {
    Swal.fire({
        icon: icon,
        title: title,
        position: 'top-end',
        showConfirmButton: false,
        toast: true,
        timer: 1500,
        timeProgressBar: true,
    })
}