const redColors = [ //红色系
    {name:'Red', zhname:'红色', hex:'#FF0000', rgb:'rgb(255, 0, 0)', textColor:'#FFFFFF'},
    {name:'LightSalmon', zhname:'亮鲑红', hex:'#FFA07A', rgb:'rgb(255, 160, 122)', textColor:'#000000'},
    {name:'Salmon', zhname:'鲑红', hex:'#FA8072', rgb:'rgb(250, 128, 114)', textColor:'#000000'},
    {name:'DarkSalmon', zhname:'暗鲑红', hex:'#E9967A', rgb:'rgb(233, 150, 122)', textColor:'#000000'},
    {name:'LightCoral', zhname:'亮珊瑚色', hex:'#F08080', rgb:'rgb(240, 128, 128)', textColor:'#000000'},
    {name:'IndianRed', zhname:'印度红', hex:'#CD5C5C', rgb:'rgb(205, 92, 92)', textColor:'#FFFFFF'},
    {name:'Crimson', zhname:'绯红', hex:'#DC143C', rgb:'rgb(220, 20, 60)', textColor:'#FFFFFF'},
    {name:'FireBrick', zhname:'耐火砖红', hex:'#B22222', rgb:'rgb(178, 34, 34)', textColor:'#FFFFFF'},
    {name:'DarkRed', zhname:'暗红', hex:'#8B0000', rgb:'rgb(139, 0, 0)', textColor:'#FFFFFF'}
];

const pinkColors = [ //粉红色系
    {name:'Pink', zhname:'粉红', hex:'#FFC0CB', rgb:'rgb(255, 192, 203)', textColor:'#000000'},
    {name:'LightPink', zhname:'亮粉红', hex:'#FFB6C1', rgb:'rgb(255, 182, 193)', textColor:'#000000'},
    {name:'HotPink', zhname:'暖粉红', hex:'#FF69B4', rgb:'rgb(255, 105, 180)', textColor:'#FFFFFF'},
    {name:'DeepPink', zhname:'深粉红', hex:'#FF1493', rgb:'rgb(255, 20, 147)', textColor:'#FFFFFF'},
    {name:'PaleVioletRed', zhname:'灰紫红', hex:'#DB7093', rgb:'rgb(219, 112, 147)', textColor:'#FFFFFF'},
    {name:'MediumVioletRed', zhname:'中青紫红', hex:'#C71585', rgb:'rgb(199, 21, 133)', textColor:'#FFFFFF'}
];

const orangeColors = [ //橙色系
    {name:'Orange', zhname:'橙色', hex:'#FFA500', rgb:'rgb(255, 165, 0)', textColor:'#FFFFFF'},
    {name:'DarkOrange', zhname:'暗橙', hex:'#FF8C00', rgb:'rgb(255, 140, 0)', textColor:'#FFFFFF'},
    {name:'Coral', zhname:'珊瑚红', hex:'#FF7F50', rgb:'rgb(255, 127, 80)', textColor:'#FFFFFF'},
    {name:'Tomato', zhname:'蕃茄红', hex:'#FF6347', rgb:'rgb(255, 99, 71)', textColor:'#FFFFFF'},
    {name:'OrangeRed', zhname:'橙红', hex:'#FF4500', rgb:'rgb(255, 69, 0)', textColor:'#FFFFFF'}
];

