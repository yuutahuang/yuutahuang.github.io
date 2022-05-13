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
        rect(50, 50, 100, 2);
    if (choice == 1)
        rect(50, 100, 100, 2);
    if (choice == 2)
        rect(50, 150, 100, 2);
    text("龜肉", 50, 50);
    text("便當", 50, 100);
    text("泡麵", 50, 150);
}
function mousePressed() {
    choice = int(random(3));
}
function initializeFields() {
    choice = -1;
}
