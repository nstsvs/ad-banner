var languages = {
	en: {
	  download: "Download",
	  title: "Boost your mobile by 50% with just 1-tap!",
	  info: "Magic Cleaner is a utility to speed up your phone and optimize performance. This speed booster make full use of the accessibility service to thoroughly and durably stop the unnecessary process of running apps in background.",
	  clean: "Clean up the memory and make phone faster",
	  speed: "Speed up memory in seconds",
	  besides: "Besides stopping the running app",
	  junk: "Junk File Cleaner",
	  ignore: "There is also the ignore list for you to add apps you want to keep running",
	  tap: "1. Tap 'Download' button and install Magic Cleaner right now!",
	  open: "2. Open application and enjoy!",
	  button_lang: "Сменить язык"
	},
	rus: {
	  download: "Скачать",
	  title: "Ускорьте свой мобильный на 50% всего одним нажатием!",
	  info: "Magic Cleaner - это утилита для ускорения работы вашего телефона и оптимизации его работы. Этот ускоритель в полной мере использует специальные возможности, чтобы полностью и надолго остановить ненужный процесс запуска приложений в фоновом режиме.",
	  clean: "Очистите память и сделайте телефон быстрее",
	  speed: "Ускорение памяти за секунды",
	  besides: "Кроме остановки запущенного приложения",
	  junk: "Очиститель нежелательных файлов",
	  ignore: "Существует также список игнорирования для добавления приложений, которые вы хотите продолжить использовать",
	  tap: "1. Нажмите кнопку «Скачать» и установите Magic Cleaner прямо сейчас!",
	  open: "2. Откройте приложение и наслаждайтесь!",
	  button_lang: "Change language"
	}
  };
  
  (function() {
	var currentLanguage;
	var isButtonBlocked = false;
	var div = document.querySelector("div");
	var updateLayout = function() {
	  isButtonBlocked = true;
	  currentLanguage = div.getAttribute("lang");
  
	  if (!languages[currentLanguage]) {
		currentLanguage = "en";
	  }
  
	  var fields = div.querySelectorAll("[data-field]");
	  fields.forEach(function(el) {
		const type = el.getAttribute("data-field");
  
		if (!languages[currentLanguage][type]) {
		  console.warn("Error: Field with type '" + type + "' is not supported.");
		  return;
		}
  
		el.textContent = languages[currentLanguage][type];
	  });
	  setTimeout(function() {
		div.classList.remove('div-anim');
		div.classList.remove('div-anim-rtl');
		isButtonBlocked = false;
	  }, 500);
	};
  
	var changeBtn = document.querySelector("button.change-language");
	changeBtn.onclick = function() {
	  if (isButtonBlocked) {
		return;
	  }
  
	  if (currentLanguage === "en") {
		div.setAttribute("lang", "rus");
		div.style.direction = "ltr"
		updateLayout();
		return;
	  }
	  div.setAttribute("lang", "en");
	  div.style.direction = "ltr"
	  updateLayout();
	};
	div.style.display = 'block';
	updateLayout();
  })();
