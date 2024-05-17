
const video = document.querySelector("#video")

document.querySelector(".pause").style.display = "none"



const play = (e) => {
 
    if(video.paused){
        document.querySelector(".play").style.display = "none"
        document.querySelector(".pause").style.display = "block"
        video.play()
    }
    else{
        document.querySelector(".play").style.display = "block"
        document.querySelector(".pause").style.display = "none"
        video.pause()
    }
}


