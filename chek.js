let btnForm = document.querySelector("#comments-form button")
let countComments  = 0;
let idComment=0;

btnForm.onclick = function(){
    idComment++
    let form=document.querySelector("#comments-form")
    if(form.name.value.length<4){
        document.querySelector("#error").innerHTML = "Имя должно состоять более 4 символов"
    
    return false;
    } 
    else if (form.comments.value.length<10){
        document.querySelector("#error").innerHTML = "Сообшение должно состоять более 10 символов"
    return false;
    }
    document.querySelector("#error").innerHTML = ""
    
    // Установим новое значение для подчета комметариев

    if(countComments==0)
    document.querySelector("#comments").innerHTML=""

    countComments++;
    document.querySelector(".count"). innerHTML = countComments;


    let newComment =  "<div class = 'comment' id= 'block-"+idComment+"'>" +
    "<span class ='delete' onclick='delComm("+ idComment +")'> &times; </span>"+
    "<p class = 'name'>"+ form.name.value + "</p>" + 
    "<p class = 'mess'>"+ form.comments.value + "</p>" + 
    "</div>";

    document.querySelector("#comments")
    .insertAdjacentHTML("afterbegin",newComment)//beforeend

    // Очистка формы
    form.comments.value = ""
}
    function delComm(id){
    document.querySelector("#block-" + id).remove();

    countComments--;
    document.querySelector(".count").innerHTML=countComments;
    
    if (countComments===0)
    document.querySelector("#comments").innerHTML="Пока комментариев нет";
    
    }



