let count = 0;

document.getElementById('matrixbutton').addEventListener('click', function () {
    count++;
    if (count == 1) {
        alert('hello friend');
    } else if (count == 2) {
        alert('hmmm, you are looking for something');
    } else if (count == 3) {
        alert('click this link:');
    } else if (count == 6) {
        let videoLink = "https://media.tenor.com/GGsqDwbU9RgAAAAd/hd-rickroll.gif";
        let popup = window.open(videoLink, "popup", "width=800,height=600");
        setTimeout(function () { popup.close(); }, 100000);
        count = 0;
    }
});
