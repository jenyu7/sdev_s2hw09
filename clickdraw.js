/*
 * Team CLIQUE
 * Jen Yu, Shannon Lau, Vivien Lee
 * SoftDev Period 7
 * 03-06-2018
 * K#09: Ask Circles [Change || Die]
 */

var svg = document.getElementById("slate");
var width = svg.getAttribute("width");
var height = svg.getAttribute("height");

var animate = document.getElementById("animate");
var dvd_a = document.getElementById("dvd");
var stop = document.getElementById("stop");

console.log(animate);
console.log(dvd_a);
console.log(stop);

//initialized radius
var r = 5;
//growing?
var grow = true;
//animation id
var id = 0;

//updates grow bool depending on radius
var update = function(r){
    if(r < 5 || r >= 400)
	grow = !grow;
};

//clears the screen and resets the prevX and prevY variables
var clearCallBack = function(e){
    while(svg.firstChild){
	svg.removeChild(svg.firstChild);
    }
};

//draws a dot, returns the x and y coordinates in a list
var drawDot = function(){
    stopA();
    clearCallBack();
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", 300);
    c.setAttribute("cy", 300);
    c.setAttribute("r", r);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    svg.appendChild(c);
    update(r);
    if(grow)
	r ++;
    else
	r --;
    id = setInterval(drawDot, 8);
};

var img = new Image();
img.src = "dvd.png";

var dvdBounce = function(){
    stopA();
    clearCallBack();
    //initializing
    var x = Math.random() * (width - img.width);
    var y = Math.random() * (height - img.height);
    var c = document.createElementNS("http://www.w3.org/2000/svg", "image");
    c.setAttribute("href", "dvd.png");
    c.setAttribute("width", img.width);
    c.setAttribute("height", img.height);
    c.setAttribute("x", x);
    c.setAttribute("y", y);
    svg.appendChild(c);
    var dx = 3 * Math.random() + 0.1;
    var dy = 3 * Math.random() + 0.1;
    var bounce = function(){
	if (x < 0 || x > width - img.width)
	    dx *= -1;
	if (y < 0 || y > height - img.height)
	    dy *= -1;
	c.setAttribute("x", x+=dx);
	c.setAttribute("y", y+=dy);
    };
    id = setInterval( bounce, 8 );
}

//stops the animation (id known through global var)
var stopA = function(){
    clearInterval(id);
};

//add the event listeners
animate.addEventListener("click", drawDot);
dvd_a.addEventListener("click", dvdBounce);
stop.addEventListener("click", stopA);

