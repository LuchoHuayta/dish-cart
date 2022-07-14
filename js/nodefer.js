//card del dish a pintar
const returnDishesContent = (content) => {
    const { titulo, imagen, precio } = content
    return `<div class="card">
                <div>
                    <h3 class="plato">${titulo}</h3>
                    <img class="dishImage" src="${imagen}">
                </div>
                <div class="white-icon">
                    <p class="dishPrice">${precio}</p>
                    <i class="fa-solid fa-cart-plus addToCart"></i>
                </div>
            </div>`
}

//aplica FETCH
const getContent = (URL) => {
    let showDishes = ""
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            for (content of data)
                showDishes += returnDishesContent(content)
            contentDOM.innerHTML = showDishes
        })
}