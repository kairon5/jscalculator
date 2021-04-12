var width = visualViewport.width;
var height = visualViewport.height;

var numberslist = [];
for(var i = 0;i < 10;i++) {
    var currentnumber = document.getElementById(''+i);
    currentnumber.style.top = `${20*(i-i%3)+80}px`;
    currentnumber.style.left = `${width/2+60*(i%3)-80}px`;
    if(i==9) currentnumber.style.left=`${width/2-20}px`;
    numberslist.push(currentnumber); 
}

var add = document.getElementById('+');
var sub = document.getElementById('-');
var div = document.getElementById('/');
var mul = document.getElementById('x');
var equals = document.getElementById('=');
var clear = document.getElementById('c');
var del = document.getElementById('del');
var minus = document.getElementById('m');
var modular = document.getElementById('%');
var dot = document.getElementById('.');

dot.style.left = `${width/2-140}px`;  
modular.style.left = `${width/2-140}px`; 
del.style.left = `${width/2-140}px`;
minus.style.left = `${width/2-140}px`;
clear.style.left = `${width/2-80}px`;
add.style.left = `${width/2+100}px`;
sub.style.left = `${width/2+100}px`;
div.style.left = `${width/2+100}px`;
mul.style.left = `${width/2+100}px`;
equals.style.left = `${width/2+40}px`;

dot.style.top = `140px`;
modular.style.top = `200px`;
minus.style.top = `80px`;
del.style.top = `260px`;
clear.style.top = `260px`;
add.style.top = `80px`;
sub.style.top = `140px`;
div.style.top = `260px`;
mul.style.top = `200px`;
equals.style.top = `260px`;

var operatorlist = [];
operatorlist.push(clear);operatorlist.push(add);operatorlist.push(sub);
operatorlist.push(div);operatorlist.push(mul);operatorlist.push(equals);
operatorlist.push(modular);operatorlist.push(del);operatorlist.push(minus);
operatorlist.push(dot);

var typebox = document.getElementById('textbox');
typebox.style.left = `${width/2-160}px`;
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