const yellowColors = [ //黄色系
    {name:'Yellow', zhname:'黄色', hex:'#FFFF00', rgb:'rgb(255, 255, 0)', textColor:'#000000'},
    {name:'LightYellow', zhname:'亮黄', hex:'#FFFFE0', rgb:'rgb(255, 255, 224)', textColor:'#000000'},
    {name:'LemonChiffon', zhname:'柠檬绸色', hex:'#FFFACD', rgb:'rgb(255, 250, 205)', textColor:'#000000'},
    {name:'LightGoldenrodYellow', zhname:'亮金菊黄', hex:'#FAFAD2', rgb:'rgb(250, 250, 210)', textColor:'#000000'},
    {name:'PapayaWhip', zhname:'蕃木瓜色', hex:'#FFEFD5', rgb:'rgb(255, 239, 213)', textColor:'#000000'},
    {name:'Moccasin', zhname:'鹿皮鞋色', hex:'#FFE4B5', rgb:'rgb(255, 228, 181)', textColor:'#000000'},
    {name:'PeachPuff', zhname:'粉扑桃色', hex:'#FFDAB9', rgb:'rgb(255, 218, 185)', textColor:'#000000'},
    {name:'PaleGoldenrod', zhname:'灰金菊色', hex:'#EEE8AA', rgb:'rgb(238, 232, 170)', textColor:'#000000'},
    {name:'Khaki', zhname:'卡其色', hex:'#F0E68C', rgb:'rgb(240, 230, 140)', textColor:'#000000'},
    {name:'DarkKhaki', zhname:'暗卡其色', hex:'#BDB76B', rgb:'rgb(189, 183, 107)', textColor:'#000000'},
    {name:'Gold', zhname:'金色', hex:'#FFD700', rgb:'rgb(255, 215, 0)', textColor:'#000000'}
];

const purpleColors = [ //紫色系
    {name:'Purple', zhname:'紫色', hex:'#800080', rgb:'rgb(128, 0, 128)', textColor:'#FFFFFF'},
    {name:'Lavender', zhname:'薰衣草紫', hex:'#E6E6FA', rgb:'rgb(230, 230, 250)', textColor:'#000000'},
    {name:'Thistle', zhname:'蓟紫', hex:'#D8BFD8', rgb:'rgb(216, 191, 216)', textColor:'#000000'},
    {name:'Plum', zhname:'梅红色', hex:'#DDA0DD', rgb:'rgb(221, 160, 221)', textColor:'#000000'},
    {name:'Violet', zhname:'紫罗兰色', hex:'#EE82EE', rgb:'rgb(238, 130, 238)', textColor:'#000000'},
    {name:'Orchid', zhname:'兰紫', hex:'#DA70D6', rgb:'rgb(218, 112, 214)', textColor:'#FFFFFF'},
    {name:'Fuchsia', zhname:'品红', hex:'#FF00FF', rgb:'rgb(255, 0, 255)', textColor:'#FFFFFF'},
    {name:'Magenta', zhname:'洋红', hex:'#FF00FF', rgb:'rgb(255, 0, 255)', textColor:'#FFFFFF'},
    {name:'MediumOrchid', zhname:'中兰紫', hex:'#BA55D3', rgb:'rgb(186, 85, 211)', textColor:'#FFFFFF'},
    {name:'MediumPurple', zhname:'中紫红', hex:'#9370DB', rgb:'rgb(147, 112, 219)', textColor:'#FFFFFF'},
    {name:'Amethyst', zhname:'紫水晶色', hex:'#9966CC', rgb:'rgb(153, 102, 204)', textColor:'#FFFFFF'},
    {name:'BlueViolet', zhname:'蓝紫', hex:'#8A2BE2', rgb:'rgb(138, 43, 226)', textColor:'#FFFFFF'},
    {name:'DarkViolet', zhname:'暗紫', hex:'#9400D3', rgb:'rgb(148, 0, 211)', textColor:'#FFFFFF'},
    {name:'DarkOrchid', zhname:'暗兰紫', hex:'#9932CC', rgb:'rgb(153, 50, 204)', textColor:'#FFFFFF'},
    {name:'DarkMagenta', zhname:'暗洋红', hex:'#8B008B', rgb:'rgb(139, 0, 139)', textColor:'#FFFFFF'},
    {name:'MediumSlateBlue', zhname:'中岩蓝', hex:'#7B68EE', rgb:'rgb(123, 104, 238)', textColor:'#FFFFFF'},
    {name:'SlateBlue', zhname:'岩蓝', hex:'#6A5ACD', rgb:'rgb(106, 90, 205)', textColor:'#FFFFFF'},
    {name:'DarkSlateBlue', zhname:'暗岩蓝', hex:'#483D8B', rgb:'rgb(72, 61, 139)', textColor:'#FFFFFF'},
    {name:'Indigo', zhname:'靛色', hex:'#4B0082', rgb:'rgb(75, 0, 130)', textColor:'#FFFFFF'}
];

