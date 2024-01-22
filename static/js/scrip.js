console.log("welcome to islamdio")

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Hussain Pooyanafar آبروی دو عالم  پویانفر", filePath: "songs/1.mp3", coverPath:"covers/8.webp"},
    {songName: "Afwan Ya Hussain  Hussein Pouyanfar ", filePath: "songs/2.mp3", coverPath:"covers/8.webp"},
    {songName: "Generosity of the Ahlul Bayt  Haj Mahdi Rasouli", filePath: "songs/3.mp3", coverPath:"covers/8.webp"},
    {songName: "Hussain Jan Hussain Pooyanafar حسین جان", filePath: "songs/4.mp3", coverPath:"covers/8.webp"},
    {songName: "Hussain Pouyanfar ya Zehra HD Yeni", filePath: "songs/5.mp3", coverPath:"covers/8.webp"},
    {songName: "Kufa Home of Ali  Haaj Mahdi Rasuli", filePath: "songs/6.mp3", coverPath:"covers/8.webp"},
    {songName: "Salamat Rahay Ye Azadari  Irfan Haider  Noha 2021", filePath: "songs/7.mp3", coverPath:"covers/8.webp"},
    {songName: "Talk to me  Haj Mahdi Rasoli  English Sub", filePath: "songs/8.mp3", coverPath:"covers/8.webp"},
    {songName: "Tasbeeh Al Zahraa   Haj Mahdi Rasoli  English Sub", filePath: "songs/9.mp3", coverPath:"covers/8.webp"},
    {songName: "The Tuesday morning  Haj Mahdi Rasouli", filePath: "songs/10.mp3", coverPath:"covers/8.webp"},
    {songName: "Waqti Kay Tu Nisti  Haj Mahdi Rasoli", filePath: "songs/11.mp3", coverPath:"covers/8.webp"},
    {songName: "Ya Ali o ya Azeem  Haj Mahdi Rasoli", filePath: "songs/12.mp3", coverPath:"covers/8.webp"},
    {songName: "Ya Ali o Ya Azeem Haj Mahdi Rasouli", filePath: "songs/13.mp3", coverPath:"covers/8.webp"},
    {songName: "You just dont cry O Ali as  Hajj Mahdi Rasouli", filePath: "songs/14.mp3", coverPath:"covers/8.webp"},
    {songName: "عفوا یا حسین  عبدالرضا هلالی  محمدحسین پویانفر", filePath: "songs/15.mp3", coverPath:"covers/8.webp"},
    {songName: "عفوا یا حسین  عبدالرضا هلالی  محمدحسین پویانفر", filePath: "songs/16.mp3", coverPath:"covers/8.webp"},
    {songName: "بهمناسبتاربعین ۱۴۴۳ Mohammad Hossein Poyanfar", filePath: "songs/17.mp3", coverPath:"covers/8.webp"},
    {songName: "من ایرانم و تو عراقی محمد حسين پویانفر", filePath: "songs/18.mp3", coverPath:"covers/8.webp"},
    {songName: "Hazrat Imam Hussain AS | Nadeem Sarwar | 2022", filePath: "songs/19.mp3", coverPath:"covers/8.webp"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
      
        gif.style.opacity = 1;
        logogif.style.opacity=0.3;
        gifinside.style.opacity=1 ;
    }
    
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        
        
        gif.style.opacity = 0;
        logogif.style.opacity=0;
        gifinside.style.opacity=0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        

    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       
        
       // makeAllPlays();
       // songIndex= parseInt(e.target.id);
       // audioElement.src= `songs/${songIndex+1}.mp3`;
       // masterSongName.innerText = songs[songIndex].songName;
       // audioElement.currentTime=0;
       // audioElement.play();  
       // gif.style.opacity = 1;
       // logogif.style.opacity=0.3;
       // e.target.classList.remove('fa-circle-play');
       // e.target.classList.add('fa-circle-pause');
       // masterPlay.classList.remove('fa-circle-play');
       // masterPlay.classList.add('fa-circle-pause');
        
       
       if(audioElement.paused || audioElement.currentTime<=0){
           makeAllPlays();
            songIndex= parseInt(e.target.id);
            audioElement.src= `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();  
            gif.style.opacity = 1;
            logogif.style.opacity=0.3;
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
       }
       else{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        audioElement.src= `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.pause();  
        gif.style.opacity = 0;
        logogif.style.opacity=0;
        e.target.classList.remove('fa-circle-pause');
        e.target.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
       }
        
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=19){
        songIndex = 0
     
    
    }
    else{
        songIndex += 1;
       
    
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    logogif.style.opacity=0.3;
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    e.target.classList.add('fa-circle-pause');

    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    logogif.style.opacity=0.3;
    e.target.classList.remove('fa-circle-pause');
    e.target.classList.add('fa-circle-play');
    e.target.classList.add('fa-circle-play');

    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

//document.getElementsById('previous').addEventListener('click',()=>{
//    if(songIndex<=0){
//        songIndex=0
//    }
//    else{
//        songIndex-=1;
//    }
//    
//    audioElement.src= `songs/${songIndex+1}.mp3`;
//    audioElement.currentTime=0;
//    audioElement.play();  
//    masterPlay.classList.remove('fa-circle-play');
//    masterPlay.classList.add('fa-circle-pause');
//})
//
//document.getElementsById('next').addEventListener('click',()=>{
//    if(songIndex>=9){
//        songIndex=0
//    }
//    else{
//        songIndex+=1;
//    }
//    
//    audioElement.src= `songs/${songIndex+1}.mp3`;
//    audioElement.currentTime=0;
//    audioElement.play();  
//    masterPlay.classList.remove('fa-circle-play');
//    masterPlay.classList.add('fa-circle-pause');
//})