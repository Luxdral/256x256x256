/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-07 10:43:25
\*----------------------------------------*/
//http://qnimate.com/detect-shake-using-javascript/
document.addEventListener("DOMContentLoaded", setup);

function swipeHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("swipeHandler!");
}


function setup(){
	var swipe = new Hammer(document);
	swipe.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
	// detect swipe and call to a function
	swipe.on('swiperight swipeleft swipeup swipedown', function(e) {
			alert(e.type);

		if(e.type == 'swiperight'){}
		if(e.type == 'swipeleft'){}
		if(e.type == 'swipeup'){}
		if(e.type == 'swipedown'){}
	});
}
