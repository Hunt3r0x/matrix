let count = 0;

document.getElementById('matrixbutton').addEventListener('click', function () {
    count++;
    if (count == 1) {
        alert('hello friend');
    } else if (count == 2) {
        alert('hmmm, you are looking for something');
    } else if (count == 3) {
        alert('click this link :');
    }
});
