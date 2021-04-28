
// animate 라이브러리 설정 적용 - jQuery필요
$('.animate').scrolla({
    mobile: false,
    once: false
});


// slick 라이브러리 설정 적용 - jQuery 필요
$('section.visual .slide').slick({
    autoplay : true, // 자동 재생 효과 켬
    autoplaySpeed : 3000,  // 자동 재생 간격 3초
    fade : true // 페이드 인 효과 켬
});
