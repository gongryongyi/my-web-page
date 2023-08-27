


/* 메인 큰 텍스트 설정 */
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".header");
    const glitchWindow = document.createElement("div");
    glitchWindow.classList.add("glitch-window");
    
    const h1 = document.querySelector(".glitched");
    const h1Clone = h1.cloneNode(true);
    
    glitchWindow.appendChild(h1Clone);
    header.appendChild(glitchWindow);







  /* 네비게이션 바 */
let yOffset = 0;

const navGlobalFixed = () => {
    if (yOffset > 50) {
      document.body.classList.add("local-nav-sticky");
    } else {
      document.body.classList.remove("local-nav-sticky");
    }
  };
  
  const load = () => {
    window.addEventListener("load", () => {
      window.addEventListener("scroll", () => {
        yOffset = window.pageYOffset;
        console.log("y: " + yOffset);
        navGlobalFixed();
      });
    });
  };
  
  load();



    /* 메인화면 비디오 속도 조절 */
    const video = document.getElementById("main_video");
    video.playbackRate = 0.85;
  
    });
    
    /**/
    video.style.pointerEvents = "none";
  
    const glitchWindow = document.querySelector(".glitch-window");
    const h1 = document.querySelector(".glitched");
    const h1Clone = h1.cloneNode(true);
    glitchWindow.appendChild(h1Clone);
  
    