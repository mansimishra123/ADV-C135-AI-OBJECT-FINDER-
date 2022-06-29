status=""

function start(){
    
        objectDetector=ml5.objectDetector("cocossd",modelLoaded)
        document.getElementById("status").innerHTML="Status: detecting objects "
        input_text=document.getElementById("input_id").value
    
    }
    


function modelLoaded(){

    console.log("Model Loaded !")
    status=true;
    }

function setup(){
    canvas= createCanvas(300,290)
    canvas.position(480,250)

    video= createCapture(VIDEO)

    video.size(300,290)
    video.hide()

}

function draw(){

    image(video,0,0,300,290)
}

