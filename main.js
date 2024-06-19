const meme = ['DontRun', 'StartUp', 'Women', 'AAAHHH'];
const number = ['1', '2', '3', '4'];
const containerEl = document.querySelector('.container');

meme.forEach((sound)=>{
    const btnEl = document.createElement('button');
    btnEl.classList.add('btn');
    btnEl.innerText = sound;
    btnEl.style.backgroundImage = "url(img/" + sound + ".jpg)";
    containerEl.appendChild(btnEl);
    const audioEl = document.createElement('audio');
    audioEl.src= "audio/" + sound + '.mp3';
    containerEl.appendChild(audioEl);
    btnEl.addEventListener('click', ()=> {
        audioEl.play();
    })

    const stopbtnEl = document.querySelector('.stopbtn');
    stopbtnEl.addEventListener('click', ()=>{
        audioEl.pause();
        audioEl.currentTime = 0;
    })
})