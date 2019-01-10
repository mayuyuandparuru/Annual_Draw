var pause = false;
var num = 60;    //抽奖人数
var numberarry = []; //存放编号
var luck_num = 1;
var regust = [];
var interval; //控制器
var startBtn = document.getElementById(start);
var flag = false; //判断是否开始
var run_luck = $('#shownumber');
var span = document.querySelector('.close');
var btn_set=document.getElementById("btnset");


function start(){     //开始结束抽奖
    if(numberarry.length < 1){
        alert("已经全部抽取完毕啦！");
    }else if(!interval){
        //console.log("start");
        startBtn.html("结束");
        //startBtn.value="jieshu";
        flag = true;
        interval = setInterval(function(){
            let luckn = run_num(numberarry[Math.floor((Math.random()*numberarry.length))]);
            if(flag == false&&numberarry){
                add_num(luckn);
            }
            if(){
                clearInterval(interval);
                flag=false;
                interval=null;
                startBtn.html("");
            }
        },50);
    }else if(flag==true){
        flag = false;
    }
}
/*function stop(){ //结束
    flag = false;
    //alert(luckn);
    clearInterval(interval);
    interval = null;
}*/
function run_num(number){
    run_luck.html(number);
    return number;
}
function add_num(luckn){
    $('.lucky'.prepend("<li><div class='show_num'>"+luckn+"</div></li>"));
}
function showsetbox(){
    var setbox=document.getElementById("set_box"); //获取弹窗
    setbox.style.display="block";
    function close(){
    setbox.style.display="none";
    }
}

function submit(){  //获取人数
    num = document.getElementById("innumber");
    numberarry = fn(num.value);
    //alert(numberarry);
}
function fn(n){    //初始化
    var arr=[];
    (function(){
        arr.unshift(n);
        n --;
        if(n!=0) arguments.callee(n);
    })();
    return arr;
}
function reset(){
    
}
function read(){
    
}
function move(){
    var $shownumber = $("shownumber");
    var interTime = 30;
    //timer = setInterval(function(){
        
    //})
}