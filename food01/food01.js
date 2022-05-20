
function setup() {
    initializeFields();
    createCanvas(400, 300);
    textSize(40);
}

var choice;

function draw() {
    background(color(0x3F, 0xEE, 0xE2));
    fill(color(0x16, 0x1C, 0x9C));
    if (choice == 0)
        rect(50, 50, 150, 2);
    if (choice == 1)
        rect(50, 100, 150, 2);
    if (choice == 2)
        rect(50, 150, 150, 2);
     if (choice == 3)
        rect(50, 200, 150, 2);
     if (choice == 4)
        rect(50, 250, 150, 2);
    text("龜肉", 50, 50);
    text("泡麵", 50, 100);
    text("便當", 50, 150);
    text("牛排", 50, 200);
    text("大餐", 50, 250);
}

function mousePressed() {
    choice = int(random(5));
}

function initializeFields() {
    choice = -1;
}
