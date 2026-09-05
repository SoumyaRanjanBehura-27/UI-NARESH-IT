function bodyLoad(){
        document.getElementById("SummaryContainer").style.display ="none";
         document.getElementById("ButtonContainer").style.display ="block";

}

function Bookclick(){
    document.getElementById("ButtonContainer").style.display ="none";
    document.getElementById("SummaryContainer").style.display ="block";

    document.getElementById("lblmovie").textContent=document.getElementById("movie").value;
    document.getElementById("lbldate").textContent=document.getElementById("date").value;
    document.getElementById("lblcinema").textContent=document.getElementById("cinema").value;
    document.getElementById("lbltiming").textContent=document.getElementById("timing").value;

    imgposter=document.getElementById("imgposter");
    moviename=document.getElementById("movie").value;

    if(moviename==="HANUMAN ANSH"){
         imgposter.src="../public/images/hanuman.avif"
    } else{
        imgposter.src="../public/images/jaga.webp"
    }

}

function modify(){
    document.getElementById("booking").textContent="Modify Booking"
    document.getElementById("btnbook").textContent="Save"
    document.getElementById("btnbook").style.backgroundColor="green"
}
