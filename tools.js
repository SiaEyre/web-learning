//封装type 返回精准类型值 undefined有问题
function type(variable) {
    var obj = {
        "object Array": "[object Array]",
        "object Object": "[object Object]",
        "object Number": "[object Number]",
        "object String": "[object String]",
        "object Boolean": "[object Boolean]"
    };
    if (variable === null) {
        return "null";
    } else if (typeof (variable) == "object") {
        for (var prop in obj)
            if (Object.prototype.toString.call(variable) == obj[prop]) {
                return prop;
            }
    } else return typeof (variable);
}
//数组去重
Array.prototype.unnique = function () {
    var len = this.length,
        arr = [],
        obj = {};
    for (var i = 0; i < len; i++) {
        if (!obj[this[i]]) {
            obj[this[i]] = "a";
            arr.push(this[i]);
        }
    }
    return str;
}
// //返回e元素第n层祖先元素节点
function retfather(elem, n) {
    while (elem && n) {
        if (elem.parentElement) {
            elem = elem.parentElement;
        } else {
            for (elem = elem.parentElement; elem.nodeType != 1; elem = elem.parentElement);
        }
        n--;
    }
    return elem;
}

// //返回元素e第n个兄弟元素节点，n为正返回后面的兄弟元素节点，n为负返回前面的，n为零返回自己
var p = document.getElementsByTagName("p")[0];
function retbrother(ele, n) {
    while (ele && n > 0) {
        if (ele.nextElementSibling) {
            ele = ele.nextElementSibling;
        } else {
            for (ele = ele.nextSibling; ele.nodeType != 1; ele = ele.nextSibling);//兼容IE8及以下
        }
        n--;
    }
    while (ele && n < 0) {
        if (ele.nextElementSibling) {
            ele = ele.previousElementSibling;
        } else {
            for (ele = ele.previousSibling; ele.nodeType != 1; ele = ele.previousSibling);//兼容IE8及以下
        }

        n++;
    }
    return ele;
}

//myChildren() 返回元素所有子元素节点  解决浏览器兼容问题
function myChildren(elem) {
    var myChild = elem.childNodes,
        len = myChild.length,
        arr = [];
    for (var i = 0; i < len; i++) {
        if (myChild[i].nodeType == 1) {
            arr.push(myChild[i]);
        }
    }
    return arr;
}

//hasChildren 有子元素节点反返回true 否则返回false
function hasChildren(elem) {
    var myChild = elem.childNodes,
        len = myChild.length,
        arr = [];
    for (var i = 0; i < len; i++) {
        if (myChild[i].nodeType == 1) {
            return true;
        }
    }
    return false;
}

//封装insertAfter
function insertAfter(ele, target, oringin) {
    var next = target.nextElementSibling;
    if (next != null) {
        this.insertBefore(next, oringin);
    }
    else {
        this.appendChild(target);
    }
}

//返回滚动条移动位置 x y　兼容IE
function getScrollOffset() {
    var x = 0,
        y = 0;
    if (window.pageXOffset) {
        x = window.pageXOffset;
        y = window.pageYOffset;
    } else {
        x = document.body.scrollLeft + document.documentElement.scrollLeft;
        y = document.body.scrollTop + document.documentElement.scrollTop;
    }
    return x + " " + y;
}

//查看可视化窗口尺寸 兼容IE
function getViewportOffset(){
    var w = 0,
        h = 0;
    if(0 && window.innerWidth){
        w =window.innerWidth;
        h = window.innerHeight; 
    }else if(document.compatMode == "BackCompat"){
        w = document.body.clientWidth;
        h =document.body.clientHeight;
    }else{
        w = document.documentElement.clientWidth;
        h = document.documentElement.clientHeight;
    }
    return w + " " + h;
}
//查看元素属性 兼容IE
function getStyle(elem,prop){
    if(window.getComputedStyle){
        return window.getComputedStyle(elem,null)[prop];
    }else{
        return elem.currentStyle[prop];
    }
}
