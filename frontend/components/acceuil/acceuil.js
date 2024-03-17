let parent = document.querySelector(".grand_parent");
let first_child = document.querySelector(".first_parent");
let seconde_child = document.querySelector(".seconde_parent");
let third_parent = document.querySelector(".parent_3");


let user = document.getElementById("user")
let horaire = document.getElementById("time")
let rapport = document.getElementById("rapport")

parent.appenChild(third_parent);

user.addEventListener("click", function(){

    parent.replaceChild(first_child, third_parent)

})
