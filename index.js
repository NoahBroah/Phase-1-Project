let storedItems = []

document.addEventListener('DOMContentLoaded', () => {
fetch(`https://fakestoreapi.com/products/`)
.then(resp => resp.json())
.then(items => {
    storedItems = items
    getItems(items)
})
dropDownEventListeners();
})

function getItems(items) {
    items.map(item => {
        createItemCards(item)
    })
}

function createItemCards(item) {
    const li = document.createElement('li')
    const ul = document.querySelector('.item-list')
    li.innerHTML = `
    <p>Title ${item.title}</p>
    <div class="img-bx">
    <img src="${item.image}"/>
    <p>Rating ${item.rating.rate} </p>
    <p>Price: $${item.price}</p>
    <p>Description: ${item.description}</p>
    <p>Category: ${item.category}</p>
    <button class="buy-btn">Buy Now</button>`
    li.querySelector('.buy-btn').addEventListener('click', (e) => {
        li.remove()
    })
    
    ul.append(li)
}

function dropDownEventListeners() {
    const dropDown = document.querySelector('#dropDown')
    dropDown.addEventListener('change', (e) => {
        const ul = document.querySelector('.item-list')
        ul.innerHTML = ''
        const itemsFiltered = storedItems.filter(item => console.log(item.ca))
        getItems(itemsFiltered)
    })
}





