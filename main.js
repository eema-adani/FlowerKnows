// LOADING SCREEN //
const pageLoader = document.querySelector('.loader-container');

window.addEventListener('load', () => {
  pageLoader.style.display = 'none';
});

// PEARLS IN THE INTRO / LANDING PAGE //
gsap.to(".pearly", {duration:2, y:-60, x:-100}); // changing the cooridnates of the pearls for a duration of 2 seconds //
gsap.to(".pearlie", {duration:2, y:-60, x:-300});
gsap.to(".pearlie2", {duration:2, y:-60, x:-100});
gsap.to(".pearlie3", {duration:2, y:-60, x:-300});
gsap.to(".pearlie4", {duration:2, y:-60, x:-100});


// SCROLL UP BUTTON  //
let myButton = document.getElementById("button2");

window.onscroll = function() {scrollFunction()}; // When the user moves the page down by 20px from the top of the website, the button will appear the button//
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function topFunction() { // When the user clicks on the button, scroll to the top of the document//
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const dialog = document.querySelector('.dialog-overview');
const openButton = dialog.nextElementSibling;
const closeButton = dialog.querySelector('sl-button[slot="footer"]');

openButton.addEventListener('click', () => dialog.show());
closeButton.addEventListener('click', () => dialog.hide());


// AUDIO //
const barbieMusic = new Audio('music/backgroundmusic.mp3') // stating the variable. because I won't be declaring it again, it is a const //
const soundBtn = document.querySelector('#sound-btn') // calling on the class of the sound button//
soundBtn.addEventListener('click', () => {       //event listener for when user clicks sound button//
  
  if(barbieMusic.paused){  // if user plays the music the volume up icon appears and otherwise, the mute button appears//
    barbieMusic.play()
    soundBtn.name = 'volume-up'
  }else{
    barbieMusic.pause()
    soundBtn.name = 'volume-mute'
  }
  
})

//BOTTOM PEARLS//

gsap.to(".pearl1", {  // applying gsap to the pearl class//
  scrollTrigger: { 
    trigger:".pearl1", // when this pearl class appears, it will trigger the scroll animation //
    start:"top center", // top relates to the trigger element and center relates to the position of the view port//
    end:"+=300", // 300 pixels from the start position of the animation //
    scrub: 1, // holds the aniamtion so it doesn't play irregardless of scroll //
    toggleActions: "restart pause reverse pause", //the animation will restart every time the user scrolls past it,//
  },// pause if they scroll too fast, reverse as they come back up//
  
  rotation: 180, //rotating the pearl 180 degree for the animation - it will last 5 seconds//
  duration: 5,
});
  
gsap.to(".pearl3", {
  scrollTrigger: {
    trigger:".pearl1",
    start:"top center",
    end:"+=300",
    scrub: 1,
    toggleActions: "restart pause reverse pause",
  },
  rotation: 180,
  duration: 5,
});
  
gsap.to(".pearl2", {
  scrollTrigger: {
    trigger:".pel",
    start:"top center",
    end:"+=300",
    scrub: 1,
    toggleActions: "restart pause reverse pause",
  },
     
    rotation: 180,
    duration: 5,
});

gsap.to(".sidepearl1", {
  scrollTrigger: {
    trigger:".pel",
    start:"top center",
    end:"+=300",
    scrub: 1,
    toggleActions: "restart pause reverse pause",
  },
    rotation: 180,
    duration: 5,
});

gsap.to(".sidepearl2", {
  scrollTrigger: {
    trigger:".pel",
    start:"top center",
    end:"+=300",
    scrub: 1,
    toggleActions: "restart pause reverse pause",
  },
    rotation: 180,
    duration: 5,
});

gsap.to(".sidepearl3", {
  scrollTrigger: {
    trigger:".pel",
    start:"top center",
    end:"+=300",
    scrub: 1,
    toggleActions: "restart pause reverse pause",
  },
    rotation: 180,
    duration: 5,
});

gsap.to(".sidepearl4", {
  scrollTrigger: {
    trigger:".pel",
    start:"top center",
    end:"+=300",
    scrub: 1,
    toggleActions: "restart pause reverse pause",
  },
    rotation: 180,
    duration: 5,
});





