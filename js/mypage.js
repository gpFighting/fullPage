$(function () {
	$(".down").click(function () {
				$.fn.fullpage.moveSectionDown()
			});
	$("#fullpage").fullpage({
		navigation: true,
		loopBottom: true,
		loopTop: true,
		afterLoad: function (anchorLink, index) {
			
			if (index == 2) {
				$(".search").animate({"left":383,"opacity":1},1000,function () {
					$(".zi").animate({"opacity":1},600,function () {
						$(".search").hide();
						$(".small").show().animate({"height":30,"bottom":452,"left":600},1000);
						$(".good").animate({"width":441,"height":218},1000);
						$(".word2").animate({"opacity":1},600);
						$(".down").fadeIn()
					})
				})
			}

		},
		onLeave: function (index,nextIndex,direction) {
			$(".down").fadeOut();
			if (index === 2 && nextIndex === 3) {
				$(".shirt2").show().animate({"width":207,"bottom":-($(window).height()-255),"left":255},1500,function () {
					$(".sml1").animate({"opacity":1},500,function () {
						$(".btn11").show();
						$(".down").fadeIn()
					})
				});
				$(".cover").show();

			}
			if (index === 3 && nextIndex === 4) {
				$(".shirt2").hide();
				$(".shirt3").show().animate({"bottom":-($(window).height()-250+50),"left":255},1500,function () {
					$(this).hide();
					$(".carShirt").show();
					$(".car").animate({"left":1800},2000,function () {
						$(".t1").animate({"opacity":1},300,function () {
							$(".pop").animate({"opacity":1},800);
							$(".down").fadeIn()
						})
					});
					$(".word4a").animate({"opacity":1},800)
				});
			}
			if (index == 4 && nextIndex == 5) {
				$(".hand").animate({"bottom":0},800,function () {
					$(".mousea").show();
					$(".t1f-5").animate({"bottom":70,"opacity":1},800,function () {
						$(".xx").animate({"bottom":390},800,function () {
							$(".word-5").addClass("word-5a");
							$(".down").fadeIn()
						})
					})
				})
			}
			if (index === 5 && nextIndex === 6) {
				$(".t1f-5").animate({"bottom":-($(window).height()-500),"height":60,"left":"41%"},1500);
				$(".box").animate({"left":"38%"},1000,function () {
					$(".t1f-5").hide();
					$(this).animate({"bottom":40},800,function () {
						$(this).hide();
						$(".city").animate({"opacity":1},1000);
						$(".section6").animate({"backgroundPositionX":"100%"},2000,"easeInOutCubic",function () {
							$(".men").animate({"height":305,"bottom":116},1000,function () {
								$(this).animate({"right":500},800,function () {
									$(".door").animate({"opacity":1},800);
									$(".women").show().animate({"height":294,"right":350},1000);
									$(".word-6").show().animate({"left":"30%"},1000);
									$(".got").show();
									$(".down").fadeIn()
								})
								
							})
						})
					})
				})
			}
			if (index === 6 && nextIndex === 7) {
				setTimeout(function () {
					$(".star").animate({"width":120},1000,function () {
						$(".well").show();
						$(".down").fadeIn()
					}) 
				},1000)
			}
			$(document).mousemove(function (e) {
				var x = e.pageX - $(".hand1").width() / 2;
				var y = e.pageY + 10;
				y = y < $(window).height()-$(".hand1").height()? $(window).height()-$(".hand1").height() : y;
				$(".hand1").css({"left":x,"top":y})
			})
			$(".btn").hover(function () {
				$(".btn2").toggle();
			})
			$(".again").click(function () {
				$.fn.fullpage.moveTo(1);
				$("img,.re").attr("style","")
			})

		},
	});
	for (var i = 1; i <= 74; i++) {
		var img = $("<img data-src='picture/"+i+".png'>");
		$("#circlr").append(img);
	}
	var crl = circlr('circlr', {
	  scroll : true,
	  loader : 'loader'
	});
	
})