const greenColors = [ //绿色系
    {name:'Green', zhname:'绿色', hex:'#008000', rgb:'rgb(0, 128, 0)', textColor:'#FFFFFF'},
    {name:'PaleGreen', zhname:'灰绿', hex:'#98FB98', rgb:'rgb(152, 251, 152)', textColor:'#000000'},
    {name:'LightGreen', zhname:'亮绿', hex:'#90EE90', rgb:'rgb(144, 238, 144)', textColor:'#000000'},
    {name:'YellowGreen', zhname:'黄绿', hex:'#9ACD32', rgb:'rgb(154, 205, 50)', textColor:'#000000'},
    {name:'GreenYellow', zhname:'绿黄', hex:'#ADFF2F', rgb:'rgb(173, 255, 47)', textColor:'#000000'},
    {name:'Chartreuse', zhname:'查特酒绿', hex:'#7FFF00', rgb:'rgb(127, 255, 0)', textColor:'#000000'},
    {name:'LawnGreen', zhname:'草坪绿', hex:'#7CFC00', rgb:'rgb(124, 252, 0)', textColor:'#000000'},
    {name:'Lime', zhname:'鲜绿色', hex:'#00FF00', rgb:'rgb(0, 255, 0)', textColor:'#000000'},
    {name:'LimeGreen', zhname:'柠檬绿', hex:'#32CD32', rgb:'rgb(50, 205, 50)', textColor:'#000000'},
    {name:'MediumSpringGreen', zhname:'中春绿色', hex:'#00FA9A', rgb:'rgb(0, 250, 154)', textColor:'#000000'},
    {name:'SpringGreen', zhname:'春绿', hex:'#00FF7F', rgb:'rgb(0, 255, 127)', textColor:'#000000'},
    {name:'MediumAquamarine', zhname:'中碧蓝色', hex:'#66CDAA', rgb:'rgb(102, 205, 170)', textColor:'#000000'},
    {name:'Aquamarine', zhname:'碧蓝色', hex:'#7FFFD4', rgb:'rgb(127, 255, 212)', textColor:'#000000'},
    {name:'LightSeaGreen', zhname:'亮海绿', hex:'#20B2AA', rgb:'rgb(32, 178, 170)', textColor:'#FFFFFF'},
    {name:'MediumSeaGreen', zhname:'中海绿', hex:'#3CB371', rgb:'rgb(60, 179, 113)', textColor:'#FFFFFF'},
    {name:'SeaGreen', zhname:'海绿', hex:'#2E8B57', rgb:'rgb(46, 139, 87)', textColor:'#FFFFFF'},
    {name:'DarkSeaGreen', zhname:'暗海绿', hex:'#8FBC8F', rgb:'rgb(143, 188, 143)', textColor:'#FFFFFF'},
    {name:'ForestGreen', zhname:'森林绿', hex:'#228B22', rgb:'rgb(34, 139, 34)', textColor:'#FFFFFF'},
    {name:'DarkGreen', zhname:'暗绿', hex:'#006400', rgb:'rgb(0, 100, 0)', textColor:'#FFFFFF'},
    {name:'OliveDrab', zhname:'橄榄军服绿', hex:'#6B8E23', rgb:'rgb(107, 142, 35)', textColor:'#FFFFFF'},
    {name:'Olive', zhname:'橄榄色', hex:'#808000', rgb:'rgb(128, 128, 0)', textColor:'#FFFFFF'},
    {name:'DarkOliveGreen', zhname:'暗橄榄绿', hex:'#556B2F', rgb:'rgb(85, 107, 47)', textColor:'#FFFFFF'},
    {name:'Teal', zhname:'凫绿', hex:'#008080', rgb:'rgb(0, 128, 128)', textColor:'#FFFFFF'}
];

