function copyTextEmail() {
  const text = document.getElementById('text-email').innerText
  const btnText = document.getElementById('btn')
  navigator.clipboard.writeText(text);
}

function copyTextPhone() {
  // const text = document.getElementById('text-phone').innerText
  // const btnText = document.getElementById('btn')
  // navigator.clipboard.writeText(text);
  /* Copy text into clipboard */
  navigator.clipboard.writeText
    ("Geeksforgeeks is best learning platform.");
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
  $.each(text, function (i, word) {
    if (i != text.length) {
      word += " "; // Add space after word 
    }

    // Get random color
    var colour = '#' + Math.floor(Math.random() * 16777215).toString(16);

    $("<span>")
      .html(word)
      .css("color", colour)
      .appendTo($("p"));
  });
}

function findText() {
  var inputText = document.getElementById("content");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) {
    innerHTML = innerHTML.substring(0, index) + "<span class='highlight'>" + innerHTML.substring(index, index + text.length) + "</span>" + innerHTML.substring(index + text.length);
    inputText.innerHTML = innerHTML;
  }
}

function scrollMove() {
  var observer = new IntersectionObserver(function (entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if (entries[0].isIntersecting === true)
      console.log('Element has just become visible in screen');
  }, { threshold: [0] });

  observer.observe(document.querySelector("#main-container"));
}