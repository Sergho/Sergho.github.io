function header_toggle() {
	const header = document.querySelector(".header");
	const offset = window.pageYOffset;

	if(offset > 100) {
		header.classList.add("active");
	} else {
		header.classList.remove("active");
	}
}

document.addEventListener('DOMContentLoaded', () => {
  header_toggle();
});

window.addEventListener("scroll", () => {
	header_toggle();
})

// smooth scroll

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}