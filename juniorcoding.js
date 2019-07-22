var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = "https://www.techwillsaveus.com/wp-content/uploads/2017/11/STEM-blog-image.jpg";

imgArray[1] = new Image();
imgArray[1].src = "https://www.thecoderschool.com/wp-content/uploads/2017/09/img.jpg";

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

window.setInterval(nextSlide, 2000);
