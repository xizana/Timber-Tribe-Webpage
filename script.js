window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1250
    )
});
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});
