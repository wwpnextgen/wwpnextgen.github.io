var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = "https://www.techwillsaveus.com/wp-content/uploads/2017/11/STEM-blog-image.jpg";
imgArray[0].classList.add("fadein");

imgArray[1] = new Image();
imgArray[1].src = "https://www.thecoderschool.com/wp-content/uploads/2017/09/img.jpg";
imgArray[1].classList.add("fadein");

function nextSlide(){
	var img = document.getElementById("slides");
	var element = "slides";

	for(var i = 0; i < imgArray.length; i++){
		if(imgArray[i].src == img.src){
            		if(i === imgArray.length - 1){
                		document.getElementById(element).src = imgArray[0].src;
                		break;
            		}
            		else{
				document.getElementById(element).src = (imgArray[i+1]).src;
            			break;
			}
        	}
	}
}

function jumpIn(x){
	var bounding = x.getBoundingClientRect();

	if (
	bounding.top >= 0 &&
	bounding.left >= 0 &&
	bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
	bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	) {
		if(!x.classList.contains("appear")){
			x.classList.add("appear");
			x.classList.remove("hidden");
			console.log(x.classList);
		}
	} else {
		console.log('Not in the viewport... whomp whomp');
	}
}

function init(){
	var objList = document.body.getElementsByTagName("*");
	for(var i = 0; i < objList.length; i++){
		objList[i].classList.add("hidden");
	}
}

window.setInterval(nextSlide, 6000);

window.addEventListener("scroll",
	function(){
			if(window.pageYOffset > 0){
				document.getElementById("menubar").classList.add("secondTransition");
				document.getElementById("menubar").classList.remove("firstTransition");
				document.getElementById("menubar").style.backgroundColor= "orange";
			}
			else{
				document.getElementById("menubar").classList.add("firstTransition");
				document.getElementById("menubar").classList.remove("secondTransition");
				document.getElementById("menubar").style.backgroundColor= "#51D0DE";
			}
		});
