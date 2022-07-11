//https://teachablemachine.withgoogle.com/models/[...]
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier  = ml5.soundClassifier('https://teachablemachine.withgoogle.com/model.json', modelReady);
}


function modelReady() {
    classifier.classify(gotResultes);
}