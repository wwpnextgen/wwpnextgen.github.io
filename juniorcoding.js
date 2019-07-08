var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = "https://cdn-images-1.medium.com/max/1600/0*4ty0Adbdg4dsVBo3.png";

imgArray[1] = new Image();
imgArray[1].src = "http://cdncontribute.geeksforgeeks.org/wp-content/uploads/Capture15.png";

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

window.setInterval(nextSlide, 1000);