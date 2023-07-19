function copyTextEmail() {
  const text = document.getElementById('text-email').innerText
  const btnText = document.getElementById('btn')
  navigator.clipboard.writeText(text);
}

function copyTextPhone() {
  const text = document.getElementById('text-phone').innerText
  const btnText = document.getElementById('btn')
  navigator.clipboard.writeText(text);
}

function scrollChange() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
}


function randomColor() {
  // Retrieve the words
var text = $("p").html().split(" ");

// Empty the elment
$("p").empty();

// Iterate over the words
$.each(text, function(i, word) {
    if(i != text.length) {
        word += " "; // Add space after word 
    }
    
     // Get random color
    var colour = '#'+Math.floor(Math.random()*16777215).toString(16);
    
    $("<span>")
        .html(word)
        .css("color", colour)
        .appendTo($("p"));
});
}