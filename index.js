// menu Bar
let menuBar = document.querySelector(".menu")
let bar1Tag = document.querySelector(".bar1")
let bar2Tag = document.querySelector(".bar2")
let bar3Tag = document.querySelector(".bar3")
let header = document.querySelector(".header ul")
let homeDiv = document.querySelector(".home")

menuBar.addEventListener("click",()=> {
    window.addEventListener("resize",function(){
        console.log(window.innerWidth)
        if(window.innerWidth < 900){
            header.style.display = "none"
            if(menuBar.classList.contains("active")){
                header.style.display = "block"
            }
        }
        if(this.window.innerWidth>900){
            header.style.display = "flex"
        }
       
    })
    if(menuBar.classList.contains("active")){
        bar1Tag.classList.remove("rotate45degplus")
        bar3Tag.classList.remove("rotate45degminus")
        bar2Tag.classList.remove("hideLine2")
        menuBar.classList.remove("active")
        header.style.display = "none"
        homeDiv.classList.remove("opacity")
    } else{
        bar1Tag.classList.add("rotate45degplus")
        bar3Tag.classList.add("rotate45degminus")
        bar2Tag.classList.add("hideLine2")
        menuBar.classList.add("active")
        header.style.display = "block"
        homeDiv.classList.add("opacity")
    }
})

// login 
let loginFomr = document.querySelector(".loginForm")
let loginClick = document.querySelector(".loginClick")
let close = document.querySelector(".bx-window-close")
loginClick.addEventListener("click",()=> {
   loginFomr.style.display = "block"
})
close.addEventListener("click",()=> {
    loginFomr.style.display = "none"
})
// type Script
var type = new  Typed(".typeScript",{
    strings : ["WebDeveloper","Gammer","Learnging"],
    typeSpeed : 150,
    backSpeed : 150,
    loop: true
})

let clickFunction = document.querySelectorAll(".about ul li")
let div = document.querySelectorAll(".about .div")
console.log(div)
let one = document.querySelector(".container1")
let two = document.querySelector(".container2")
let three = document.querySelector(".container3")
let four = document.querySelector(".container4")
let five = document.querySelector(".container5")
let six = document.querySelector(".container6")
for(let i=0;i<clickFunction.length;i++){
    clickFunction[i].addEventListener("click",function(){
        for(let i=0;i<clickFunction.length;i++){
            clickFunction[i].classList.remove("active")
        }
        this.classList.add("active")
        let data = this.getAttribute('data-flter');
        for(let i=0;i<div.length;i++){
            console.log(div[i])
            div[i].classList.add("hideDiv")
            console.log(div[i].getAttribute('data-item'))
            if(div[i].getAttribute('data-item') === data){
                div[i].classList.remove("hideDiv")
            }
        }
    })
}
// Event
const buttonTag = document.querySelector(".clickButton")
const image = document.querySelector(".imageSmall")
let originalImage = image.src;
const imageArray = [
    "1.jpg","2.jpg","3.jpg","4.jpg","aa.jpg","h.jpg","11.jpg","8.jpg"
]
let count = 0;
buttonTag.addEventListener("click",()=> {
    if(count === imageArray.length){
        count =0;
        image.src = originalImage;
        return;
    }
    const  imageLink = imageArray[count];
    image.src = imageLink;
    count++;
})

