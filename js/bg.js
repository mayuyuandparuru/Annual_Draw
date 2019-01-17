var snowflakes = {
    arr:[],// 数组盛放元素
    snowflake : [//雪花类型
        '❉',
        '❈',
        '*',
        '✲',
        '❀',
        '❃',
        '☆'
        ],
    snowflakeColor : [   //颜色
        "red",
        "green",
        "#ccc123",
        "#345232",
        "#231111",
        "#ab2322"
        ],
    random : function (num){
        return Math.floor(Math.random()*num);
    },
    init : function (num){
        this.maxlength =  num;
        this.maxWidth = (document.documentElement.clientWidth || document.body.scrollWidth) - 30;
        this.maxHeight = (document.documentElement.clientHeight || document.body.scrollHeight) - 30;
        console.log("maxwidth"+this.maxWidth);
        console.log("maxheight"+this.maxHeight);
        this.create();
        this.move();
    },
    create : function (){
        var that = this;
        setInterval(function (){
            if( that.arr.length < that.maxlength){
                var d = document.createElement("div");
                d.innerHTML = that.snowflake[that.random(that.snowflake.length)];
                d.style.color = that.snowflakeColor[that.random(that.snowflakeColor.length)];
                d.style.fontSize = "20px";
                d.style.position = "absolute";
                d.style.left = that.random(that.maxWidth) + "px";
                d.style.top = -that.random(100) + "px";
                d.style.zIndex="11";
                d.vx = 2+that.random(10);
                d.vy = 3+that.random(10);
                document.body.appendChild(d);
                that.arr.push(d)
            }
        },20)
    },
    move : function (){ // 运动
        var that = this;
        var arr = that.arr;
        setInterval(function (){ 
            for(var i = 0 ; i < arr.length ; i ++ ){
                arr[i].style.left = arr[i].offsetLeft + arr[i].vx + "px";
                arr[i].style.top  = arr[i].offsetTop + arr[i].vy + 'px';
                if (arr[i].offsetTop >= that.maxHeight || arr[i].offsetLeft >= that.maxWidth) {
                   //console.log(arr[i].offsetTop); 
                  // console.log(arr[i].offsetLeft);
                   document.body.removeChild(arr[i]);
                     //0
                    arr.splice(i,1);
                }
            }
        },30)
    }
}   
window.onload = function (){
    snowflakes.init(100);
}   