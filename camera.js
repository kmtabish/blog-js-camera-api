
var video, canvas, ctx;
if(navigator && navigator.mediaDevices){
    const options = { audio: false, video: { facingMode: "user", width: 300, height: 300  } }
    navigator.mediaDevices.getUserMedia(options)
    .then(function(stream) {
        video = document.querySelector('video');
        video.srcObject = stream;
        video.onloadedmetadata = function(e) {
          video.play();
        };
        canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext('2d');
    })
    .catch(function(err) {
        //Handle error here
    });
}else{
    console.log("camera API is not supported by your browser")
}

function clickPhoto() {
   ctx.drawImage(video, 0,0, canvas.width, canvas.height);
 }
