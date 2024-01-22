document.getElementsById('previous').addEventListener('click',()=>{
   if(songIndex<=0){
       songIndex=0
   }
   else{
       songIndex-=1;
   }
   
   audioElement.src= `songs/${songIndex+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();  
   masterPlay.classList.remove('fa-circle-play');
   masterPlay.classList.add('fa-circle-pause');
})

document.getElementsById('next').addEventListener('click',()=>{
   if(songIndex>=9){
       songIndex=0
   }
   else{
       songIndex+=1;
   }
   
   audioElement.src= `songs/${songIndex+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();  
   masterPlay.classList.remove('fa-circle-play');
   masterPlay.classList.add('fa-circle-pause');
})