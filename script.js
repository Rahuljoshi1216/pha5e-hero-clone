// Animate elements in hero section
gsap.to(".hero-content", {
    duration: 1.5,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.5
  });
  
  // Animate individual elements
  gsap.from("h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 0.3
  });
  
  gsap.from("p", {
    opacity: 0,
    y: -30,
    duration: 1,
    delay: 0.6
  });
  
  gsap.from(".btn", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.2,
    delay: 1
  });
  
  // Hover scale effect using JS + GSAP
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.1, duration: 0.2 });
    });
  
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.2 });
    });
  });
  
  // Smooth scroll to section
  document.querySelectorAll("button[data-target]").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Parallax light movement
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 100;
    const y = (e.clientY / window.innerHeight - 0.5) * 100;
  
    document.querySelector(".hero-section::before"); // Just keeping reference here
    document.querySelector(".hero-section").style.setProperty('--x', `${x}px`);
    document.querySelector(".hero-section").style.setProperty('--y', `${y}px`);
  
    document.querySelector(".hero-section::before");
    document.querySelector(".hero-section").style.setProperty('--parallaxX', `${x}px`);
    document.querySelector(".hero-section").style.setProperty('--parallaxY', `${y}px`);
  
    document.querySelector(".hero-section").style.setProperty('--light-transform', `translate(${x}px, ${y}px)`);
    document.querySelector(".hero-section").style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  });
  
