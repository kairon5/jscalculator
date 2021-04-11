var elemlist = [];
var oplist = [];//to loop over and add event listeners

var firstnum;//this is for when an operator is clicked
//the textbox will be cleared and the value will be saved here
var isopcurrent = [false,false];
var currentop;
var thing = false;

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

oplist.push(add);oplist.push(sub);
oplist.push(div);oplist.push(mul);

var result = document.getElementById('textbox');
elemlist.forEach((elem) =>{
    elem.addEventListener('mousedown',() => {
        if(result.innerHTML.length<13) {
            if(isopcurrent[0] &&!thing) {
                result.innerHTML = result.innerHTML.substring(1,result.innerHTML.length);
                thing = true;
            }
            if(isopcurrent[1]) {
                result.innerHTML = '';
            }
            result.innerHTML += elem.innerHTML;
        }
    });
}); 

oplist.forEach((elem) => {
    elem.addEventListener('mousedown',() => {
        if(!isopcurrent[0]) {
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
        }
        result.innerHTML = answer;
        if(result.innerHTML.length>=13) {
            err.style.left = `${visualViewport.width/2-30}px`;
            err.style.top = `${visualViewport.height/2-125}px`
            err.style.color = 'red';
            result.innerHTML = result.innerHTML.substring(0,12);
        } else {
            err.style.color = 'black';
        }
        thing = false;
    }
});

clear.addEventListener('mousedown',function(){
    result.innerHTML = '';
    isopcurrent = [false,true];
    thing = false;
    err.style.color = 'black';
});