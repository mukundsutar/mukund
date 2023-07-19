
let colours = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple"    
];


let text = document.getElementById('txt').innerHTML.split(" ");
console.log(text);


// $("p").empty();
while (document.getElementById('txt').firstChild) {
    document.getElementById('txt').removeChild(document.getElementById('txt').firstChild);
}


text.forEach(function(word, i){
	if(i != text.length) {
        word += " "; 
    }
    
     
    let colourIndex = Math.floor(Math.random() * colours.length);
    
    $("<span>")
        .innerHTML = word
        .css("color", colours[colourIndex])
        .appendTo($("p"));
});