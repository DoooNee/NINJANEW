
//------- responsive mobile
var jsVer = 15;
var phoneWidth = parseInt(window.screen.width);
console.log(phoneWidth);
var phoneScale = phoneWidth / 640;

if (phoneWidth < 768) {
    var ua = navigator.userAgent;
    if (/Android (\d+\.\d+)/.test(ua)) {
        var version = parseFloat(RegExp.$1);
        // andriod 2.3
        if (version > 2.3) {
            document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
        } else {
            document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
        }

    } else {
        console.log(phoneWidth);
        document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
    }

} else {
    document.write('<meta name="viewport" content="width=768, minimum-scale =1, maximum-scale = 1, target-densitydpi=device-dpi">');
}














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
const myTimeout = setTimeout(bg_video, 3050);
function bg_video() {
    console.log('5s')
    $(".inner_video").hide();
    document.querySelector(".video").innerHTML = "<video class='inner_video' width='100%' autoplay muted loop><source src='/img/head2.mp4' type='video/mp4'> </video>";
    // $(".nav").css("display", "block");
    // $(".nav").fadeIn("5000");
}


const nav = setTimeout(bg_nav, 4000);
function bg_nav() {
    $(".nav").fadeIn("slow");
    $(".play").fadeIn("slow");
    $(".bg_download_inner").fadeIn("slow");

    // $(".bg_download_inner").slideUp();

    
}





// nav 





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



// ---------nhận diện thiết bị
var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.search("iphone") > -1) {
    document.querySelector(".download_mb_android").style.display = 'none';

} else if (userAgent.search("android") > -1) {
    document.querySelector(".download_mb_ios").style.display = 'none';
}







