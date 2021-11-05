//Global Variables
var cardX,cardY,cardHeight,cardWidth,bigHeartX,heartTop,r,g,b;

var r = 255;
var b = 0;
var g = 4;

function setup() {
    var canvas = createCanvas(1000, 600);
    canvas.parent('#p5Container');
    background (r,g,b);

  //initialising variables that affect all of the drawn shapes
  //x,y poisition:
  cardX= width/2;
  cardY= height/2;
  
  //height and width of cardd
  cardWidth=100;
  cardHeight=cardWidth+50;
  
  //variables that affect hearts
  heartTop=10;
  bigHeartX=cardX+(cardWidth/2)

}

function mousePressed(){
  r = 255;
  g = 0;
  b = 0;
}

function mouseReleased(){
 r = 255;
 g = 137;
 b = 137;
}

function mouseDragged(){
 r = 16;
 g = 255;
 b = 0;
}

function mouseMoved(){
 r = 255;
 g = mouseX;
 b = mouseY;
}


function draw() {
    //background(r,g,b);

var cardX = mouseX;
var cardY = mouseY; 

line(mouseX,mouseY,pmouseX,pmouseY);
  
//PLAYING CARD

//back
strokeWeight(2);
stroke(51);
fill(255, 255, 255)
rect(cardX, cardY, cardWidth, cardHeight)

//2
noStroke()
fill(255, 30, 34);
textSize(25);
text('3', cardX+8, cardY+26);

noStroke()
fill(255, 30, 34);
textSize(25);
text('Ɛ', cardX+79, cardY+140); 

//big hearts

noStroke()
fill(255, 30, 34)
ellipse(cardX+45,cardY+70, 12);
noStroke()
fill(255, 30, 34)
ellipse(cardX+55,cardY+70, 12);
noStroke()
fill(255, 30, 34)
triangle(cardX+38.5,cardY+71, cardX+50, cardY+85, cardX+60.5, cardY+71);

noStroke()
fill(255, 30, 34)
ellipse(cardX+45,cardY+40, 12);
noStroke()
fill(255, 30, 34)
ellipse(cardX+55,cardY+40, 12);
noStroke()
fill(255, 30, 34)
triangle(cardX+38.5,cardY+41, cardX+50, cardY+55, cardX+60.5, cardY+41);

noStroke()
fill(255, 30, 34)
ellipse(cardX+45,cardY+108, 12);
noStroke()
fill(255, 30, 34)
ellipse(cardX+55,cardY+108, 12);
noStroke()
fill(255, 30, 34)
triangle(cardX+38.5,cardY+105, cardX+50, cardY+95, cardX+60.5, cardY+105);

//little hearts

noStroke()
fill(255, 30, 34)
ellipse(cardX+83, cardY+110, 8);
noStroke()
fill(255, 30, 34)
ellipse(cardX+89,cardY+110, 8);
noStroke()
fill(255, 30, 34)
triangle(cardX+79,cardY+110, cardX+86, cardY+100, cardX+93, cardY+110);

noStroke()
fill(255, 30, 34)
ellipse(cardX+12, cardY+37, 8);
noStroke()
fill(255, 30, 34)
ellipse(cardX+20, cardY+37, 8);
noStroke()
fill(255, 30, 34)
triangle(cardX+8,cardY+37, cardX+16, cardY+47, cardX+24, cardY+37);





}