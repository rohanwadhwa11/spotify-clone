console.log("welcome to spotify");
let playBtn = document.querySelector("#play-button");
let pauseBtn=  document.querySelector("#pause-btn");

playBtn.addEventListener("click",() => {
    console.log(playBtn.classList.toggle("fa-circle-pause"));
    console.log(playBtn.classList);
let albumImg = document.querySelector(".album-img");
if(playBtn.classList.contains("fa-circle-pause")){
    albumImg.setAttribute("src","https://i.gifer.com/Nt6v.gif") ;
}else{
    albumImg.setAttribute("src","./assests/album_picture.jpeg");
}
})