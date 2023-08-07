
let box_1 = document.getElementById("box-1");
let box_2 = document.getElementById("box-2");
let box_3 = document.getElementById("box-3");

box_1.addEventListener('click', myFunction_1);
function myFunction_1() {
    document.getElementById('radiobtn_1').checked = true;

    box_1.style.backgroundColor = "#F4FBF9";
    document.getElementById('deal-1').style.display = "block";  
    document.getElementById('deal-2').style.display = "none";
    document.getElementById('deal-3').style.display = "none";
    box_2.style.backgroundColor = "#FFFFFF";
    box_3.style.backgroundColor = "#FFFFFF";
}

box_2.addEventListener('click', myFunction_2);
function myFunction_2() {
    document.getElementById('radiobtn_2').checked = true;
    box_2.style.backgroundColor = "#F4FBF9";
    document.getElementById('deal-2').style.display = "block";    
    document.getElementById('deal-1').style.display = "none";
    document.getElementById('deal-3').style.display = "none";
    box_3.style.backgroundColor = "#FFFFFF";
    box_1.style.backgroundColor = "#FFFFFF";
}

box_3.addEventListener('click', myFunction_3);
function myFunction_3() {
    box_3.style.backgroundColor = "#F4FBF9";   
    document.getElementById('radiobtn_3').checked = true;

    document.getElementById('deal-3').style.display = "block"
    document.getElementById('deal-1').style.display = "none";
    document.getElementById('deal-2').style.display = "none";

    box_2.style.backgroundColor = "#FFFFFF";
    box_1.style.backgroundColor = "#FFFFFF";
    
}