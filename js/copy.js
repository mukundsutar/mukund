function copyText(){
  const text = document.getElementById('text').innerText
  const btnText = document.getElementById('btn')
  navigator.clipboard.writeText(text);
}