const app = document.querySelector("#app");
const saContents = document.querySelectorAll(".sa");

// sa 클래스를 포함한 각 컨탠츠의 높이를 미리 저장
const contentHeight = [];
saContents.forEach(ele => {
    contentHeight.push(ele.offsetHeight);
});

// 시작 화면 스크롤 애니메이션
const balloon = document.querySelector(".bg-balloon");
const saStarts = document.querySelectorAll(".sa-start");
const scrollAnimationStart = function() {
    const currentScroll = window.scrollY;
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;
    // 풍선 애니메이션 숨김 처리
    if (currentScroll > innerHeight * 0.5) {
        balloon.classList.add("off");
    } else {
        balloon.classList.remove("off");
    }

    if (currentScroll < innerWidth){
        saStarts[0].style.transform = `translateX(${currentScroll * 2}px)`
        saStarts[0].style.opacity = 1;
        saStarts[1].style.transform = `translateX(-${currentScroll * 2}px)`
        saStarts[1].style.opacity = 1;
    } else {
        saStarts[0].style.opacity = 0;
        saStarts[1].style.opacity = 0;
    }
};

// main 컨탠츠 스크롤 애니메이션
// 컨탠츠의 top이 중앙으로 왔을 때가 아니라
// 스크롤이 컨탠츠의 중앙에 갔을 때로 바꿔야함
const scrollAnimationMain = function() {
    const currentScroll = window.scrollY;
    for (let i = 0; i < saContents.length; i++) {
        const contentTop = saContents[i].getBoundingClientRect().top;
        if (!saContents[i].classList.contains("show")) {
            if (contentTop < (window.innerHeight * 0.5)){
                saContents[i].classList.add("show");
                if (i % 2 === 0) {
                    app.classList.add("show");
                } else {
                    app.classList.remove("show");
                }
            }
        } else {
            if (contentTop > (window.innerHeight * 0.5)) {
                saContents[i].classList.remove("show");
                if (i % 2 === 0) {
                    app.classList.remove("show");
                } else {
                    app.classList.add("show");
                }
            }
        }
    }
};

document.addEventListener("scroll", scrollAnimationStart);
document.addEventListener("scroll", scrollAnimationMain);