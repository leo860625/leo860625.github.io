var myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tsmc.png'){
        myImage.setAttribute('src','images/tsmc2.png');
    }
    else{
        myImage.setAttribute('src','images/tsmc.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null){
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'TSMC is cool, ' + myName;   
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'TSMC is cool, ' + storedName;
}
myButton.onclick = function(){
    setUserName();
}