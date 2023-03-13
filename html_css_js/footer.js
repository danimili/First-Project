const codingLanguages = ["HTML", "CSS", "JavaScript"];
const arrayLength = codingLanguages.length;
let text = "";

if (arrayLength == 1) {
    text = codingLanguages[0];
}

else {
    for (let i = 0; i < (arrayLength - 1); i++) {
        if (i < arrayLength - 2) {
            text = text.concat(codingLanguages[i], ", ");
        }
        else {
            text = text.concat(codingLanguages[i], " ");
        }
    }
    text = text.concat("and ", codingLanguages[arrayLength - 1]);
}


let starter = "This website has been created with: ";
starter = starter.concat(text);

console.log(starter);

document.querySelector('#footer-languages').innerHTML = starter;
