var rules = {
    "start": ["#NP# #VP#."],
    "NP": ["#Det# #N#", "#Det# #N# that #VP#", "#Det# #Adj# #N#"],
    "VP": ["#Vtrans# #NP#", "#Vintr#"],
    "Det": ["The", "This", "That"],
    "N": ["John Keating", "Bob Harris", "Bruce Wayne", "John Constantine", "Tony Stark", "John Wick", "Sherlock Holmes", "King Leonidas"],
    "Adj": ["cool", "lazy", "amazed", "sweet"],
    "Vtrans": ["computes", "examines", "helps", "prefers", "sends", "plays with", "messes up with"],
    "Vintr": ["coughs", "daydreams", "whines", "slobbers", "appears", "disappears", "exists", "cries", "laughs"]
}
let grammar = tracery.createGrammar(rules);
let expansion = grammar.flatten('#start#');
let sentences = []
function generate() {
    var data = {
    	"start": ["#NP#"],
    	"NP": ["#area# #N# #NL#"],
    	"area": ["000"],
    	"N": ["617","601","602","603","703", "705","610","611","612","921","917","925"],
        "NL": [""],
    	"Adj": ["dangerous", "Big", "pretty", "angry"],
    	"Vtrans": ["attaks", "licks", "helps", "prefers", "plays with", "messes up with"],
    	"Vintr": ["coughs", "Yawn", "Hunt", "farts", "appears", "disappears", "exists", "cries", "laughs"]
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