
$(document).ready(function () {
    // Open in new window
        $('.click').each(function() {
        var link = $(this).html();
        $(this).contents().wrap('<a href="google.com"></a>');
        });
});

// Make Card One Clickable
function projectOne() {
    window.open("http://www.baddebtsbuyer.com");
}

// Make Card Two Clickable
function projectTwo() {
    window.open("http://www.firstlandingcaremanagement.com");
}

// Make Card Three Clickable
function projectThree() {
    window.open("http://www.ismallcaps.com");
}

function projectFour(){
window.open("https://qmassage.vercel.app/");
}

    
