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
let videoLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Replace with your video link
let popup = window.open(videoLink, "popup", "width=800,height=600");
setTimeout(function() { popup.close(); }, 10000); // Popup will close after 10 seconds
count = 0; // Reset the click count
}
});
