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
    .to('#greyBorder_box', 5, {x:-143, y:-323, ease: Power1.easeIn}, "frame1")
    .to('#whiteShadow', 3.5, { y:32, ease: Power1.easeInOut }, "frame1")
    .to('#textMain', 8, { x:-130,y:-352, ease: Power1.easeInOut }, "frame1")
    .to('#copy2', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=1.6")
    .to('#copy3', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=2.1")
    .to('#copy4', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=2.6")
    .to('#copy5', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=3.1")
    .to('#copy6', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=3.6")
    .to('#copy7', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=4.1")
    .to('#orangeStripContainer', 5, {x:38, y:-344, ease: Power1.easeInOut}, "frame1+=2.8")
    .to('#lightGreenContainer', 5, {x:-45, ease: Power1.easeInOut}, "frame1+=2.8")
    .to('#copy8', 1, { opacity:1, ease: Power1.easeIn }, "frame1+=6.2")
    .to('#textMain2', 2, { x:-25,y:-96, ease: Power1.easeOut }, "frame1+=6.2")
    .to('#copy8', 1, { opacity:0, ease: Power1.easeInOut }, "frame1+=10")
    .to('#copy9', 1, { opacity:1, ease: Power1.easeInOut }, "frame1+=10")
    .to('#textMain3', 2, { x:-24,y:-60, ease: Power1.easeInOut }, "frame1+=10")
    .to('#logoDisc', 1, {y:-8, opacity:1, ease: Power1.easeInOut }, "frame1+=11.5")
    .to('#ctaBox', 1, { scale:1,opacity:1, ease: Power1.easeInOut }, "frame1+=13")


  endFrame()

}