let musicPlaylist = document.querySelector(".playList")
let audioTag = document.querySelector("audio")
let playButton = document.querySelector(".play")
let pauseButton = document.querySelector(".pause")
let previousButton = document.querySelector(".previous")
let nextButton = document.querySelector(".next")
let showDuration = document.querySelector(".showDuration")
let currentBar = document.querySelector(".currentBar")
const musicArray = [
    {title : "music1", trackId:"2.mp3"},
    {title : "music2", trackId:"3.mp3"},
    {title : "music4", trackId:"4.mp3"},
    {title : "music5", trackId:"5.mp3"},
    {title : "music6", trackId:"6.mp3"},
]
let index=0;
for(let i=0;i<musicArray.length;i++){
    const divItem= document.createElement("div")
    divItem.addEventListener("click",()=> {
        audioTag.src = musicArray[i].trackId;
        pauseButton.style.display = "inline";
        playButton.style.display = "none"; 
        audioTag.play()
        index = i;
    })
    divItem.classList.add("space")
    const dataItem =(i+1).toString()+". " + musicArray[i].title;
    divItem.append(dataItem)
    musicPlaylist.append(divItem)
}
let minuteAndsecond = "0:0"
let duration = 0;
audioTag.addEventListener("loadeddata",()=> {
    duration = Math.floor(audioTag.duration)
    minuteAndsecond = totalSecond(duration)  
})
audioTag.addEventListener("timeupdate",()=> {
    const currentTime = Math.floor(audioTag.currentTime)
    let durationData = totalSecond(currentTime)
    showDuration.textContent = durationData +" /"+minuteAndsecond;
    updateCurrnetBar(currentTime)
})
const updateCurrnetBar = (currentTime)=> {
    const currentWidth = 500/duration * currentTime;
    currentBar.style.width = currentWidth +"px";
}
const totalSecond = (totalsecond)=> {
    const minute = Math.floor(totalsecond/60);
    const second = totalsecond%60;
    const minuteText = minute < 10 ? "0"+minute.toString() : minute;
    const secondText = second <10 ? "0"+second.toString():second;
    return minuteText+":"+secondText
}
let isPlaying = false;
playButton.addEventListener("click",()=> {
    const currentTime = Math.floor(audioTag.currentTime)
    if(currentTime === 0){
        const songIdplay = musicArray[0].trackId
        audioTag.src = songIdplay;
        audioTag.play()
        isPlaying = true;
        upDateButton();
    } else{
        audioTag.play()
        isPlaying = true;
        upDateButton()
    }
   
})
pauseButton.addEventListener("click",()=> {
    audioTag.pause()
    isPlaying = false;
    upDateButton()
})
previousButton.addEventListener("click",()=> {
    if(index === 0){
        return;
    }
    index -=1;
    console.log(index)
    const preMusic = musicArray[index].trackId;
    audioTag.src = preMusic;
    audioTag.play()
    isPlaying = true;
    upDateButton()
})
nextButton.addEventListener("click",()=> {
    index+=1;
    if(index === musicArray.length-1){
        index=0;
        return;
        
    }
    console.log(index)
    const nextMusic = musicArray[index].trackId;
    audioTag.src = nextMusic;
    audioTag.play()
    isPlaying = true;
    upDateButton();
})
const upDateButton = ()=> {
    if(isPlaying){
        pauseButton.style.display = "inline"
        playButton.style.display = "none"
    } else{
        pauseButton.style.display = "none"
        playButton.style.display = "inline"
    }
}

// shopping List
let i = 0;
const shoppingList = document.querySelector(".inputTag")
const listTag = document.querySelector(".list")
shoppingList.addEventListener("change",(event)=> {
    i++;
    let inputData = event.target.value;
    console.log(inputData)
    const divOne = document.createElement("div")
    divOne.classList.add("divOne")
    const spanDiv = document.createElement("span")
    // const parentDiv = document.createElement("div")
    const icon = document.createElement("i");
    icon.addEventListener("click",()=> {
        divOne.style.display = "none"
        
    })
    icon.style.cursor = "pointer"
    icon.classList.add("fa-solid","fa-trash")
    spanDiv.addEventListener("click",()=> {
        if(spanDiv.classList.contains("lineThrougnt")){
            spanDiv.classList.remove("lineThrougnt")
        }else{
        spanDiv.classList.add("lineThrougnt")
        }
    })
    spanDiv.classList.add("itemList")
    spanDiv.append((i).toString()+". "+inputData)
    divOne.append(spanDiv,icon)
    listTag.append(divOne)
    
})


// container 4

const btn1 = document.querySelector(".start")
const btn2 = document.querySelector(".pau_se")
const btn4 = document.querySelector(".restart")
const btn3 = document.querySelector(".continue")
let upDate = document.querySelector(".update")
let second =0;
minute = 0;
hour = 0;
let startTime;
let item =()=> {
     startTime = setInterval(()=> {
        second++;
        if(second  === 60){
            second = 0;
            minute +=1;
            if(minute === 60){
                hour += 1;
                minute = 0;
            }
        }
        const secondText1 = second < 10 ? "0"+second:second;
        const minuteText2 = minute < 10 ? "0"+minute:minute;
        const hourText3 = hour < 10 ? "0"+hour :hour;
        upDate.textContent = hourText3 +":"+minuteText2+":"+secondText1;
    
    }, 1000);
}
btn1.addEventListener("click",()=> {
    item()
})
btn2.addEventListener("click",()=> {
    clearInterval(startTime)
})
btn3.addEventListener("click",()=> {
    clearInterval(startTime)
    item();
})
btn4.addEventListener("click",()=> {
    second =0;minute=0,hour=0;
    clearInterval(startTime)
    item()
})