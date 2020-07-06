//Jedi quotes
const jediBeginning = [
    '"My master,',
    '"My apprentice,',
    '"Luke,',
    '"Obi-Wan,',
    '"Anakin,',
    '"Jaden,',
    '"Kyle,',
    '"Ahsoka,',
    '"Cal,',
    '"Master Yoda,',
    '"Qui-Gon,',
    '"Ben Kenobi,'
]
const jediMiddle = [
    "use the force,",
    "focus your mind,",
    "concentrate,",
    "mind your thoughts,",
    "control your emotions,",
    "fear is the path to the dark side,"
]
const jediEnd = [
    'go to Dagobah."',
    'overcome your anger."',
    'do not let your emotions to control you."',
    'do not let the dark side to tempt you."',
    'anger leads you to the dark side."',
    'give me guidance."',
    'do not underestimate your enemy."'
]
    
jediFirstPart = jediBeginning;
jediSecondPart = jediMiddle;
jediThirdPart = jediEnd;

const jediSpaceBetween = " "; 

var jediRandomNumber1 = 0;
var jediRandomNumber2 = 0;
var jediRandomNumber3 = 0;

//Input number of jediquotes
var jediQuantityNumber = jediQuantity.value;

//Generate random numbers in each array.
generateJediFirstPart = function() {
    jediRandomNumber1 = [Math.floor(Math.random() * jediBeginning.length)];
    return jediRandomNumber1;
}
generateJediSecondPart = function() {
    jediRandomNumber2 = [Math.floor(Math.random() * jediMiddle.length)];
    return jediRandomNumber2;
}
generateJediThirdPart = function() {
    jediRandomNumber3 = [Math.floor(Math.random() * jediEnd.length)];
    return jediRandomNumber3;
}
          
//Generate a completed quote from adding together the 3 quote parts.    
var jediNewQuote = function() {
    //Takes the input value.
    var jediQuantityNumber = document.getElementById("jediQuantity").value;
    
    //Indicate the amount of quotes presented
    if (jediQuantityNumber == 1) {
        jediCompletedQuote = jediBeginning[generateJediFirstPart()].concat(jediSpaceBetween, jediMiddle[generateJediSecondPart()], jediSpaceBetween, jediEnd[generateJediThirdPart()]);
        document.getElementById("jediQuoteDisplay").innerHTML = jediCompletedQuote;
    }
    if (jediQuantityNumber == 2) {
        jediCompletedQuote = jediBeginning[generateJediFirstPart()].concat(jediSpaceBetween, jediMiddle[generateJediSecondPart()], jediSpaceBetween, jediEnd[generateJediThirdPart()]) + "<br>" + jediBeginning[generateJediFirstPart()].concat(jediSpaceBetween, jediMiddle[generateJediSecondPart()], jediSpaceBetween, jediEnd[generateJediThirdPart()]);
        document.getElementById("jediQuoteDisplay").innerHTML = jediCompletedQuote;
    }
    if (jediQuantityNumber == 3) {
        jediCompletedQuote = jediBeginning[generateJediFirstPart()].concat(jediSpaceBetween, jediMiddle[generateJediSecondPart()], jediSpaceBetween, jediEnd[generateJediThirdPart()]) + "<br>" + jediBeginning[generateJediFirstPart()].concat(jediSpaceBetween, jediMiddle[generateJediSecondPart()], jediSpaceBetween, jediEnd[generateJediThirdPart()]) + "<br>" + jediBeginning[generateJediFirstPart()].concat(jediSpaceBetween, jediMiddle[generateJediSecondPart()], jediSpaceBetween, jediEnd[generateJediThirdPart()]);
        document.getElementById("jediQuoteDisplay").innerHTML = jediCompletedQuote;
    }
    if (jediQuantityNumber == 4) {
        jediCompletedQuote = jediBeginning[generateJediFirstPart()].concat(jediSpaceBetween, jediMiddle[generateJediSecondPart()], jediSpaceBetween, jediEnd[generateJediThirdPart()]) + "<br>" + jediBeginning[generateJediFirstPart()].concat(jediSpaceBetween, jediMiddle[generateJediSecondPart()], jediSpaceBetween, jediEnd[generateJediThirdPart()]) + "<br>" + jediBeginning[generateJediFirstPart()].concat(jediSpaceBetween, jediMiddle[generateJediSecondPart()], jediSpaceBetween, jediEnd[generateJediThirdPart()]) + "<br>" + jediBeginning[generateJediFirstPart()].concat(jediSpaceBetween, jediMiddle[generateJediSecondPart()], jediSpaceBetween, jediEnd[generateJediThirdPart()]);
        document.getElementById("jediQuoteDisplay").innerHTML = jediCompletedQuote;
    }
    if (jediQuantityNumber == 5) {
        jediCompletedQuote = jediBeginning[generateJediFirstPart()].concat(jediSpaceBetween, jediMiddle[generateJediSecondPart()], jediSpaceBetween, jediEnd[generateJediThirdPart()]) + "<br>" + jediBeginning[generateJediFirstPart()].concat(jediSpaceBetween, jediMiddle[generateJediSecondPart()], jediSpaceBetween, jediEnd[generateJediThirdPart()]) + "<br>" + jediBeginning[generateJediFirstPart()].concat(jediSpaceBetween, jediMiddle[generateJediSecondPart()], jediSpaceBetween, jediEnd[generateJediThirdPart()]) + "<br>" + jediBeginning[generateJediFirstPart()].concat(jediSpaceBetween, jediMiddle[generateJediSecondPart()], jediSpaceBetween, jediEnd[generateJediThirdPart()]) + "<br>" + jediBeginning[generateJediFirstPart()].concat(jediSpaceBetween, jediMiddle[generateJediSecondPart()], jediSpaceBetween, jediEnd[generateJediThirdPart()]);
        document.getElementById("jediQuoteDisplay").innerHTML = jediCompletedQuote;
    }
}

