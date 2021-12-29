// 스크롤 애니메이션 (헤더)
const headBar = document.querySelector(".head");

let prevScrollTop = 0;
document.addEventListener("scroll", () => { 
    const nextScrollTop = window.pageYOffset || 0; 
    if (nextScrollTop > prevScrollTop){
        headBar.classList.add("scrollDown");
    } else if (nextScrollTop < prevScrollTop){
        headBar.classList.remove("scrollDown");
    }
    prevScrollTop = nextScrollTop;
});

// 상단 네비게이션 이벤트 처리
const burgerNav = document.querySelector(".nav-trigger");
const headNav = document.querySelector(".head-nav");
const headNavEle = document.querySelectorAll(".head-nav ul li");

burgerNav.addEventListener("click", () => {
    burgerNav.classList.toggle("active");
    headNav.classList.toggle("on");
});

headNavEle.forEach(ele => ele.addEventListener("click", () => {
    burgerNav.classList.toggle("active");
    headNav.classList.toggle("on");
}
))

// 스크롤 애니메이션 (컨텐츠)
const saList = document.querySelectorAll(".sa");

const scrollAnimation = function() {
    for (const ele of saList) {
        if (!ele.classList.contains("show")) {
            console.log("debug #1");
            if (window.innerHeight > ele.getBoundingClientRect().top + (window.innerHeight * 0.5)) {
                ele.classList.add("show");
                console.log("debug #2");
            } 
            // 스크롤 다시 올릴 때 처리해야함
        }
    }
};

document.addEventListener("load", scrollAnimation);
document.addEventListener("scroll", scrollAnimation);