const blueColors = [ //蓝色系
    {name:'Blue', zhname:'蓝色', hex:'#0000FF', rgb:'rgb(0, 0, 255)', textColor:'#FFFFFF'},
    {name:'LightBlue', zhname:'亮蓝', hex:'#ADD8E6', rgb:'rgb(173, 216, 230)', textColor:'#000000'},
    {name:'PowderBlue', zhname:'婴儿粉蓝', hex:'#B0E0E6', rgb:'rgb(176, 224, 230)', textColor:'#000000'},
    {name:'PaleTurquoise', zhname:'灰绿松石色', hex:'#AFEEEE', rgb:'rgb(175, 238, 238)', textColor:'#000000'},
    {name:'MediumTurquoise', zhname:'中绿松石色', hex:'#48D1CC', rgb:'rgb(72, 209, 204)', textColor:'#000000'},
    {name:'Turquoise', zhname:'绿松石色', hex:'#40E0D0', rgb:'rgb(64, 224, 208)', textColor:'#000000'},
    {name:'DarkTurquoise', zhname:'暗绿松石色', hex:'#00CED1', rgb:'rgb(0, 206, 209)', textColor:'#000000'},
    {name:'LightCyan', zhname:'亮青', hex:'#E0FFFF', rgb:'rgb(224, 255, 255)', textColor:'#000000'},
    {name:'Cyan', zhname:'青色', hex:'#00FFFF', rgb:'rgb(0, 255, 255)', textColor:'#000000'},
    {name:'Aqua', zhname:'水色', hex:'#00FFFF', rgb:'rgb(0, 255, 255)', textColor:'#000000'},
    {name:'DarkCyan', zhname:'暗青', hex:'#008B8B', rgb:'rgb(0, 139, 139)', textColor:'#FFFFFF'},
    {name:'CadetBlue', zhname:'军服蓝', hex:'#5F9EA0', rgb:'rgb(95, 158, 160)', textColor:'#FFFFFF'},
    {name:'LightSteelBlue', zhname:'亮钢蓝', hex:'#B0C4DE', rgb:'rgb(176, 196, 222)', textColor:'#000000'},
    {name:'SteelBlue', zhname:'钢青色', hex:'#4682B4', rgb:'rgb(70, 130, 180)', textColor:'#FFFFFF'},
    {name:'LightSkyBlue', zhname:'亮天蓝', hex:'#87CEFA', rgb:'rgb(135, 206, 250)', textColor:'#000000'},
    {name:'SkyBlue', zhname:'天蓝', hex:'#87CEEB', rgb:'rgb(135, 206, 235)', textColor:'#000000'},
    {name:'DeepSkyBlue', zhname:'深天蓝', hex:'#00BFFF', rgb:'rgb(0, 191, 255)', textColor:'#FFFFFF'},
    {name:'DodgerBlue', zhname:'道奇蓝', hex:'#1E90FF', rgb:'rgb(30, 144, 255)', textColor:'#FFFFFF'},
    {name:'CornflowerBlue', zhname:'矢车菊蓝', hex:'#6495ED', rgb:'rgb(100, 149, 237)', textColor:'#FFFFFF'},
    {name:'RoyalBlue', zhname:'品蓝', hex:'#4169E1', rgb:'rgb(65, 105, 225)', textColor:'#FFFFFF'},
    {name:'MediumBlue', zhname:'中蓝', hex:'#0000CD', rgb:'rgb(0, 0, 205)', textColor:'#FFFFFF'},
    {name:'DarkBlue', zhname:'暗蓝', hex:'#00008B', rgb:'rgb(0, 0, 139)', textColor:'#FFFFFF'},
    {name:'NavyBlue', zhname:'藏青', hex:'#000080', rgb:'rgb(0, 0, 128)', textColor:'#FFFFFF'},
    {name:'MidnightBlue', zhname:'午夜蓝', hex:'#191970', rgb:'rgb(25, 25, 112)', textColor:'#FFFFFF'}
];