//Sith quotes
const sithBeginning = [
    '"My master,',
    '"My apprentice,',
    '"Lord Sidious,',
    '"Lord Vader,'
]
const sithMiddle = [
    "let the hate flow through you,",
    "let the anger unleash you,",
    "there is only passion,",
    "through passion I gain strength,",
    "through strength I gain power,",
    "through power,"
]
const sithEnd = [
    'it is the only way to victory."',
    'I will defeat my enemies."',
    'my chains will be broken."',
    'the force shall free me."',
    'I can feel the dark side in you."',
    'I can feel the anger in you."',
    'the force is strong in you."'
]
    
sithFirstPart = sithBeginning;
sithSecondPart = sithMiddle;
sithThirdPart = sithEnd;

const sithSpaceBetween = " "; 

var sithRandomNumber1 = 0;
var sithRandomNumber2 = 0;
var sithRandomNumber3 = 0;

//Input number of jediquotes
var sithQuantityNumber = sithQuantity.value;

//Generate random numbers in each array.
generatesithFirstPart = function() {
    sithRandomNumber1 = [Math.floor(Math.random() * sithBeginning.length)];
    return sithRandomNumber1;
}
generatesithSecondPart = function() {
    sithRandomNumber2 = [Math.floor(Math.random() * sithMiddle.length)];
    return sithRandomNumber2;
}
generatesithThirdPart = function() {
    sithRandomNumber3 = [Math.floor(Math.random() * sithEnd.length)];
    return sithRandomNumber3;
}
          
