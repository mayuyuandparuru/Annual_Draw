var pause = false;
var num = 60;    //抽奖人数
var numberarry = []; //存放编号
var luck_num = 1;
var regust = [];
var setbox;
var interval = null; //控制器
var startBtn = document.getElementById("start");
var flag = false; //判断是否开始
var run_luck = document.querySelector('#shownumber');
var span = document.querySelector('.close');
var btn_set=document.querySelector("#btnset");
var lownumber = 1;
let luckn;
var firstnum=num;

function begin(){     //开始结束抽奖
    if(numberarry.length < 1){
        alert("已经全部抽取完毕啦！");
    }else if(!interval){
        //console.log("start");
        startBtn.innerHTML="结束";
        //startBtn.value="jieshu";
        flag = true;
        interval = setInterval(function(){
            luckn = run_num(numberarry[Math.floor((Math.random()*numberarry.length))]);
            console.log(luckn);
        },50);
    }else if(flag==true){
        stop();
        
    }
}
function stop(){ //结束
    flag = false;
    startBtn.innerHTML="继续";
    //alert(luckn);
    clearInterval(interval);
    interval = null;
    add_num(luckn);
    numberarry.remove(luckn);
}
function run_num(number){
    run_luck.innerHTML=number;
    return number;
}
function add_num(lucknum){
    console.log(lucknum);
    document.getElementById('luck').innerHTML += "&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+lucknum+"</br>";
    //$('.lucky'.prepend("<li><div class='show_num'>"+luckn+"</div></li>"));
}
function showsetbox(){
    setbox=document.getElementById("set_box"); //获取弹窗
    setbox.style.display="block";
}
function butOnClick(){
    if(event.keyCode == 13){
        var but = document.getElementById("submit");
        but.close();
    }
}
span.onclick=function(){
    close();
}
function close(){
    setbox.style.display="none";
}
Array.prototype.remove=function(val){
    for(let i = 0;i < this.length;i ++){
        if(this[i]==val){
            this.splice(i,1);
            break;
        }
    }
}
function submit(){  //获取人数
    num = document.getElementById("innumber");
    firstnum = num.value;
    numberarry = fn(num.value);
    //alert(numberarry);
    close();
}
function fn(n){    //初始化
    if(n == 0)
    return 0;
    var arr=[];
    (function(){
        arr.unshift(n);
        n --;
        if(n!=0) arguments.callee(n);
    })();
    return arr;
}
function reset(){
    startBtn.innerHTML="开始";
    run_luck.innerHTML=0;
    console.log(firstnum);
    numberarry=fn(firstnum);
    document.getElementById("luck").innerHTML= null;
    close();
}
function launchFullScreen(element) {  
    if (element.requestFullscreen) {
       element.requestFullscreen();
     } else if (element.msRequestFullscreen) {
       element.msRequestFullscreen();
     } else if (element.mozRequestFullScreen) {
       element.mozRequestFullScreen();
     } else if (element.webkitRequestFullscreen) {
       element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
     }
 }
 function cancelFullScreen() {  
    if (document.exitFullscreen) {
       document.exitFullscreen();
     } else if (document.msExitFullscreen) {
       document.msExitFullscreen();
     } else if (document.mozCancelFullScreen) {
       document.mozCancelFullScreen();
     } else if (document.webkitExitFullscreen) {
       document.webkitExitFullscreen();
     }
 }  
