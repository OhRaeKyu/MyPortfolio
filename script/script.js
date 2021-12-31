// 스크롤 애니메이션 (컨텐츠)
const main = document.querySelector(".main");
const saList = document.querySelectorAll(".sa");

const scrollAnimation = function() {
    for (let i = 0; i < saList.length; i++) {
        if (!saList[i].classList.contains("show")) {
            if ((window.innerHeight * 0.65) > saList[i].getBoundingClientRect().top) {
                saList[i].classList.add("show");
            }
        } else {
            if ((window.innerHeight * 0.65) < saList[i].getBoundingClientRect().top) {
                saList[i].classList.remove("show");
            }
        }
    }
};

document.addEventListener("load", scrollAnimation);
document.addEventListener("scroll", scrollAnimation);