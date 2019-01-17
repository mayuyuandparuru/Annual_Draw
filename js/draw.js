var pause = false;
var num;
var numberarry = []; //存放编号
var luck_num = 1;
var regust = [];
var setbox;
var interval = null; //控制器
var startBtn = document.getElementById("start");
var subbtn = document.getElementById("sub");
var flag = false; //判断是否开始
var run_luck = document.querySelector('#shownumber');
var span = document.querySelector('.close');
var drop_back;
var btn_set = document.querySelector("#btnset");
var lownumber = 1;
let luckn;
var firstnum = 60;//抽奖人数
var luckyn;
var idn = 0;

if (!localStorage.playerNum) {
    localStorage.playerNum = firstnum;
} else {
    firstnum = localStorage.playerNum;
}

var list = Array();

var init = () => {
    list = localStorage.numlist ? JSON.parse(localStorage.numlist) : [];
    numberarry = localStorage.numberarry ? JSON.parse(localStorage.numberarry) : [];
};
var push = (item) => {
    list.push(item);
    localStorage.numlist = JSON.stringify(list);
    return true
};
var get = (key) => {
    return list[key];
};

var all = () => {
    return list;
}

var clean = () => {
    delete (localStorage.numlist);
    list = [];
}

init();

print();
function print() {

    for (let i = 0; i < list.length; i++)
        add_numlo(get(i));
}
function add_numlo(key) {
    console.log(key);
    if (key === undefined) {
        return
    }
    var ul = document.getElementById("luck");
    ul.innerHTML = "<li>恭喜 " + key + " 号</li>" + ul.innerHTML;
}
startBtn.onclick = (e) => {
    console.log('------------------ click--------------')
    begin();
    e.preventDefault()
    e.stopPropagation()
}

startBtn.onkeyup = function (e) {
    if (e.keyCode == 13) {
        console.log('----------------- enter-------------', e.keyCode)
        // begin();
    }
    e.preventDefault()
    e.stopPropagation()
}
subbtn.onkeydown = function (e) {
    if (e.keyCode == 13) {
        close();
    }
}
function begin() {     //开始结束抽奖
    console.log("--------------------begin start---------------------");
    if (numberarry.length < 1) {
        startBtn.innerHTML = "没有啦";
        alert("已经全部抽取完毕啦！");
    } else if (!interval) {
        console.log("start");
        clearInterval(interval);
        startBtn.innerHTML = "结束";
        //startBtn.value="jieshu";
        flag = true;
        interval = setInterval(function () {
            luckn = run_num(numberarry[Math.floor((Math.random() * numberarry.length))]);
            console.log(luckn);
        }, 10);
    } else if (flag == true) {
        stop();
    } else {
        console.log("=========================")
    }
}
function stop() { //结束
    flag = false;
    startBtn.innerHTML = "下一个";
    console.log(startBtn.innerHTML);
    //alert(luckn);
    clearInterval(interval);
    interval = null;
    //showluckn();
    //loop();
    times = 100;
    play();   //烟花开始！！
    add_num(luckn);
    console.log(luckn);
    numberarry.remove(luckn);
    localStorage.numberarry = JSON.stringify(numberarry);
}
function run_num(number) {
    run_luck.innerHTML = number;
    return number;
}
/*function showluckn(){
    luckyn=document.getElementById("lucky_circle");
    luckyn.style.display="block";
}*/
function add_num(lucknum) {
    idn++;
    console.log(lucknum);
    push(lucknum);
    add_numlo(lucknum);
}
function toggle1() {
    document.getElementById("luck").style.overflowY = "scroll";
}
function toggle2() {
    document.getElementById("luck").style.overflowY = "hidden";
}
function showsetbox() {
    setbox = document.getElementById("set_box"); //获取弹窗
    drop_back = document.getElementById("dropback");
    drop_back.style.display = "block";
    setbox.style.display = "block";
}
function butOnClick() {
    if (event.keyCode == 13) {
        var but = document.getElementById("submit");
        but.close();
    }
}
window.onclick = function (event) {
    if (event.target == setbox) {
        setbox.style.display = "none";
        //close();
    }
}
span.onclick = function () {
    close();
}
function close() {
    setbox.style.display = "none";
    drop_back.style.display = "none";
}
Array.prototype.remove = function (val) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == val) {
            console.log("删除" + val);
            this.splice(i, 1);
            break;
        }
    }
}
function submit() {  //获取人数
    num = document.getElementById("innumber");
    if (num.value == "") {
        alert("请输入人数！");
        return;
    }
    clean();
    firstnum = num.value;
    localStorage.playerNum = firstnum;
    numberarry = fn(num.value);
    document.getElementById("luck").innerHTML = null;
    //localStorage.clear();
    startBtn.innerHTML = "开始";
    run_luck.innerHTML = 0;
    //alert(numberarry);
    close();
}
function fn(n) {    //初始化
    idn = 0;
    if (n == 0)
        return 0;
    var arr = [];
    (function () {
        arr.unshift(n);
        n--;
        if (n != 0) arguments.callee(n);
    })();
    localStorage.numberarry = JSON.stringify(arr);
    return arr;
}
function reset() {
    startBtn.innerHTML = "开始";
    run_luck.innerHTML = 0;
    console.log(firstnum);
    numberarry = fn(firstnum);
    document.getElementById("luck").innerHTML = null;
    clean();
    close();
}