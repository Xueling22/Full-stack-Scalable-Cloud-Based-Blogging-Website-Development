
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);  //.代表带drum的

    function handleClick(){
        alert("clicked!");
    }
}
