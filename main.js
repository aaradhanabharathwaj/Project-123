left_wrist=0;
right_wrist=0;
difference=0;
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
    fill("#daf3f7");    
    fill("#ebf2f2");
    text("Aaradhana Bharathwaj", 50,50);
    textSize(difference);
}
function modelLoaded(){
    console.log("PoseNet is inisialized !!")
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        left_wrist=results[0].pose.leftWrist.x;
        right_wrist=results[0].pose.rightWrist.x;
        console.log("Left Wrist = "+left_wrist+"Right Wrist = "+right_wrist);
        difference=floor(left_wrist-right_wrist);
        console.log(left_wrist,right_wrist,difference)
    }
}