document.addEventListener("DOMContentLoaded", function() {

	let mainScreenGalleryThumbs = new Swiper('.main-screen__gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		direction: 'vertical',
		height: 300
	});
	new Swiper('.main-screen__swiper-container', {
		loop: true,
		thumbs: {
			swiper: mainScreenGalleryThumbs
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});



	new Swiper('.gallery-works__swiper-container', {
		spaceBetween: 15,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
		breakpoints: {
			1024: {
				slidesPerView: 4,
				slidesPerColumn: 2,
			},
			768: {
				slidesPerView: 1,
				slidesPerColumn: 1,
			},

			576: {
				slidesPerView: 2,
			},
		}
	});

	new Swiper('.gallery-works-pull__swiper-container', {
		spaceBetween: 15,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				slidesPerColumn: 2,
			},
			768: {
				slidesPerView: 2,
				slidesPerColumn: 1,
			},

			576: {
				slidesPerView: 1,
			},
		}
	});




	var galleryThumbs = new Swiper('.services_gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	new Swiper('.services_swiper-container', {
		spaceBetween: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});

	new Swiper('.certificate_swiper-container', {
		loop: true,
		spaceBetween: 7,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
		breakpoints: {
			1024: {
				slidesPerView: 5,
			},
			768: {
				slidesPerView: 3,
			},

			576: {
				slidesPerView: 1,
			},
		}
	});



	// Start передвижка кнопок слайдера
	jQuery('.gallery-works_section .swiper_container-navigation').parent().after($('.gallery-works_section .swiper_container-navigation'));
	jQuery('.services .swiper_container-navigation').parent().after($('.services .swiper_container-navigation'));
	jQuery('.gallery-works-pull .swiper_container-navigation').parent().after($('.gallery-works-pull .swiper_container-navigation'));
	jQuery('.gallery-works-pull .swiper-pagination').parent().after($('.gallery-works-pull .swiper-pagination'));
	jQuery('.certificate .swiper_container-navigation').parent().after($('.certificate .swiper_container-navigation'));

	// End передвижка кнопок слайдера

	jQuery('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}

	});


	jQuery('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	jQuery(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		jQuery.magnificPopup.close();
	});

	jQuery('.consultation_asaid_item').click(function () {
		let atrBlock = jQuery(this).attr('data-consultation');

		jQuery('.consultation_asaid_item').removeClass('consultation_asaid_item__active');
		jQuery(this).addClass('consultation_asaid_item__active');
		jQuery('.consultation__form-block').removeClass('consultation__form-block__active');
		jQuery('#'+atrBlock).addClass('consultation__form-block__active');
	});

	jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});


	// Start fixed header menu
	window.onscroll = function (e) {
		var scrolClient = window.scrollY,
			blockMenu = document.querySelector('.header'),
			classFixedMenu = "headhesive--stick";
		if (scrolClient > 200){
			blockMenu.classList.add(classFixedMenu);
		} else {
			blockMenu.classList.remove(classFixedMenu);
		}
	};
	// End fixed header menu



});





