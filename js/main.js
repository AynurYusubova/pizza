"use strict";
const souces = document.querySelectorAll(".souces img");
const mushroom = document.querySelectorAll(".mushroom img");
const tomates = document.querySelectorAll(".tomates img");
const sausage = document.querySelectorAll(".sosis img");
const olive = document.querySelectorAll(".olive img");
const cheese=document.querySelectorAll(".cheese img");
const pepper=document.querySelectorAll(".pepper img");
const imgbox = document.querySelector(".img-box .box");
const h=document.querySelector(".flame h3");
const img=document.querySelector(".boxs img");
const h2=document.querySelector(".boxes h2");
const  h3=document.querySelector(".car-box h3");
const car=document.querySelector(".car");
const title=document.querySelector(".title");


for (let j = 0; j < mushroom.length; j++) {
    mushroom[j].addEventListener("dragstart", function (c) {
        c.dataTransfer.setData("content", this.id);
    });
}

imgbox.addEventListener("dragover", function (d) {
    d.preventDefault();
});

imgbox.addEventListener("drop", function (e) {
    e.preventDefault(); 

    let myid = e.dataTransfer.getData("content");  
    let mushroomElement = document.getElementById(myid);  

   
    let offsetX = e.offsetX; 
    let offsetY = e.offsetY; 


    mushroomElement.style.position = "absolute";
    mushroomElement.style.left = `${offsetX - mushroomElement.width / 2}px`; 
    mushroomElement.style.top = `${offsetY - mushroomElement.height / 2}px`;  

    imgbox.appendChild(mushroomElement); 
});




for (let j= 0; j < tomates.length; j++) {
    tomates[j].addEventListener("dragstart", function (a) {
        a.dataTransfer.setData("content", this.id);
    });
}


for (let j= 0; j < sausage.length; j++) {
    sausage[j].addEventListener("dragstart", function (a) {
        a.dataTransfer.setData("content", this.id);
    });
}


for (let j= 0; j < olive.length; j++) {
    olive[j].addEventListener("dragstart", function (a) {
        a.dataTransfer.setData("content", this.id);
    });
}

for (let j= 0; j < cheese.length; j++) {
    cheese[j].addEventListener("dragstart", function (a) {
        a.dataTransfer.setData("content", this.id);
    });
}

for (let j= 0; j < pepper.length; j++) {
    pepper[j].addEventListener("dragstart", function (a) {
        a.dataTransfer.setData("content", this.id);
    });
}





for(let i=0;i<souces.length;i++){
    souces[0].addEventListener("click",function(){
        imgbox.style.background="red";
    })
    souces[1].addEventListener("click",function(){
        imgbox.style.background="brown";
    })
    souces[2].addEventListener("click",function(){
        imgbox.style.background="wheat";
    })
}





h.addEventListener("click", function () {
    imgbox.style.filter = " hue-rotate(0deg) saturate(500%)"; 
    setTimeout(function(){
        alert("Hazırdır!")
    },1000)
});


h2.addEventListener("click", function () {
    img.classList.toggle("active");
    setTimeout(function(){
        alert("Paketləndi!")
    },1000)
})


setTimeout(function() {
    h3.addEventListener("click", function() {
        car.classList.toggle("active"); 
        setTimeout(function(){
            title.style.display="none";
        },1100)
    })
}, 1000);  
