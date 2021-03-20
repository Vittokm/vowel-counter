
function countV() {

    let vwlNum = 0;
    let vog1 = ["a", "A"];
    let vog2 = "e";
    let vog3 = "i";
    let vog4 = "o";
    let vog5 = "u";
    let txt = document.querySelector("#txt").value;

    for (let i = 0; i < txt.length; i++) {

        if (txt[i] === vog1 || txt[i] === vog2 || txt[i] === vog3 || txt[i] === vog4 || txt[i] === vog5) {
            vwlNum++;
        } 
    }

    document.querySelector("#txt").value = "";

    alert("There are " + vwlNum + " vowels.");
    
}