const brownColors = [ //褐色系
    {name:'Brown', zhname:'褐色', hex:'#A52A2A', rgb:'rgb(165, 42, 42)', textColor:'#FFFFFF'},
    {name:'Cornsilk', zhname:'玉米丝色', hex:'#FFF8DC', rgb:'rgb(255, 248, 220)', textColor:'#000000'},
    {name:'BlanchedAlmond', zhname:'杏仁白', hex:'#FFEBCD', rgb:'rgb(255, 235, 205)', textColor:'#000000'},
    {name:'Bisque', zhname:'陶坯黄', hex:'#FFE4C4', rgb:'rgb(255, 228, 196)', textColor:'#000000'},
    {name:'NavajoWhite', zhname:'那瓦霍白', hex:'#FFDEAD', rgb:'rgb(255, 222, 173)', textColor:'#000000'},
    {name:'Wheat', zhname:'小麦色', hex:'#F5DEB3', rgb:'rgb(245, 222, 179)', textColor:'#000000'},
    {name:'BurlyWood', zhname:'硬木色', hex:'#DEB887', rgb:'rgb(222, 184, 135)', textColor:'#000000'},
    {name:'Tan', zhname:'日晒色', hex:'#D2B48C', rgb:'rgb(210, 180, 140)', textColor:'#000000'},
    {name:'RosyBrown', zhname:'玫瑰褐', hex:'#BC8F8F', rgb:'rgb(188, 143, 143)', textColor:'#FFFFFF'},
    {name:'SandyBrown', zhname:'沙棕色', hex:'#F4A460', rgb:'rgb(244, 164, 96)', textColor:'#FFFFFF'},
    {name:'Goldenrod', zhname:'金菊色', hex:'#DAA520', rgb:'rgb(218, 165, 32)', textColor:'#FFFFFF'},
    {name:'DarkGoldenrod', zhname:'暗金菊色', hex:'#B8860B', rgb:'rgb(184, 134, 11)', textColor:'#FFFFFF'},
    {name:'Peru', zhname:'秘鲁色', hex:'#CD853F', rgb:'rgb(205, 133, 63)', textColor:'#FFFFFF'},
    {name:'Chocolate', zhname:'巧克力色', hex:'#D2691E', rgb:'rgb(210, 105, 30)', textColor:'#FFFFFF'},
    {name:'SaddleBrown', zhname:'鞍褐', hex:'#8B4513', rgb:'rgb(139, 69, 19)', textColor:'#FFFFFF'},
    {name:'Sienna', zhname:'赭黄', hex:'#A0522D', rgb:'rgb(160, 82, 45)', textColor:'#FFFFFF'},
    {name:'Maroon', zhname:'栗色', hex:'#800000', rgb:'rgb(128, 0, 0)', textColor:'#FFFFFF'}
];

const whiteColors = [ //白色系
    {name:'White', zhname:'白色', hex:'#FFFFFF', rgb:'rgb(255, 255, 255)', textColor:'#000000'},
    {name:'Snow', zhname:'雪色', hex:'#FFFAFA', rgb:'rgb(255, 250, 250)', textColor:'#000000'},
    {name:'Honeydew', zhname:'蜜瓜绿', hex:'#F0FFF0', rgb:'rgb(240, 255, 240)', textColor:'#000000'},
    {name:'MintCream', zhname:'薄荷奶油色', hex:'#F5FFFA', rgb:'rgb(245, 255, 250)', textColor:'#000000'},
    {name:'Azure', zhname:'湛蓝', hex:'#F0FFFF', rgb:'rgb(240, 255, 255)', textColor:'#000000'},
    {name:'AliceBlue', zhname:'爱丽丝蓝', hex:'#F0F8FF', rgb:'rgb(240, 248, 255)', textColor:'#000000'},
    {name:'GhostWhite', zhname:'幽灵白', hex:'#F8F8FF', rgb:'rgb(248, 248, 255)', textColor:'#000000'},
    {name:'WhiteSmoke', zhname:'白烟色', hex:'#F5F5F5', rgb:'rgb(245, 245, 245)', textColor:'#000000'},
    {name:'Seashell', zhname:'海贝色', hex:'#FFF5EE', rgb:'rgb(255, 245, 238)', textColor:'#000000'},
    {name:'Beige', zhname:'米黄色', hex:'#F5F5DC', rgb:'rgb(245, 245, 220)', textColor:'#000000'},
    {name:'OldLace', zhname:'旧蕾丝色', hex:'#FDF5E6', rgb:'rgb(253, 245, 230)', textColor:'#000000'},
    {name:'FloralWhite', zhname:'花卉白', hex:'#FFFAF0', rgb:'rgb(255, 250, 240)', textColor:'#000000'},
    {name:'Ivory', zhname:'象牙色', hex:'#FFFFF0', rgb:'rgb(255, 255, 240)', textColor:'#000000'},
    {name:'AntiqueWhite', zhname:'古董白', hex:'#FAEBD7', rgb:'rgb(250, 235, 215)', textColor:'#000000'},
    {name:'Linen', zhname:'亚麻色', hex:'#FAF0E6', rgb:'rgb(250, 240, 230)', textColor:'#000000'},
    {name:'LavenderBlush', zhname:'薰衣草紫红', hex:'#FFF0F5', rgb:'rgb(255, 240, 245)', textColor:'#000000'},
    {name:'MistyRose', zhname:'雾玫瑰色', hex:'#FFE4E1', rgb:'rgb(255, 228, 225)', textColor:'#000000'}
];

