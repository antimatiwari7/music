let music1 = new Audio("audio/ganesh.mp3");
 document.getElementById("playBtn").addEventListener("click", () => {
   music1.play();
});
 document.getElementById("ganpathyBtn").addEventListener("click", () => { 
     music1.pause();
 music1 = new Audio("audio/ganesh.mp3");
   music1.play();
  });


 const music = new Audio('audio/audio2.mp3');

const songs = [{  id:'1',  SongName: 'ganesh',  poster: "images/ganesh.jpg"

},{  id:'2',  SongName: 'merepapa',  poster: "images/mere papa.jpg"

},{  id:'3',  SongName: 'kesariya',  poster: "images/kesariya.jpg"

},{  id:'4',  SongName: 'lag ja gale',  poster: "images/lag ja gale.jpg"
    
    },  {    id:'5',    SongName: 'jhumka',    poster: "images/jhumka.jpg"
      
    
   },
   {
     id:'6',
     SongName: 'khushi',
     poster: "images/khushi.jpg"
        
           },
     {
       id:'7',
       SongName: 'dilbar',
       poster: "images/dilbar.jpg"
          
        
        },
       {
         id:'8',
         SongName: 'nachenge',
         poster: "images/nachenge.jpg"
            
          
          },
          {
id:'9',
           SongName: 'sanam re',
           poster: "images/sanam re.jpg"
              
            
           },
           {
              id:'10',
              SongName: 'chandwaliya',
             poster: "images/chand waliya.jpg"
                
              
            },
            {
              id:'11',
               SongName: 'party',
                poster: "images/party.jpg"
                  
                
               },
               {
                 id:'12',
                  SongName: 'hny',
                  poster: "images/hny.jpg"
                    
                  
                 },
                 {
                   id:'13',
                     SongName: 'siyaram',
                   poster: "images/siyaram.jpg"
                      
                    
                     },
 ]

// Array.from(document.getElementsByClassName('songitem')).forEach((e, i)=>{
//   e.getElementsByTagName('img')[0].src = songs[i].poster;
//   e.getElementsByTagName('h5')[0].innerHTML = songs[i].SongName;
  

// });


// let playBtn = document.getElementById('playBtn');
// let wave = document.getElementById('wave');
// playBtn.addEventListener('click',()=> { 
//   if(music.paused && music.currentTime<=0){
//     music.play();
//     wave.classList.add('active1');
//   }else{
//     music.pause();
//   }
//   } )





 
// const music0 = new Audio('audio1.mp3');
// const music1 = new Audio('audio2.mp3');
// const music2 = new Audio('audio3.mp3');
// const music3 = new Audio('audio4.mp3');
// const music4 = new Audio('audio5.mp3');
// const music5 = new Audio('audio6.mp3');


//select btn

// const prevbtn = document.querySelector('.prevBtn');
// const playbtn = document.querySelector('.playBtn');
// const nextbtn = document.querySelector('.nextBtn');


// const songs = [
//   { ele: music0, audioName: 'ganpathy'},
//   { ele: music1, audioName: 'merepapa'},
//   { ele: music2, audioName: 'kesariya'},
//   { ele: music3, audioName: 'lag ja gale'},
//   { ele: music4, audioName: 'jhumka'},
//   { ele: music5, audioName: 'chandbaliya'},
 
// ];
 
// let current = 0;
// let currentSong = songs[current].ele;
// songName.textContent = songs[current].audioName;



// playbtn.addEventListener('click',()=>{
//   if(currentSong.paused){
//   currentSong.play();

// }
// else{
//   currentSong.pause();
// }
// })
// nextbtn.addEventListener('click',()=>{
//   updateSong('next');

// });

// // const updateSong = (action){
// //   if(action=='next'){
// //     current++;
   
// //   }
// //   const updateSong = (action)=>{
// //     if(action=='prev'){
// //       current--;
// //     }
// //       // currentSong = songs[current].ele;
// //       // songName.textContent = songs[current].audioName;
    
// // }












//Accessing Pause Button
  let pauseBtn = document.querySelector("#pausedBtn");
 pauseBtn.addEventListener("click", () => {
   console.log("Pause button clicked");
  audio.pause();
 });
 // Accessing Play Button
let stopBtn = document.querySelector("#stopBtn");
  stopBtn.addEventListener("click", () => {
  console.log("stop button clicked");
   audio.pause();
    audio.currentTime = 0;
  });





  