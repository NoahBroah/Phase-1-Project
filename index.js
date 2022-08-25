let storedItems = []

document.addEventListener('DOMContentLoaded', () => {

fetch(`https://fakestoreapi.com/products/`)
.then(resp => resp.json())
.then(items => {
    storedItems = items
    makeItems(items)
})
// Call functions here

dropDownEventListeners(); 
})
// Grab the indiviudal items from the API
// Run each item through a function that will add it to the DOM
function makeItems(items) {
    items.map(item => {
        createItemCards(item)
    })
}
// Take each item from the API and add it to the DOM as an li element
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
    <button class="buy-btn">Buy Now</button>
    <button class="wish-list">Add To Wishlist</button>`
    li.querySelector('.buy-btn').addEventListener('click', e => {
        li.remove()
    })
    li.querySelector('.wish-list').addEventListener('click',handleWishList)
    
    ul.append(li)
}
// Grab the dropdown and add an event listener that categorizes the items listed on the page = to whatever category is selected
function dropDownEventListeners() {
    const dropDown = document.querySelector('#dropDown')
    dropDown.addEventListener('change', (e) => {
        const ul = document.querySelector('.card-content')
        ul.innerHTML = ''
        const itemsFiltered = storedItems.filter(item => item.category === e.target.value)
        makeItems(itemsFiltered)
    })
}
// CB that handles the click on the wish list button
function handleWishList() {
    const li = document.createElement('li')
    if (this.classList.contains('active')) {
        this.classList.remove('active')
    }else {
    this.classList.add('active')
    console.log('Hello')
    }

}