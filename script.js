console.log("Hello");
let audioelement = new Audio('songs/1.mp3');
let song = 0;
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('bar');
let gif = document.getElementById('gif');
let pbtn = Array.from(document.getElementsByClassName('songplay'));


masterplay.addEventListener('click' , ()=>{
    if(audioelement.paused || audioelement.currentTime == 0){
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }

    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

audioelement.addEventListener('timeupdate' , ()=>{
    let progress = parseInt((audioelement.currentTime  / audioelement.duration) * 100);
    progressbar.value = progress;
})

progressbar.addEventListener('change' , ()=>{
    audioelement.currentTime = progressbar.value * audioelement.duration / 100;
})

const makeplay = () =>{
    Array.from(document.getElementsByClassName('songplay')).forEach(element => {
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songplay')).forEach(element => {
    element.addEventListener('click' , (e)=>{
        makeplay();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        song = parseInt(e.target.id);
        audioelement.src = `songs/${song+1}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    })
});

document.getElementById('next').addEventListener('click' , ()=>{
    if(song >= 8)
    {
        song = 0;
    } 

    else{
        song = song  + 1;
    }

    audioelement.src = `songs/${song+1}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(song<=0)
    {
        song = 8;
    } 

    else{
        song = song  - 1;
    }

    audioelement.src = `songs/${song+1}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})