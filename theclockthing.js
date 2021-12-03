var r = 165;
var x = 250,
    y = 250;
for (i = 0; i < 360; i += 30) {
    x1 = x + r * Math.cos(i * (Math.PI / 180));
    y1 = y + r * Math.sin(i * (Math.PI / 180));
    document.writeln("<div style='position:absolute;top:" + x1 + ";left:" + y1 +
        ";width:3;height:3;background:white;font-size:1px'></div>");
}