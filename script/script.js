const app = document.querySelector('#app');
const moveTopBtn = document.querySelector('#moveTopBtn');
const secStack = document.querySelector('#secStack');
const balloonList = document.querySelector('.bg-balloon');
const saStarts = document.querySelectorAll('.sa-start');
const saContents = document.querySelectorAll('.sa');
const moduleTop = document.querySelectorAll('.main-module');
const chagePoint =
  moduleTop[2].getBoundingClientRect().top - window.innerHeight / 2;

// 상단 이동 버튼 클릭 이벤트
moveTopBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// 시작 화면 스크롤 애니메이션
const scrollAnimationStart = function () {
  const currentScroll = window.scrollY;
  const innerHeight = window.innerHeight;
  // 상단으로 이동 버튼 숨김 처리
  if (currentScroll > 0) {
    moveTopBtn.classList.add('off');
  } else {
    moveTopBtn.classList.remove('off');
  }

  // 풍선 애니메이션 숨김 처리
  if (currentScroll > innerHeight * 0.5) {
    balloonList.classList.add('off');
  } else {
    balloonList.classList.remove('off');
  }
  // 로고 슬라이드 애니메이션
  if (currentScroll < innerHeight) {
    saStarts[0].style.transform = `translateX(${currentScroll * 3}px)`;
    saStarts[0].style.opacity = 1;
    saStarts[1].style.transform = `translateX(-${currentScroll * 3}px)`;
    saStarts[1].style.opacity = 1;
  } else {
    saStarts[0].style.opacity = 0;
    saStarts[1].style.opacity = 0;
  }
  // 백그라운드 변경 애니메이션
  if (currentScroll > chagePoint) {
    app.classList.add('show');
    moveTopBtn.classList.add('dark');
    secStack.classList.add('dark');
  } else {
    app.classList.remove('show');
    moveTopBtn.classList.remove('dark');
    secStack.classList.remove('dark');
  }
};

// main 컨탠츠 스크롤 애니메이션
const scrollAnimationMain = function () {
  for (let i = 0; i < saContents.length; i++) {
    const contentTop = saContents[i].getBoundingClientRect().top;
    if (!saContents[i].classList.contains('show')) {
      if (contentTop < window.innerHeight * 0.5) {
        saContents[i].classList.add('show');
      }
    } else {
      if (contentTop > window.innerHeight * 0.5) {
        saContents[i].classList.remove('show');
      }
    }
  }
};

document.addEventListener('scroll', scrollAnimationStart);
document.addEventListener('scroll', scrollAnimationMain);

// 새로고침 시 최 상단으로
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};
