var button = document.getElementById('tidak')
var buttonya = document.getElementById('ya')
var card = document.getElementById('card')

$(button).on('mouseover', function() {
  $(card).animate({
    'top': Math.random() * 632 + "px",
    'left': Math.random() * 200 + "px"
  }, "medium");
})

$(button).on('click', function() {
  $(card).animate({
    'top': Math.random() * 632 + "px",
    'left': Math.random() * 200 + "px"
  }, "medium");
})

function showvid() {
  Swal.fire({
  title: "Asikk punya pacar... Kalo video gak nge load, internet mu :(",
  html:
    `<video height="100%" width="100%" autoplay>
  <source src="vid/video.mp4" type="video/mp4">
Your browser does not support HTML video. Mengsedih :(
</video>`,
width: 800
})
}