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
    .to('#whiteShadow', 6, { y:162, ease: Power1.easeInOut }, "frame1")
    .to('#greenBorder_box1', 8, { x:0,y:-508, ease: Power1.easeInOut }, "frame1")
    .to('#greenBorder_box2', 6.6, { x:0,y:-463, ease: Power1.easeInOut }, "frame1")
    .to('#textMain', 8, { x:0,y:-508, ease: Power1.easeInOut }, "frame1")
    .to('#copy2', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=0.5")
    .to('#copy3', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=1.2")
    .to('#copy4', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=2.06")
    // .to('#copy5', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=3.2")
    .to('#copy6', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=2.5")
    .to('#copy7', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=3")
    .to('#orangeStripContainer', 5, {y:-481, ease: Power1.easeInOut}, "frame1+=2")
    .to('#copy8', 1, { opacity:1, ease: Power1.easeOut }, "frame1+=4.75")
    .to('#textMain2', 2, {y:-290, ease: Power1.easeOut }, "frame1+=4.75")
    .to('#copy9', 1, { opacity:1, ease: Power1.easeOut }, "frame1+=5.2")
    .to('#textMain3', 2, { y:-229, ease: Power1.easeOut }, "frame1+=5.2")
    .to('#logoDisc', 1, {y:-8, opacity:1, ease: Power1.easeOut }, "frame1+=8")
    .to('#ctaBox', 1, { scale:1,opacity:1, ease: Power1.easeInOut }, "frame1+=9")

}
