function upDate(previewPic){
let x=document.getElementById('image');
x.style.backgroundImage = "url("+previewPic.src+")";
x.innerHTML=previewPic.alt;
x.style.backgroundColor = "#CCEECC";
}

function unDo(){
let y = document.getElementById('image');
y.style.backgroundImage = "url()";
y.innerHTML="Hover over an image below to display here.";
y.style.backgroundColor = "#8e68ff";
}
