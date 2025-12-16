function drawRectangle(width, height) {
    if (width <= 0 || height <= 0) 
        return;

    for (let i = 0; i < height; i++) {
        let row = "";
        for (let j = 0; j < width; j++) {
            row += "*";
        }
        console.log(row);
    }
}
drawRectangle(3,5);