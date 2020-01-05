<?

class engine
{
	public $db;
	public $body;
	public $template;
	public $headers;
	
	public $server_count = 1;		// Количество серверов
	public $server_data = array(	// Собственно информация о самих серверах
		array(
			"name" => "#1",
			"ip" => "194.61.44.20:8904",
			"db_hostname" => "ip",
			"db_username" => "user",
			"db_password" => "password",
			"db_database" => "database",
			"unitpay_link" => "https://unitpay.ru/",
			"unitpay_secret_key" => "key"
		)
	);
	
	public $block_site = false; // блокировка сайта
	public $block_whitelist = array(); // список разрешенных ip при заблокированном сайте
	
	public $account_system_salt = "salt game mode";
	public $rcon_password = "rcon";
	public $donate_multiplier = 1;
	
	public $fraction_name = array(
		"-",
		"МВД",
		"Правительство",
		"Судебная Организация",
		"ГИБДД",
		"СМП",
		"Прокуратура", // ?
		"Армия",
		"-", // ?
		"Следственный комитет", // ?
		"ОПГ Курганская",
		"Гопники",
		"Таксопарк",
		"МЧС"
	);
	public $rang_name = array(
		array(), // -
		array("Рядовой", "Рядовой", "Младший сержант", "Сержант", "Старший сержант", "Старшина", "Младший лейтенант", "Лейтенант", "Старший лейтенант", "Капитан", "Майор", "Подполковник", "Полковник", "Генерал-майор"), // полиция
		array("Стажер", "Стажер", "Секретарь", "Сотрудник СБ", "Начальник СБ", "Сотрудник ОДО", "Начальник ОДО", "Юрист", "Депутат обл. думы", "Заместитель мэра", "Мэр г.Арзамас", "Мэр г.Южный", "Заместитель Губернатора", "Губернатор"), // Правительство
		array("Курсант ЦПП", "Курсант ЦПП", "Рядовой", "Мл.Сержант", "Сержант", "Ст.Сержант", "Старшина", "Прапорщик", "Мл.Лейтенант", "Ст.Лейтенант", "Капитан", "Майор", "Подполковник", "Полковник", "Генерал-майор", "Адвокат", "Руководитель", "Федеральный судья", "Зам. председателя", "Верховный судья"), // Судебка
		array("Рядовой", "Рядовой", "Младший сержант", "Сержант", "Старший сержант", "Старшина", "Младший лейтенант", "Лейтенант", "Старший лейтенант", "Капитан", "Майор", "Подполковник", "Полковник", "Генерал-майор"), // ГИБДД
		array("Практикант", "Практикант", "Водитель", "Интерн", "Диспетчер", "Психолог", "Хирург", "Нарколог", "Терапевт-Врач", "Зам.Заведующего", "Заведующий", "Зам. Глав. врача", "Глав Врач"), // СМП
		array("Юрист 3 класса", "Юрист 3 класса", "Юрист 2 класса", "Юрист 1 класса", "Мл.советник юстиции", "Советник юстиции", "Ст.советник юстиции", "Помощник прокурора", "Прокурор", "Помощник обл.Прокурора", "Областной Прокурор"), // -
		array("Рядовой", "Рядовой", "Ефрейтор", "Младший сержант", "Сержант", "Старший сержант", "Старшина", "Прапорщик", "Старший прапорщик", "Младший лейтенант", "Лейтенант", "Старший лейтенант", "Капитан", "Майор", "Подполковник", "Полковник"), // Армия
		array("Юрист 3 класса", "Юрист 2 класса", "Юрист 1 класса", "Мл.советник юстиции", "Советник юстиции", "Ст.советник юстиции", "Помощник прокурора", "Прокурор", "Помощник обл.Прокурора", "Областной Прокурор"), // -
		array("Рядовой", "Рядовой", "Младший сержант", "Сержант", "Старший сержант", "Старшина", "Младший лейтенант", "Лейтенант", "Старший лейтенант", "Капитан", "Майор", "Подполковник", "Полковник"), // -
		array("Шнырь", "Шнырь", "Барыга", "Рэкетир", "Киллер", "Бригадир", "Смотрящий", "Криминальный авторитет", "Положенец", "Вор в законе"), // ОПГ Курганская
		array("Молодой", "Молодой", "Шпана", "Гопник", "Хулиган", "Блатной", "Смотрящий за районом", "Авторитет", "Пахан"), // Гопники
		array("Практикант", "Практикант", "Таксист 3 класса", "Таксист 2 класса", "Таксист 1 класса", "Диспетчер", "Руководитель", "Зам. директора", "Директор"), // Таксопарк
		array("Рядовой", "Рядовой", "Мл. сержант", "Сержант", "Ст. Сержант", "Старшина", "Прапорщик", "Ст. Прапорщик", "Мл. Лейтенант", "Лейтенант", "Ст. Лейтенант", "Капитан", "Майор", "Подполковник", "Полковник") // МЧС
	);
	public $sub_rang_name = array(
		array(),
		array("ППС", "ППС", "ОМОН", "СО", "ОРО"), // Полиция
		array(), // Правительство
		array("ФСИН", "ФСИН", "СУД", "Адвокатура"), // Судебка
		array("ОБ", "ОБ", "СБ", "СЭ", "МРЭО", "СР-ДПС", "СЭ-ДПС", "Мото-Рота", "ЦППС"), // ГИБДД
		array("СМП", "СМП", "ХО", "НО"), // СМП
		array(), // -
		array("1-ая рота", "ВАИ", "1-ая рота", "2-ая рота", "РСПН", "Мед.Часть"), // Армия
		array(), // -
		array(), // -
		array(), // ОПГ Курганская
		array(), // Гопники
		array(), // Таксопарк
		array("ГДЗС", "ГДЗС", "МК", "ПСО", "ГПН") // МЧС
	);
	
	public $ucp_log_action_names = array(
		array("logout", "Выход из UCP"),
		array("email_changed", "Изменен email"),
		array("password_changed", "Изменен пароль"),
		array("fraction_uninvate", "Исключен игрок из фракции"),
		array("pageview_change_email", "Просмотр \"Сменить email\""),
		array("pageview_change_password", "Просмотр \"Сменить пароль\""),
		array("pageview_property", "Просмотр \"Имущество\""),
		array("pageview_payments", "Просмотр \"Платежи\""),
		array("pageview_leader", "Просмотр \"Фракция\""),
		array("pageview_leaders", "Просмотр \"Лидеры\""),
		array("pageview_main", "Просмотр \"Главное\""),
		array("recovery_final", "Финал восстановления"),
		array("recovery_query", "Запрос на восстановления"),
		array("success_auth", "Вход в UCP")
	);
	
	// Составляем содержимое тега head
	public function compile_head()
	{
		$head = '
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="../fonts/fonts.css">
		<link rel="stylesheet" href="../css/style.css">
		<title>Main page - Green Tech</title>
		';
		
		return $head;
	}

