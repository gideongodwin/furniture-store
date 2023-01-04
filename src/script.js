const reveals = document.querySelectorAll(".reveal");

function reveal() {

    for (let i = 0; i < reveals.length; i++) {

        let windowheight = window.innerHeight
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}
window.addEventListener('scroll', reveal);



  // FIREBASE


  function getItems(){
    db.collection("items").get().then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                image: doc.data().image,
                name: doc.data().name,
                price: doc.data().price
            })
        });
        generateItems(items)
        
    });
}


function addToCart(item){
    let cartItem = db.collection("cart-items").doc(item.id);
    cartItem.get()
    .then(function(doc){
        if(doc.exists){
            cartItem.update({
                quantity: doc.data().quantity + 1
            })
        } else {
            cartItem.set({
                image: item.image,
                name: item.name,
                price: item.price,
                quantity: 1
            })
        }
    })
}

function generateItems(items) {
    let itemsHTML = "";
    items.forEach((item) => {
            let doc = document.createElement('div')
        
        doc.innerHTML = `
        
        <div class="w-72 h-72  md:w-96  mr-6 relative">  
        <img src="${item.image}" class="w-full h-full object-cover" alt="">
        <div class="w-full  py-1 absolute bottom-0  bg-white  ">
            
                <div class="flex justify-between px-4 items-center">
                    <h2>${item.name}</h2>
                    <h2>${numeral(item.price).format('$0,0.00')}</h2>
                </div>

  
        </div>
    </div>
  

       `

    let addToCartEl = document.createElement('div')
    addToCartEl.classList.add('mb-8','pr-6','flex','justify-end', 'text-red-900')
    addToCartEl.innerHTML = ' <div class="text-white bg-yellow-900 w-1/3 rounded text-center cursor-pointer hover:bg-gray-600">add to cart</div>' 
    addToCartEl.addEventListener("click", function(){
        addToCart(item)
    })
    // document.querySelector('.mains').classList.add('flex','flex-wrap', 'w-full', 'border', 'border-black')

    document.querySelector('.mains').appendChild(doc)
    doc.appendChild(addToCartEl)


    


    })
}

getItems();