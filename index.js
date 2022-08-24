let storedItems = []

document.addEventListener('DOMContentLoaded', () => {



fetch(`https://fakestoreapi.com/products/`)
.then(resp => resp.json())
.then(items => {
    storedItems = items
    makeItems(items)
})


dropDownEventListeners(); 
})

function makeItems(items) {
    items.map(item => {
        createItemCards(item)
    })
}

function createItemCards(item) {
    const li = document.createElement('li')
    const ul = document.querySelector('.card-content')
    li.innerHTML = `
    <h2 class='card-title'>Title ${item.title}</h2>
    <img class='card-img'src="${item.image}"/>
    <p class='card-body'>Rating ${item.rating.rate} </p>
    <p class='card-body'>Price: $${item.price}</p>
    <p class='card-body'>Description: ${item.description}</p>
    <p class='card-body'>Category: ${item.category}</p>
    <button class="buy-btn">Buy Now</button>`
    li.querySelector('.buy-btn').addEventListener('click', (e) => {
        li.remove()
    })
    
    ul.append(li)
}
// Make an API call to categorize the items by whatever category is selected in the dropDown
function dropDownEventListeners() {
    const dropDown = document.querySelector('#dropDown')
    dropDown.addEventListener('change', (e) => {
        const ul = document.querySelector('.card-content')
        ul.innerHTML = ''
        const itemsFiltered = storedItems.filter(item => item.category === e.target.value)
        makeItems(itemsFiltered)
    })
}



