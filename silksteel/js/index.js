const bootstrapDelay = 1000;
const apperanceTime = 1000;
const transitionTime = 500;
const debounceTime = 50;

const desktopSize = 768;

const torchVolume = 0.1;
const musicVolume = 0.2;

let music = false;

// Sounds
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
// Show content
function ShowLogo(delay){
    const logo = document.querySelector(".logo");
    setTimeout(() => {
        logo.style.opacity = 1;
    }, delay);
    return delay + apperanceTime;
}
function ShowTorches(delay){
    const torches = document.querySelectorAll(".torch");

    setTimeout(() => {
        torches.forEach((torch) => {
            torch.style.opacity = 1;
        })
    }, delay);
    delay += apperanceTime
    return delay;
}
function ShowHeroes(delay){
    const heroes = document.querySelector(".heroes");
    setTimeout(() => {
        heroes.style.opacity = 1;
    }, delay);
    return delay + apperanceTime;
}
function ShowOther(delay){
    const volume = document.querySelector(".volume");
    const socials = document.querySelector(".header__socials");
    const auth = document.querySelector(".header__auth");
    const burger = document.querySelector(".burger");
    const annotation = document.querySelector(".annotation");

    setTimeout(() => {
        volume.style.opacity = 1;
        socials.style.opacity = 1;
        auth.style.opacity = 1;
        burger.style.opacity = 1;
        annotation.style.opacity = 1;
    }, delay);

    return delay + apperanceTime;
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
// Preview
function HidePreview(){
    const preview = document.querySelector(".preview");
    preview.style.opacity = 0;
    setTimeout(() => {
        preview.style.display = "none";
        ShowContent();
        StartSounds();
    }, transitionTime + debounceTime);
}
// All modals
function CloseModals(exclude){
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        if(modal !== exclude) modal.style.opacity = 0;
    })
    setTimeout(() => {
        modals.forEach((modal) => {
            if(modal !== exclude) modal.style.display = "none";
            if(!exclude) document.body.style.overflow = "auto";
        })
    }, apperanceTime + debounceTime);
}
// Menu
function OpenMenu(){
    const menu = document.querySelector("#menu");
    CloseModals(menu);

    menu.style.display = "flex";
    document.body.style.overflow = "hidden";
    setTimeout(() => {
        menu.style.opacity = 1;
    }, debounceTime);
}
// Auth modals
function OpenAuth(id){
    const auth = document.querySelector("#" + id);
    CloseModals(auth);

    auth.style.display = "flex";
    document.body.style.overflow = "hidden";
    setTimeout(() => {
        auth.style.opacity = 1;
    }, debounceTime);
}
document.addEventListener("DOMContentLoaded", () => {
    
});