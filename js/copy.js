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