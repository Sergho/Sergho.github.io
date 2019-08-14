 
 // CHECKBOX

 const checkbox = document.querySelectorAll(".filter-check_checkbox");

 checkbox.forEach(function(obj){
 	obj.addEventListener('change', function(){
 		this.nextElementSibling.classList.toggle("checked");
 	});
 });

 // SHOP_CART_OPEN/CLOSE

 const cart       = document.getElementById("cart");
 const modal_cart = document.querySelector(".cart");
 const close      = document.querySelector(".cart-close");

 cart.addEventListener('click', function(){
 	modal_cart.style.display = "flex";
 	document.body.style.overflow = "hidden";
 });
 close.addEventListener('click', function(){
 	modal_cart.style.display = "none";
 	document.body.style.overflow = "visible";
 })


 //SHOP_CART_ADD

 const cards       = document.querySelectorAll(".card");
 const cartWrapper = document.querySelector(".cart-wrapper");
 const empty       = document.getElementById("cart-empty");
 const counter     = document.querySelector(".counter");

 cards.forEach(function(obj){
 	const btn = obj.querySelector("button");
 	btn.addEventListener('click', function(){
 		const elems = cartWrapper.querySelectorAll(".card");
 		for(let i = 0; i < elems.length; i++) if(elems[i].querySelector(".card-title").textContent == obj.querySelector(".card-title").textContent) return;
 		cartWrapper.appendChild(obj.cloneNode(true));
 		empty.remove();
 		counter.textContent = elems.length + 1;
 	});
 });

 //END