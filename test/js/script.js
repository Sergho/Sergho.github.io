function DropdownToggle(){
	// Кнопка меню (три полосочки)
	const burger 		= document.querySelector("header.main .nav .dropdown-burger");
	// Блок затемнения фона
	const darkness 	= document.querySelector(".darkness");
	// Само выпадающее меню
	const menu			= document.querySelector("header.main .nav .dropdown-menu");

	burger.addEventListener("click", () => {	// Открываем, показываем меню
		document.body.style.overflow = "hidden"; // Убираем прокрутку страницы
		darkness.style.display 	= "block";
		menu.style.transform 		= "translate(0, 0)";
		setTimeout(function(){darkness.style.opacity	= "1";}, 50);
	});
	darkness.addEventListener("click", () => {	// Закрываем меню
		document.body.style.overflow = "visible"; // Убираем прокрутку страницы
		menu.style.transform = "translate(-101%, 0)";
		darkness.style.opacity = "0";
		setTimeout(function(){darkness.style.display = "none";}, 550);
	});

}

function ScrollTop(){
	const btn = document.querySelector(".scroll-top .chevron");

	btn.addEventListener("click", function(){
		$('html, body').animate({scrollTop: 0}, 1000);
	});
}

DropdownToggle();
ScrollTop();