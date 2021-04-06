jQuery(document).ready(listo);


function listo()
{
	jQuery(".hamb").click(function(e){
		e.preventDefault();
		jQuery("header .container-home nav").toggleClass("open");
		jQuery(".hamb i").toggleClass("fa-times");
	});
	jQuery("header .container-home nav a").click(function(){

		jQuery("header .container-home nav").removeClass("open");
		jQuery(".hamb i").removeClass("fa-times");
		var dev= jQuery(this).attr("href");
		
		jQuery("html,body").animate({
			"scrolTop": jQuery(dev).offset().top
		})
	})
}