$(document).ready(function(){
	//alert($(window).width());
	 $(".rating ul li").click(function(){
		 $(this).addClass("active");
			 $(this).prevAll().addClass("active"); 
			 $(this).nextAll().removeClass("active");
	 });
	 
	 $(".addCommend").click(function(){
		 $(this).next(".hideDiv").fadeIn();
	 });
	 
		 $(".media").slice(0, 2).show();
		 $("#loadMore").on("click", function(e){
		 e.preventDefault();
		 $(".media:hidden").slice(0, 2).slideDown();
		 if($(".media:hidden").length == 0) {
			 $("#loadMore").text("No Content").addClass("noContent");
		 }
		 });
		 
	 $("nav ul li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
	 }).eq(0);
	
	 $(".colorPanal ul li a").click(function(){
	 var dataSrc = $(this).attr('data-img');
	 $(this).parent().addClass('active').siblings().removeClass('active');
	 $('#details figure').find('img').attr('src',dataSrc);
	 //alert(dataSrc)
	 }).eq(1);
	 
	 $(".tab li a").click(function(){
			$(this).parent("li").addClass("active").siblings().removeClass("active"); 
			 
			 var innertext1 = $(this).text();
			 var changetext = $(".rotate").text();
			
		 $(this).parents(".tab").prev().text(innertext1);
		});
	 
	 $('.productList.owl-carousel').owlCarousel({
		 loop:true,
		 margin:0,
		 autoplay:true,
		 autoplayTimeout:1500,
				 autoplayHoverPause:true,
		 //nav:true,
		 //navigation : true,
		 //pagination: true,
		 responsive:{
			 0:{
				 items:6
			 },
			 320:{
				 items:2
			 },
			 360:{
				 items:2
			 },
			 480:{
				 items:2
			 },
			 600:{
				 items:4
			 },
			 1024:{
				 items:6
			 }
		 }
		 });
		 
 
 
 
		$('.tab ul li').click(function (){
			$(this).addClass("active").siblings().removeClass("active");
			 changehtml();
		 }); 
		 
 });
 
	
 
 /*hamburger-menu start*/
 $(function() {
	 function slideMenu() {
		 var activeState = $(".rightNav").hasClass("active");
		 $(".rightNav").animate({left: activeState ? "0%" : "-100%"}, 400);
	 }
	 $("#hamburger-menu").click(function(event) {
		 event.stopPropagation();
		 $("#hamburger-menu").toggleClass("open");
		 $(".rightNav").toggleClass("active");
	 $(".trasperent").toggleClass("active");
		 slideMenu();
 
		 $("body").toggleClass("overflow-hidden");
	 });
 
		
 }); 
 
 
 
 // mainNav
 var lastId,
	topMenu = $("#mainNav"),
	topMenuHeight = topMenu.outerHeight()+1,
 
	menuItems = topMenu.find("a"),
 
	scrollItems = menuItems.map(function(){
		var item = $($(this).attr("href"));
		 if (item.length) { return item; }
	});
 
 
 menuItems.click(function(e){
	 var href = $(this).attr("href"),
			 offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	 $('html, body').stop().animate({ 
			 scrollTop: offsetTop
	 }, 850);
	 e.preventDefault();
 });
 
 function changehtml(){
	 debugger;
	 var changetext = $(".rotate").text(); 
	 $('.leftList ul li').each(function (){
		 var innertext1 = $(this).find("a").text();
		 //console.log(innertext1);
		 if($(this).hasClass("active")){
			 $(this).parents(".tab").prev(".rotate").text(innertext1);
		 }
			
		 });
 };  
 
 
 $(window).scroll(function() {
	 
	 
		 var scrollDistance = $(window).scrollTop();
 
		 // Assign active class to nav links while scolling
		 $('.page-section').each(function(i) {
				 if ($(this).position().top <= scrollDistance) {
						 $('.tab li').removeClass('active');
						 $('.tab li').eq(i).addClass('active');
				 }
				 // changehtml();
		 });
		 
		 
			var custtop = $("#CustomTab").scrollTop();	
		 if ($(this).scrollTop() >= 2700) {         
					$(".fixWrap").css({position: 'static'});   
			 } else {
					$(".fixWrap").css({position: 'fixed'})  
			 }	
			 
 // scroll up
	 
		 
 if ($(this).scrollTop() >= 50) {         
				 $('#return-to-top').fadeIn(200);    
		 } else {
				 $('#return-to-top').fadeOut(200);    
		 }
 });
 $('#return-to-top').click(function() {      
		 $('body,html').animate({
				 scrollTop : 0                       
		 }, 500);
	 
 }).scroll();
 
	
	