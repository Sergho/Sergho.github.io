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
function ShowPassword(eye, input_index){		// Функция скрытия и показывания пароля
	const input = eye.parentNode.children[input_index];

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
	const prev					= btn;																// Кнопка "Назад"
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

// Активация фильтров платежей

function ActivateFilter(filter){
	// Массив всех платежей
	let payments 				= Array.from(document.querySelectorAll(".payments-page .slide ul li"));

	// Массив всех слайдов с платежами
	const blocks				= document.querySelectorAll(".payments-page .slide ul");

	// Сначала старые - 1; Сначала новые - 0
	const sort_type			=	filter.innerHTML == "Сначала новые" ? false : true;

	// Все слайды платежей
	const slides 				= document.querySelectorAll(".payments-page .slide");

	// Элемент, показывающий номер текущего слайда
	const current 			= document.querySelector(".payments-page .current");

	// Кнопки вперед и назад
	const prev					= document.querySelector(".payments-page .prev");
	const next 					= document.querySelector(".payments-page .next");

	// Убираем все слайды
	slides.forEach((slide) => {
		slide.style.opacity = "0";
		setTimeout(() => {
			slide.style.display = "none";
		}, 350);
	});

	// Возвращаемся на первый слайд
	current.innerHTML = "1";

	// Корректируем кнопки
	prev.classList.add("disabled");
	next.classList.remove("disabled");

	// Сортировка платежей
	payments.sort((a, b) => {
		// Превращаем DOM элементы в строки, сразу нафиг обрезаем денежное значение платежа, оно нам не важно
		let a_text = a.innerHTML.split(" <")[0];
		let b_text = b.innerHTML.split(" <")[0];
		// Дата платежа в текстовом формате
		let date_a = a_text.split(" ")[3];
		let date_b = b_text.split(" ")[3];
		// Время платежа в текстовом формате
		let time_a = a_text.split(" ")[4];
		let time_b = b_text.split(" ")[4];
		// Убираем скобочки, только будут мешать
		time_a = time_a.substring(1, time_a.length - 1);
		time_b = time_b.substring(1, time_b.length - 1);
		// Переведем дату и время в целочисленную переменную для удобного сравнения
		date_a = date_a.split(".");
		date_b = date_b.split(".");

		time_a = time_a.split(":");
		time_b = time_b.split(":");

		date_a = date_a.reverse();
		date_b = date_b.reverse();

		int_time_a = date_a.join("") + time_a.join("");
		int_time_b = date_b.join("") + time_b.join("");

		// Сравниваем те самые целочисленные переменные, та, что больше - новее

		if(sort_type){
			if(int_time_a < int_time_b) return -1;
			else return 1;
		} else {
			if(int_time_a < int_time_b) return 1;
			else return -1;
		}

	});

	// Убираем порядковый номер из каждого платежа, т.к порядок будет новый
	for(let i = 0; i < payments.length; i++){
		payments[i] = payments[i].innerHTML.split(". ")[1];
	}
	setTimeout(() => {

	// Внедряем платежи в слайды
	for(let i = 0; i < slides.length; i++){
			slides[i].querySelector("ul").innerHTML = "";
			// 17 платежей может быть максимально на одном слайде
			for(let j = 0; j < 17; j++){
				if(i * 17 + j > payments.length) break;
				let elem = document.createElement("li");
				elem.innerHTML = (i * 17 + j + 1) + ". " + payments[i * 17 + j];
				slides[i].querySelector("ul").append(elem);
			}
		}
	}, 350);

	// Показываем первый слайд
	setTimeout(() => {
		slides[0].style.display = "flex";
		setTimeout(() => {slides[0].style.opacity = "1";}, 50);
	}, 400);

}

/* Убираем ошибку в поле ввода */

function InputCloseError(input){
	// Проверяем текстовое поле на соддержание класса ошибки
	if(input.classList.contains("error")){
		// Удаляем класс
		input.classList.remove("error");
		// Получаем новый placeholder и text
		let placeholder = input.placeholder.split(", ")[0];
		let text = input.placeholder.split(", ")[1];
		// Применяем их к полю
		input.value = text;
		input.placeholder = placeholder;
		// Проверим на введенные данные, чтобы оставить поле активным если что
		if(input.value.length > 0) input.classList.add("filled");
	}
}