//加载完毕设置第一、第二参数选项列表
function onLoad() {
    let arg1 = setupSelect1("");
    setupSelect2(arg1, "");
}

// 设置第一个参数选项列表
function setupSelect1(arg1="") {
    // 获取第一个参数的选择控件
    let a1 = document.getElementById("arg1");
    // 准备第一个参数的备选列表
    let value1 = ["p", "t", "h"]
    let text1 = ["p-压力", "t-温度", "h-焓"]
    let unit1 = ["MPa", "℃", "kJ/kg"]
    // 若未指定选中参数，则默认选中第一项
    if(arg1 == "") {
        arg1 = value1[0];
    }

    for(let i=0; i<value1.length; i++) {
        let y = document.createElement('option');
        y.value = value1[i];
        y.text = text1[i];
        a1.add(y, null);
        if(y.value == arg1) {
            y.selected = true;
            document.getElementById("unit1").value = unit1[i];
        }
    }
    return arg1;
}

// 设置第二个参数选项列表
function setupSelect2(arg1, arg2="") {
    // 获取第二个参数的选择控件
    let a2 = document.getElementById("arg2");
    // 移除原有条目
    while(a2.length>0) {
        a2.remove(a2.length-1)
    }
    
    let value2 = new Array()
    let text2 = new Array()
    let unit2 = new Array()

    let arg2_text = {t:"t-温度", h:"h-焓", s:"s-熵", x:"x-干度"};

    if(arg1=="p") {
        value2.push("t", "h", "s", "x");
        text2.push(arg2_text.t, arg2_text.h, arg2_text.s, arg2_text.x);
        unit2.push("℃", "kJ/kg", "kJ/(kg℃)", "kg/kg");
    } else if(arg1=="t") {
        value2.push("x");
        text2.push(arg2_text.x);
        unit2.push("kg/kg");
    }else {
        value2.push("s");
        text2.push(arg2_text.s);
        unit2.push("kJ/(kg℃)");
    }
    // 若未指定选中参数，则默认选中第一项
    if(arg2=="") {
        arg2 = value2[0];
    }

    for(let i=0; i<value2.length; i++) {
        let y=document.createElement('option');
        y.value = value2[i];
        y.text = text2[i];
        a2.add(y, null);
        if(y.value==arg2) {
            y.selected = true;
            document.getElementById("unit2").value = unit2[i];
        }
    }
    return arg2;
}

//响应第一参数选项改变事件
//设置参数单位和第二参数选项列表
//arg1为第一参数代码，如"p","t","h"
function onSelect1(arg1) {
    let unit = "";
    if(arg1=="p") {
        unit = "MPa";
    } else if(arg1=="t") {
        unit = "℃";
    } else {
        unit = "kJ/kg";
    }
    document.getElementById("unit1").value = unit;
    setupSelect2(arg1, "");
}

//响应第二参数选项改变事件
//设置参数单位
//arg2为第二参数代码，如"t","h","s","x"
function onSelect2(arg2) {
    let unit = ""
    if(arg2=="t") {
        unit = "℃";
    } else if(arg2=="h") {
        unit = "kJ/kg";
    } else if(arg2=="s") {
        unit = "kJ/(kg℃)";
    } else {
        unit = "kg/kg"
    }
    let u2 = document.getElementById("unit2");
    u2.value = unit;
}

//响应数值输入事件
//仅当输入为数字时可以正常输入
function onCheckValue(obj) {
    let str = obj.value;
    str = str.replace(/[^\d\.]/g, "");
    str = str.replace(/\./, "$#$").replace(/\./g, "").replace("$#$", ".");
    obj.value = str;
}

// 开展性质计算
function onCalc() {
    let arg1 = document.getElementById("arg1").value;
    let v1 = document.getElementById("val1").value;
    let val1 = parseFloat(v1);
    let arg2 = document.getElementById("arg2").value;
    let v2 = document.getElementById("val2").value;
    let val2 = parseFloat(v2);
    let w = props(arg1, val1, arg2, val2);
    if(w==null) {
        alert("请检查输入数据是否在有效范围。");
        return;
    }
    let res = ["p" ,"t", "v", "u", "h", "s", "cv", "cp", "w", "x"];
    let dat = new Array(res.length);
    // 
    let tbl = document.getElementById("results");
    for(let i=0; i<res.length; i++) {
        dat[i] = w[res[i]];
        if(res[i] == "p") {
            dat[i] = dat[i] / 1.0E6;
        } else if(res[i] == "t") {
            dat[i] = dat[i] - 273.15;
        } else if(res[i] == "u" || res[i] == "h" || res[i] == "s" || res[i] == "cv" || res[i] == "cp") {
            dat[i] = dat[i] / 1.0E3;
        }
        tbl.rows[i+1].cells[2].innerHTML = dat[i].toPrecision(6);
    }

}