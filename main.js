var elemlist = [];
var oplist = [];//to loop over and add event listeners

var firstnum;//this is for when an operator is clicked
//the textbox will be cleared and the value will be saved here
var isopcurrent = [false,false];
var completecurrent = false;
/*
 *isopcurrent[0] says wether or not to remove the operator from the second number 
 *after the operator.
 *so if 5 was the first number, 
 *after pressing an operator button 5 will be replaced with the operator.
 *so when the second number is given, we can remove the operator from the textbox.
 *isopcurrent[1] says if the textbox shall be cleared when 
 *another number is inputted after the answer.
 */

var currentop;
var thing = false;
var cleared = false;

for(var i = 0;i < 10;i++) {
    //since the id's of the number divs are numbered this approach works
    var currentelem = document.getElementById(''+i);
    elemlist.push(currentelem);
}

var add = document.getElementById('+');
var sub = document.getElementById('-');
var div = document.getElementById('/');
var mul = document.getElementById('x');
var equals = document.getElementById('=');
var clear = document.getElementById('c');
var err = document.getElementById('err');
var del = document.getElementById('del');
var minus = document.getElementById('m');
var modular = document.getElementById('%');
var dot = document.getElementById('.');

oplist.push(add);oplist.push(sub);oplist.push(modular);
oplist.push(div);oplist.push(mul);

var result = document.getElementById('textbox');
elemlist.forEach((elem) =>{
    elem.addEventListener('mousedown',() => {
        cleared = false;
        completecurrent = false;
        if(result.innerHTML.length<18) {
            if(isopcurrent[0] && !thing) {
                result.innerHTML = result.innerHTML.substring(1,result.innerHTML.length);
                thing = true;
            }
            if(isopcurrent[1]) {
                result.innerHTML = '';
                isopcurrent[1]=false;
            }
            result.innerHTML += elem.innerHTML;
        }
    });
}); 

oplist.forEach((elem) => {
    elem.addEventListener('mousedown',() => {
        if(!isopcurrent[0] && !cleared) {
            completecurrent = true;
            currentop = elem.innerHTML;
            firstnum = Number(result.innerHTML);
            isopcurrent = [true,false];
            result.innerHTML = currentop;
            thing = false;
        }
    });
});

equals.addEventListener('mousedown',() => {
    if(isopcurrent[0] && result.innerHTML.length>=1) {
        var answer;
        isopcurrent = [false,true];
        switch(currentop) {
            case '*': answer = firstnum*Number(result.innerHTML); 
                break;
            case '/': answer = firstnum/Number(result.innerHTML); 
                break;
            case '+': answer = firstnum+Number(result.innerHTML); 
                break;
            case '-': answer = firstnum-Number(result.innerHTML); 
                break;
            case '%': answer = firstnum%Number(result.innerHTML);
                break;
        }
        result.innerHTML = answer;
        if(result.innerHTML.length>=18) {
            err.style.left = `${visualViewport.width/2-30}px`;
            err.style.top = `${visualViewport.height/2-125}px`
            err.style.color = 'red';
            result.innerHTML = result.innerHTML.substring(0,17);
        } else {
            err.style.color = 'black';
        }
        thing = false;
        completecurrent = false;
    }
});
clear.addEventListener('mousedown',() => {
    result.innerHTML = '';
    isopcurrent = [false,true];
    err.style.color = 'black';
    thing = false;
    cleared = true;
});
del.addEventListener('mousedown',() => {
    if(!completecurrent && result.innerHTML.length>=1) {
        result.innerHTML = result.innerHTML.substring(0,result.innerHTML.length-1);
        completecurrent = false;
    }
});
minus.addEventListener('mousedown',() => {
    if(result.innerHTML.length>=1 && !completecurrent && result.innerHTML[0] != '-') {
        result.innerHTML = '-'+result.innerHTML;
        completecurrent = false;
    }
});
dot.addEventListener('mousedown',() => {
    if(result.innerHTML.indexOf('.')==-1) {
        if(completecurrent) {
            result.innerHTML = result.innerHTML.substring(1,result.innerHTML.length);
            thing = true;
        }
        result.innerHTML += '.';
        completecurrent = false;
    }
});