gsap.from("h1", {
    y: 100,
    opacity: 0,
    duration: 1
})
gsap.from("section img", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2
})
gsap.from("footer", {
    y: 100,
    opacity: 0,
    delay: 0.2
})
gsap.from("footer span, .options img, .video", {
    x: -200,
    opacity: 0,
    stagger: 0.2,
    delay: 0.4
})