$(document).ready(function () {

});

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
const myTimeout = setTimeout(bg_video, 6000);
function bg_video() {
    console.log('5s')
    $(".inner_video1").css("display", "none");
    // document.querySelector(".video").innerHTML = "<video class='inner_video' width='100%' autoplay muted loop><source src='/img/head2.mp4' type='video/mp4'> </video>";
    // $(".nav").css("display", "block");
    // $(".nav").fadeIn("5000");
}


const nav = setTimeout(bg_nav, 3000);
function bg_nav() {
    $(".nav").fadeIn("slow");
    $(".play").fadeIn("slow");
    $(".bg_download_inner").fadeIn("slow");
}

// nav 





// go to top 
function scrollToTtop() {
    $("html, body").animate({ scrollTop: 0 }, "1000");
    $(".charTop").attr("style", "opacity: 0");
    $(".charMoveTop").attr("style", "opacity: 1; animation: scrollToTop 1s;");
    $(".wrapper").css({
        'filter': 'blur(2px)',
        '-webkit-filter': 'blur(2px)',
        '-moz-filter': 'blur(2px)',
        '-o-filter': 'blur(2px)',
        '-ms-filter': 'blur(2px)'
    });


    setTimeout(function () {
        $(".charTop").attr("style", "opacity: 1");
        $(".charMoveTop").attr("style", "opacity: 0");
        $(".wrapper").css({
            'filter': 'blur(0px)',
            '-webkit-filter': 'blur(0px)',
            '-moz-filter': 'blur(0px)',
            '-o-filter': 'blur(0px)',
            '-ms-filter': 'blur(0px)'
        });
    }, 1000);
}





// ---------nhận diện thiết bị
var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.search("iphone") > -1) {
    document.querySelector(".download_mb_android").style.display = 'none';

} else if (userAgent.search("android") > -1) {
    document.querySelector(".download_mb_ios").style.display = 'none';
}



function handleDownload() {
    if (!window.localStorage.getItem('codeios')) {
        getCurrentCode();
    }

    var codeTriAn = "CODECODE666";


    let timerId = setInterval(function () {
        if (userAgent.search("iphone") > -1) {
            var codeLocal = window.localStorage.getItem('codeios');

            if (!codeLocal) {

                console.log(codeTriAn);
                window.localStorage.setItem('codeios', codeTriAn);
                codeLocal = codeTriAn;

            }
            Swal.fire({
                title: "<i>CODE CÁO LỖI USER IOS</i>",
                html: `<p class="code"> ${window.localStorage.getItem('codeios')}  <button class="btn-copy" onclick="copy()">COPY</button></p> `,
                confirmButtonText: "Tải game",

            }).then((result) => {
                if (result.isConfirmed) {
                    window.location = "https://google.com";
                    // swal("Link tải sẽ cập nhập sớm nhất!");
                }
            })

        } else {
            window.location = "https://google.com";
        }
    }, 200);

    setTimeout(() => { clearInterval(timerId); }, 300);
}


function getCurrentCode() {
    $.ajax({
        url: '/backend/codeios.php',
        type: 'get',
        dataType: 'json',
        beforeSend: function () {

        },
        success: function (res) {
            codeTriAn = res.code;
        },
        complete: function () {
        }
    });
}



// link tải 

function popupLink(){
    swal("Link tải sẽ cập nhập sớm nhất!");
}


// code copy
function copy() {
    navigator.clipboard.writeText(window.localStorage.getItem('codeios'));
    //navigator.clipboard.writeText('dds');

}

function copy1() {
    let copyText = document.getElementById("copyClipboard");
    let copySuccess = document.getElementById("copied-success");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    copySuccess.style.opacity = "1";
    setTimeout(function () { copySuccess.style.opacity = "0" }, 500);
}