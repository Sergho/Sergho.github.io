const bootstrapDelay = 1000;
const apperanceTime = 1000;
const transitionTime = 550;

const torchVolume = 0.1;
const musicVolume = 0.2;

let music = false;

function EnableTorchSounds(){
    const torches = document.querySelectorAll('.torch__video');
    torches.forEach((torch) => {
        torch.volume = 0;
        torch.play();
    })
    torches[0].volume = torchVolume;
}
function DisableTorchSounds(){
    const torches = document.querySelectorAll('.torch__video');
    torches.forEach((torch) => {
        torch.volume = 0;
    })
}
function StartMusic(){
    const music = document.querySelector('.music__audio');
    music.volume = musicVolume;
    music.play();
}
function StopMusic(){
    const music = document.querySelector('.music__audio');
    music.pause();
}
function StartSounds(){
    StartMusic();
    EnableTorchSounds();
    music = true;
}
function StopSounds(){
    StopMusic();
    DisableTorchSounds();
    music = false;
}
function SwitchMusic(){
    const switcher = document.querySelector('.volume__button');
    if(music){
        StopSounds();
        switcher.classList.add("disabled");
    } else {
        StartSounds();
        switcher.classList.remove("disabled");
    }
}
function ShowLogo(delay){
    const logo = document.querySelector(".logo");

    if(logo.style.display !== "none"){
        setTimeout(() => {
            logo.style.opacity = 1;
        }, delay);
        delay += apperanceTime;
    }
    return delay;
}
function ShowTorches(delay){
    const torches = document.querySelectorAll(".torch");

    if(torches[0].style.display != "none"){
        setTimeout(() => {
            torches.forEach((torch) => {
                torch.style.opacity = 1;
            })
        }, delay);
        delay += apperanceTime
    }
    return delay;
}
function ShowHeroes(delay){
    const heroes = document.querySelector(".heroes");

    if(heroes.style.display != "none"){
        setTimeout(() => {
            heroes.style.opacity = 1;
        }, delay);
        delay += apperanceTime
    }
    return delay;
}
function ShowOther(delay){
    const volume = document.querySelector(".volume");
    const socials = document.querySelector(".header__socials");
    const auth = document.querySelector(".header__auth");
    const annotation = document.querySelector(".annotation");

    if(volume.style.display != "none"){
        setTimeout(() => {
            volume.style.opacity = 1;
        }, delay);
    }
    if(socials.style.display != "none"){
        setTimeout(() => {
            socials.style.opacity = 1;
        }, delay);
    }
    if(auth.style.display != "none"){
        setTimeout(() => {
            auth.style.opacity = 1;
        }, delay);
    }
    if(annotation.style.display != "none"){
        setTimeout(() => {
            annotation.style.opacity = 1;
        }, delay);
    }
    if(volume.style.display != "none" ||
    socials.style.display != "none" ||
    auth.style.display != "none" ||
    annotation.style.display != "none"){
        delay += apperanceTime;
    }

    return delay;
}
function ShowContent(){
    let delay = bootstrapDelay;

    delay = ShowLogo(delay);
    delay = ShowTorches(delay);
    delay = ShowHeroes(delay);
    delay = ShowOther(delay);

    setTimeout(() => {
        document.body.style.overflow = "auto";
    }, delay);
}
function HidePreview(){
    const preview = document.querySelector(".preview");
    preview.style.opacity = 0;
    setTimeout(() => {
        preview.style.display = "none";
        ShowContent();
        StartSounds();
    }, transitionTime);
}
document.addEventListener("DOMContentLoaded", () => {
    
});