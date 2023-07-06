// badges
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function (){
  console .log(window.scrollY);
    if (window.scrollY > 500) {
      //  배지 숨기기
      gsap.to(badgeEl, .6, {
        opacity: 0,
        display: 'none'
      });
      //  버튼 보이기!
      gsap.to(toTopEl, .2, {
        x: 0
      }); 

    } else {
      // 배지보이기
      gsap.to(badgeEl, .6, {
        opacity: 1,
        display: 'block'
      });
      // 버튼 숨기기!
      gsap.to(toTopEl, .2, {
        x: 100
      });
    }
}, 300));
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


// 섹션 타이틀 화면 페이드인
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index +1) * .7, //0.7, 1.4, 2.1, 2.7 순차적으로 화면에 나타남
    opacity: 1
  });
});

//슬라이드 swifer
new Swiper('.notice-line .swiper', {
  direction: 'vertical',  // 수직 정렬
  autoplay: true, // 자동 재생 여부
  loop: true  // 반복 재생 여부
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',  // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능(클릭) 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', // 이전 슬라이드 보는 기능
    nextEl: '.promotion .swiper-next'  // 다음 슬라이드 보는 기능
  },
});

// swiper2 rewards-slide//
new Swiper('.awards .swiper', {
  // direction: 'horiziontal' 수평 정렬 기본값
  slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 30, // 슬라이드 사이 여백
  loop: true,  // 반복 재생 여부
  autoplay: true,
  navigation: {
    prevEl: '.awards .swiper-prev', // 이전 슬라이드 보는 기능
    nextEl: '.awards .swiper-next'  // 다음 슬라이드 보는 기능
  }
});





const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});


function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector ,delay ,size) {
// gsap.to(요소, 시간, 옵션));
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOUt,
    delay: random(0, delay)
  });
}

floatingObject('.floating1', 1 ,15);
floatingObject('.floating2', .5 ,15);
floatingObject('.floating3', 1.5 ,20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
