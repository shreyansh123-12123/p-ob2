img="";
status="";
objects=[];
function preload() {
    img=loadImage("bedroom.jpeg");
}
function setup(){
   canvas = createCanvas(400,350);
   canvas.position(550,300)
   objectDectector=ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("status").innerHTML="Status: detecting objects";
}
function modelLoaded(){
    console.log("model is loaded !!!!!!!!!!!!!!!!!!!!!!!!!!")
    status=true;
    objectDectector.detect(img,gotResult);
}
function draw(){
    image(img,0,0,400,350);
    if(status != ""){
        for(var i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status: objects detected";
            fill("#ff0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + "  " + percent + "%" , objects[i].x+20 , objects[i].y+20);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height );

        }
    }
}
    
    



function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}