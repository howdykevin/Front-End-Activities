var modal=document.querySelector("#myModal");

var span=document.querySelector(".close");

function popup(){
    modal.style.display="block";
}

span.onclick=function(){
    modal.style.display="none";
}



