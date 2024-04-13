var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

        slides[slideIndex - 1].style.display = "flex";

    // Обновляем номер текущего слайда и общее количество слайдов
    document.getElementById("slide-number").innerText = slideIndex*3;
}

setInterval(function() {
    plusDivs(1);
}, 4000);