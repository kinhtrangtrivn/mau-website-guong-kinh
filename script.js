$(document).ready(function() {
    // Thêm hiệu ứng fadeIn khi trang tải
    $('.product-card').hide().fadeIn(1000);

    // Hiệu ứng khi click vào menu
    $('.nav a').click(function(e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 100
        }, 800);
    });

    // Thêm hiệu ứng khi scroll qua các sản phẩm
    $(window).scroll(function() {
        $('.product-card').each(function() {
            let topOfElement = $(this).offset().top;
            let bottomOfWindow = $(window).scrollTop() + $(window).height();
            
            if (bottomOfWindow > topOfElement) {
                $(this).animate({
                    opacity: 1,
                    marginTop: 0
                }, 500);
            }
        });
    });
});
