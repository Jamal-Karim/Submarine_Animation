gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.to(".submarine", {
    scrollTrigger : {
        trigger : ".animation",
        start: "top top",
        pin: true,
        scrub : true
    },
    motionPath : {
        path : [{ x: 100, y: 50 },  
        { x: 300, y: 50 }, 
        { x: 300, y: 150 },  
        { x: 200, y: 250 }, 
        { x: 100, y: 150 },  
        { x: 600, y: 50 },
        {x: 800, y:300},
        {x:window.innerWidth, y:500}],
        autoRotate : true
    },
    duration : 3,
    ease: "power1.inOut"
})
