const FONT_BIG = "16pt Verdana, sans-serif";
const FONT_NORMAL = "10pt Verdana, sans-serif";
const FONT_SMALL = "8pt Verdana, sans-serif";
const FONT_TINY = "6pt Verdana, sans-serif";

function writeText(text, x, y, font, color ) {
    context2d.save();
	context2d.fillStyle = color;
	context2d.font = font;
	context2d.translate(x, y);
   	context2d.fillText(text, 0, 0);
	context2d.restore();
}