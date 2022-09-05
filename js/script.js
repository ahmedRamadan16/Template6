(function() {
  //show links on mobile
  let bars = document.querySelector(".nav i");
  let linksContainer = document.querySelector(".nav .links");
  let links = document.querySelectorAll(".nav .links li");
  let navbar = document.querySelector(".navbar ");
  bars.onclick = function() {
    linksContainer.classList.toggle("show");
  };

  // add class active to links
  links.forEach(li => {
    li.addEventListener("click", e => {
      links.forEach(link => {
        link.classList.remove("active");
      });
      e.target.parentElement.classList.add("active");
    });
  });

  //add class sticky to header in scroll

  window.onscroll = function() {
    if (window.scrollY > 20) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };
  window.onload = function() {
    //add ovarlay to page
    let ovarlay = document.createElement("div");
    ovarlay.className = "overlay";
    ovarlay.style.cssText =
      "position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,1);z-index:1000";

    //create loading
    let loading=document.createElement("div");
    loading.className="loading";

    //create ul 
    let ul=document.createElement("ul");

    for(let i=0 ;i<4;i++)
    {
        
    let li=document.createElement("li");
            ul.appendChild(li);
    }
    
    loading.appendChild(ul);
    document.body.appendChild(loading);
    document.body.appendChild(ovarlay);

};

let interval=setTimeout(()=>{
document.querySelector(".loading").remove();
document.querySelector(".overlay").remove();
},4000);

})();
