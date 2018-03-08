const items = document.querySelectorAll('.circle a');
const items2= document.querySelectorAll('.circle2 a');

const centerX = 50;
const centerY = 50;
const radius1 = 400;
const radius2 = 20;
const angleOffset = -0.58 * Math.PI;
const startAngle = angleOffset;
const endAngle = angleOffset - Math.PI;



for(var i = 0, len = items.length; i < len; i++) {
    const zeroToOne = i / len;  // goes from zero to one
    const angle = lerp(startAngle, endAngle, zeroToOne);

    items[i].style.left = (centerX - radius1 * Math.cos(angle)).toFixed(4) + "%";
    items[i].style.top = (centerY + radius2 * Math.sin(angle)).toFixed(4) + "%";
}
//For second Button
for(var i = 0, len = items2.length; i < len; i++) {
    const zeroToOne = i / len;  // goes from zero to one
    const angle = lerp((startAngle-0.2), (endAngle+0.2), zeroToOne);

    items2[i].style.right = (centerX - radius1 * Math.cos(angle)).toFixed(1) + "%";
    items2[i].style.top = (centerY + radius2 * Math.sin(angle)).toFixed(1) + "%";
}

function lerp(start, end, zeroToOne) {
    return start + (end - start) * zeroToOne;
}

/*Visible Function*/
document.querySelector('.menu-button').addEventListener("mouseenter", function(e) {
    e.preventDefault();
    document.querySelector('.circle').classList.add('open');
})
document.querySelector('.menu-butt').addEventListener("mouseleave", function(e) {
    e.preventDefault(); document.querySelector('.circle').classList.remove('open');
})
// For second button
document.querySelector('.menu-button2').addEventListener("mouseenter", function(e) {
    e.preventDefault();
    document.querySelector('.circle2').classList.add('open');
})
document.querySelector('.menu-butt2').addEventListener("mouseleave", function(e) {
    e.preventDefault(); document.querySelector('.circle2').classList.remove('open');
})
