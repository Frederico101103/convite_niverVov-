var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 function newImage()
{
	
	fabric.Image.fromURL('WhatsApp Image 2022-07-08 at 16.07.45.jpeg', function(Img) {
    blockImageObject = Img;    

    blockImageObject.scaleToWidth(700);
    blockImageObject.scaleToHeight(510);
    blockImageObject.set({
    top:0,
    left:0			
    });
    canvas.add(blockImageObject);
    });

}    

function playSound(){
	x.play();
}