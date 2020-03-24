window.addEventListener('load', function(e){
	var carouselModules = document.querySelectorAll('.px2-carousel .px2-carousel__contents');
	for(var idx = 0; idx < carouselModules.length; idx ++){
		// console.log(idx);
		tns({
			container: carouselModules[idx],
			nav: true,
			controlsText: ['＜', '＞']
		});
	}
});
