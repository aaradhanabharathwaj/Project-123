function setup(){
    video=createCapture(VIDEO);
    video.size(450,400);
    canvas=createCanvas(450,400);
    canvas.position(650,250);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw(){
    background("#667e9b");
}
function modelLoaded(){
    console.log("PoseNet is inisialized !!")
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
    }
}