function dark(){

    if (document.body.style.backgroundColor == "black"){
        document.body.style.backgroundColor = "white";
            document.body.style.color='black';
            document.querySelector('.projects').style.color="black";
            document.querySelector('header').style.background="#e3e3e34f";
            document.querySelector('#contactme').style.color="black";
            document.querySelector('#aboutme').style.color="black";

               var image = document.getElementById('moon');
                image.src="moon.png"
        


}
else{
    document.body.style.backgroundColor = "black";
    document.body.style.color='white';
    document.querySelector('#aboutme').style.color="white";
    document.querySelector('header').style.background="rgb(29, 28, 28)";
    document.querySelector('#contactme').style.color="white";
    document.getElementById("dp").style.boxShadow = "5px 5px 10px white";
    const nodeList = document.querySelectorAll("h3");

    var image = document.getElementById('moon');
    image.src="whitemoon.png";

}
}

function display(){

    if (document.querySelector("#one").style.display === "block"){
        document.querySelector("#one").style.display="none";
    }

    if (document.querySelector(".text").style.display === "block"){
        document.querySelector(".text").style.display="none";
    }

    else{
     document.querySelector(".text").style.display="block";

    }
}

function displayone(){

    if (document.querySelector(".text").style.display === "block"){
        document.querySelector(".text").style.display="none";
    }

    if (document.querySelector("#one").style.display === "block"){
        document.querySelector("#one").style.display="none";
    }

    else{
    document.querySelector("#one").style.display="block";
    }   

}
function scrollWin(num) {
    window.scrollTo(0, num);
  }

