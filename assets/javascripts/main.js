var tl = gsap.timeline();
var tl2 = gsap.timeline();
var tl3 = gsap.timeline();
var tl31 = gsap.timeline();
var tl32 = gsap.timeline();
var tl33 = gsap.timeline();
var tl34 = gsap.timeline();
var tl35 = gsap.timeline();
var tl4 = gsap.timeline();
var tltl = gsap.timeline({repeat: 40});
//var tlsanta = gsap.timeline( { repeat: 40 } );

tltl.to("#animation-home", 10, 
  {
    rotation: 360, 
    transformOrigin:"center",
    scale:1.2,
    ease: Power0.easeNone,  
    repeat:-1
  },              
0);

tl3.set("#load-logo",{scale: 1, opacity: 1});
tl3.to("#load-logo",{duration: 1, scale: 12, opacity: 0},0.5);
tl3.to(".main",{duration: 0, opacity: 1});

//title
tl3.from(".content-title-mid",{duration: 0.5, scale: 12, opacity: 0, ease: "expo"});
tl3.from(".content-title-right",{duration: 0.5, x: -300, opacity: 0, ease: "expo"});

//background
tl3.from(".bottom-left", {duration: 0.5, scale: 0, ease: "circ"});
tl3.from(".bottom-right", {duration: 0.5, scale: 0, ease: "circ"});

// ông già
tl.from("#layer-20", {duration: 5, x: 1000, y: -1000, rotate: 0, ease: "expo", delay: 3});
tl.from("#Layer-19", {duration: 2, scale: 0, ease: "circ"});
tl2.from("#layer-18", {duration: 2, x: 1000, y: -1000, rotate: 0, ease: "circ", delay: 3});
tl2.from("#layer-12-div", {duration: 2, width: 0, ease: "circ"});

// tlsanta.set("#santa", {y: 0, x: 0});
// tlsanta.to("#santa", {
// 	duration: 10, 
//   	//yoyo: true,
//   	motionPath:{
//     	path: ".cls-path-run-santa"
//   	}
// }, 6);
// tlsanta.to("#santa", {duration: 0.5, rotate: -60, rotateY: 180, scale: 0.5 }, 9);

// MotionPathHelper.create("#santa")
//nhà
tl31.from("#layer-10", {duration: 1, scale: 0, ease: "circ", delay: 3});
tl32.from("#Layer-11", {duration: 1, scale: 0, ease: "circ", delay: 3});
tl33.from("#Layer-13", {duration: 1, scale: 0, ease: "circ", delay: 3});
tl34.from("#Layer-14", {duration: 1, scale: 0, ease: "circ", delay: 3});
tl35.from(".load-background-bottom-1", {duration: 1, scale: 0, ease: "back", delay: 3});
tl35.from(".load-background-bottom-2", {duration: 1, scale: 0, ease: "back"});

// người tuyết
tl34.from("#Layer-16", {duration: 1, scale: 0, ease: "back"});

// cây thông
tl3.from("#Layer-9", {duration: 1, scale: 0, ease: "back", delay: 2});
//cây gì đó
tl3.from("#Layer-15", {duration: 1, scale: 0, ease: "back"});
// cây 
tl3.from(".layer-5-1#Layer_5", {duration: 0.5, scale: 0, ease: "back"});
tl3.from(".layer-5-2#Layer_5", {duration: 0.5, scale: 0, ease: "back"});
tl3.from(".layer-5-3#Layer_5", {duration: 0.5, scale: 0, ease: "back"});

tl3.from("#layer-6", {duration: 1, x: -500, y: -400, ease: "circ"});

//người
tl4.to("#man2 #Layer-8", 1, 
  {
  	opacity: 1,
    y: 15,
    yoyo: true,
    ease: Power0.easeNone,  
    repeat:-1
  },              
0);
tl4.to("#man #Layer-8", 1, 
  {
  	opacity: 1,
    y: 15,
    yoyo: true,
    ease: Power0.easeNone,  
    repeat:-1
  },              
0.5);
tl4.to("#Layer-7", 1, 
  {
  	opacity: 1,
    y: 15,
    yoyo: true,
    ease: Power0.easeNone,  
    repeat:-1
  },              
1);