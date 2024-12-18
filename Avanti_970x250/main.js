var tl = new TimelineMax({ onComplete: endFrame, repeat: 0, repeatDelay: 3 });
window.onload = function () {
  initAd();
};

function endFrame() {
  console.log("endFrame()");

}


function initAd() {


  // Helper function
  let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  };

  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = 'visible';
  });

  //---------- START ANIMATION ------------
  tl.addLabel("start")
    .set("#bg1,#car", { opacity: 0 })


  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .to('#whiteShadow', 6, { x:370, ease: Power1.easeInOut }, "frame1")
    .to('#greenBorder_box1', 8, { x:-500,y:0, ease: Power1.easeInOut }, "frame1")
    .to('#orangeStripContainer', 8, {x:-500, ease: Power1.easeInOut}, "frame1")
    .to('#greenBorder_box2', 6, { x:-488,y:0, ease: Power1.easeInOut }, "frame1")
    .to('#textMain', 6, { x:-347,y:0, ease: Power1.easeInOut }, "frame1")
    .to('#copy3', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=1.25")
    .to('#copy4', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=2.2")
    .to('#copy5', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=3.1")
    .to('#copy6', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=4")
    .to('#copy7', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=4.9")
    .to('#whiteShadow', 3, { x:-15, ease: Power1.easeInOut }, "frame1+=6")
    .to('#greenBorder_box2', 3, { x:-996, ease: Power1.easeInOut }, "frame1+=6")
    .to('#textMain', 3, { x:-855, ease: Power1.easeInOut }, "frame1+=6")
    .to('#copy8', 1, { opacity:1, ease: Power1.easeOut }, "frame1+=7.2")
    .to('#copy9', 1, { opacity:1, ease: Power1.easeOut }, "frame1+=7.2")
    .to('#textMain2', 2, { x:-341, ease: Power1.easeOut }, "frame1+=7.2")
    .to('#textMain3', 2, { x:-340, ease: Power1.easeOut }, "frame1+=7.2")
    .to('#lightGreenContainer', 2, { x:-210, ease: Power1.easeOut }, "frame1+=7.5")
    .to('#logoDisc', 1, {y:-40, opacity:1, ease: Power1.easeInOut }, "frame1+=8.5")
    .to('#ctaBox', 1, { scale:0.9,opacity:1, ease: Power1.easeInOut }, "frame1+=9")

}
