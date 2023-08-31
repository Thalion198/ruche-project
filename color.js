const balle = document.querySelector('.balle');
const coudji = document.querySelector('.coudji');

function updateColor() {
    const balleColor = getComputedStyle(balle).backgroundColor;
    const invertedColor = invertColor(balleColor);
    coudji.style.backgroundColor = invertedColor;
    requestAnimationFrame(updateColor);
  }
  
  function invertColor(rgbColor) {
    const parts = rgbColor.substring(rgbColor.indexOf('(') + 1, rgbColor.length - 1).split(', ');
    const invertedParts = parts.map(part => 255 - parseInt(part));
    return `rgb(${invertedParts.join(', ')})`;
  }
  
  requestAnimationFrame(updateColor);