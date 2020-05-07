document.addEventListener("DOMContentLoaded", function() {

	let mainScreenGalleryThumbs = new Swiper('.main-screen__gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		direction: 'vertical',
		height: 300,
	});
	let mainScreenGallery = new Swiper('.main-screen__swiper-container', {
		loop: true,
		autoplay: {
			delay: 5000,
			stopOnLastSlide: true,
			disableOnInteraction: true
		},
		thumbs: {
			swiper: mainScreenGalleryThumbs
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	jQuery('.main-screen input').click(function () {
		mainScreenGallery.autoplay.stop();
	});

	new Swiper('.gallery-works__swiper-container', {
		spaceBetween: 15,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			992: {
				slidesPerView: 4,
				slidesPerColumn: 2,
			},
			768: {
				slidesPerView: 4,
				slidesPerColumn: 1,
			},

			576: {
				slidesPerView: 1,
			},

			320: {
				slidesPerView: 1,
			},
		}
	});

	new Swiper('.gallery-works-pull__swiper-container', {
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				slidesPerColumn: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				slidesPerColumn: 2,
				spaceBetween: 15,
			},

			320: {
				slidesPerView: 1,
				spaceBetween: 0,
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
		spaceBetween: 15,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			1400: {
				slidesPerView: 5,
			},
			1024: {
				slidesPerView: 5,
			},
			768: {
				slidesPerView: 5,
			},

			576: {
				slidesPerView: 1,
			},
		}
	});


	new Swiper('.command_swiper-container', {
		slidesPerView: 5,
		slidesPerColumn: 2,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			1024: {
				slidesPerView: 5,
				slidesPerColumn: 2,
			},
			768: {
				slidesPerView: 4,
				slidesPerColumn: 2,
				},
			320: {
				slidesPerView: 1,
				slidesPerColumn: 1,
			}
		}
	});



	// Start передвижка кнопок слайдера
	jQuery('.main-screen .swiper_container-navigation').parent().after($('.main-screen .swiper_container-navigation'));
	jQuery('.gallery-works_section .swiper_container-navigation').parent().after($('.gallery-works_section .swiper_container-navigation'));
	jQuery('.services .swiper_container-navigation').parent().after($('.services .swiper_container-navigation'));
	jQuery('.gallery-works-pull .swiper_container-navigation').parent().after($('.gallery-works-pull .swiper_container-navigation'));
	jQuery('.gallery-works-pull .swiper-pagination').parent().after($('.gallery-works-pull .swiper-pagination'));
	jQuery('.certificate .swiper_container-navigation').parent().after($('.certificate .swiper_container-navigation'));
	jQuery('.command .swiper_container-navigation').parent().after($('.command .swiper_container-navigation'));

	// End передвижка кнопок слайдера

	jQuery('.command .command_item').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true		}

	});


	jQuery('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true		}

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
		//disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});


	jQuery('.gallery-works_section .swiper-wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				//return item.el.attr('title') + '<small></small>';
				//return  '<a  href="#form-modal" class="btn btn_accent popup-modal gallery-works_btn-form">Хочу такой бассейн</a>';
			}
		},

		 callbacks: {
			change: function() {
				setTimeout(function () {
					console.log('change')
					jQuery('.gallery-works_btn-form').click(function () {
						console.log('tyt');
						jQuery('.gallery-works_section .swiper-wrapper').magnificPopup('close');
						jQuery('.popup-modal').magnificPopup('open')
					})
				}, 500)
			}
		 }
	});


	jQuery('.gallery-works-pull .swiper-wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});


	$("input[name=tel]").mask("+38 (999) 999-99-99");


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




	function getParameterByName(name) {
		var name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		let regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
		let results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		}

		// Give the URL parameters variable names
		let source = getParameterByName('utm_source');
		let medium = getParameterByName('utm_medium');
		let campaign = getParameterByName('utm_campaign');
		let content = getParameterByName('utm_content');
		let term = getParameterByName('utm_term');

		// Put the variable names into the hidden fields in the form.
		jQuery(".utm_source").val(source);
		jQuery(".utm_medium").val(medium);
		jQuery(".utm_campaign").val(campaign);
		jQuery(".utm_content").val(content);
		jQuery(".utm_term").val(term);

});





