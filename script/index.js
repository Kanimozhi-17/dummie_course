function nav_function(){
    let navi=document.getElementById("nav_links");
    if(navi.style.display==="flex"){
        navi.style.display="none";
    }else{
        navi.style.display="flex";
    }
    
}


function go_to_register(){
    const register_section=document.getElementById("register_form");
    register_section.scrollIntoView({behavior:"smooth"});
}

window.onload=function(){
    document.getElementById("default_focus").focus();
}


let Fname=document.getElementById("fname");
let Lname=document.getElementById("lname");
let Pno  =document.getElementById("pnumber");
let Email=document.getElementById("email");
let Mesg =document.getElementById("msg");
let output=document.getElementsByTagName("small")[0];

const formelem =[Fname,Lname,Pno,Email,Mesg];

document.addEventListener("DOMContentLoaded", function(){
for(let i=0; i < formelem.length; i++){

    formelem[i].addEventListener("input", function(){

        if(formelem[i].value !==""){
            formelem[i].style.borderColor="#6d7f50";
            formelem[i].style.fontSize="2rem";
            formelem[i].style.padding="0.5rem 0rem 0rem 1rem";   
        }
        
    })
   
}
       
    });



function form_validating(event){
    event.preventDefault();

    let reg_image=document.getElementsByClassName("form_submit_btn_image_img")[0];
    reg_image.style.display="none";
    output.style.display="block";


    let count=0;
  
    let isFnamevalid= (/^[A-Za-z]+$/.test(Fname.value));
    let isLnamevalid= (/^[A-Za-z]+$/.test(Lname.value));
    let isPhoneValid= (/^[5-9][0-9]{9}$/.test(Pno.value));
    let isEmailvalid= (/^[a-zA-Z].*$/.test(Email.value));
    
   if(!isFnamevalid || !isLnamevalid || !isPhoneValid || !isEmailvalid){
    count++;
   }

   Fname.style.borderColor= isFnamevalid ? "#6d7f50" : "red";
   Lname.style.borderColor= isLnamevalid ? "#6d7f50" : "red";
   Pno.style.borderColor  = isPhoneValid ? "#6d7f50" : "red";
   Email.style.borderColor= isEmailvalid ? "#6d7f50" : "red";
    




if(count==0){
    output.textContent="Thanks for Registering!";
    output.style.color="green";
    output.style.fontSize="2rem";
    for(let i=0; i<formelem.length; i++){
       formelem[i].value="";
}

setTimeout(() => {
    reg_image.style.display="block";
    output.style.display="none";
}, 5000);

}

}