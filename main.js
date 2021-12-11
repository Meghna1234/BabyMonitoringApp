status = ""
objects = [];

function preload(){
    
}

function setup(){
canvas = createCanvas(380,380)
canvas.center();
video = createCapture(VIDEO);
video.size(380,380);
video.hide();
objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "Detecting Objects"
}

function modelLoaded(){
console.log("Model is Initialized")
status = true
}

function gotResult(error, results){
    if(error){
    console.log(error);  
}
console.log(results)
objects = results;
}

function draw(){
image(video, 0,0,380,380);

if(status != "")
{
objectDetector.detect(video, gotResult); 
for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML ="Detecting Objects";
document.getElementById("number_of_objects").innerHTML = "Number of Objects Detected are " + objects.length;

fill("#ad5aad");
percent = floor(objects[i].confidence*100);
text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y)
noFill();
stroke("#ad5aad");
rect(objects[i].x-25, objects[i].y-15, objects[i].width+30, objects[i].height+30)
}
}
}

function preload() {
    song = loadSound("christmas_bells.mp3");
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

if () {
    
}