/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');
		$wrapper = $('#main'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#articles'),
		$main_articles = $main.children('article');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});


		
	// Methods
	$main._show = function(id, initial) {

		var $article = $main_articles.filter('#' + id);

		// No such article? Bail.
			if ($article.length == 0)
				return;

		// Handle lock.

			// Already locked? Speed through "show" steps w/o delays.
				if (locked || (typeof initial != 'undefined' && initial === true)) {

					// Mark as switching.
						$body.addClass('is-switching');

					// Mark as visible.
						$body.addClass('is-article-visible');

					// Deactivate all articles (just in case one's already active).
						$main_articles.removeClass('active');

					// Hide header, footer.
						$header.hide();
						$footer.hide();

					// Show main, article.
						$main.show();
						$article.show();

					// Activate article.
						$article.addClass('active');

					// Unlock.
						locked = false;

					// Unmark as switching.
						setTimeout(function() {
							$body.removeClass('is-switching');
						}, (initial ? 1000 : 0));

					return;

				}

			// Lock.
				locked = true;

		// Article already visible? Just swap articles.
			if ($body.hasClass('is-article-visible')) {

				// Deactivate current article.
					var $currentArticle = $main_articles.filter('.active');

					$currentArticle.removeClass('active');

				// Show article.
					setTimeout(function() {

						// Hide current article.
							$currentArticle.hide();

						// Show article.
							$article.show();

						// Activate article.
							setTimeout(function() {

								$article.addClass('active');

								// Window stuff.
									$window
										.scrollTop(0)
										.triggerHandler('resize.flexbox-fix');

								// Unlock.
									setTimeout(function() {
										locked = false;
									}, delay);

							}, 25);

					}, delay);

			}

		// Otherwise, handle as normal.
			else {

				// Mark as visible.
					$body
						.addClass('is-article-visible');

				// Show article.
					setTimeout(function() {

						// Hide header, footer.
							$header.hide();
							$footer.hide();

						// Show main, article.
							$main.show();
							$article.show();

						// Activate article.
							setTimeout(function() {

								$article.addClass('active');

								// Window stuff.
									$window
										.scrollTop(0)
										.triggerHandler('resize.flexbox-fix');

								// Unlock.
									setTimeout(function() {
										locked = false;
									}, delay);

							}, 25);

					}, delay);

			}

	};

	$main._hide = function(addState) {

		var $article = $main_articles.filter('.active');

		// Article not visible? Bail.
			if (!$body.hasClass('is-article-visible'))
				return;

		// Add state?
			if (typeof addState != 'undefined'
			&&	addState === true)
				history.pushState(null, null, '#');

		// Handle lock.

			// Already locked? Speed through "hide" steps w/o delays.
				if (locked) {

					// Mark as switching.
						$body.addClass('is-switching');

					// Deactivate article.
						$article.removeClass('active');

					// Hide article, main.
						$article.hide();
						$main.hide();

					// Show footer, header.
						$footer.show();
						$header.show();

					// Unmark as visible.
						$body.removeClass('is-article-visible');

					// Unlock.
						locked = false;

					// Unmark as switching.
						$body.removeClass('is-switching');

					// Window stuff.
						$window
							.scrollTop(0)
							.triggerHandler('resize.flexbox-fix');

					return;

				}

			// Lock.
				locked = true;

		// Deactivate article.
			$article.removeClass('active');

		// Hide article.
			setTimeout(function() {

				// Hide article, main.
					$article.hide();
					$main.hide();

				// Show footer, header.
					$footer.show();
					$header.show();

				// Unmark as visible.
					setTimeout(function() {

						$body.removeClass('is-article-visible');

						// Window stuff.
							$window
								.scrollTop(0)
								.triggerHandler('resize.flexbox-fix');

						// Unlock.
							setTimeout(function() {
								locked = false;
							}, delay);

					}, 25);

			}, delay);


	};

// Articles.
	$main_articles.each(function() {

		var $this = $(this);

		// Close.
			$('<div class="close">Close</div>')
				.appendTo($this)
				.on('click', function() {
					location.hash = '';
				});

		// Prevent clicks from inside article from bubbling.
			$this.on('click', function(event) {
				event.stopPropagation();
			});

	});

// Events.
	$body.on('click', function(event) {

		// Article visible? Hide.
			if ($body.hasClass('is-article-visible'))
				$main._hide(true);

	});

	$window.on('keyup', function(event) {

		switch (event.keyCode) {

			case 27:

				// Article visible? Hide.
					if ($body.hasClass('is-article-visible'))
						$main._hide(true);

				break;

			default:
				break;

		}

	});

	$window.on('hashchange', function(event) {

		// Empty hash?
			if (location.hash == ''
			||	location.hash == '#') {

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Hide.
					$main._hide();

			}

		// Otherwise, check for a matching article.
			else if ($main_articles.filter(location.hash).length > 0) {

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Show article.
					$main._show(location.hash.substr(1));

			}

	});

// Scroll restoration.
// This prevents the page from scrolling back to the top on a hashchange.
	if ('scrollRestoration' in history)
		history.scrollRestoration = 'manual';
	else {

		var	oldScrollPos = 0,
			scrollPos = 0,
			$htmlbody = $('html,body');

		$window
			.on('scroll', function() {

				oldScrollPos = scrollPos;
				scrollPos = $htmlbody.scrollTop();

			})
			.on('hashchange', function() {
				$window.scrollTop(oldScrollPos);
			});

	}








	
	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

					// Initialize.

			// Hide main, articles.
			$main.hide();
			$main_articles.hide();

		// Initial article.
			if (location.hash != ''
			&&	location.hash != '#')
				$window.on('load', function() {
					$main._show(location.hash.substr(1), true);
				});

})(jQuery);