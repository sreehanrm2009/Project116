noseX = 0;
noseY = 0;

function preload() {
      mustache = "https://i.postimg.cc/3x3QzSGq/m.png";
}

function setup() {
      canvas = createCanvas(300, 300);
      canvas.center();
      video = createCapture(VIDEO);
      video.size(300, 300);
      video.hide();
      posenet = ml5.poseNet(video, modelLoaded);
      posenet.on('pose', gotPoses);
}

function draw() {
      image(video, 0, 0, 300, 300);
      image(mustache, noseX, noseY, 30, 30);
}

function modelLoaded() {
      console.log("PoseNet is Initialised!");
}

function gotPoses(results) {
      if (results.length > 0) {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("Nose X = " + noseX);
            console.log("NoseY = " + noseY);
      }
}

function snap() {
      save('myFilterImage.png');
}