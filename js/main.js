// 
// ================================================== 
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__block-nav');
let liHeader = document.querySelectorAll('.header__menu-item');

burger.addEventListener('click', rotateBurger); 

for(let i = 0; i < liHeader.length; i++ ) {
	if (window.innerWidth < 990 ) {
		liHeader[i].addEventListener('click', rotateBurger);
	}
}


function rotateBurger() { 
  burger.classList.toggle('burger-active');

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

// ===============================================

$('.sliderr').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 445,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});