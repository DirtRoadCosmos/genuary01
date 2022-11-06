const INTERVALS = 10000;
const START = new Date('2022-01-01T00:00:00');
const MINS = 365 * 24 * 60;
const INTERVAL_MINS = Math.floor(MINS / INTERVALS);
const INTERVAL_SECS = Math.round(((MINS / INTERVALS) % 1) * 60);
const INTERVAL_MILLIS = MINS * 60 * 1000 / INTERVALS;
let dots = [];
let intervalsPassed;

function setup() {
  randomSeed(51);
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < INTERVALS; i++) {
    dots.push(new Dot(0));
  }
  
  background(35);
  let theDate = Date.now()
  intervalsPassed = floor((theDate - START)/INTERVAL_MILLIS);
  dots[0].setValue(1);
  dots[0].x = max(dots[0].x, 10);
  dots[0].x = min(dots[0].x, width-100);
  dots[0].y = max(dots[0].y, 100);
  dots[0].y = min(dots[0].y, height-30);
  for (let i = 1; i < intervalsPassed; i++) {
    dots[i].setValue(2);
  }
  for (let i = dots.length-1; i >= 0; i--) {
    dots[i].show();
  }
  textSize(16);
  textStyle(BOLD);
  fill(220);
  text("2022 has 10,000 dots", 10, 30);
  textSize(13);
  textStyle(NORMAL);
  text("each dot is " + INTERVAL_MINS + "min " + INTERVAL_SECS + "sec", 10, 47)
  textSize(13);
  textStyle(NORMAL);
  fill(220, 180, 180);
  let down = intervalsPassed + " down,";
  text(down, 10, 64);
  fill(210, 210, 35);
  text(INTERVALS - intervalsPassed + " to go", 15 + textWidth(down), 64);
}

function draw() {
 

}

class Dot {
  constructor(val) {
    this.x = random(width);
    this.y = random(height);
    this.val = val;
  }

  show() {
    if (this.val === 0) {
      fill(210, 210, 35);
      noStroke();
      circle(this.x, this.y, 2);
    } else if (this.val === 1) {
      strokeWeight(2);
      stroke(220, 35, 35, 100);
      fill(220, 35, 35);
      circle(this.x, this.y, 4);
      fill(220, 50, 50);
      stroke(35);
      let remainingMins = 22;
      let remainingSecs = 14;
      textStyle(BOLD);
      text("you are here", this.x+5, this.y+10);  
      // textStyle(NORMAL);
      // text("for another\n" + remainingMins + "min " + remainingSecs + "sec", this.x+5, this.y+26)
    } else if (this.val === 2) {
      noStroke();
      fill(120, 80, 80);
      circle(this.x, this.y, 2);
    }
  }

  setValue(val) {
    this.val = val;
  }
}
