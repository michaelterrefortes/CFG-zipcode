var rules = {
    "start": ["#NP# #VP#."],
  
}
let grammar = tracery.createGrammar(rules);
let expansion = grammar.flatten('#start#');
let sentences = []
function generate() {
    var data = {
    	"start": ["#NP#"],
    	"NP": ["#area# #N#"],
    	"area": ["000"],
    	"N": ["617","601","602","603","703", "705","610","611","612","921","917","925"],
      
    }
    
    let grammar = tracery.createGrammar(data);
    let expansion = grammar.flatten('#start#');

    sentences.push(expansion);

    printSentences(sentences);
}
function printSentences(sentences) {
    let textBox = document.getElementById("sentences");
    textBox.innerHTML = "";
    for(let i=sentences.length-1; i>=0; i--) {
        textBox.innerHTML += "<p>"+sentences[i]+"</p>"
    }
}
function createNumber(){
    var Number = {

    }
}
