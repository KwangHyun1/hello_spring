$(document).ready(function() {
    var text = document.getElementById("typeStyle");

    var typewriter = new Typewriter(text, {
        loop: true
    });

    typewriter.typeString('안녕하세요!')
        .pauseFor(1000)
        .deleteAll()
        .typeString('스프링 부트로 시작하는 웹 서비스')
        .pauseFor(2000)
        .deleteChars(3)
        .typeString('<strong>Service!</strong>')
        .pauseFor(2500)
        .start();

});

//버튼클릭시 이동

$('.smooth-goto').on('click', function() {
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 1000);
    return false;
});
// 클래스가 scroll_move인 a 태그를 눌렀을때 발생되게 하는 이벤트
// $(this.hash) a태그에 있는 해쉬 값으로 스크롤링 되며 이동
// 500 은 스크롤 속도

//깜밖이는 글씨
