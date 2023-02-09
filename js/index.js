// active char
var chars = document.querySelectorAll(".img_char");
chars.forEach((char) => {
    $(char).click(function () {
        $(".active").removeClass('active');
        $(char).addClass('active');
    })
})

// slick slider
$(".slider").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='/img/btn-prev.png'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='/img/btn-next.png'>"
});



// bg_video
const myTimeout = setTimeout(bg_video, 2400);
function bg_video() {
    console.log('5s')
    $(".inner_video").hide();
    document.querySelector(".video").innerHTML = "<video class='inner_video' width='100%' autoplay muted loop><source src='/img/head2.mp4' type='video/mp4'> </video>";
}




// go to top 

$(window).scroll(function () {
    var duration = 1500;
    if ($(this).scrollTop() >= 500) {
        $(".topTop").click(function (event) {

            // window.scrollTo({ top: 0, behavior: 'smooth'});
            // window.scrollTo({ top: 0 }, 8000);

            $('html, body').animate({ scrollTop: 0 }, duration);
            $(".ninja_move").fadeIn("slow");
            $(".topTop").fadeOut("");

        })

        $(".topTop").show();
        $(".ninja_move").fadeOut("slow");


    }
    else {
        $(".topTop").hide();

    }
})






