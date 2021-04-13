  function init(){
    //add your javascrip between these two lines of code
    var entryText = document.getElementById("entrybutton");
    function myAlert(){
        var inText = document.getElementById("entryinput");
        var outText = document.getElementById("textoutput");
        alert("Drew Snarski: " + inText.value);
        outText.innerHTML = inText.value;
    }
    entryText.addEventListener('click', myAlert);
}
window.addEventListener('load', init);