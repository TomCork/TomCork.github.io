var el = document.getElementById("container");

el.setAttribute("onclick", "showMore()");

function showMore() {
    el.style.width = "40vh";
    el.style.height = "40vh";
    el.style.maxWidth = "40vw";
    el.style.maxHeight = "40vw";
    
    var innerContainer = document.getElementById("inner-container");
    innerContainer.style.margin = "50px auto";
    
    var songList = document.getElementById("songList");
    songList.style.display = "block";
    
}


document.getElementById("songsUl").addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "LI"){
        var element = document.getElementById(e.target.id + "v");
        console.log(element.attributes.id);
        element.style.display = "block";
        console.log("element changed to block")
    }
})