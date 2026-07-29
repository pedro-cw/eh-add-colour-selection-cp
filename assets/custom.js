/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...

const buildSwiperSlider = (sliderElm) => {
	const sliderIdentifier = sliderElm.dataset.swiper;
	return new Swiper(`#${sliderElm.dataset.swiper}`, {
		slidesPerView: "auto",
		spaceBetween: 20,
		navigation: {
			nextEl: `.sp-button-next-${sliderIdentifier}`,
			prevEl: `.sp-button-prev-${sliderIdentifier}`,
		},
	});
};

let swiperFC = document.querySelectorAll(".swipes");

if (swiperFC) {
	swiperFC.forEach((slider) => buildSwiperSlider(slider));
}


var productThumbSwiper = new Swiper(".productthumbswiper", {
	spaceBetween: 7,
	slidesPerView: "auto",
	freeMode: true,
	watchSlidesProgress: true,
	navigation: {
		nextEl: ".product-button-next",
		prevEl: ".product-button-prev",
	},
});
var productMediaSwiper = new Swiper(".productmainswiper", {
	spaceBetween: 10,
	thumbs: {
		swiper: productThumbSwiper,
	},
});

let newsletterpopup = document.querySelector('.newslettertrigger-true');

if(newsletterpopup){
	newsletterpopup.addEventListener('click', et=>{
		document.querySelector('.kl-teaser-TynMix').click();
	});
}

let tabtrigger = document.querySelectorAll('.ms__tabcontents-item-trigger');

if( tabtrigger ){
	tabtrigger.forEach(tab=>{
		tab.addEventListener('click', et=>{
			let target = et.currentTarget.dataset.content;
			if( document.querySelector('.ms__tabcontents-titleactive') ){
				document.querySelector('.ms__tabcontents-titleactive').classList.remove('ms__tabcontents-titleactive');
			}

			if( document.querySelector('.ms__tabcontents-active') ){
				document.querySelector('.ms__tabcontents-active').classList.remove('ms__tabcontents-active');
			}

			et.currentTarget.classList.add('ms__tabcontents-titleactive');
			document.getElementById(target).classList.add('ms__tabcontents-active');
		});
	});
}

let mstabtrigger = document.querySelectorAll('.ms__collections-nav-item');

if( mstabtrigger ){
	mstabtrigger.forEach(tab=>{
		tab.addEventListener('click', et=>{
			let target = et.currentTarget.dataset.target;
			if( document.querySelector('.ms__colcurrent') ){
				document.querySelector('.ms__colcurrent').classList.remove('ms__colcurrent');
			}

			if( document.querySelector('.ms__coltabactive') ){
				document.querySelector('.ms__coltabactive').classList.remove('ms__coltabactive');
			}

			et.currentTarget.classList.add('ms__colcurrent');
			document.getElementById(target).classList.add('ms__coltabactive');
		});
	});
}