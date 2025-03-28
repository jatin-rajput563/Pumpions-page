const navbarbtn = () => {
    document.getElementById("nav-name").classList.toggle("show-navbar")
    document.body.classList.toggle("overflow-hidden")
};
$('.left-slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6.2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.right-slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6.2,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    autoplaySpeed: 100,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});