const setImage = (array, base, end, ext = 'png', start = 1) => {
    for(var i = start; i < end; i++) {
        array.push(`${base}${i}.${ext}`);
    }
}

export default setImage;