//Generate a completed quote from adding together the 3 quote parts.    
var sithNewQuote = function() {
    //Takes the input value.
    var sithQuantityNumber = document.getElementById("sithQuantity").value;
    
    //Indicate the amount of quotes presented
    if (sithQuantityNumber == 1) {
        sithCompletedQuote = sithBeginning[generatesithFirstPart()].concat(sithSpaceBetween, sithMiddle[generatesithSecondPart()], sithSpaceBetween, sithEnd[generatesithThirdPart()]);
        document.getElementById("sithQuoteDisplay").innerHTML = sithCompletedQuote;
    }
    if (sithQuantityNumber == 2) {
        sithCompletedQuote = sithBeginning[generatesithFirstPart()].concat(sithSpaceBetween, sithMiddle[generatesithSecondPart()], sithSpaceBetween, sithEnd[generatesithThirdPart()]) + "<br>"  + sithBeginning[generatesithFirstPart()].concat(sithSpaceBetween, sithMiddle[generatesithSecondPart()], sithSpaceBetween, sithEnd[generatesithThirdPart()]);
        document.getElementById("sithQuoteDisplay").innerHTML = sithCompletedQuote;
    }
    if (sithQuantityNumber == 3) {
        sithCompletedQuote = sithBeginning[generatesithFirstPart()].concat(sithSpaceBetween, sithMiddle[generatesithSecondPart()], sithSpaceBetween, sithEnd[generatesithThirdPart()]) + "<br>" + sithBeginning[generatesithFirstPart()].concat(sithSpaceBetween, sithMiddle[generatesithSecondPart()], sithSpaceBetween, sithEnd[generatesithThirdPart()]) + "<br>" + sithBeginning[generatesithFirstPart()].concat(sithSpaceBetween, sithMiddle[generatesithSecondPart()], sithSpaceBetween, sithEnd[generatesithThirdPart()]);
        document.getElementById("sithQuoteDisplay").innerHTML = sithCompletedQuote;
    }
    if (sithQuantityNumber == 4) {
        sithCompletedQuote = sithBeginning[generatesithFirstPart()].concat(sithSpaceBetween, sithMiddle[generatesithSecondPart()], sithSpaceBetween, sithEnd[generatesithThirdPart()]) + "<br>" + sithBeginning[generatesithFirstPart()].concat(sithSpaceBetween, sithMiddle[generatesithSecondPart()], sithSpaceBetween, sithEnd[generatesithThirdPart()]) + "<br>" + sithBeginning[generatesithFirstPart()].concat(sithSpaceBetween, sithMiddle[generatesithSecondPart()], sithSpaceBetween, sithEnd[generatesithThirdPart()]) + "<br>" + sithBeginning[generatesithFirstPart()].concat(sithSpaceBetween, sithMiddle[generatesithSecondPart()], sithSpaceBetween, sithEnd[generatesithThirdPart()]);
        document.getElementById("sithQuoteDisplay").innerHTML = sithCompletedQuote;
    }
    if (sithQuantityNumber == 5) {
        sithCompletedQuote = sithBeginning[generatesithFirstPart()].concat(sithSpaceBetween, sithMiddle[generatesithSecondPart()], sithSpaceBetween, sithEnd[generatesithThirdPart()]) + "<br>" + sithBeginning[generatesithFirstPart()].concat(sithSpaceBetween, sithMiddle[generatesithSecondPart()], sithSpaceBetween, sithEnd[generatesithThirdPart()]) + "<br>" + sithBeginning[generatesithFirstPart()].concat(sithSpaceBetween, sithMiddle[generatesithSecondPart()], sithSpaceBetween, sithEnd[generatesithThirdPart()]) + "<br>" + sithBeginning[generatesithFirstPart()].concat(sithSpaceBetween, sithMiddle[generatesithSecondPart()], sithSpaceBetween, sithEnd[generatesithThirdPart()]) + "<br>" + sithBeginning[generatesithFirstPart()].concat(sithSpaceBetween, sithMiddle[generatesithSecondPart()], sithSpaceBetween, sithEnd[generatesithThirdPart()]);
        document.getElementById("sithQuoteDisplay").innerHTML = sithCompletedQuote;
    }
}