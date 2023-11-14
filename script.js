let tl = gsap.timeline()

tl.from("#nav", {
    opacity: 0,
    delay: 0.3
})

tl.from("#nav h1, #nav h3, #nav h4", {
    y: -100,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.1,
    opacity: 0,
})

tl.from("#left h1", {
    x: -500,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
})

tl.from("#right", {
    scale: 0.5,
    opacity: 0,
    duration: 0.5
})

tl.from("#content", {
    opacity: 0,
    delay: 0.3
})

tl.from("#content h3", {
    x: -500,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
})


gsap.from("#page2 .box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger:0.2,
    scrollTrigger: {
        trigger: "#page2 .box",
        scroller: "body",

    }
})

gsap.from("#page2>.info>.info-main", {
    x: -500,
    duration:0.9,
    stagger: 0.6,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body"
    }
})

gsap.from("#page2>.info>.info-content", {
    x: -500,
    duration:0.9,
    stagger: 0.6,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body"
    }
})