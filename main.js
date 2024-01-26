function changeColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;

    const button = document.querySelector('button');
    button.style.backgroundColor = randomColor;
    
    button.style.color = getTextColor(randomColor);
    document.getElementById('colorCode').innerText = `Color Code: ${randomColor}`;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getTextColor(bgColor) {
    const brightness = (parseInt(bgColor.slice(1), 16) >> 4) & 0xfff;
    return brightness > 0xfff / 2 ? '#000' : '#fff';
}
