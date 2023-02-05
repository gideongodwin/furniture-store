function getCartItems (){
    db.collection('cart-items').onSnapshot((snapshot) => {
        let cartItems = []
        snapshot.docs.forEach((doc) => {
            cartItems.push({
                id:doc.id,...doc.data()//The short way 
//THE LONG WAY
                // image: doc.data().image,
                // name: doc.data().name,
                // price: doc.data().price
            })
        })
        generateCartItems(cartItems)
        getTotalCost(cartItems)
    })
}

function getTotalCost (items){
    let totalCost = 0
    items.forEach((item) => {
        totalCost += (item.price * item.quantity)
    })
    document.querySelector(".total-cost-number").innerText = numeral(totalCost).format('$0,0.00')

    document.querySelector(".subtotal-cost-number").innerText = numeral(totalCost).format('$0,0.00')
}

function decreaseCount(itemId) {
    let cartItem = db.collection("cart-items").doc(itemId);
    cartItem.get().then(function(doc) {
        if (doc.exists) {
            if (doc.data().quantity > 1) {
                cartItem.update({
                    quantity: doc.data().quantity - 1
                })
            }
        }
    })
}

function increaseCount(itemId){
    let cartItem = db.collection("cart-items").doc(itemId);
    cartItem.get().then(function(doc) {
        if (doc.exists) {
            if (doc.data().quantity > 0) {
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            }
        }
    })
}

function deleteItem (itemId){
    db.collection("cart-items").doc(itemId).delete()
}


function generateCartItems(cartItems){
    let itemsHTML = ""

    cartItems.forEach((item) => {
        itemsHTML+= `
        <div class="w-full h-48 cart-item flex items-center mb-8  bg-white ">
        <!-- ITEM -->
        <div class="w-[75%] h-full  flex items-center justify-center ">

            <div class="w-[65%] h-full ">
                <img src="${item.image}" class=" w-full h-full object-cover" alt="">
            </div>
            
            <div class="w-[35%] h-full  flex items-center justify-center">
            <div>           <h2>${item.name}</h2>
            <h2 class="">${numeral(item.price * item.quantity).format('$0,0.00')}</h2>
                </div>
            </div>

        </div>

    

        <!-- QUANTITY -->

        <div class="w-[25%] h-full flex items-center justify-center">
           <div>
            <div class="w-24 flex items-center justify-center gap-4 bg-gray-300 m-auto">
                <div data-id="${item.id}" class="cart-item-decrease">
                    <i class="fa-solid fa-minus cursor-pointer "></i>
                </div>
                <p>${item.quantity}</p>

                <div data-id="${item.id}" class="cart-item-increase">
                    <i class="fa-solid fa-plus cursor-pointer "></i>
                </div>


            </div>

            <div data-id="${item.id}" class="cart-item-delete">
                <h2 class="cursor-pointer text-center mt-2 text-sm underline">Remove</h2>        
            </div>
           
           </div>
           

        </div>

        </div>
        `
    })
    let ct = document.querySelector('.cart-items')
    ct.innerHTML = itemsHTML

    if (ct.innerHTML = itemsHTML){
        ct.style.display ="block"
        document.querySelector('.order').style.display="block"
    }
    else{
        ct.innerHTML =`  <div class="bag block text-center" >
        <p class="text-base ">Your cart is currently empty</p>
        <button class="mt-8 ">
        
        
    </button></div>`
    document.querySelector('.order').style.display="none"
    }
    createEventListeners()
}

function createEventListeners (){
    let decreaseButtons = document.querySelectorAll(".cart-item-decrease")
    let increaseButtons = document.querySelectorAll(".cart-item-increase")

    let deleteButtons = document.querySelectorAll(".cart-item-delete")


    decreaseButtons.forEach((button) => {
        button.addEventListener("click", function(){
            decreaseCount(button.dataset.id)
        })
    })

    increaseButtons.forEach((button) => {
        button.addEventListener("click", function (){
            increaseCount(button.dataset.id)
        })
    })

    deleteButtons.forEach((button) => {
        button.addEventListener("click", function(){
            deleteItem(button.dataset.id)
        })
    })
}



getCartItems()
