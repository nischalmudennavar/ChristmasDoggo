const damnItScroll=()=>{


  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  })

  locoScroll.on('scroll', ScrollTrigger.update)
  
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".container", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
  });
  var c1 = gsap.timeline({
  
    scrollTrigger: {
      trigger: ".home-section",
      scroller: ".container",
      scrub: true,
      pin:true,
      start: "top top",
      end: "+=100%"
    }
  
  });
  
  c1.from('.lid',{translateX:0})
  c1.to('.lid',{translateY:-10})
  c1.to('.lid',{translateX:200})
  // c1.to('.lid',{translateX:300})
 
  c1.to('.lid',{rotate:45,transformOrigin:" left"})
  c1.to('.dogooo',{translateY:-105})
  c1.from('.message',{scale:0})

  c1.to('.message',{translateY:-400,scale:1,transformOrigin:"center bottom"})



  
  
  
  
  ScrollTrigger.refresh();
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  

      
    
    
}