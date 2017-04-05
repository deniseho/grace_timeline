// ------------ MENU button ------------
(function () {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();


// ------------ SCROLL animations ------------
// init
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  }
});

var wh = window.innerHeight;

var bgColors = ['lightseagreen', 'lightcoral', 'lightsalmon'];

$('.glasses-history .screen').each(function(){
  var tl = new TimelineMax()
  .from($('.screen'),0,{autoAlpha:0})
  .from($('.innerText'),0,{autoAlpha:0})
  .from($('.glasses-name'),1,{autoAlpha:0})
  .from($('.glasses-intro'),1,{autoAlpha:0})
});


// 設定背景顏色
$(".section-wrap").each(function (index) {
  switch (index % 3) {
    case (0):
      this.style.backgroundColor = bgColors[0];
      break;
    case (1):
      this.style.backgroundColor = bgColors[1];
      break;
    case (2):
      this.style.backgroundColor = bgColors[2];
      break;
  }
})

$(".grace-history > section").each(function (index) {
 var graceHistoryList = new TimelineMax()
  // 得恩堂歷史
  .fromTo($('.innerS_'+index), 6,{ autoAlpha:0, ease: Power4.easeInOut },
          { autoAlpha:1,ease: Power4.easeInOut }, "+=0.1")
  // 眼鏡圖片
  .fromTo($('.screen_'+index), 5,{ autoAlpha:0, ease: Power4.easeInOut },
          { autoAlpha:1,ease: Power4.easeInOut }, 0)

  .fromTo($('.screen_'+(index-1)), 5,{ autoAlpha:1, ease: Power4.easeInOut },
          { autoAlpha:0, ease: Power4.easeInOut }, 0)

  // 眼鏡標題
  .fromTo($('.glasses-name_'+index), 3, { yPercent: 20, autoAlpha: 0, scale: 0.8 },
         { yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut }, 0)

  .fromTo($('.glasses-name_'+(index-1)), 3, { yPercent: 0, autoAlpha: 1, scale: 1 },
         { yPercent: 20, autoAlpha: 0, scale: 0.8, ease: Power4.easeOut }, 0)
 
   // 眼鏡內文
  .fromTo($('.glasses-intro_'+index), 3, { yPercent: 20, autoAlpha: 0, scale: 0.8 },
         { yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut }, 0)

  .fromTo($('.glasses-intro_'+(index-1)), 3, { yPercent: 0, autoAlpha: 1, scale: 1 },
         { yPercent: 20, autoAlpha: 0, scale: 0.8, ease: Power4.easeOut }, 0)

  new ScrollMagic.Scene({
    triggerElement: this,
    duration: '200%'
  })
    .setTween(graceHistoryList)
    .setPin(this, { pushFollowers: true })
    .addTo(controller)
    .addIndicators({
      name: '得恩堂歷史' + index
    })
});
