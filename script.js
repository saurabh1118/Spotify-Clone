console.log("welcpme to spotify")

//initialise the variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
myProgressBar = document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs =[
    {songName : "Ligeon", filepath : "songs/1.mp3 ", coverPath : "covers/1.jpg"},
    {songName : "Trap", filepath : "songs/2.mp3 ", coverPath : "covers/2.jpg"},
    {songName : "They Mad", filepath : "songs/3.mp3 ", coverPath : "covers/3.jpg"},
    {songName : "Rich The Kid", filepath : "songs/5.mp3 ", coverPath : "covers/5.jpg"},
    {songName : "Title", filepath : "songs/4.mp3 ", coverPath : "covers/4.jpg"},
    {songName : "The Safety Dance", filepath : "songs/6.mp3 ", coverPath : "covers/6.jpg"},
    {songName : "Bach Up it", filepath : "songs/7.mp3 ", coverPath : "covers/7.jpg"},
    {songName : "Lady", filepath : "songs/8.mp3 ", coverPath : "covers/8.jpg"},
    {songName : "lady trap", filepath : "songs/9.mp3 ", coverPath : "covers/9.jpg"},
    {songName : "True Love", filepath : "songs/10.mp3 ", coverPath : "covers/10.jpg"},
]

songItems.forEach((element , i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
    
});



//audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }
})

// listen events
audioElement.addEventListener('timeupdate' , ()=>{
    
// update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays =()=>{
    Array.from(document.getElementsByName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add("fa-circle-pause");
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }else{
        songIndex -=1;
    }
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    
})