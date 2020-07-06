//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello World!';
let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'E:/DS_work/GitHub/reposity/sxd1226.github.io/test-site/image/firefox.jpg'){
        //注意斜杠不能为反斜杠
        myImage.setAttribute('src','E:/DS_work/GitHub/reposity/sxd1226.github.io/test-site/image/nike.jpg');
    }
    else{
        myImage.setAttribute('src','E:/DS_work/GitHub/reposity/sxd1226.github.io/test-site/image/firefox.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入你的名字:');//提醒
    if(!myName || myName === null){
        setUserName();
    }
    else{
        //将数据存储在家浏览器中,setItem函数创建一个name的数据项,并把myName变量复制给它
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Mozilla酷毙了,' + myName;
    }
}

if(localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla酷毙了,' + storedName;
}

myButton.onclick = function(){
    setUserName();
}