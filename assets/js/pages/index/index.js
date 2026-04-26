import { gsap, ScrollTrigger } from '../../global/dependencies.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    gsap.set(".reveal", { opacity: 0, y: 30 });

    gsap.to(".reveal", {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.3
    });

    gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".grid-section",
            start: "top 90%",
        }
    });
});
