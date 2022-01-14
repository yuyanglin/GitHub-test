let colorScheme = [];
let weight;
let points;

function setup() {
	canvas = createCanvas(window.innerWidth, window.innerHeight)
	background(0);

	colorScheme = ['#00477','#A30000','#FF7700','#EFD28D','#00AFB5'];
	weight = 1;
	points = 20;
	angleMode(DEGREES);
  ellipseMode(CORNER);
	noFill();
}


function draw()
{
	translate(mouseX, mouseY);
	if(mouseIsPressed){
		if(mouseButton == LEFT) {
			for(let i = 0; i < points; i++){
				let colorSchemeIndex = int(random(0,5));
				stroke(colorScheme[colorSchemeIndex])
				strokeWeight(weight);
				let lineAngle = random(0, 360);
				rotate(lineAngle);
				for(let j = 0; j < random(1, 100); j++)
				{
					rotate(360);
					ellipse(points - i, points - i, j * i * .1, j * i * .1);
				}
			}
		}
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}