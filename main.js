
$(document).ready(function () {
    // Open in new window
        $('.click').each(function() {
        var link = $(this).html();
        $(this).contents().wrap('<a href="google.com"></a>');
        });
});

// Make Card One Clickable
function projectOne() {
    window.open("https://qmassage.vercel.app");
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

window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Success!  Someone Will Be in Touch");
    })
  });
});

    
