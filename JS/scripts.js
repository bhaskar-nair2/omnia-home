const items = document.querySelectorAll('.circle a');

const centerX = 50;
const centerY = 50;
const radius1 = 400;
const radius2 = 35;
const angleOffset = -0.58 * Math.PI;
const startAngle = angleOffset;
const endAngle = angleOffset - Math.PI;

for(var i = 0, len = items.length; i < len; i++) {
    const zeroToOne = i / len;  // goes from zero to one
    const angle = lerp(startAngle, endAngle, zeroToOne);

    items[i].style.left = (centerX - radius1 * Math.cos(angle)).toFixed(4) + "%";
    items[i].style.top = (centerY + radius2 * Math.sin(angle)).toFixed(4) + "%";
}


function lerp(start, end, zeroToOne) {
    return start + (end - start) * zeroToOne;
}

document.querySelector('.menu-button').addEventListener("mouseenter", function(e) {
    e.preventDefault(); document.querySelector('.circle').classList.add('open');
})
document.querySelector('.menu-butt').addEventListener("mouseleave", function(e) {
    e.preventDefault(); document.querySelector('.circle').classList.remove('open');
})
