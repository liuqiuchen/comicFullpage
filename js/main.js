$(function () {
	$('#fullpage').fullpage({
		sectionsColor: ['#ADD8E6', '#D3D3D3', '#F08080', '#FAFAD2'],
		anchors: ['page1', 'page2', 'page3', 'page4'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['优秀四月新番总览表', '在下版本，有何贵干？', '甲铁城的卡巴内瑞', '12岁。'],
		verticalCentered: false,
		scrollBar: true,

		// events
		afterLoad: function (anchorLink, index) {
			console.log('anchorLink: ' + anchorLink);
			console.log('index: ' + index);

			switch (index) {
				case 1:
					move('.section1 .section1_item1').set('opacity', '1').set('margin-top', '15%').duration('.5s').end();
					move('.section1 .section1_item2').set('opacity', '1').set('margin-top', '15%').duration('.5s').end();
					move('.section1 .section1_item3').set('opacity', '1').set('margin-top', '15%').duration('.5s').end();
					break;
				case 2:
					move('.section2 h1').set('opacity', '1').set('font-size', '3.4rem').duration('.3s').end(function () {
						move('.section2 .content_text').set('opacity', '1').set('margin-left', '0').duration('.5s').end();
						move('.section2 .content_bill').set('opacity', '1').set('margin-top', '0').duration('.5s').end();
					});
					break;

			}
		},
		onLeave: function (index, nextIndex, direction) {
			console.log('nextIndex: '+ nextIndex);

			var _section1 = $('.section1');
			var _section2 = $('.section2');
			var _section3 = $('.section3');
			var _section4 = $('.section4');

			switch (nextIndex) {
				case 1:
					_section1.find('.section1_item1').css({
						'opacity': '0',
						'margin-top': '35%'
					});
					_section1.find('.section1_item2').css({
						'opacity': '0',
						'margin-top': '35%'
					});
					_section1.find('.section1_item3').css({
						'opacity': '0',
						'margin-top': '35%'
					});
					break;
				case 2:
					_section2.find('h1').css({
						'opacity': 0,
						'font-size': '1.4rem'
					});
					_section2.find('.content_text').css({
						'opacity': 0,
						'margin-left': '-400px'
					});
					_section2.find('.content_bill').css({
						'opacity': 0,
						'margin-top': '400px'
					});
					break;
			}
		}
	});

});










