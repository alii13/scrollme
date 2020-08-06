const t1 = gsap.timeline(
    {ease:'none'}
)
t1
  .to(".back",{
    ease:'none',
    scrollTrigger:{
        trigger:".starting",
        scrub:true,
        pin:true,
        end: "+=1000",

    },
   
    x:330
  })
  .to(".side",{
    ease:'none',

    scrollTrigger:{
        trigger:".starting",
        scrub:true,
        pin:true,
        end: "+=1000",

    },
    x:570
  },0)

  .from(".side-heading",{
    ease:'none',
    opacity:-1,
    delay:2,
    scrollTrigger:{
        trigger:".starting",
        scrub:true,
    },
    y:-150,

  },0)

  const t2= gsap.timeline({
      ease:'none',
  })

t2
.from(".pink",{
    ease:'none',

    scrollTrigger:{
        trigger:".middle-section",
        scrub:true,
        start:"top center",
        end:"center,center+=10%"
    },
    y:750,
  })

  .from(".yellow",{
    ease:'none',
    delay:0.7,
    scrollTrigger:{
        trigger:".middle-section",
        scrub:true,
        start:"top center",
        end:"center,center+=10%"
    },
    y:550,
  },)

  .from(".grreen",{
    ease:'none',
    delay:0.7,
    scrollTrigger:{
        trigger:".middle-section",
        scrub:true,
     
    },
    y:550,
  })

  .from(".blue",{
    ease:'none',
    delay:0.7,
    scrollTrigger:{
        trigger:".middle-section",
        scrub:true,
    },
    y:350,
  },)

  const t3= gsap.timeline({
    ease:'none',
})

t3
.to(".btg",{
    ease:'none',
    scrollTrigger:{
        trigger:".footer-relation",
        scrub:true,
       
        
    },
    x:-600,
  })

  .from(".txt",{
    ease:'none',
    opacity:-1,
    scrollTrigger:{
        trigger:".footer-relation",
        scrub:true,
        end:"center center-=10%",
    },
    y:-100,

  },"-=1")