	// Составляем содержимое тега body
	public function compile_body($page)
	{
		// Действия при заблокированном сайте и при том, что ip адрес пользователя не входит в whitelist
		if($this->block_site && !in_array($_SERVER['REMOTE_ADDR'], $this->block_whitelist)){
			$this->body .= '
			<center style="width: 60%; padding: 50px;">
			<div class="alert alert-info" role="alert">
			<h4 class="alert-heading">Сайт на технических работах</h4>
			<p>В настоящие время данный сайт доступен только для указанных IP-адресов. Возможно, он находится на рекострукции или технических работах. Пожалуйста, подождите, возможно скоро он снова будет доступен.</p>
			</div>
			</center>
			';

			return $this->body;
		}

		// Если главная страница сейчас открыта, то нужно вставить специальный задний фон, который есть только на этой странице
		if($page == "MAIN"){
			$this->body .= 	'
			<div id="main-background">
			<img src="../img/background.png" alt="background">
			</div>';
		}

		// Вставляем верхнюю часть сайта (то, что одинаково на всех страницах)
		// Там, где стоит strtolower($page), нужно менять id вреппера, чтобы css вносил мелкие изменения
		$this->body .= '<div id="' . strtolower($page) . '-wrapper">
		<div class="darkness" onclick="DropdownToggle(this); Auth();"></div>
		<header>
		<div class="logo">
		<a href="main.html">
		<img src="../img/logo.png" alt="logotype">
		</a>
		</div>
		<div class="nav">
		<div class="dropdown">
		<div class="dropdown-burger" onclick="DropdownToggle(this);">
		<span></span>
		<span></span>
		<span></span>
		</div>
		<ul class="dropdown-menu">
		<li class="dropdown-item"><a href="main.html">Главная</a></li>
		<li class="dropdown-item"><a href="#">Ставки BoxBet</a></li>
		<li class="dropdown-item"><a href="billing.php">Донат</a></li>
		<li class="dropdown-item"><a href="#">Gregtech FM</a></li>
		<li class="dropdown-item"><a href="#">Форум</a></li>
		<li class="dropdown-item lc"><a href="#" onclick="DropdownToggle(this); setTimeout(() => {Auth();}, 550);">Личный кабинет</a></li>
		</ul>
		</div>
		<div class="navbar">
		<ul class="navbar-menu">
		<li class="navbar-item"><a href="main.html">Главная</a></li>
		<li class="navbar-item"><a href="#">Ставки BoxBet</a></li>
		<li class="navbar-item"><a href="billing.php">Донат</a></li>
		<li class="navbar-item"><a href="#">Gregtech FM</a></li>
		<li class="navbar-item"><a href="#">Форум</a></li>
		</ul>
		<div class="navbar-personal">
		<a href="#" class="lc" onclick="Auth();">Личный кабинет</a>
		</div>
		</div>
		</div>
		';

		if($page == "MAIN")
		{
			// создаем html кнопку в зависимости от $server_data для захода на игровой сервер
			$connect_buttons = '<a href="crmp://' . $this->server_data[0]["ip"] . '" class="connect">Подключиться к серверу</a>';
			// Вставляем в боди все остальное
			$this->body .= '
			<div class="text">
			<h1>Начни играть в CRMP на проекте GreenTech RolePlay прямо сейчас!</h1>
			<p>Как легко получить из самых общих соображений, кампос-серрадос представляет собой холодный взрыв. Несмотря на внутренние противоречия, вещество мгновенно</p>
			<a href="#" class="start">Как начать играть?</a>
			';
			// Внедряем кнопочки захода в сервер в body
			$this->body .= $connect_buttons;

			$this->body .= '
			</div>
			</header>
			<div id="online">
			<div class="avatar">
			<span class="point"></span>
			</div>
			<div class="people-online">
			<h1>125 человек</h1>
			<span>Онлайн</span>
			</div>
			</div>
			<div id="about">
			<div class="card">
			<div class="image"></div>
			<div class="text">
			<h1>О нашем проекте</h1>
			<p>Первый игровой мод был на основе Gamer, разработка длилась с 22 сентября 2012 года по июнь месяц 2014 года. Развитие сервера было очень стремительным, уже за 2 месяца после открытия сервер имел онлайн 50+, что не могло радовать основателей сервера. Над модом трудились 2 человека, это Юра Чемериский и Влад Мальцев. Влад Мальцев, второй разработчик игрового мода GreenTech RolePlay который присоеденился к проекту весной 2013 года.</p>
			<p>После чего все 3 основателя добились онлайна в 110/110 человек. Сервер имел множество проблем, после чего потерял свой онлайн до 3-5 человек в день. Через некоторое время он снова открылся, с новым игровым модом, но долго на этой основе сервер не проработал из за лагов, и слетов аккаунтов.</p>
			<p>Был передан в другие руки, после чего была опять смена мода на старый. И потом опять же на новый, после исправления всех лагов и багов, мод наконец то начал быть играбельным. Мод стремительно развивался, а сам проект помалу загибался. Сервер закрывался несколько раз, но недавно был восстановлен, и сейчас продолжает свою работу. Игровой мод сильно изменился, и стал более качественным</p>
				</div>
				</div>
				</div>
				<div id="start">
				<ul class="actions">
				<li class="game">
				<span class="number">1</span>
				<div class="text">
				<h1>Скачать <u>игру</u></h1>
				<p>Бессознательное, на первый взгляд, самопроизвольно. Субтехника, в том числе, вразнобой отталкивает стимул. Показательный пример – арпеджированная фактура сонорна. Код просветляет стресс</p>
				</div>
				<a href="">Скачать GTA Criminal Russia</a>
				</li>
				<li class="multiplayer">
				<span class="number">2</span>
				<div class="text">
				<h1>Скачать <u>мультиплеер</u></h1>
				<p>Бессознательное, на первый взгляд, самопроизвольно. Субтехника, в том числе, вразнобой отталкивает стимул. Показательный пример – арпеджированная фактура сонорна. Код просветляет стресс</p>
				</div>
				<a href="">Скачать CR-MP 0.3e</a>
				</li>
				<li class="modes">
				<span class="number">3</span>
				<div class="text">
				<h1>Скачать <u>пакет модификаций</u></h1>
				<p>Наши исследования позволяют сделать вывод о том, что сознание символизирует латентный онтогенез речи</p>
				</div>
				<a href="">Скачать мод-пак</a>
				</li>
				<li class="connect">
				<span class="number">4</span>
				<div class="text">
				<h1>Скачать <u>пакет модификаций</u></h1>
				<p>Запустите клиент CR-MP (с ярлыка или через Пуск). Введите никнейм в поле “Nick_Name” (Это будет имя вашего персонажа на сервере), Нажмите *оранжевая галочка* и вставьте наш IP-адрес: 194.61.44.20:8904 . Выберите сервер и нажмите *зелёная стрелочка*</p>
				</div>
				<a href="">Смотреть видео-урок</a>
				</li>
				</ul>
				<div class="bg">
				<img src="../img/start-background.png" alt="background">
				</div>
				</div>
				';
		}
		
		if($page == "BILLING")
		{
			$this->add_to_template('
				<section class="sa-text-area">
				<center>
				<div class="main-block">
				<div class="main-block-sub" style="width: 70%;">
				<p class="block-title">Пополнить счет</p>
				');
			$username = "";
			$form = true;
			$error = "";
			
			if(isset($_POST['srv']) && isset($_POST['username']) && isset($_POST['sum']))
			{
				$server_id = strval($_POST['srv']) - 1;
				$username = $_POST['username'];
				$sum = strval($_POST['sum']);
				
				//if($server_id >= 0 && $server_id < $this->server_count)
				if($server_id == 0)
				{
					if(strlen($username) > 0)
					{
						if(strlen($username) >= 3 && strlen($username) <= 20)
						{
							if($sum > 0 && $sum < 10000)
							{
								if(preg_match("#^[aA-zZ0-9\-_\]\[\$\=\(\)\@\.]+$#", $username))
								{
									$this->db_connect($server_id);
									
									$username = $this->db->real_escape_string($username);
									
									$response = $this->db->query("SELECT * FROM players WHERE Names = '".$username."'");
									
									if($response->num_rows)
									{
										$form = false;
										
										$this->add_to_template('
											<form class="billing-form" action="'.$this->server_data[$server_id]['unitpay_link'].'" method="post">
											<p>
											<b>Проверьте указанные данные</b><br/>
											сервер: GreenTech RolePlay #'.($server_id + 1).'<br/>
											никнейм: '.$username.'<br/>
											к оплате: '.$sum.' RUB<br/>
											будет зачислено: '.($sum * $this->donate_multiplier).' ДО '.(($this->donate_multiplier > 1) ? "<font color=\"red\">(акция \"x".$this->donate_multiplier." донат\")</font>" : "").'<br/>
											<br/>
											<b>Вы хотите перейти к оплате?</b>
											</p>
											<input type="hidden" name="desc" value="Покупка внутриигровой валюты на сервере GreenTech RolePlay #'.($server_id + 1).' для аккаунта '.$username.'" />
											<input type="hidden" name="account" value="'.$username.'" />
											<input type="hidden" name="sum" value="'.$sum.'" />
											<button type="submit" class="btn btn-primary">Оплатить</button>
											</form>
											');
									}
									else
									{
										$error = "игрок с таким никнеймом не существует";
									}
								}
								else
								{
									$error = "в никнейме недопустимые символы";
								}
							}
							else
							{
								$error = "допустимая сумма платежа: от 1 до 10.000 рублей";
							}
						}
						else
						{
							$error = "допустимая длина никнейма: 3-20 символов";
						}
					}
					else
					{
						$error = "введите никнейм";
					}
				}
				else
				{
					$error = "некорректный сервер";
				}
			}
			
			if($form)
			{
				$server_id = -1;
				$servers = "";
				
				if(isset($_POST['srv']))
				{
					$server_id = strval($_POST['srv']);
				}
				else
				{
					if(isset($_GET['srv']))
					{
						$server_id = strval($_GET['srv']);
					}
					else
					{
						if(isset($_SESSION['auth']) && $_SESSION['auth'] == "YES")
						{
							$server_id = strval($_SESSION['srv']) + 1;
						}
					}
				}
				
				//for($i = 0; $i < $this->server_count; $i++)
				for($i = 0; $i < 1; $i++)
				{
					$servers .= '<option value="'.($i + 1).'" '.($server_id - 1 == $i ? "selected" : "").'>GreenTech RolePlay #'.($i + 1).'</option>';
				}
				
				$this->add_to_template('<form class="billing-form" method="post">');
				
				if($error != "")
				{
					$this->add_to_template('<div class="alert alert-danger" role="alert"><b>Ошибка: </b>'.$error.'</div>');
				}
				else if($this->donate_multiplier > 1)
				{
					$this->add_to_template('<div class="alert alert-warning" role="alert"><b>Акция: </b>x'.$this->donate_multiplier.' донат</div>');
				}
				
				$this->add_to_template('
					<div class="form-group row">
					<label for="server-select">Сервер</label>
					<select class="form-control" name="srv" id="server-select">
					'.$servers.'
					</select>
					</div>
					');
				
				if($server_id == 0)
				{
					//$username = "";
					
					if(isset($_POST['username']))
					{
						$username = $_POST['username'];
					}
					else
					{
						if(isset($_GET['name']))
						{
							$username = $_GET['name'];
						}
						else
						{
							if(isset($_SESSION['auth']) && $_SESSION['auth'] == "YES")
							{
								$username = $_SESSION['name'];
							}
						}
					}
				}
				
				$this->add_to_template('
					<div class="form-group row">
					<label for="username-input">Никнейм</label>
					<input class="form-control" type="text" name="username" value="'.$username.'" placeholder="Введите никнейм" id="username-input">
					</div>
					');
				
				$sum = 50;
				
				if(isset($_POST['sum']))
				{
					$sum = strval($_POST['sum']);
				}
				else
				{
					if(isset($_GET['sum']))
					{
						$sum = strval($_GET['sum']);
					}
				}
				
				$this->add_to_template('
					<div class="form-group row">
					<label for="sum-input">Сумма</label>
					<input class="form-control" type="number" value="'.$sum.'" name="sum" id="sum-input">
					</div>
					');
				
				$this->add_to_template('
					<div class="form-group row">
					<label class="form-check-label">
					<input type="checkbox" class="form-check-input" required>
					Я прочитал и принял <a href="agreement.php">пользовательское соглашение</a>
					</label>
					</div>
					');
				
				$this->add_to_template('
					<button type="submit" class="btn btn-primary">Продолжить</button>
					');
				
				$this->add_to_template('</form>');
			}
			
			$this->add_to_template('
				</div>
				</div>
				</center>
				</section>
				');
		}
		
		if($page == "BILLING_SUCCESS")
		{
			$this->add_to_template('
				<section class="sa-text-area">
				<center>
				<div class="main-block">
				<div class="main-block-sub" style="width: 70%;">
				<p class="block-title">Пополнить счет</p>
				');

			$this->add_to_template('
				<div class="alert alert-success" role="alert">
				<h4 class="alert-heading">Успешно!</h4>
				<p>На указанный аккаунт была зачислена указанная сумма. Номер платежа UnitPay #'.$_GET['paymentId'].'.</p>
				</div>
				');
			
			$this->add_to_template('
				</div>
				</div>
				</center>
				</section>
				');
		}
		
		if($page == "BILLING_ERROR")
		{
			$this->add_to_template('
				<section class="sa-text-area">
				<center>
				<div class="main-block">
				<div class="main-block-sub" style="width: 70%;">
				<p class="block-title">Пополнить счет</p>
				');

			$this->add_to_template('
				<div class="alert alert-danger" role="alert">
				<h4 class="alert-heading">Упс!</h4>
				<p>При оплате произошла ошибка, обратитесь к администрации с указанными данными: '.$_GET['account'].':'.$_GET['paymentId'].'</p>
				</div>
				');
			
			$this->add_to_template('
				</div>
				</div>
				</center>
				</section>
				');
		}
		
		if($page == "AGREEMENT")
		{
			$this->add_to_template('
				<section class="sa-text-area">
				<center>
				<div class="main-block">
				<div class="main-block-sub" style="width: 70%;">
				<p class="block-title">Пользовательское соглашение</p>
				');

			$this->add_to_template('
				<div class="alert alert-success" role="alert" style="text-align: left;">
				<h4 class="alert-heading">Принятие условий</h4>
				<p>- Настоящие правила являются документом, обязательным к ознакомлению каждому пользователю, обратившегося к донат услугам.</p>
				<p>- Если пользователь не согласен с каким-либо положением настоящих правил или ощущает вероятность негативных для себя последствий, ему рекомендуется отказаться от использования донат услуг.</p>
				<p>- Факт обращения инициации пользователем процесса использования донат услуг считается подтверждением того, что он ознакомлен и согласен с каждым пунктом настоящих правил.</p>
				</div>
				<div class="alert alert-success" role="alert" style="text-align: left;">
				<h4 class="alert-heading">Общие положения</h4>
				<p>- Администрация проекта не несет никакой ответственности за ущерб морального либо материального характера, который может нанести прямо либо опосредованно предлагаемый игровой сервер, а также за любые неточности, ошибки, дефекты и сбои работы игрового сервера, вне зависимости от причин их вызвавших.</p>
				<p>- Инициируя процесс использования донат услуг, пользователь подтверждает свое согласие не возлагать ответственность, возможные убытки и ущерб, связанные с пользованием игровым сервером, на его владельцев и администрацию.</p>
				<p>- В случае нанесение пользователем ущерба проекту, администрация проекта имеют право на удаление аккаунта нарушителя.</p>
				<p>- В случае несоответствия какого-либо положения настоящих правил требованиям действующего законодательства, оно считается замененным близким по содержанию положением действующего законодательства. При этом все остальные положения настоящих правил сохраняют свою силу.</p>
				<p>- В случае просьбы вернуть средства, администрация имеет право на блокировку аккаунта.</p>
				<p>- Администрация может сделать возврат средств, если со дня платежа прошло не более 7 дней.</p>
				</div>
				<div class="alert alert-success" role="alert" style="text-align: left;">
				<h4 class="alert-heading">Исключение гарантий</h4>
				<p>
				<p>- Администрация проекта имеет право на блокирование или удаление аккаунта без предупреждения пользователя.</p>
				<p>- Администрация проекта имеет право на удаление предоставленных Вам донат-услуг и/или на запрет их использования.</p>
				</div>
				');
			
			$this->add_to_template('
				</div>
				</div>
				</center>
				</section>
				');
		}
		
		if($page == "UCP")
		{
			$this->add_to_template('
				<section class="sa-text-area">
				<center>
				<div class="main-block">
				');
			
			if(isset($_SESSION['auth']) && $_SESSION['auth'] == "YES")
			{
				$this->add_to_template('<div class="main-block-sub-ucp">');
				$this->add_to_template('<p class="block-title" style="margin-bottom: 10px;">Личный кабинет</p>');
				
				if(isset($_GET['a']))
				{
					if($_GET['a'] == "admin" && isset($_GET['p']))
					{
						$server_id = $_SESSION['srv'];
						
						$this->db_connect($server_id);
						
						$response = $this->db->query("SELECT * FROM players WHERE Names = '".$_SESSION['name']."'");
						
						if($response->num_rows)
						{
							$data = $response->fetch_assoc();
							
							if($data['Admin'] > 0)
							{
								$this->add_to_template('<h4>Панель администратора (сервер №'.($server_id + 1).')</h4>');
								
								$this->add_to_template('<div class="ucp-block-left" style="padding: 10px;">');

								$this->add_to_template('
									<div class="ucp-menu-main">
									<form method="post" action="ucp.php" class="ucp-menu-btn-exit"><input style="margin-bottom: 2px;" type="submit" name="page_main" class="btn btn-danger btn-sm btn-block" value="Назад в UCP"/></form>
									</div>
									');
								
								$this->add_to_template('<div class="ucp-menu-pages">');
								
								$this->add_to_template('
									<a href="ucp.php?a=admin&p=main" style="margin-bottom: 2px;" class="btn btn-primary btn-sm btn-block">Главное</a>
									<a href="ucp.php?a=admin&p=ucplogs" style="margin-bottom: 2px;" class="btn btn-primary btn-sm btn-block">История UCP</a>
									<a href="ucp.php?a=admin&p=players" style="margin-bottom: 2px;" class="btn btn-primary btn-sm btn-block">Игроки</a>
									');
								
								$this->add_to_template('</div>');
								
								$this->add_to_template('<br/>');
								$this->add_to_template('</div>');

								$this->add_to_template('<div class="ucp-block-right" style="padding: 10px;">');

								switch($_GET['p'])
								{
									case 'main':
									{
										$this->add_to_template('<h5><b>Главное</b></h5>');

										$this->add_to_template('
											<table class="table" width="100%" style="border-left: 1px solid #eeeeee; font-size: 10pt;">
											<tr><td><b>Сервер</b></td><td style="text-align: right;">GreenTech RolePlay #'.($server_id + 1).'</td></tr>
											<tr><td><b>Аккаунт</b></td><td style="text-align: right;">#'.$data['ID'].'</td></tr>
											<tr><td><b>Никнейм</b></td><td style="text-align: right;">'.$data['Names'].'</td></tr>
											<tr><td><b>Уровень администратора</b></td><td style="text-align: right;">'.$data['Admin'].'</td></tr>
											</table>
											');

										break;
									}
									case 'ucplogs':
									{
										$this->add_to_template('<h5><b>История UCP</b></h5>');
										
										$this->add_to_template('<table class="table" width="100%" style="font-size: 10pt;">');
										$this->add_to_template('<tr><td><b>ip</b></td><td style="text-align: center;"><b>никнейм</b></td><td style="text-align: center;"><b>дата</b></td><td style="text-align: right;"><b>действие</b></td></tr>');
										
										$start_id = 0;
										
										if(isset($_GET['s']))
										{
											$start_id = strval($_GET['s']);
										}
										
										$response = $this->db->query('SELECT * FROM `ucp_log` ORDER BY `id` DESC LIMIT '.($start_id * 30).',30');
										
										if($response)
										{
											for($i = 0; $i < $response->num_rows; $i++)
											{
												$log_data = $response->fetch_assoc();
												
												$action_name = "неизвестно";
												$action_data = json_decode($log_data['params']);
												
												for($a = 0; $a < sizeof($this->ucp_log_action_names); $a++)
												{
													if($log_data['action'] == $this->ucp_log_action_names[$a][0])
													{
														$action_name = $this->ucp_log_action_names[$a][1];
													}
												}
												
												$this->add_to_template('<tr><td>'.$log_data['ip'].'</td><td style="text-align: center;">'.$action_data[2].'</td><td style="text-align: center;">'.date("d.m.Y H:m:s", $log_data['ts']).'</td><td style="text-align: right;">'.$action_name.' <a href="ucp.php?a=admin&p=ucplogdata&i='.$log_data['id'].'" class="btn-primary btn-sm">подробнее</a></td></tr>');
											}
										}
										
										$this->add_to_template('</table>');
										
										$this->add_to_template('<table style="border: none;" width="100%">');
										$this->add_to_template('<tr>');
										
										if($start_id > 0)
										{
											$this->add_to_template('<td style="padding: 5px; text-align: left;"><b><a class="btn btn-primary btn-sm" href="ucp.php?a=admin&p=ucplogs&s='.($start_id - 1).'">назад</a></b></td>');
										}
										
										$this->add_to_template('<td style="padding: 5px; text-align: right;"><b><a class="btn btn-primary btn-sm" href="ucp.php?a=admin&p=ucplogs&s='.($start_id + 1).'">вперед</a></b></td>');
										
										$this->add_to_template('</tr>');
										$this->add_to_template('</table>');

										break;
									}
									case 'ucplogdata':
									{
										if(isset($_GET['i']))
										{
											$this->add_to_template('<h5><b>История UCP</b></h5>');

											$response = $this->db->query('SELECT * FROM `ucp_log` WHERE `id` = \''.strval($_GET['i']).'\'');
											
											if($response)
											{
												$log_data = $response->fetch_assoc();
												
												$action_name = "неизвестно";
												$action_data = json_decode($log_data['params']);
												
												for($a = 0; $a < sizeof($this->ucp_log_action_names); $a++)
												{
													if($log_data['action'] == $this->ucp_log_action_names[$a][0])
													{
														$action_name = $this->ucp_log_action_names[$a][1];
													}
												}
												
												$this->add_to_template('
													<table class="table" width="100%" style="border-left: 1px solid #eeeeee; font-size: 10pt;">
													<tr><td><a href="ucp.php?a=admin&p=ucplogs" class="btn-primary btn-sm">назад</a></td><td style="text-align: right;"></td></tr>
													<tr><td><b>ID</b></td><td style="text-align: right;">'.$log_data['id'].'</td></tr>
													<tr><td><b>Аккаунт</b></td><td style="text-align: right;">'.$action_data[2].'</td></tr>
													<tr><td><b>Действие</b></td><td style="text-align: right;">'.$action_name.'</td></tr>
													</table>
													');
											}
										}
										
										break;
									}
									case 'players':
									{
										$this->add_to_template('<h5><b>Игроки</b></h5>');

										$this->add_to_template('<p>Данный раздел предназначен для управления игроками, находящиеся на сервере. Получение списка игроков может занять до 30 секунд</p>');
										$this->add_to_template('<p><a class="btn btn-primary btn-sm" href="ucp.php?a=admin&p=plist">Получить список игроков</a></p>');
										
										break;
									}
									case 'plist':
									{
										$this->add_to_template('<h5><b>Список игроков</b></h5>');

										$players = $this->rcon($server_id, "players");
										
										if($players === false)
										{
											$this->add_to_template('<div class="alert alert-danger" role="alert"><strong>Ошибка: </strong>не удалось получить список игроков, возможно сервер недоступен</div>');
										}
										
										$this->add_to_template('<table class="table" width="100%" style="font-size: 10pt;">');
										$this->add_to_template('<tr><td><b>ID</b></td><td style="text-align: center;"><b>никнейм</b></td><td style="text-align: center;"><b>IP</b></td><td style="text-align: right;"><b>действия</b></td></tr>');
										
										for($i = 0; $i < count($players); $i++)
										{
											$players[$i] = str_ireplace("\n", "", $players[$i]);
											$players[$i] = str_ireplace("\r", "", $players[$i]);
											$players[$i] = str_ireplace("\t", " ", $players[$i]);
											$players[$i] = str_ireplace("  ", " ", $players[$i]);
											$players[$i] = str_ireplace("   ", " ", $players[$i]);
											$players[$i] = str_ireplace("    ", " ", $players[$i]);
										}
										
										for($i = 1; $i < count($players); $i++)
										{
											$player_data = explode(" ", $players[$i]);
											
											$this->add_to_template('<tr><td>'.$player_data[0].'</td><td style="text-align: center;">'.$player_data[1].'</td><td style="text-align: center;">'.$player_data[3].'</td><td style="text-align: right;"><a href="ucp.php?a=admin&p=pkick&i='.$player_data[0].'" class="btn-primary btn-sm">кик</a> <a href="ucp.php?a=admin&p=pban&i='.$player_data[0].'" class="btn-primary btn-sm">бан</a> <a href="ucp.php?a=admin&p=pinfo&i='.$player_data[1].'" class="btn-primary btn-sm">инфо</a></td></tr>');
										}
										
										$this->add_to_template('</table>');
										
										break;
									}
									case 'pkick':
									{
										$result = $this->rcon($server_id, "kick ".strval($_GET['i']));
										
										$this->add_to_template('<div class="alert alert-info" role="alert"><strong>Результат: </strong>'.$result[0].'</div>');
										
										break;
									}
								}
								
								$this->add_to_template('</div>');
							}
						}
					}
				}
				else
				{
					$this->add_to_template('<h4>'.$_SESSION['name'].' (сервер №'.($_SESSION['srv'] + 1).')</h4>');
					
					$this->db_connect($_SESSION['srv']);
					
					$response = $this->db->query("SELECT * FROM players WHERE Names = '".$_SESSION['name']."'");
					
					if($response->num_rows)
					{
						$server_id = $_SESSION['srv'];
						$username = $_SESSION['name'];
						
						$data = $response->fetch_assoc();

						if($data['Bank'] < 0)
						{
							$data['Bank'] = 0;
						}
						
						if(isset($_POST['logout']))
						{
							unset($_SESSION['auth']);
							unset($_SESSION['name']);
							unset($_SESSION['srv']);
							
							$this->add_header('<meta http-equiv="refresh" content="0;URL=ucp.php">');
							
							$this->wlog("logout", array($data['ID'], $server_id, $data['Names']));
						}
						
						if(isset($_POST['change_email_final']) && isset($_POST['new_email']))
						{
							$row = $response->fetch_assoc();
							
							$_POST['new_email'] = trim($_POST['new_email']);
							
							if($_POST['new_email'] == $data['Email'])
							{
								$_POST['change_email'] = 1;
								
								$this->add_to_template('
									<div class="alert alert-danger" role="alert">
									<b>Ошибка: </b>указанный e-mail совпадает с текущим
									</div>
									');
							}
							else
							{
								$_SESSION['ce_new_email'] = $_POST['new_email'];
								$_SESSION['ce_key'] = $this->generate_key(24);
								
								$link = "http://greentech-rp.ru/ucp.php?ce=".$_SESSION['ce_key'];
								
								$message = "Здравствуйте!\n\r\n\r";
								$message .= "Вы запросили изменение e-mail к аккаунту ".$_SESSION['name']." на сервере GreenTech RolePlay #".($server_id + 1).", перейдите по ".$link." для дальнейших действий.\n\r";
								$message .= "Если вдруг вы не запрашивали это, проигнорируйте это письмо.\n\r\n\r";
								$message .= "С Уважением, администрация GreenTech RolePlay.";
								
								mail($_POST['new_email'], "Изменение email", $message, "From: admin@greentech-rp.ru");
								
								$this->add_to_template('
									<div class="alert alert-info" role="alert">
									<b>Отлично! </b>На указанный e-mail было выслано письмо с дальнейшими указаниями
									</div>
									');
							}
						}

						if(isset($_GET['ce']))
						{
							if(isset($_SESSION['ce_new_email']) && isset($_SESSION['ce_key']))
							{
								if($_SESSION['ce_key'] == $_GET['ce'])
								{
									$this->wlog("email_changed", array($data['ID'], $server_id, $data['Names'], $_SESSION['ce_key'], $_SESSION['ce_new_email'], $data['Email']));
									
									$data['Email'] = $_SESSION['ce_new_email'];
									
									$this->db->query("UPDATE players SET Email = '".$_SESSION['ce_new_email']."' WHERE Names = '".$_SESSION['name']."'");
									
									$this->add_to_template('
										<div class="alert alert-success" role="alert">
										<b>Успешно! </b>Электронный адрес вашего аккаунта изменен на '.$_SESSION['ce_new_email'].' 
										</div>
										');
									
									unset($_SESSION['ce_new_email']);
									unset($_SESSION['ce_key']);
								}
							}
						}
						
						if(isset($_POST['change_password_final']) && isset($_POST['old_password']) && isset($_POST['new_password']) && isset($_POST['new_password_sub']))
						{
							$_POST['old_password'] = trim($_POST['old_password']);
							$_POST['new_password'] = trim($_POST['new_password']);
							$_POST['new_password_sub'] = trim($_POST['new_password_sub']);
							
							if($_POST['new_password_sub'] == $_POST['new_password'])
							{
								if($_POST['old_password'] == $_POST['new_password'])
								{
									$_POST['change_password'] = 1;
									
									$this->add_to_template('
										<div class="alert alert-danger" role="alert">
										<b>Ошибка: </b>указанные пароли совпадают
										</div>
										');
								}
								else
								{
									if(strlen($_POST['new_password']) < 6 || strlen($_POST['new_password']) > 32)
									{
										$_POST['change_password'] = 1;

										$this->add_to_template('
											<div class="alert alert-danger" role="alert">
											<b>Ошибка: </b>допустимая длина нового пароля от 6 до 32 символов
											</div>
											');
									}
									else
									{
										$old_pass_hash = $this->get_password_hash($_POST['old_password'], $data['salt']);
										$new_pass_hash = $this->get_password_hash($_POST['new_password'], $data['salt']);
										
										if($old_pass_hash == $data['Pass'])
										{
											$data['Pass'] = $new_pass_hash;
											
											$this->db->query("UPDATE players SET Pass = '".$new_pass_hash."' WHERE Names = '".$_SESSION['name']."'");
											
											$this->add_to_template('
												<div class="alert alert-success" role="alert">
												<b>Успешно! </b>Пароль вашего аккаунта изменен
												</div>
												');
											
											unset($_SESSION['auth']);
											unset($_SESSION['name']);
											unset($_SESSION['srv']);
											
											$this->add_header('<meta http-equiv="refresh" content="2;URL=ucp.php">');
											
											$this->wlog("password_changed", array($data['ID'], $server_id, $data['Names']));
										}
										else
										{
											$_POST['change_password'] = 1;

											$this->add_to_template('
												<div class="alert alert-danger" role="alert">
												<b>Ошибка: </b>текущий пароль не совпадает
												</div>
												');
										}
									}
								}
							}
							else
							{
								$_POST['change_password'] = 1;

								$this->add_to_template('
									<div class="alert alert-danger" role="alert">
									<b>Ошибка: </b>новые пароли не совпадают
									</div>
									');
							}
						}
						
						if(isset($_GET['uninvite']))
						{
							if($data['Leader'] > 0)
							{
								$response = $this->db->query("SELECT * FROM players WHERE ID = '".strval($_GET['uninvite'])."'");
								
								if($response->num_rows)
								{
									$pdata = $response->fetch_assoc();
									
									if($pdata['ID'] == $data['ID'])
									{
										$_POST['page_leader'] = 1;

										$this->add_to_template('
											<div class="alert alert-danger" role="alert">
											<b>Ошибка: </b>вы не можете исключить себя
											</div>
											');
									}
									else if($pdata['Member'] != $data['Leader'])
									{
										$_POST['page_leader'] = 1;

										$this->add_to_template('
											<div class="alert alert-danger" role="alert">
											<b>Ошибка: </b>query malformed
											</div>
											');
									}
									else if($pdata['Leader'] == $data['Leader'])
									{
										$_POST['page_leader'] = 1;

										$this->add_to_template('
											<div class="alert alert-danger" role="alert">
											<b>Ошибка: </b>вы не можете исключить лидера
											</div>
											');
									}
								}
								else
								{
									$_POST['page_leader'] = 1;

									$this->add_to_template('
										<div class="alert alert-danger" role="alert">
										<b>Ошибка: </b>query malformed
										</div>
										');
								}
							}
						}
						
						if(isset($_GET['spawn']) && $_GET['spawn'] == "reset")
						{
							if($data['Spawn'] < 5)
							{
								$data['Spawn'] = 2;

								$this->db->query("UPDATE players SET Spawn = '2' WHERE ID = '".$data['ID']."'");

								$this->add_to_template('
									<div class="alert alert-success" role="alert">
									<b>Успешно! </b>Вы сбросили своё место появления
									</div>
									');
							}
						}
						
						if(isset($_POST['uninvite_final']) && isset($_POST['uninvite_id']))
						{
							if($data['Leader'] > 0)
							{
								$user_id = strval($_POST['uninvite_id']);
								
								$response = $this->db->query("SELECT * FROM players WHERE ID = '".$user_id."'");
								
								if($response->num_rows)
								{
									$pdata = $response->fetch_assoc();
									
									if($pdata['ID'] != $data['ID'])
									{
										if($pdata['Member'] == $data['Leader'])
										{
											if($pdata['Leader'] != $data['Leader'])
											{
												$this->db->query("UPDATE players SET Member = '0', Rank = '0', Spawn = '2' WHERE ID = '".$user_id."'");
												
												$this->add_to_template('
													<div class="alert alert-success" role="alert">
													<b>Успешно! </b>Вы исключили игрока '.$pdata['Names'].' из своей фракции
													</div>
													');
												
												$this->wlog("fraction_uninvate", array($data['ID'], $server_id, $data['Names'], $pdata['ID'], $pdata['Names']));
											}
										}
									}
								}
							}
						}

						if($data['BanTime'] > 0)
						{
							$text = "Срок действия блокировки истек, зайдите на сервер.";
							
							if($data['BanTime'] > time())
							{
								$time = $data['BanTime'] - time();
								
								$hour = floor($time / 60 / 60);
								$minute = floor(($time - ($hour * 60 * 60)) / 60);
								$seconds = ($time - ($hour * 60 * 60)) - ($minute * 60);
								
								$text = "До разблокировки осталось: ".sprintf("%02d:%02d:%02d", $hour, $minute, $seconds).".";
							}
							
							$this->add_to_template('
								<div class="alert alert-warning" role="alert">
								<b>Предупреждение: </b>ваш аккаунт заблокирован администратором '.$data['BanName'].', это означает, что вы не сможете зайти на сервер в ближайшее время. '.$text.'
								</div>
								');
						}
						
						if($server_id == 1)
						{
							if($data['transfer_complete'] == 2)
							{
								$this->add_to_template('
									<div class="alert alert-info" role="alert">
									<b>Напоминание:</b><br/>
									По некоторым причинам второй сервер GreenTech RolePlay скоро будет закрыт.<br/>
									Ваш никнейм на первом сервере: <b>'.$data['transfer_nickname'].'</b><br/>
									</div>
									');
							}
							else if($data['transfer_complete'] == 1)
							{
								$this->add_to_template('
									<div class="alert alert-info" role="alert">
									<b>Внимание!</b><br/>
									По некоторым причинам второй сервер GreenTech RolePlay скоро будет закрыт.<br/>
									Вы не завершили перенос аккаунта на первый сервер.<br/>
									<br/>
									<a class="btn btn-primary btn-sm" href="/transfer.php">Завершить перенос</a>
									</div>
									');
							}
							else
							{
								$this->add_to_template('
									<div class="alert alert-info" role="alert">
									<b>Внимание!</b><br/>
									По некоторым причинам второй сервер GreenTech RolePlay скоро будет закрыт.<br/>
									Мы предлагаем перенести Ваш аккаунт на первый сервер.<br/>
									<br/>
									<a class="btn btn-primary btn-sm" href="/transfer.php">Перенести аккаунт</a>
									</div>
									');
							}
						}

						$this->add_to_template('<div class="ucp-block-left" style="padding: 10px;">');
						
						$this->add_to_template('
							<div class="ucp-menu-main">
							<form method="post" action="ucp.php" class="ucp-menu-btn-exit"><input type="submit" name="logout" class="btn btn-danger btn-sm btn-block" value="Выйти"/></form>
							<form method="post" action="ucp.php" class="ucp-menu-btn-sub-left"><input type="submit" name="change_email" class="btn btn-primary btn-sm btn-block" value="Сменить e-mail"/></form>
							<form method="post" action="ucp.php" class="ucp-menu-btn-sub-right"><input type="submit" name="change_password" class="btn btn-primary btn-sm btn-block" value="Сменить пароль"/></form>
							</div>
							');
						
						$this->add_to_template('<div class="ucp-menu-pages">');
						
						$this->add_to_template('
							<form method="post" action="ucp.php"><input style="margin-bottom: 2px;" type="submit" name="page_main" class="btn btn-success btn-sm btn-block" value="Главное"/></form>
							<form method="post" action="ucp.php"><input style="margin-bottom: 2px;" type="submit" name="page_property" class="btn btn-success btn-sm btn-block" value="Имущество"/></form>
							<form method="post" action="ucp.php"><input style="margin-bottom: 2px;" type="submit" name="page_payments" class="btn btn-success btn-sm btn-block" value="Платежи"/></form>
							<form method="post" action="ucp.php"><input style="margin-bottom: 2px;" type="submit" name="page_leaders" class="btn btn-success btn-sm btn-block" value="Лидеры"/></form>
							');
						
						if($data['Leader'] > 0)
						{
							$this->add_to_template('<form method="post" action="ucp.php"><input type="submit" name="page_leader" class="btn btn-success btn-sm btn-block" value="Фракция"/></form>');
						}

						$this->add_to_template('</div>');

						/*if($data['Admin'] > 0)
						{
							$this->add_to_template('<div style="margin-top: 10px;"><a href="ucp?a=admin&p=main">Админ-панель</a></div>');
						}*/
						
						$this->add_to_template('</div>');

						$this->add_to_template('<div class="ucp-block-right" style="padding: 10px;">');

						if(isset($_POST['change_email']))
						{
							$this->add_to_template('
								<h5><b>Сменить e-mail</b></h5>
								<form action="ucp.php" method="post" style="width: 70%">
								<input style="margin-bottom: 5px;" type="email" name="new_email" class="form-control" placeholder="Введите новый e-mail" required/>
								<input type="submit" name="change_email_final" class="btn btn-primary btn-sm btn-block" value="Далее"/>
								</form>
								');
							
							$this->wlog("pageview_change_email", array($data['ID'], $server_id, $data['Names']));
						}
						else if(isset($_POST['change_password']))
						{
							$this->add_to_template('
								<h5><b>Сменить пароль</b></h5>
								<form action="ucp.php" method="post" style="width: 70%">
								<input style="margin-bottom: 5px;" type="password" name="old_password" class="form-control" placeholder="Введите текущий пароль" required/>
								<input style="margin-bottom: 5px;" type="password" name="new_password" class="form-control" placeholder="Введите новый пароль" required/>
								<input style="margin-bottom: 5px;" type="password" name="new_password_sub" class="form-control" placeholder="Подтвердите новый пароль" required/>
								<input type="submit" name="change_password_final" class="btn btn-primary btn-sm btn-block" value="Далее"/>
								</form>
								');
							
							$this->wlog("pageview_change_password", array($data['ID'], $server_id, $data['Names']));
						}
						else if(isset($_POST['page_property']))
						{
							$this->add_to_template('<h5><b>Имущество</b></h5>');
							$this->add_to_template('<table class="table" width="100%" style="font-size: 10pt;">');
							
							$response = $this->db->query("SELECT hID,Street FROM houses WHERE hOwner = '".$_SESSION['name']."'");
							
							if($response->num_rows)
							{
								for($i = 0; $i < $response->num_rows; $i++)
								{
									$house_data = $response->fetch_assoc();
									
									$this->add_to_template('<tr><td><b>Дом #'.$house_data['hID'].'</b></td><td style="text-align: right;">'.iconv("CP1251", "UTF-8", $house_data['Street']).'</td></tr>');
								}
							}
							else
							{
								$this->add_to_template('<tr><td><b>дома отсутствуют</b></td><td style="text-align: right;"></td></tr>');
							}
							
							$response = $this->db->query("SELECT ID,Model,2Owner FROM cars WHERE Owner = '".$_SESSION['name']."'");
							
							if($response->num_rows)
							{
								for($i = 0; $i < $response->num_rows; $i++)
								{
									$car_data = $response->fetch_assoc();
									
									$this->add_to_template('<tr><td><b>Машина #'.$car_data['ID'].'</b></td><td style="text-align: right;">'.$car_data['Model'].', '.$car_data['2Owner'].'</td></tr>');
								}
							}
							else
							{
								$this->add_to_template('<tr><td><b>машины отсутствуют</b></td><td style="text-align: right;"></td></tr>');
							}

							$this->add_to_template('</table>');
							
							$this->wlog("pageview_property", array($data['ID'], $server_id, $data['Names']));
						}
						else if(isset($_POST['page_payments']))
						{
							$this->add_to_template('<h5><b>Платежи</b></h5>');
							$this->add_to_template('<table class="table" width="100%" style="font-size: 10pt;">');
							
							$response = $this->db->query("SELECT * FROM unitpay_payments WHERE `account` = '".$_SESSION['name']."' AND `status` = '1' ORDER BY `id` DESC");
							
							if($response->num_rows)
							{
								$this->add_to_template('<tr><td><b>общий номер (unitpayid)</b></td><td><b>зачислено на счет</b></td><td><b>дата оплаты</b></td><td style="text-align: right;"><b>сумма</b></td></tr>');
								
								$common_sum = 0;

								for($i = 0; $i < $response->num_rows; $i++)
								{
									$payment_data = $response->fetch_assoc();
									
									$common_sum += $payment_data['sum'];

									$this->add_to_template('<tr><td>Платеж #'.$payment_data['id'].' ('.$payment_data['unitpayId'].')</td><td>'.$payment_data['itemsCount'].' донат-очков</td><td>'.$payment_data['dateComplete'].'</td><td style="text-align: right;">'.$payment_data['sum'].' RUB</td></tr>');
								}
								
								$this->add_to_template('<tr><td><b>Всего</b></td><td></td><td></td><td style="text-align: right;"><b>'.$common_sum.' RUB</b></td></tr>');
							}
							else
							{
								$this->add_to_template('<tr><td><b>Вы ещё не пополняли свой баланс</b></td><td></td><td></td><td style="text-align: right;"><a href="billing.php" class="btn-primary btn-sm">пополнить</a></td></tr>');
							}

							$this->add_to_template('</table>');
							
							$this->wlog("pageview_payments", array($data['ID'], $server_id, $data['Names']));
						}
						else if(isset($_POST['page_leader']))
						{
							if($data['Leader'] > 0)
							{
								$fraction_id = $data['Leader'];
								
								$this->add_to_template('<h5><b>Фракция "'.$this->fraction_name[$fraction_id].'"</b></h5>');
								
								$response = $this->db->query("SELECT * FROM players WHERE Member = '".$fraction_id."' ORDER BY Rank DESC");
								
								$this->add_to_template('<table class="table" width="100%" style="font-size: 9pt;">');
								$this->add_to_template('<tr><td><b>онлайн ли, имя</b></td><td><b>последний вход</b></td><td><b>ранг [подразделение]</b></td><td style="text-align: right;"><b>действия</b></td></tr>');
								
								if($response->num_rows)
								{
									for($i = 0; $i < $response->num_rows; $i++)
									{
										$rang = "-";
										$online = "offline";
										
										$member_data = $response->fetch_assoc();
										
										if(count($this->rang_name[$fraction_id]))
										{
											$rang = $this->rang_name[$fraction_id][$member_data['Rank']];
										}
										
										if(count($this->sub_rang_name[$fraction_id]))
										{
											$rang .= " [".$this->sub_rang_name[$fraction_id][$member_data['DopRank']]."]";
										}
										
										if($member_data['Online'])
										{
											$online = "<font color=\"green\">online</font>";
										}
										
										$uninvite_btn = '<a href="ucp.php?uninvite='.$member_data['ID'].'" class="btn-danger btn-sm" />исключить</a>';
										
										if($member_data['Leader'] == $data['Leader'])
										{
											$uninvite_btn = 'невозможно ';
										}
										
										if($member_data['ID'] == $data['ID'])
										{
											$uninvite_btn = 'невозможно ';
										}
										
										$this->add_to_template('<tr><td><img src="images/ucp_'.($member_data['Online'] ? "online" : "offline").'.png" /> '.$member_data['Names'].'</td><td>'.$member_data['DataTimes'].'</td><td>'.$rang.'</td></td><td style="text-align: right;">'.$uninvite_btn.'</td></tr>');
									}
								}
								else
								{
									$this->add_to_template('<tr><td><b>в вашей фракции нет игроков</b></td><td></td><td></td><td style="text-align: right;"></td></tr>');
								}
								
								$this->add_to_template('</table>');
								
								$this->wlog("pageview_leader", array($data['ID'], $server_id, $data['Names']));
							}
						}
						else if(isset($_POST['page_leaders']))
						{
							$this->add_to_template('<h5><b>Лидеры</b></h5>');
							
							$response = $this->db->query("SELECT * FROM players WHERE Leader > 0 ORDER BY Leader");
							
							$this->add_to_template('<table class="table" width="100%" style="font-size: 9pt;">');
							$this->add_to_template('<tr><td><b>онлайн ли, имя</b></td><td style="text-align: center;"><b>последний вход</b></td><td style="text-align: center;"><b>фракция</b><td style="text-align: right;"><b>ранг [подразделение]</b></td></tr>');
							
							if($response->num_rows)
							{
								for($i = 0; $i < $response->num_rows; $i++)
								{
									$rang = "-";
									$online = "offline";
									
									$member_data = $response->fetch_assoc();
									$fraction_id = $member_data['Leader'];

									if(count($this->rang_name[$fraction_id]))
									{
										$rang = $this->rang_name[$fraction_id][$member_data['Rank']];
									}
									
									if(count($this->sub_rang_name[$fraction_id]))
									{
										$rang .= " [".$this->sub_rang_name[$fraction_id][$member_data['DopRank']]."]";
									}
									
									if($member_data['Online'])
									{
										$online = "<font color=\"green\">online</font>";
									}

									$this->add_to_template('<tr><td><img src="images/ucp_'.($member_data['Online'] ? "online" : "offline").'.png" /> '.$member_data['Names'].'</td><td style="text-align: center;">'.$member_data['DataTimes'].'</td><td style="text-align: center;">'.$this->fraction_name[$fraction_id].'</td><td style="text-align: right;">'.$rang.'</td></tr>');
								}
							}
							
							$this->add_to_template('</table>');
							
							$this->wlog("pageview_leaders", array($data['ID'], $server_id, $data['Names']));
						}
						else if(isset($_GET['uninvite']))
						{
							if($data['Leader'] > 0)
							{
								$response = $this->db->query("SELECT * FROM players WHERE ID = '".strval($_GET['uninvite'])."'");
								
								if($response->num_rows)
								{
									$pdata = $response->fetch_assoc();
									
									if($pdata['ID'] != $data['ID'])
									{
										if($pdata['Member'] == $data['Leader'])
										{
											$this->add_to_template('<h5><b>Фракция "'.$this->fraction_name[$data['Leader']].'"</b></h5>');
											$this->add_to_template('
												<form method="post" action="ucp.php" style="width: 70%">
												<p>Вы действительно хотите исключить игрока '.$pdata['Names'].' из своей фракции?</p>
												<input type="hidden" name="uninvite_id" value="'.$pdata['ID'].'"/>
												<input type="hidden" name="page_leader" value="1"/>
												<input type="submit" name="uninvite_final" class="btn btn-danger btn-sm" value="Да"/>
												<input type="submit" name="uninvite_final_no_accept" class="btn btn-primary btn-sm" value="Нет"/>
												</form>
												');
										}
									}
								}
							}
						}
						else
						{
							$this->wlog("pageview_main", array($data['ID'], $server_id, $data['Names']));
							
							$this->add_to_template('<h5><b>Главное</b></h5>');
							
							$rang = "-";
							$fraction_id = 0;
							
							if($data['Member'] > 0)
							{
								$fraction_id = $data['Member'];
							}
							
							if($data['Leader'] > 0)
							{
								$fraction_id = $data['Leader'];
							}
							
							if($fraction_id > 0)
							{
								if(count($this->rang_name[$fraction_id]))
								{
									$rang = $this->rang_name[$fraction_id][$data['Rank']];
								}
								
								if(count($this->sub_rang_name[$fraction_id]))
								{
									$rang .= " [".$this->sub_rang_name[$fraction_id][$data['DopRank']]."]";
								}
								
								$rang .= " (".$data['Rank'].":".$data['DopRank'].")";
							}
							
							$this->add_to_template('
								<div id="ucp_main_left" class="ucp-main-left">
								<table class="table" width="100%" style="border-left: 1px solid #eeeeee; font-size: 10pt;">
								<tr><td><b>Сервер</b></td><td style="text-align: right;">GreenTech RolePlay #'.($server_id + 1).'</td></tr>
								<tr><td><b>Аккаунт</b></td><td style="text-align: right;">#'.$data['ID'].'</td></tr>
								<tr><td><b>Имя</b></td><td style="text-align: right;">'.$username.'</td></tr>
								<tr><td><b>E-mail</b></td><td style="text-align: right;">'.$data['Email'].'</td></tr>
								<tr><td><b>Уровень</b></td><td style="text-align: right;">'.$data['Level'].'</td></tr>
								<tr><td><b>Возраст</b></td><td style="text-align: right;">'.$data['Age'].'</td></tr>
								<tr><td><b>Пол</b></td><td style="text-align: right;">'.($data['Sex'] == 2 ? "женский" : "мужской").'</td></tr>
								<tr><td><b>Номер телефона</b></td><td style="text-align: right;">'.$data['PhoneNumber'].'</td></tr>
								<tr><td><b>Баланс на телефоне</b></td><td style="text-align: right;">'.$data['PhoneBank'].' RUB</td></tr>
								<tr><td><b>Деньги (наличные)</b></td><td style="text-align: right;">'.$data['Money'].' RUB</td></tr>
								<tr><td><b>Деньги (в банке)</b></td><td style="text-align: right;">'.$data['Bank'].' RUB</td></tr>
								<tr><td><b>Место появления</b></td><td style="text-align: right;">#'.$data['Spawn'].' <a href="ucp.php?spawn=reset" class="btn-primary btn-sm">сбросить</a></td></tr>
								<tr><td><b>Донат-очки</b></td><td style="text-align: right;">'.$data['Donate'].' RUB <a href="billing.php" class="btn-primary btn-sm">пополнить</a></td></tr>
								<tr><td><b>Фракция</b></td><td style="text-align: right;">'.$this->fraction_name[$fraction_id].'</td></tr>
								<tr><td><b>Ранг</b></td><td style="text-align: right;">'.$rang.'</td></tr>
								</table>
								</div>
								');
							
							$this->add_to_template('<div id="ucp_main_right" class="ucp-main-right">');
							$this->add_to_template('<table class="table table-bordered" width="100%" style="font-size: 10pt;">');
							$this->add_to_template('<tr><td>');
							
							if(file_exists("images/skins/pack/skin".$data['Char'].".png"))
							{
								$this->add_to_template('<center>');
								$this->add_to_template('<button id="bskinsel0" style="width: 46%; margin-right: 5px;" type="button" class="btn btn-primary btn-sm">Обычный</button>');
								$this->add_to_template('<button id="bskinsel1" style="width: 46%;" type="button" class="btn btn-primary btn-sm">Мод-пак</button>');
								$this->add_to_template('</center>');
								$this->add_to_template('<img class="ucp-skin" id="skin_default" src="images/skins/default/skin'.$data['Char'].'.png" style="display: none;" />');
								$this->add_to_template('<img class="ucp-skin" id="skin_pack" src="images/skins/pack/skin'.$data['Char'].'.png" style="display: block;" />');
							}
							else
							{
								$this->add_to_template('<img class="ucp-skin" src="images/skins/default/skin'.$data['Char'].'.png" style="display: block;" />');
							}
							
							$this->add_to_template('</td></tr>');
							$this->add_to_template('</table>');
							$this->add_to_template('</div>');
						}
						
						$this->add_to_template('</div>');
					}
					else
					{
						unset($_SESSION['auth']);
						unset($_SESSION['name']);
						unset($_SESSION['srv']);

						$this->add_to_template('<div class="alert alert-danger" role="alert"><b>Ошибка: </b>авторизованный раннее аккаунт не найден в базе данных, возможно он был удален. Обновите страницу, чтобы перейти к авторизации</div>');
					}
				}
				
				$this->add_to_template('</div>');
			}
			else
			{
				$this->add_to_template('<div class="main-block-sub-login">');
				$this->add_to_template('<p class="block-title" style="margin-bottom: 10px;">Личный кабинет</p>');

				$error = "";
				$servers = "";
				
				for($i = 0; $i < $this->server_count; $i++)
				{
					$servers .= '<option value="'.($i + 1).'">GreenTech RolePlay #'.($i + 1).'</option>';
				}

				if(isset($_SESSION['auth']) && $_SESSION['auth'] == "PIN")
				{
					if(isset($_GET['a']))
					{
						if($_GET['a'] == "recovery")
						{
							$this->add_to_template('<h4>Восстановление кода безопасности</h4>');
							
							if(isset($_GET['k']) && isset($_SESSION['pin_recovery_key']))
							{
								$recovery_key = trim($_GET['k']);
								
								if(strlen($recovery_key) == 24)
								{
									if($_SESSION['pin_recovery_key'] == $recovery_key)
									{
										$form = true;
										
										$this->db_connect($_SESSION['srv']);
										
										if(isset($_POST['pincode']))
										{
											$pincode = trim($_POST['pincode']);

											if((strlen($pincode) == 4 || strlen($pincode) == 3) && ctype_digit($pincode))
											{
												$response = $this->db->query("SELECT * FROM players WHERE Names = '".$_SESSION['name']."'");

												if($response->num_rows)
												{
													$form = false;
													
													$this->db->query("UPDATE players SET DopZa = '".strval($pincode)."' WHERE Names = '".$_SESSION['name']."'");
													
													$this->add_to_template('
														<form action="ucp.php" method="post" class="billing-form">
														<div class="alert alert-success" role="alert"><b>Успешно! </b>Новый код безопасности установлен</div>
														<button type="submit" class="btn btn-primary">Вернуться на форму авторизации</button>
														</form>
														');
												}
												else
												{
													$error = "аккаунт не найден";
												}
											}
											else
											{
												$error = "код безопасности должен состоять из 3 или 4 цифр";
											}
										}
										
										if($form)
										{
											$this->add_to_template('
												<form class="billing-form" method="post">
												'.($error == "" ? "" : '<div class="alert alert-danger" role="alert"><b>Ошибка: </b>'.$error.'</div>').'
												<div class="form-group row">
												<label for="pincode-input">Новый код безопасности</label>
												<input class="form-control" type="input" name="pincode" placeholder="Введите новый код безопасности" id="pincode-input" required>
												</div>
												<button type="submit" class="btn btn-primary">Установить</button><br/>
												</form>
												');
										}
									}
									else
									{
										$this->add_to_template('<div class="alert alert-danger" role="alert"><b>Ошибка: </b>ссылка недействительна</div>');
									}
								}
								else
								{
									$this->add_to_template('<div class="alert alert-danger" role="alert"><b>Ошибка: </b>некорректный запрос</div>');
								}
							}
							else
							{
								if(!isset($_SESSION['pin_recovery_key']))
								{
									$this->db_connect($_SESSION['srv']);

									$response = $this->db->query("SELECT * FROM players WHERE Names = '".$_SESSION['name']."'");

									if($response->num_rows)
									{
										//require_once "SendMailSmtpClass.php"; // подключаем класс
										//$mailSMTP = new SendMailSmtpClass('forum.greentech-rp@yandex.ua', 'a214aarji14214SDaa341', 'ssl://smtp.yandex.ru', 465, "UTF-8");
										
										$row = $response->fetch_assoc();

										$key = $this->generate_key(24);
										$link = "http://greentech-rp.ru/ucp.php?a=recovery&k=".$key;
										
										$_SESSION['pin_recovery_key'] = $key;

										$message = "Здравствуйте!\n\r\n\r";
										$message .= "Вы запросили восстановление кода безопасности для доступа к аккаунту ".$_SESSION['name']." на сервере GreenTech RolePlay #".($_SESSION['srv'] + 1).", перейдите по ".$link." для дальнейших действий.\n\r";
										$message .= "Если вдруг вы не запрашивали восстановление, проигнорируйте это письмо.\n\r\n\r";
										$message .= "С Уважением, администрация GreenTech RolePlay.";
										//$result =  $mailSMTP->send(($row['Email'], "Восстановление кода безопасности", $message, "From: forum.greentech-rp@yandex.ua");
										mail($row['Email'], "Восстановление кода безопасности", $message, "From: admin@greentech-rp.ru");
									}
								}
								
								$form = false;

								$this->add_to_template('<div class="alert alert-success" role="alert"><b>Успешно! </b>На электронную почту было отправлено письмо с дальнейшими инструкциями</div>');
								$this->add_to_template('<div class="alert alert-success" role="alert"><b>Внимание! </b>Если письмо не получено в течении 5 минут, проверьте СПАМ!</div>');
							}
						}
					}
					else
					{
						$form = true;
						
						$this->add_to_template('<h4>Авторизация</h4>');
						
						if(isset($_POST['pincode']) && isset($_POST['g-recaptcha-response']))
						{
							$pincode = $_POST['pincode'];
							$gresponse = $_POST['g-recaptcha-response'];
							
							if(strlen($pincode) == 4 || strlen($pincode) == 3)
							{
								if(strlen($gresponse) > 0)
								{
									$curl = curl_init();
									
									curl_setopt($curl, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
									curl_setopt($curl, CURLOPT_POST, true);
									curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
									curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
									curl_setopt(
										$curl,
										CURLOPT_POSTFIELDS,
										http_build_query(
											array(
												"secret" => "6LeBTg0UAAAAAIBqLkP3M3bHZoTcAjq3va04fcRp", 
												"response" => $gresponse,
												"remoteip" => $_SERVER['REMOTE_ADDR']
											)
										)
									);
									
									$response = (array)json_decode(curl_exec($curl), true);
									
									curl_close($curl);
									
									if(isset($response['success']))
									{
										if($response['success'] == true)
										{
											$this->db_connect($_SESSION['srv']);

											$response = $this->db->query("SELECT DopZa FROM players WHERE Names = '".$_SESSION['name']."'");
											
											if($response->num_rows)
											{
												$row = $response->fetch_assoc();
												
												if(strval($row['DopZa']) === strval($pincode))
												{
													$form = false;

													$_SESSION['auth'] = "YES";

													$this->add_header('<meta http-equiv="refresh" content="3;URL=ucp.php">');
													$this->add_to_template('<div id="auth_success" class="alert alert-success" role="alert"><b>Успешно!</b> Сейчас вы будете перенаправлены на страницу своего аккаунта, если этого не произойдет автоматически - обновите страницу</div>');
													
													$this->wlog("success_auth", array($row['ID'], $_SESSION['srv'], $_SESSION['name']));
												}
												else
												{
													$error = "неверный код безопасности";
												}
											}
											else
											{
												$error = "игрок с таким никнеймом или паролем не найден";
											}
										}
										else
										{
											$error = "активируйте капчу";
										}
									}
									else
									{
										$error = "произошла ошибка при подключении к серверам Google reCAPTCHA";
									}
								}
								else
								{
									$error = "активируйте капчу";
								}
							}
							else
							{
								$error = "код безопасности состоит из 3 или 4 цифр";
							}
						}
						
						if($form)
						{
							$this->add_to_template('
								<form class="billing-form" method="post">
								'.($error == "" ? "" : '<div class="alert alert-danger" role="alert"><b>Ошибка: </b>'.$error.'</div>').'
								<div class="form-group row">
								<label for="pincode-input">Код безопасности</label>
								<input class="form-control" type="password" name="pincode" placeholder="Введите код безопасности" id="pincode-input">
								</div>
								<div class="form-group row" style="margin-top: 20px;">
								<div class="g-recaptcha" data-sitekey="6LeBTg0UAAAAALAG7ZhJBr6PpTbk0WEjKAknCn0P"></div>
								</div>
								<button type="submit" class="btn btn-primary">Войти</button><br/>
								</form>
								<a href="ucp.php?a=recovery" class="btn btn btn-link">Восстановить код безопасности</a>
								');
						}
					}
				}
				else
				{
					if(isset($_GET['a']))
					{
						if($_GET['a'] == "recovery")
						{
							$this->add_to_template('<h4>Восстановление доступа</h4>');
							
							if(isset($_GET['s']) && isset($_GET['k']))
							{
								$server_id = strval($_GET['s']) - 1;
								$recovery_key = trim($_GET['k']);
								
								if($server_id >= 0 && $server_id < $this->server_count)
								{
									if(strlen($recovery_key) == 24)
									{
										$this->db_connect($server_id);
										
										$recovery_key = $this->db->real_escape_string($recovery_key);
										
										$response = $this->db->query("SELECT * FROM ucp_recovery WHERE `key` = '".$recovery_key."'");

										if($response->num_rows)
										{
											$row = $response->fetch_assoc();
											$recovery_id = $row['id'];
											
											if($row['ip'] == $_SERVER['REMOTE_ADDR'])
											{
												if(time() - $row['ts'] > 21600)
												{
													$this->add_to_template('<div class="alert alert-danger" role="alert"><b>Ошибка: </b>срок действия восстановления истек</div>');
												}
												else
												{
													$form = true;
													
													if(isset($_POST['pass']) && isset($_POST['pass-confirm']))
													{
														$password = trim($_POST['pass']);
														$password_confirm = trim($_POST['pass-confirm']);
														
														if(strlen($password) > 0 && strlen($password_confirm) > 0)
														{
															if($password == $password_confirm)
															{
																if(strlen($password) >= 6 && strlen($password) <= 32)
																{
																	$response = $this->db->query("SELECT * FROM players WHERE `ID` = '".$row['uid']."'");

																	if($response->num_rows)
																	{
																		$row = $response->fetch_assoc();
																		
																		$hash = $this->get_password_hash($password, $row['salt']);
																		
																		if($hash != $row['Pass'])
																		{
																			$form = false;
																			
																			$this->db->query("DELETE FROM ucp_recovery WHERE `id` = '".$recovery_id."'");
																			$this->db->query("UPDATE players SET `Pass` = '".$hash."' WHERE `ID` = '".$row['ID']."'");
																			
																			$this->add_to_template('
																				<form action="ucp.php" method="post" class="billing-form">
																				<div class="alert alert-success" role="alert"><b>Успешно! </b>Новый пароль установлен</div>
																				<button type="submit" class="btn btn-primary">Вернуться на форму авторизации</button>
																				</form>
																				');
																			
																			$this->wlog("recovery_final", array($row['ID'], $server_id, $row['Names'], $recovery_id));
																		}
																		else
																		{
																			$error = "данный пароль установлен сейчас на аккаунте";
																		}
																	}
																	else
																	{
																		$error = "аккаунт не найден";
																	}
																}
																else
																{
																	$error = "допустимая длина пароля от 6 до 32 символов";
																}
															}
															else
															{
																$error = "пароли не совпадают";
															}
														}
														else
														{
															$error = "введите пароль";
														}
													}
													
													if($form)
													{
														$this->add_to_template('
															<form class="billing-form" method="post">
															'.($error == "" ? "" : '<div class="alert alert-danger" role="alert"><b>Ошибка: </b>'.$error.'</div>').'
															<div class="form-group row">
															<label for="pass-input">Новый пароль</label>
															<input class="form-control" type="password" name="pass" placeholder="Введите новый пароль" id="pass-input" required>
															</div>
															<div class="form-group row">
															<label for="pass-confirm-input">Подтверждение нового пароля</label>
															<input class="form-control" type="password" name="pass-confirm" placeholder="Снова введите новый пароль" id="pass-confirm-input" required>
															</div>
															<button type="submit" class="btn btn-primary">Продолжить</button><br/>
															</form>
															');
													}
												}
											}
											else
											{
												$this->add_to_template('<div class="alert alert-danger" role="alert"><b>Ошибка: </b>вы пытаетесь восстановить пароль с IP-адреса, который не совпадает с адресом при запросе восстановления</div>');
											}
										}
										else
										{
											$this->add_to_template('<div class="alert alert-danger" role="alert"><b>Ошибка: </b>ссылка недействительна</div>');
										}
									}
									else
									{
										$this->add_to_template('<div class="alert alert-danger" role="alert"><b>Ошибка: </b>некорректный запрос</div>');
									}
								}
								else
								{
									$this->add_to_template('<div class="alert alert-danger" role="alert"><b>Ошибка: </b>некорректный запрос</div>');
								}
							}
							else if(isset($_GET['s']) && isset($_GET['u']))
							{
								$server_id = strval($_GET['s']) - 1;
								$user_id = strval($_GET['u']);
								
								if($server_id >= 0 && $server_id < $this->server_count)
								{
									$this->db_connect($server_id);
									
									$user_id = $this->db->real_escape_string($user_id);
									
									$response = $this->db->query("SELECT * FROM players WHERE `ID` = '".$user_id."'");

									if($response->num_rows)
									{
										$row = $response->fetch_assoc();

										$key = $this->generate_key(24);
										$link = "http://greentech-rp.ru/ucp.php?a=recovery&s=".($server_id + 1)."&k=".$key;
										$text = "";
										
										$message = "Здравствуйте!\n\r\n\r";
										$message .= "Вы запросили восстановление доступа к аккаунту ".$row['Names']." на сервере GreenTech RolePlay #".($server_id + 1).", перейдите по ".$link." для дальнейших действий.\n\r";
										$message .= "Если вдруг вы не запрашивали восстановление, проигнорируйте это письмо.\n\r\n\r";
										$message .= "С Уважением, администрация GreenTech RolePlay.";
										
										mail($row['Email'], "Восстановление доступа к аккаунту", $message, "From: admin@greentech-rp.ru");
										
										$this->wlog("recovery_query", array($row['ID'], $server_id, $row['Names'], $key, $row['Email']));
										
										$result = $this->db->query("INSERT INTO ucp_recovery(`uid`,`ts`,`ip`,`key`) VALUES('".$row['ID']."','".time()."','".$_SERVER['REMOTE_ADDR']."','".$key."')");
										
										if($result)
										{
											$form = false;
											
											$this->add_to_template('<div class="alert alert-success" role="alert"><b>Успешно! </b>На электронную почту было отправлено письмо с дальнейшими инструкциями</div>');
											$this->add_to_template('<div class="alert alert-success" role="alert"><b>Внимание! </b>Если письмо не получено в течении 5 минут, проверьте СПАМ!</div>');
										}
										else
										{
											$this->add_to_template('<div class="alert alert-danger" role="alert"><b>Ошибка: </b>произошла ошибка при выполнении запроса, попробуйте позже</div>');
										}
									}
									else
									{
										$this->add_to_template('<div class="alert alert-danger" role="alert"><b>Ошибка: </b>аккаунт не найден</div>');
									}
								}
								else
								{
									$this->add_to_template('<div class="alert alert-danger" role="alert"><b>Ошибка: </b>некорректный запрос</div>');
								}
							}
							else
							{
								$form = true;
								
								if(isset($_POST['srv']) && isset($_POST['email']) && isset($_POST['g-recaptcha-response']))
								{
									$server_id = strval($_POST['srv']) - 1;
									$email = $_POST['email'];
									$gresponse = $_POST['g-recaptcha-response'];
									
									if($server_id >= 0 && $server_id < $this->server_count)
									{
										if(strlen($email) > 0)
										{
											if(strlen($gresponse) > 0)
											{
												$curl = curl_init();
												
												curl_setopt($curl, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
												curl_setopt($curl, CURLOPT_POST, true);
												curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
												curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
												curl_setopt(
													$curl,
													CURLOPT_POSTFIELDS,
													http_build_query(
														array(
															"secret" => "6LeBTg0UAAAAAIBqLkP3M3bHZoTcAjq3va04fcRp", 
															"response" => $gresponse,
															"remoteip" => $_SERVER['REMOTE_ADDR']
														)
													)
												);
												
												$response = (array)json_decode(curl_exec($curl), true);
												
												curl_close($curl);
												
												if(isset($response['success']))
												{
													if($response['success'] == true)
													{
														$this->db_connect($server_id);

														$email = $this->db->real_escape_string($email);
														
														$response = $this->db->query("SELECT * FROM players WHERE Email = '".$email."'");
														
														if($response->num_rows)
														{
															$form = false;
															
															$this->add_to_template('<div class="alert alert-info" role="alert"><b>Отлично! </b>Выберете аккаунт, который вы хотите восстановить</div>');
															
															$this->add_to_template('<table class="table" style="width: 70%;">');

															for($i = 0; $i < $response->num_rows; $i++)
															{
																$row = $response->fetch_assoc();
																
																$this->add_to_template('<tr><td>'.$row['Names'].'</td><td style="text-align: right;"><a href="ucp.php?a=recovery&s='.($server_id + 1).'&u='.$row['ID'].'" class="btn btn-primary">восстановить</a></td></tr>');
															}
															
															$this->add_to_template('</table>');
														}
														else
														{
															$error = "игрок с таким email не найден";
														}
													}
													else
													{
														$error = "активируйте капчу";
													}
												}
												else
												{
													$error = "произошла ошибка при подключении к серверам Google reCAPTCHA";
												}
											}
											else
											{
												$error = "активируйте капчу";
											}
										}
										else
										{
											$error = "введите email";
										}
									}
									else
									{
										$error = "некорректный сервер";
									}
								}
								
								if($form)
								{
									$this->add_to_template('
										<form class="billing-form" method="post">
										'.($error == "" ? "" : '<div class="alert alert-danger" role="alert"><b>Ошибка: </b>'.$error.'</div>').'
										<div class="form-group row">
										<label for="server-select">Сервер</label>
										<select class="form-control" name="srv" id="server-select">
										'.$servers.'
										</select>
										</div>
										<div class="form-group row">
										<label for="email-input">E-mail</label>
										<input class="form-control" type="email" name="email" placeholder="Введите e-mail" id="email-input" required>
										</div>
										<div class="form-group row" style="margin-top: 20px;">
										<div class="g-recaptcha" data-sitekey="6LeBTg0UAAAAALAG7ZhJBr6PpTbk0WEjKAknCn0P"></div>
										</div>
										<button type="submit" class="btn btn-primary">Продолжить</button><br/>
										</form>
										');
								}
							}
						}
					}
					else
					{
						$form = true;
						
						$this->add_to_template('<h4>Авторизация</h4>');
						
						if(isset($_POST['srv']) && isset($_POST['username']) && isset($_POST['password']) && isset($_POST['g-recaptcha-response']))
						{
							$server_id = strval($_POST['srv']) - 1;
							$username = $_POST['username'];
							$password = $_POST['password'];
							$gresponse = $_POST['g-recaptcha-response'];
							
							if($server_id >= 0 && $server_id < $this->server_count)
							{
								if(strlen($username) > 0)
								{
									if(strlen($password) > 0)
									{
										if(strlen($gresponse) > 0)
										{
											$curl = curl_init();
											
											curl_setopt($curl, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
											curl_setopt($curl, CURLOPT_POST, true);
											curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
											curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
											curl_setopt(
												$curl,
												CURLOPT_POSTFIELDS,
												http_build_query(
													array(
														"secret" => "6LeBTg0UAAAAAIBqLkP3M3bHZoTcAjq3va04fcRp", 
														"response" => $gresponse,
														"remoteip" => $_SERVER['REMOTE_ADDR']
													)
												)
											);
											
											$response = (array)json_decode(curl_exec($curl), true);
											
											curl_close($curl);
											
											if(isset($response['success']))
											{
												if($response['success'] == true)
												{
													if(strlen($username) >= 3 && strlen($username) <= 20)
													{
														if(strlen($username) >= 6 && strlen($username) <= 32)
														{
															if(preg_match("#^[aA-zZ0-9\-_\]\[\$\=\(\)\@\.]+$#", $username))
															{
																$this->db_connect($server_id);

																$username = $this->db->real_escape_string($username);
																
																$response = $this->db->query("SELECT salt,Pass,DopZa FROM players WHERE Names = '".$username."'");
																
																if($response->num_rows)
																{
																	$row = $response->fetch_assoc();
																	
																	$real_password_hash = $row['Pass'];
																	$my_password_hash = $this->get_password_hash($password, $row['salt']);

																	if($real_password_hash === $my_password_hash)
																	{
																		$form = false;

																		$_SESSION['name'] = $username;
																		$_SESSION['srv'] = $server_id;
																		
																		if($row['DopZa'])
																		{
																			$_SESSION['auth'] = "PIN";
																			
																			$this->add_header('<meta http-equiv="refresh" content="0;URL=ucp.php">');
																		}
																		else
																		{
																			$_SESSION['auth'] = "YES";
																			
																			$this->add_header('<meta http-equiv="refresh" content="3;URL=ucp.php">');
																			$this->add_to_template('<div id="auth_success" class="alert alert-success" role="alert"><b>Успешно!</b> Сейчас вы будете перенаправлены на страницу своего аккаунта, если этого не произойдет автоматически - обновите страницу</div>');

																			$this->wlog("success_auth", array($row['ID'], $server_id, $username));
																		}
																	}
																	else
																	{
																		$error = "игрок с таким никнеймом или паролем не найден";
																	}
																}
																else
																{
																	$error = "игрок с таким никнеймом или паролем не найден";
																}
															}
															else
															{
																$error = "в никнейме недопустимые символы";
															}
														}
														else
														{
															$error = "допустимая длина пароля: 6-32 символов";
														}
													}
													else
													{
														$error = "допустимая длина никнейма: 3-20 символов";
													}
												}
												else
												{
													$error = "активируйте капчу";
												}
											}
											else
											{
												$error = "произошла ошибка при подключении к серверам Google reCAPTCHA";
											}
										}
										else
										{
											$error = "активируйте капчу";
										}
									}
									else
									{
										$error = "введите пароль";
									}
								}
								else
								{
									$error = "введите никнейм";
								}
							}
							else
							{
								$error = "некорректный сервер";
							}
						}
						
						if($form)
						{
							$this->add_to_template('
								<form class="billing-form" method="post">
								'.($error == "" ? "" : '<div class="alert alert-danger" role="alert"><b>Ошибка: </b>'.$error.'</div>').'
								<div class="form-group row">
								<label for="server-select">Сервер</label>
								<select class="form-control" name="srv" id="server-select">
								'.$servers.'
								</select>
								</div>
								<div class="form-group row">
								<label for="username-input">Никнейм</label>
								<input class="form-control" type="text" name="username" placeholder="Введите никнейм" id="username-input">
								</div>
								<div class="form-group row">
								<label for="password-input">Пароль</label>
								<input class="form-control" type="password" name="password" placeholder="Введите пароль" id="password-input">
								</div>
								<div class="form-group row" style="margin-top: 20px;">
								<div class="g-recaptcha" data-sitekey="6LeBTg0UAAAAALAG7ZhJBr6PpTbk0WEjKAknCn0P"></div>
								</div>
								<button type="submit" class="btn btn-primary">Войти</button><br/>
								</form>
								<a href="ucp.php?a=recovery" class="btn btn btn-link">Восстановить пароль</a>
								');
						}
					}
				}
			}
			
			$this->add_to_template('
				</div>
				</div>
				</center>
				</section>
				');
		}
		
		if($page == "TRANSFER")
		{
			$this->add_to_template('
				<section class="sa-text-area">
				<center>
				<div class="main-block">
				');
			
			if(isset($_SESSION['auth']) && $_SESSION['auth'] == "YES")
			{
				$this->add_to_template('<div class="main-block-sub-ucp">');
				$this->add_to_template('<p class="block-title" style="margin-bottom: 10px;">Личный кабинет</p>');
				$this->add_to_template('<h4>Перенос аккаунта: '.$_SESSION['name'].'</h4>');
				
				$this->db_connect($_SESSION['srv']);
				
				$response = $this->db->query("SELECT * FROM players WHERE Names = '".$_SESSION['name']."'");
				
				if($_SESSION['srv'] == 1 && $response->num_rows)
				{
					$server_id = $_SESSION['srv'];
					$username = $_SESSION['name'];
					
					$data = $response->fetch_assoc();

					if($data['Bank'] < 0)
					{
						$data['Bank'] = 0;
					}
					
					if($data['transfer_complete'] < 2)
					{
						$allowed = true;
						$report_data = array();
						
						// ========
						
						$first_srv = $this->db_connect_ret(0);
						
						if($first_srv->query("SELECT * FROM players WHERE Names = '".$username."'")->num_rows)
						{
							$allowed = false;
						}
						
						$first_srv->close();
						
						// ========
						
						$report_data[] = 'Аккаунт с никнеймом '.$username.' <b><font color="green">будет</font></b> перенесен со второго на первый сервер';
						
						// ========
						
						$houses_data = $this->db->query("SELECT * FROM houses WHERE hOwner = '".$username."'");
						
						for($i = 0; $i < $houses_data->num_rows; $i++)
						{
							$house_data = $houses_data->fetch_assoc();
							
							$report_data[] = 'Дом/квартира #'.$house_data['hID'].' перенесен <b><font color="red">не будет</font></b>';
						}
						
						// ========
						
						$garages_data = $this->db->query("SELECT * FROM garage WHERE Owner = '".$username."'");

						for($i = 0; $i < $garages_data->num_rows; $i++)
						{
							$garage_data = $garages_data->fetch_assoc();
							
							$report_data[] = 'Гараж #'.$garage_data['ID'].' перенесен <b><font color="red">не будет</font></b>';
						}
						
						// ========
						
						$bizz_data = $this->db->query("SELECT * FROM bizz WHERE Owner = '".$username."'");
						
						for($i = 0; $i < $bizz_data->num_rows; $i++)
						{
							$biz_data = $bizz_data->fetch_assoc();
							
							$report_data[] = 'Бизнес #'.$biz_data['ID'].' перенесен <b><font color="red">не будет</font></b>';
						}
						
						// ========
						
						$cars_data = $this->db->query("SELECT * FROM cars WHERE Owner = '".$username."'");
						
						for($i = 0; $i < $cars_data->num_rows; $i++)
						{
							$car_data = $cars_data->fetch_assoc();
							
							$report_data[] = 'Машина #'.$car_data['ID'].' ('.$car_data['Model'].') <b><font color="green">будет</font></b> перенесена со второго на первый сервер';
						}
						
						// ========
						
						$cars_data = $this->db->query("SELECT * FROM cars WHERE 2Owner = '".$username."'");
						
						for($i = 0; $i < $cars_data->num_rows; $i++)
						{
							$car_data = $cars_data->fetch_assoc();
							
							$report_data[] = 'Машина #'.$car_data['ID'].' ('.$car_data['Model'].') перенесена <b><font color="red">не будет</font></b> (вы со-владелец)';
						}
						
						// ========

						if($data['transfer_complete'] == 1)
						{
							$nickname = $data['transfer_nickname'];
							
							$this->db->query("UPDATE players SET transfer_complete = 2 WHERE Names = '".$username."'");
							
							$first_srv = $this->db_connect_ret(0);

							// ========
							
							$transfer_data = $data;
							
							unset($transfer_data['ID']);
							unset($transfer_data['transfer_complete']);
							unset($transfer_data['transfer_nickname']);
							unset($transfer_data['Names']);
							
							$transfer_data['housenalog'] = 0;
							$transfer_data['bizznalog'] = 0;

							$query_list = "`Names`";
							$query_data = "'".$nickname."'";
							
							$keys = array_keys($transfer_data);
							
							for($i = 0; $i < sizeof($keys); $i++)
							{
								$query_list .= ",`".$keys[$i]."`";
								$query_data .= ",'".$transfer_data[$keys[$i]]."'";
							}
							
							$first_srv->query("INSERT INTO `players`(".$query_list.") VALUES(".$query_data.")");

							// ========
							
							$cars_data = $this->db->query("SELECT * FROM cars WHERE Owner = '".$username."'");
							
							for($idx = 0; $idx < $cars_data->num_rows; $idx++)
							{
								$transfer_data = $cars_data->fetch_assoc();

								unset($transfer_data['ID']);
								unset($transfer_data['Owner']);
								
								$transfer_data['2Owner'] = 'No-Body';

								$query_list = "`Owner`";
								$query_data = "'".$nickname."'";
								
								$keys = array_keys($transfer_data);
								
								for($i = 0; $i < sizeof($keys); $i++)
								{
									$query_list .= ",`".$keys[$i]."`";
									$query_data .= ",'".$transfer_data[$keys[$i]]."'";
								}
								
								$first_srv->query("INSERT INTO `cars`(".$query_list.") VALUES(".$query_data.")");
							}
							
							// ========

							$first_srv->close();
							
							$_SESSION['auth'] = "YES";
							$_SESSION['srv'] = 0;
							$_SESSION['name'] = $nickname;

							$this->add_header('<meta http-equiv="refresh" content="10;URL=ucp.php">');
							$this->add_to_template('<div class="alert alert-success" role="alert"><b>Успешно!</b><br/><br/>Ваш аккаунт перенесен на первый сервер с никнеймом <b>'.$nickname.'</b><br/>Вы будете переброшены на страницу Личного Кабинета через 10 секунд</div>');
						}
						else
						{
							$form = true;
							
							$this->add_to_template("<h5><b>Вы собираетесь выполнить перенос аккаунта на первый сервер</b></h5>");

							if(isset($_POST['submit']))
							{
								$nickname = $username;
								
								if(!$allowed && isset($_POST['nickname']))
								{
									$nickname = trim($_POST['nickname']);
								}
								
								if(strlen($nickname) >= 3 && strlen($nickname) <= 20)
								{
									if(preg_match("#^[aA-zZ0-9\-_\]\[\$\=\(\)\@\.]+$#", $nickname))
									{
										$already_exists = false;
										$first_srv = $this->db_connect_ret(0);

										if($first_srv->query("SELECT * FROM players WHERE Names = '".$nickname."'")->num_rows)
										{
											$already_exists = true;
										}
										
										$first_srv->close();
										
										if(!$already_exists)
										{
											$form = false;

											$this->add_header('<meta http-equiv="refresh" content="5;URL=transfer.php">');
											$this->add_to_template('<div class="alert alert-info" role="alert"><b>Пожалуйста, подождите...</b><br/><br/>Ваш аккаунт переносится на первый сервер.<br/>Ни в коем случае не закрывайте эту вкладку или браузер.</div>');
											
											$this->db->query("UPDATE players SET transfer_complete = 1, transfer_nickname = '".$nickname."' WHERE Names = '".$username."'");
										}
										else
										{
											$this->add_to_template('<div class="alert alert-danger" role="alert"><b>Ошибка: </b>аккаунт с указанным никнеймом уже существует на первом сервере</div>');
										}
									}
									else
									{
										$this->add_to_template('<div class="alert alert-danger" role="alert"><b>Ошибка: </b>новый никнейм содержит запрещенные символы</div>');
									}
								}
								else
								{
									$this->add_to_template('<div class="alert alert-danger" role="alert"><b>Ошибка: </b>неверная длина нового никнейма</div>');
								}
							}
							
							if($form)
							{
								$this->add_to_template('<div id="ucp_main_left" class="ucp-main-left" style="width: 70%;">');
								$this->add_to_template('
									<table class="table" width="100%" style="border-left: 1px solid #eeeeee; font-size: 10pt;">
									<tr><td><b>Условия и примечания:</b></td></tr>
									<tr>
									<td>
									<b>1. </b>Недвижимость (дом, квартира, бизнес) не переносятся.
									<br/><b>2. </b>Вам будет предложено изменение никнейма в том случае, если на первом сервере уже будет аккаунт с текущим никнеймом.
									</td>
									</tr>
									</table>
									');
								
								$this->add_to_template('
									<table class="table" width="100%" style="border-left: 1px solid #eeeeee; font-size: 10pt;"><tr><td><b>Результат проверки:</b></td></tr><tr><td>
									');
								
								if($allowed)
								{
									$this->add_to_template('Аккаунт <b><font color="green">допускается</font></b> к переносу на первый сервер.');
								}
								else
								{
									$this->add_to_template('Аккаунт <b><font color="green">допускается</font></b> к переносу на первый сервер, но <b><font color="#DF5A3E;">требуется</font></b> изменение никнейма.');
								}
								
								$this->add_to_template('<br/><br/><b>Будут выполнены следующие действия:</b><br/>');
								
								for($i = 0; $i < sizeof($report_data); $i++)
								{
									$this->add_to_template('<b>'.($i + 1).'. </b>'.$report_data[$i].'.<br/>');
								}

								$this->add_to_template('</td></tr></table>');
								$this->add_to_template('</div>');
								
								$this->add_to_template('<div id="ucp_main_right" class="ucp-main-right">');
								$this->add_to_template('
									<table class="table" width="100%" style="border-left: 1px solid #eeeeee; font-size: 10pt;">
									<tr><td><b>Аккаунт</b></td><td style="text-align: right;">#'.$data['ID'].'</td></tr>
									<tr><td><b>Имя</b></td><td style="text-align: right;">'.$username.'</td></tr>
									<tr><td><b>E-mail</b></td><td style="text-align: right;">'.$data['Email'].'</td></tr>
									<tr><td><b>Уровень</b></td><td style="text-align: right;">'.$data['Level'].'</td></tr>
									</table>
									');
								
								$this->add_to_template('<form method="post">');
								
								if(!$allowed)
								{
									$this->add_to_template('
										<div class="form-group row" style="width: 95%;">
										<input class="form-control" type="input" name="nickname" placeholder="Новый никнейм">
										</div>
										');
								}
								
								$this->add_to_template('
									<label class="form-check-label">
									<input type="checkbox" class="form-check-input" required>
									Я подтверждаю перенос
									</label>
									');

								$this->add_to_template('<input style="width: 100%;" type="submit" name="submit" class="btn btn-primary" value="Выполнить перенос"/>');
								
								$this->add_to_template('</form>');

								$this->add_to_template('</div>');
								$this->add_to_template('</div>');
							}
						}
					}
					else
					{
						$this->add_to_template('
							<div class="alert alert-danger" role="alert">
							<b>Ошибка: </b>данный аккаунт уже перенесен.<br/><br/>Никнейм на первом сервере: <b>'.$data['transfer_nickname'].'</b> 
							</div>
							');
					}
				}

				$this->add_to_template('</div>');
			}
			else
			{
				$this->add_to_template('<div class="main-block-sub-login">');
				$this->add_to_template('<p class="block-title" style="margin-bottom: 10px;">Личный кабинет</p>');
				$this->add_to_template('<h4>Перенос аккаунта</h4>');
				$this->add_to_template('<div class="alert alert-danger" role="alert"><b>Ошибка: </b>для доступа к этой странице необходимо авторизироваться<br/><br/><a href="/ucp.php" class="btn btn-danger btn-sm">Авторизироваться</a></div>');
			}
			
			$this->add_to_template('
				</div>
				</div>
				</center>
				</section>
				');
		}
		

		// Добавляем подвал сайта и модальное окно авторизации
		$this->body .= '
		<footer>
		<div class="top">
		<div class="socials">
		<div class="image">
		<a href="#" class="blur"><img src="../img/vk_blue.png" alt="VK"></a>
		<a href="#" class="hover"><img src="../img/vk.png" alt="VK"></a>
		</div>
		<div class="image">
		<a href="#" class="blur"><img src="../img/youtube_blue.png" alt="YOUTUBE"></a>
		<a href="#" class="hover"><img src="../img/youtube.png" alt="YOUTUBE"></a>
		</div>
		</div>
		<div class="scroll-top">
		<span class="chevron" onclick="ScrollTop()"></span>
		</div>
		</div>
		<div class="bottom">
		<h1>GreenTech RolePlay © 2012-2019</h1>
		<span>Made by Kipper Studio</span>
		</div>
		</footer>
		<div id="auth">
		<div class="exit" onclick="Auth();">
		<span></span>
		<span></span>
		</div>
		<h1>Авторизация</h1>
		<p class="error">Ошибка! Логин или пароль введён неверно</p>
		<form>
		<input type="text" placeholder="Ник" oninput="CheckInput(this);">
		<input type="password" placeholder="Пароль" oninput="CheckInput(this);">
		<img src="../img/eye.png" alt="show" class="show">
		<a href="#">Забыли пароль?</a>
		<button type="submit">Войти</button>
		</form>
		</div>
		</div>
		';
		
		// Добавляем скрипты
		$this->body .= '<script src="../js/jquery.js"></script>';
		$this->body .= '<script src="../js/script.js"></script>';
		
		return $this->body;
	}
	
	public function add_to_template($data)
	{
		$this->template .= $data;
	}
	
	public function add_header($header)
	{
		$this->headers .= $header;
	}
	
	public function db_connect($server_id)
	{
		$this->db = @new mysqli(
			$this->server_data[$server_id]['db_hostname'],
			$this->server_data[$server_id]['db_username'],
			$this->server_data[$server_id]['db_password'],
			$this->server_data[$server_id]['db_database']
		);

		if (mysqli_connect_errno())
		{
			die("failed to connect database");
		}
		
		$this->db->query("SET NAMES cp1251;");
		$this->db->query("SET SESSION character_set_server = 'utf8';");
	}
	
	public function db_connect_ret($server_id)
	{
		$db = @new mysqli(
			$this->server_data[$server_id]['db_hostname'],
			$this->server_data[$server_id]['db_username'],
			$this->server_data[$server_id]['db_password'],
			$this->server_data[$server_id]['db_database']
		);

		if(mysqli_connect_errno())
		{
			die("failed to connect database");
		}
		
		$db->query("SET NAMES cp1251;");
		$db->query("SET SESSION character_set_server = 'utf8';");
		
		return $db;
	}
	
	public function get_password_hash($password, $account_salt)
	{
		return strtoupper(hash("sha256", $password."_".$account_salt."_".$this->account_system_salt));
	}
	
	public function generate_key($len)
	{
		$chars = array(
			'a','b','c','d','e','f',
			'g','h','i','j','k','l',
			'm','n','o','p','r','s',
			't','u','v','x','y','z',
			'A','B','C','D','E','F',
			'G','H','I','J','K','L',
			'M','N','O','P','R','S',
			'T','U','V','X','Y','Z',
			'1','2','3','4','5','6',
			'7','8','9','0','-','_'
		);

		$key = "";
		
		for($i = 0; $i < $len; $i++)
		{
			$key .= $chars[rand(0, count($chars) - 1)];
		}
		
		return $key;
	}
	
	public function unitpay_handler($server_id)
	{
		$this->db_connect($server_id);
		
		if(empty($_GET['method']) || empty($_GET['params']) || !is_array($_GET['params']))
		{
			return $this->unitpay_gen_error("invalid query");
		}
		
		$method = $_GET['method'];
		$params = $_GET['params'];
		
		$secret_key = $this->server_data[$server_id]['unitpay_secret_key'];
		
		if($params['signature'] != $this->unitpay_gen_sha256_sig($method, $params, $secret_key))
		{
			return $this->unitpay_gen_error("invalid signature");
		}
		
		if($method == "check")
		{
			if($this->unitpay_get_payment($params['unitpayId']))
			{
				return $this->unitpay_gen_error("payment already exists");
			}

			if(!$this->unitpay_create_payment($params['unitpayId'], $params['account'], floor($params['sum']), floor($params['sum'])))
			{
				return $this->unitpay_gen_error('unable to create payment database');
			}

			if(!$this->unitpay_is_account_exists($params['account']))
			{
				return $this->unitpay_gen_error('character not found');
			}

			return $this->unitpay_gen_success('CHECK is successful');
		}
		
		if($method == "pay")
		{
			$payment = $this->unitpay_get_payment($params['unitpayId']);

			if($payment && $payment->status == 1)
			{
				return $this->unitpay_gen_success('payment has already been paid');
			}
			
			if(!$this->unitpay_confirm_payment($params['unitpayId']))
			{
				return $this->unitpay_gen_error('unable to confirm payment database');
			}
			
			$this->db->query('
				UPDATE players SET
				Donate = Donate + '.(((int)floor($params['sum'])) * $this->donate_multiplier).'
				WHERE Names = \''.$this->db->real_escape_string($params['account']).'\'
				');
			
			return $this->unitpay_gen_success('PAY is successful');
		}
		
		return $this->unitpay_gen_error($method." not supported");
	}
	
	public function unitpay_gen_success($message)
	{
		return json_encode(array(
			"jsonrpc" => "2.0",
			"result" => array(
				"message" => $message
			),
			'id' => 1,
		));
	}

	public function unitpay_gen_error($message)
	{
		return json_encode(array(
			"jsonrpc" => "2.0",
			"error" => array(
				"code" => -32000,
				"message" => $message
			),
			'id' => 1
		));
	}
	
	public function unitpay_gen_sha256_sig($method, array $params, $secretKey)
	{
		$delimiter = '{up}';
		
		ksort($params);
		unset($params['sign']);
		unset($params['signature']);

		return hash('sha256', $method.$delimiter.join($delimiter, $params).$delimiter.$secretKey);
	}
	
	public function unitpay_get_payment($unitpayId)
	{ 
		$result = $this->db->query('SELECT * FROM unitpay_payments WHERE unitpayId = \''.$unitpayId.'\' LIMIT 1');
		
		return $result->fetch_object();
	}
	
	public function unitpay_create_payment($unitpayId, $account, $sum, $itemsCount)
	{
		$query = '
		INSERT INTO
		unitpay_payments (unitpayId, account, sum, itemsCount, dateCreate, status)
		VALUES
		(
		"'.$this->db->real_escape_string($unitpayId).'",
		"'.$this->db->real_escape_string($account).'",
		"'.$this->db->real_escape_string($sum).'",
		"'.$this->db->real_escape_string($itemsCount * $this->donate_multiplier).'",
		NOW(),
		0
		)
		';

		return $this->db->query($query);
	}
	
	public function unitpay_is_account_exists($account)
	{
		$result = $this->db->query('SELECT * FROM players WHERE Names = \''.$this->db->real_escape_string($account).'\' LIMIT 1');
		
		if($result->num_rows > 0)
		{
			return true;
		}
		
		return false;
	}
	
	public function unitpay_confirm_payment($unitpayId)
	{
		$query = '
		UPDATE unitpay_payments SET
		status = 1,
		dateComplete = NOW()
		WHERE
		unitpayId = "'.$this->db->real_escape_string($unitpayId).'"
		LIMIT 1
		';
		
		return $this->db->query($query);
	}
	
	public function wlog($action, $params)
	{
		$this->db->query('INSERT INTO `ucp_log`(`ip`, `ts`, `action`, `params`) VALUES(\''.$_SERVER['REMOTE_ADDR'].'\', \''.time().'\', \''.$action.'\', \''.json_encode($params).'\')');
		return 1;
	}
	
	public function rcon($server_id, $command)
	{
		$ipdata = explode(":", $this->server_data[$server_id]['ip']);
		
		$ip = $ipdata[0];
		$port = strval($ipdata[1]);
		
		$sock = fsockopen('udp://'.$ip, $port, $iError, $sError, 2);
		
		if(!$sock)
		{
			return false;
		}
		
		socket_set_timeout($sock, 2);
		
		$packet = 'SAMP';
		$packet .= chr(strtok($ip, '.'));
		$packet .= chr(strtok('.'));
		$packet .= chr(strtok('.'));
		$packet .= chr(strtok('.'));
		$packet .= chr($port & 0xFF);
		$packet .= chr($port >> 8 & 0xFF);
		$packet .= 'p4150';
		
		fwrite($sock, $packet);
		
		if(fread($sock, 10))
		{
			if(fread($sock, 5) == 'p4150')
			{
				$packet = 'SAMP';
				$packet .= chr(strtok($ip, '.'));
				$packet .= chr(strtok('.'));
				$packet .= chr(strtok('.'));
				$packet .= chr(strtok('.'));
				$packet .= chr($port & 0xFF);
				$packet .= chr($port >> 8 & 0xFF);
				$packet .= 'x';
				
				$packet .= chr(strlen($this->rcon_password) & 0xFF);
				$packet .= chr(strlen($this->rcon_password) >> 8 & 0xFF);
				$packet .= $this->rcon_password;
				$packet .= chr(strlen($command) & 0xFF);
				$packet .= chr(strlen($command) >> 8 & 0xFF);
				$packet .= $command;
				
				fwrite($sock, $packet);

				$retarray = array();
				$mctime = microtime(true) + 1.0;
				
				while(microtime(true) < $mctime)
				{
					$tmp = substr(fread($sock, 128), 13);
					
					if(strlen($tmp))
					{
						$retarray[] = $tmp;
					}
					else
					{
						break;
					}
				}
				
				return $retarray;
			}
		}
		
		return false;
	}
}

?>
