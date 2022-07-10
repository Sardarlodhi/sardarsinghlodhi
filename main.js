// Scroll Progress-bar Animation start
const scrollProgress = document.getElementById('scroll-progress');
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});
// Scroll Progress-bar Animation end
//=====================================================

// Navigation section start
document.querySelector('.first-button').addEventListener('click', function() {

  document.querySelector('.animated-icon').classList.toggle('open');
});
document.querySelector('.second-button').addEventListener('click', function() {

  document.querySelector('.animated-icon2').classList.toggle('open');
});
document.querySelector('.third-button').addEventListener('click', function() {

  document.querySelector('.animated-icon3').classList.toggle('open');
});
// Navigation section end 
//=====================================================

// Header section start 

var span = document.querySelector(".typewriter span");
var textArr = span.getAttribute("data-text").split(", ");
var maxTextIndex = textArr.length;

var sPerChar = 0.15;
var sBetweenWord = 1.5;
var textIndex = 0;

typing(textIndex, textArr[textIndex]);

function typing(textIndex, text) {
  var charIndex = 0;
  var maxCharIndex = text.length - 1;

  var typeInterval = setInterval(function() {
    span.innerHTML += text[charIndex];
    if (charIndex == maxCharIndex) {
      clearInterval(typeInterval);
      setTimeout(function() { deleting(textIndex, text) }, sBetweenWord * 1000);

    } else {
      charIndex += 1;
    }
  }, sPerChar * 1000);
}

function deleting(textIndex, text) {
    var minCharIndex = 0; 
    var charIndex = text.length - 1; 
    var typeInterval = setInterval(function() {
  span.innerHTML = text.substr(0, charIndex);
  if (charIndex == minCharIndex) {
    clearInterval(typeInterval);
    textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1;
    setTimeout(function() { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 1000);
  } else {
    charIndex -= 1;
  }
}, sPerChar * 1000);
}

          
// Header section end 
//=====================================================



// About section start 
// About section end 
//=====================================================


// Education section start  
// Education section end
//=====================================================
 
 
// Skill section start 
// Skill section end 
//=====================================================


// Project section start 
let t1 = gsap.timeline();
let t2 = gsap.timeline();
let t3 = gsap.timeline();
t1.to(".cog1",
{
  transformOrigin: "50% 50%",
  rotation: "+=360",
  repeat: -1,
  ease: Linear.easeNone,
  duration: 8
});
t2.to(".cog2",
{
  transformOrigin: "50% 50%",
  rotation: "-=360",
  repeat: -1,
  ease: Linear.easeNone,
  duration: 8
});
t3.fromTo(".wrong-para",
{
  opacity: 0
},
{
  opacity: 1,
  duration: 1,
  stagger: {
    repeat: -1,
    yoyo: true
  }
});
// Project section end 
//=====================================================


// Contact section start 
// Contact section end 
//=====================================================


// Footer section start 
// Footer section end 
//======================================================
