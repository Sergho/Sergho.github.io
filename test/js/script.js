/*	------- Открытие и закрытие выпадающего меню -------	*/

function DropdownToggle(elem){
	// Кнопка меню (три полосочки)
	const burger 		= document.querySelector("header.main .nav .dropdown-burger");
	// Блок затемнения фона
	const darkness 	= document.querySelector(".darkness");
	// Само выпадающее меню
	const menu			= document.querySelector("header.main .nav .dropdown-menu");

	if(elem == burger){
		// Открываем менюшку
		document.body.style.overflow = "hidden"; // Убираем прокрутку страницы
		darkness.style.display 	= "block";
		menu.style.transform 		= "translate(0, 0)";
		setTimeout(function(){darkness.style.opacity	= "1";}, 50);
	} else {
		// Закрываем менюшку
		document.body.style.overflow = "visible"; // Убираем прокрутку страницы
		menu.style.transform = "translate(-101%, 0)";
		darkness.style.opacity = "0";
		setTimeout(function(){darkness.style.display = "none";}, 550);
	}

}
/*	--------------------- Прокрутка вверх ------------------	*/
function ScrollTop(){
	// Прокручиваем в начало
	$('html, body').animate({scrollTop: 0}, 1000);
}

/*	---- Открытие и закрытие модального окна авторизации ----	*/

function Auth(){		// login
	// Окно авторизации
	const modal = document.querySelector("#auth");
	// Темнота
	const darkness = document.querySelector(".darkness");
	// Крестик выхода
	const exit = document.querySelector(".exit");

	if(darkness.style.display != "block"){
		darkness.style.display = "block";
		modal.style.display = "block";
		setTimeout(function(){darkness.style.opacity = "1";}, 50);
		setTimeout(function(){modal.style.opacity = "1";}, 50);
	} else {
		modal.style.opacity = "0";
		darkness.style.opacity = "0";
		setTimeout(function(){darkness.style.display = "none";}, 550);
		setTimeout(function(){modal.style.display = "none";}, 550);
	}

}