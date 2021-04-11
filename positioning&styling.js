var width = visualViewport.width;
var height = visualViewport.height;

var numberslist = [];
for(var i = 0;i < 10;i++) {
    var currentnumber = document.getElementById(''+i);
    currentnumber.style.top = `${20*(i-i%3)+80}px`;
    currentnumber.style.left = `${width/2+60*(i%3)-110}px`;
    if(i==9) currentnumber.style.left=`${width/2-50}px`;
    numberslist.push(currentnumber); 
}

var add = document.getElementById('+');
var sub = document.getElementById('-');
var div = document.getElementById('/');
var mul = document.getElementById('x');
var equals = document.getElementById('=');
var clear = document.getElementById('c');

clear.style.left = `${width/2-110}px`;
add.style.left = `${width/2+70}px`;
sub.style.left = `${width/2+70}px`;
div.style.left = `${width/2+70}px`;
mul.style.left = `${width/2+70}px`;
equals.style.left = `${width/2+10}px`;

clear.style.top = `260px`;
add.style.top = `80px`;
sub.style.top = `140px`;
div.style.top = `260px`;
mul.style.top = `200px`;
equals.style.top = `260px`;

var operatorlist = [];
operatorlist.push(clear);operatorlist.push(add);operatorlist.push(sub);
operatorlist.push(div);operatorlist.push(mul);operatorlist.push(equals);

var typebox = document.getElementById('textbox');
typebox.style.left = `${width/2-125}px`;
typebox.style.top = '20px';

operatorlist.forEach((op) => {
    op.addEventListener('mouseover',() => {
        op.style.backgroundColor = 'rgb(90, 90, 226)';
    });
    op.addEventListener('mouseout',() => {
        op.style.backgroundColor = 'rgb(57, 57, 248)';
    });
});
numberslist.forEach((num) => {
    num.addEventListener('mouseover',() => {
        num.style.backgroundColor = 'rgb(252, 71, 71)';
    });
    num.addEventListener('mouseout',() => {
        num.style.backgroundColor = 'rgb(238, 19, 19)';
    });
});