//https://teachablemachine.withgoogle.com/models/hr6ePBMGl/
Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});

Webcam.attach("#Webcam_holder");

function capture(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
    console.log("picture_captured");
});
}