const grayColors = [ //灰色系与黑色系
    {name:'Gray', zhname:'灰色', hex:'#808080', rgb:'rgb(128, 128, 128)', textColor:'#000000'},
    {name:'Gainsboro', zhname:'庚斯博罗灰', hex:'#DCDCDC', rgb:'rgb(220, 220, 220)', textColor:'#000000'},
    {name:'LightGray', zhname:'亮灰色', hex:'#D3D3D3', rgb:'rgb(211, 211, 211)', textColor:'#000000'},
    {name:'Silver', zhname:'银色', hex:'#C0C0C0', rgb:'rgb(192, 192, 192)', textColor:'#000000'},
    {name:'DarkGray', zhname:'暗灰', hex:'#A9A9A9', rgb:'rgb(169, 169, 169)', textColor:'#000000'},
    {name:'DimGray', zhname:'昏灰', hex:'#696969', rgb:'rgb(105, 105, 105)', textColor:'#FFFFFF'},
    {name:'LightSlateGray', zhname:'亮岩灰', hex:'#778899', rgb:'rgb(119, 136, 153)', textColor:'#FFFFFF'},
    {name:'SlateGray', zhname:'岩灰', hex:'#708090', rgb:'rgb(112, 128, 144)', textColor:'#FFFFFF'},
    {name:'DarkSlateGray', zhname:'暗岩灰', hex:'#2F4F4F', rgb:'rgb(47, 79, 79)', textColor:'#FFFFFF'},
    {name:'Black', zhname:'黑色', hex:'#000000', rgb:'rgb(0, 0, 0)', textColor:'#FFFFFF'}
];


function showColors(colorSystem, tableId) {
    let table = document.querySelector('#'+tableId);
    // 设置表头
    let thead = document.createElement("thead");
    table.appendChild(thead);
    let tr = document.createElement("tr");
    thead.appendChild(tr);
    const thText = ['序号', '英文名', '中文名', 'HEX', 'RGB'];
    for (const item of thText) {
        let td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = item;
    }
    // 设置表格体
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    // 添加条目
    for(let i=0; i<colorSystem.length; i++) {
        let color = colorSystem[i];
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        // 序号
        let td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = (i+1).toString();
        // 英文名
        td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = color.name;
        // 中文名
        td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = color.zhname;
        // HEX
        td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = color.hex;
        // RGB
        td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = color.rgb;
        //
        tr.style.backgroundColor = color.hex;
        tr.style.color = color.textColor;
        tr.style.textAlign = "center";
    }
}

const tableIds = ["tableRed", "tablePink", "tableOrange", "tableYellow", "tablePurple", "tableGreen", "tableBlue", "tableBrown", "tableWhite", "tableGray"];
const colorSystem = [redColors, pinkColors, orangeColors, yellowColors, purpleColors, greenColors, blueColors, brownColors, whiteColors,grayColors];


for(let i=0; i<tableIds.length; i++) {
    showColors(colorSystem[i], tableIds[i]);
}