class Typer{
	static DELAY = 1000;
	static LETTER_DELAY = 100;

	static contains = [];

	static createInstances() {
		document.querySelectorAll('[data-typer="typer"]').forEach((el) => {
			if (this.contains.find((item) => item.typer.config.typerId === el.dataset.typerId)) {
        return;
      }
      const dataset = el.dataset;
      const params = {};
      Object.keys(dataset).forEach((key) => {
        if (key === 'typer') {
          return;
        }
        let value = dataset[key];
        value = value === 'true' ? true : value;
        value = value === 'false' ? false : value;
        params[key] = value;
      });
      this.contains.push({ el, typer: new Typer(el, params) });
		});
	}

	static type() {
		this.contains.forEach((typer) => {
			typer = typer.typer;
			typer.type_word(0)
		})
	}

	type_word(index) {
		const word = this.config.typerText;
		if(index >= word.length){
			this.elem.dataset.typer = "";
			this.elem.dataset.typerId = "";
			const id = this.config.typerId;
			const new_typer_elem = document.querySelector('[data-typer-id="' + id + '"]')
			if(new_typer_elem){
				const dataset = new_typer_elem.dataset;
	      const params = {};
	      Object.keys(dataset).forEach((key) => {
	        let value = dataset[key];
	        value = value === 'true' ? true : value;
	        value = value === 'false' ? false : value;
	        params[key] = value;
	      });
	      const new_typer = new Typer(new_typer_elem, params);
	      new_typer.type_word(0);
			}
			return
		}
		this.elem.innerHTML += word[index];
		setTimeout(() => {
			this.type_word(index + 1);
		}, Typer.LETTER_DELAY);
	}

	constructor(elem, config) {
		this.elem = elem;
		this.config = config;
		this.typed = 'not_typed';
	}

	scrolled() {
		return this.elem.getBoundingClientRect().top < (window.innerHeight * 2 / 3);
	}

}

document.addEventListener('DOMContentLoaded', () => {
  Typer.createInstances();
  Typer.type();
});