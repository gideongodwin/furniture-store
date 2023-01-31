function getCartItems (){
    db.collection("cart-items").onSnapshot((snapshot) => {
        let totalCount = 0
        snapshot.forEach((doc) => {
            totalCount += doc.data().quantity
        })
        setCartCounter(totalCount)
    })
}

function setCartCounter (totalCount){
        document.querySelector(".cart-icon-number").innerText = totalCount
}

getCartItems();

