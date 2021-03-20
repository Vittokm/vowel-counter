
function countV() {

    let vwlNum = 0;
    let vog1 = "a";
    let vog2 = "e";
    let vog3 = "i";
    let vog4 = "o";
    let vog5 = "u";
    
    let vog6 = "A";
    let vog7 = "E";
    let vog8 = "I";
    let vog9 = "O";
    let vog10 = "U";
    
    let txt = document.querySelector("#txt").value;

    for (let i = 0; i < txt.length; i++) {

        if (txt[i] === vog1 || txt[i] === vog2 || txt[i] === vog3 || txt[i] === vog4 || txt[i] === vog5 || txt[i] === vog6 || txt[i] === vog7 || txt[i] === vog8 || txt[i] === vog9 || txt[i] === vog10) {
            vwlNum++;
        } 
    }

    document.querySelector("#txt").value = "";

    alert("There are " + vwlNum + " vowels.");
    
}
