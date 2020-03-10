const videos = document.querySelectorAll('.game-links');

for(let i = 0; i < videos.length; i++){
    videos[i].addEventListener('mouseover', function(){
        videos[i].muted = 'true';
        videos[i].loop = 'true';
        videos[i].play();
    })

    videos[i].addEventListener('mouseout', function(){
        videos[i].pause();
        videos[i].currentTime = 0;
    })
}