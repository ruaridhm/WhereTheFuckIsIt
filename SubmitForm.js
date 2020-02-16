
let addItem = () => {
    let ItemName = document.getElementById(inputName).value;
    console.log(ItemName);
    /*
    let Amount = 
    let Category =
    let Location = 
    let Working =
    let Comments = 
    let Picture = 
    let Submitted =
    let Checked = ""
    */
}


//Image submit validation
/*taken from https://codepen.io/dcode-software/pen/RerBgR*/

const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
    } else {
        customTxt.innerHTML = "No file chosen, yet.";
    }
});
