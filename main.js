var elemlist = [];
var oplist = [];//to loop over and add event listeners

var firstnum;//this is for when an operator is clicked
//the textbox will be cleared and the value will be saved here
var isopcurrent = [false,false];
var currentop;

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

oplist.push(add);oplist.push(sub);
oplist.push(div);oplist.push(mul);oplist.push(equals);

var result = document.getElementById('textbox');
elemlist.forEach((elem) =>{
    elem.addEventListener('mousedown',() => {
        if(result.innerHTML.length<13) {
            if(isopcurrent[0]) {
                result.innerHTML = result.innerHTML.substring(1,result.innerHTML.length);
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
    }
});

clear.addEventListener('mousedown',function(){
    result.innerHTML = '';
    isopcurrent = [false,true];
});