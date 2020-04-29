document.addEventListener("DOMContentLoaded", function() {

	new Swiper('.main-screen__swiper-container', {
		loop: true,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	new Swiper('.gallery-works__swiper-container', {
		spaceBetween: 30,
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
				slidesPerView: 2,
				slidesPerColumn: 1,
			},

			576: {
				slidesPerView: 2,
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
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}

	});




	jQuery('.consultation_asaid_item').click(function () {
		let atrBlock = jQuery(this).attr('data-consultation');

		jQuery('.consultation_asaid_item').removeClass('consultation_asaid_item__active');
		jQuery(this).addClass('consultation_asaid_item__active');
		jQuery('.consultation__form-block').removeClass('consultation__form-block__active');
		jQuery('#'+atrBlock).addClass('consultation__form-block__active');
	})

});





