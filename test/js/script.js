/*	------- Открытие и закрытие выпадающего меню -------	*/

function DropdownToggle(elem){
	// Кнопка меню (три полосочки)
	const burger 		= document.querySelector("header .nav .dropdown-burger");
	// Блок затемнения фона
	const darkness 	= document.querySelector(".darkness");
	// Само выпадающее меню
	const menu			= document.querySelector("header .nav .dropdown-menu");

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
		document.body.style.overflow = "hidden"; // Убираем прокрутку страницы
		darkness.style.display = "block";
		modal.style.display = "block";
		setTimeout(function(){darkness.style.opacity = "1";}, 50);
		setTimeout(function(){modal.style.opacity = "1";}, 50);
	} else {
		document.body.style.overflow = "visible"; // Убираем прокрутку страницы
		modal.style.opacity = "0";
		darkness.style.opacity = "0";
		setTimeout(function(){darkness.style.display = "none";}, 550);
		setTimeout(function(){modal.style.display = "none";}, 550);
	}

}

/* --------------- Галочка в форме	--------------------- */

function Tick(elem){
	// Чекбокс
	const chbox = document.querySelector("header form .confirm input");
	// Галочка
	const tick  = document.querySelector("header form .confirm .visible .tick");

	if(chbox.checked) tick.style.opacity = "0";
	else tick.style.opacity = "1";
	console.log(chbox.checked);
}
function CheckInput(input){		// Функция проверки заполнения поля ввода
	if(input.value.length > 0) input.classList.add("filled");
	else input.classList.remove("filled");
}
function ShowPassword(eye){		// Функция скрытия и показывания пароля
	const input = document.querySelector("#auth form input:nth-child(2)");

	if(input.type == "password"){
		input.type = "text";
		eye.style.opacity = "1";
	} else {
		input.type = "password";
		eye.style.opacity = "0.5";
	}
}

/* --------------- Переключение вкладок в разделе stats --------------------- */

function PageSwitch(page_nav){

	// Ниже будет много раз упомянуто слово новый. Здесь новый значит тот, который станет активным после нажатия

	const nav 				= document.querySelector(".pages-nav");			// Блок навиации
	const nav_items		= nav.children;															// Все элементы навигации
	const pages				= document.querySelector(".pages");					// Блок вкладок
	const pages_items	= pages.children;														// Все вкладки
	let new_index;																								// Индекс новой вкладки

	for(let i = 0; i < nav_items.length; i++){
		if(nav_items[i] == page_nav) new_index = i;
	}

	const new_nav_item	=	page_nav;										// Новый элемент навигации
	const new_pages_item 			= pages.children[new_index];	// Новая вкладка

	// Действия

	// Делаем все элементы навигации неактивными
	for(i = 0; i < nav_items.length; i++){
		nav_items[i].classList.remove("active");
	}
	// Делаем новый элемент активным
	new_nav_item.classList.add("active");

	// Скрываем все вкладки
	for(i = 0; i < pages_items.length; i++){
		pages_items[i].classList.remove("current");
	}
	// Делаем новый элемент активным
	new_pages_item.classList.add("current");

}

/* --------------- Слайдеры --------------------- */

function SliderNext(btn){

	const slider 				= btn.parentNode;											// Весь слайдер
	const prev					= slider.querySelector(".prev");			// Кнопка "Назад"
	const next 					= btn;																// Кнопка "Вперед"
	const current 			= slider.querySelector(".current");		// Элемент, показывающий номер текущего слайда
	const slides 				= slider.querySelectorAll(".slide");	// Все слайды
	const slides_count 	= slides.length;											// Количество слайдов

	let current_index	 	= current.innerHTML;									// Номер текущего слайда

	const current_slide	= slides[current_index - 1];					// Текущий слайд
	if(next.classList.contains("disabled")) return;
	const next_slide		= slides[current_index];							// Следующий слайд

	// Действия со всем этим

	// Скрываем текущий слайд
	current_slide.style.opacity = "0";
	setTimeout(() => {
		current_slide.style.display = "none";
		// Показываем следующий слайд
		next_slide.style.display = "flex";
		setTimeout(() => {next_slide.style.opacity = "1";}, 50);
	}, 350);
	// Изменяем номер текущей страницы
	current.innerHTML = ++current_index;
	// Меняем классы для кнопок
	if(current_index > 1) prev.classList.remove("disabled");
	else prev.classList.add("disabled");
	if(current_index < slides_count) next.classList.remove("disabled");
	else next.classList.add("disabled");

}

function SliderPrev(btn){

	const slider 				= btn.parentNode;											// Весь слайдер
	const prev					= btn;			// Кнопка "Назад"
	const next 					= slider.querySelector(".next");			// Кнопка "Вперед"
	const current 			= slider.querySelector(".current");		// Элемент, показывающий номер текущего слайда
	const slides 				= slider.querySelectorAll(".slide");	// Все слайды
	const slides_count 	= slides.length;											// Количество слайдов

	let current_index	 	= current.innerHTML;									// Номер текущего слайда

	const current_slide	= slides[current_index - 1];					// Текущий слайд
	if(prev.classList.contains("disabled")) return;
	const prev_slide		= slides[current_index - 2];					// Предыдущий слайд

	// Действия со всем этим

	// Скрываем текущий слайд
	current_slide.style.opacity = "0";
	setTimeout(() => {
		current_slide.style.display = "none";
		// Показываем предыдущий слайд
		prev_slide.style.display = "flex";
		setTimeout(() => {prev_slide.style.opacity = "1";}, 50);
	}, 350);
	// Изменяем номер текущей страницы
	current.innerHTML = --current_index;
	// Меняем классы для кнопок
	if(current_index > 1) prev.classList.remove("disabled");
	else prev.classList.add("disabled");
	if(current_index < slides_count) next.classList.remove("disabled");
	else next.classList.add("disabled");

}