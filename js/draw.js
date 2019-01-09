var pause = false;
var num = 0;    //抽奖人数
var numberarry = new Array(); //存放编号

function start(){

}
function stop(){
    
}
/*$("a.config").click(function(){
    pause = true;
})*/
function showsetbox(){
    var setbox=document.getElementById("set_box"); //获取弹窗
    var btn_set=document.getElementById("btnset");
    setbox.style.display="block";
    function close(){
    setbox.style.display="none";
    }
}

function submit(){
    num = document.getElementById("innumber");
    for(var i = 0;i < num;i ++){
        numberarry[i] = i+1;
    }
    for(var i = 0;i < num;i ++){
        window.alert(numberarry[i]);
    }
}
function reset(){
    
}
function read(){
    
}
function move(){
    var $shownumber = $("shownumber");
    var interTime = 30;
    timer = setInterval(function(){
        
    })
}