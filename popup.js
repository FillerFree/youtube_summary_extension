function extractVideoId(url) {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|(?:embed|v)\/))([\w-]{11})/);
    return match ? match[1] : null;
}


ele = document.getElementById('myForm')
console.log('Ele' + ele)

document.getElementById('myForm').addEventListener('submit', function(event) {
  console.log('Noob')
  event.preventDefault(); // Prevent form submission
  var formData = new FormData(this);
  
  for (var pair of formData.entries()) {
    videoId = extractVideoId(pair[1])
    console.log('VideoIud:' + videoId) 
  }

});
