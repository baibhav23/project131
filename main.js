img = "";
status = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#f5205c");
    text("Dog", 45, 75);
    noFill();
    stroke("#f5205c");
    rect(30, 60, 450, 350 );

    fill("#2318f0");
    text("Cat", 320, 120 );
    noFill();
    stroke("#2318f0");
    rect(300, 90, 270, 320 );
}

function modelLoaded() {
    console.log("ModelLoaded!")
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults (error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}