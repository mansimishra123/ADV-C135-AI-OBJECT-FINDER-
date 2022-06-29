status=""
object=[]

function setup(){
    canvas= createCanvas(380,380)
    canvas.center()

    video= createCapture(VIDEO)

    video.size(380,380)
    video.hide()

}

function modelLoaded(){

    console.log("Model Loaded !")
    status=true;
    }


function begin(){
    
        objectDetector=ml5.objectDetector("cocossd",modelLoaded)
        document.getElementById("status").innerHTML="Status: detecting objects "
        input_text=document.getElementById("input_id").value
    
    }

function draw(){

    image(video,0,0,380,380)
    if(status !=""){
        objectDetector.detect(video,gotResult)
        for(i=0;i<object.length;i++){

            document.getElementById("status").innerHTML="Status:objects detected "
                        fill("red")
                        precent=floor(object[i].confidence*100)
                        text(object[i].label+""+precent+"%",object[i].x,object[i].y)
                        noFill()
                        stroke("red")
                        rect(object[i].x,object[i].y,object[i].width,object[i].height)


                        if(object[i].label==input_text){

                            video.stop()

                            objectDetector.detect(gotResult)
                            document.getElementById("object_found").innerHTML=input_text+"found"

                            synth=window.speechSynthesis
                            utterthis=new SpeechSynthesisUtterance(input_text+"found")
                            synth.speak(utterthis)
                        }

                        else{
                            document.getElementById("object_found").innerHTML=input_text+"not found"

                        }
        }
    }
}

function gotResult(error,result){
    if(error){
        console.log(error)
    }

    console.log(result)

    object=result
}

