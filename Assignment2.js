const  isChecked=()=>{
    var noOfCheckbox= document.getElementsByClassName('form-check-input').length;
    var clickedId= event.srcElement.id;
    var i=1;
    while(i<=noOfCheckbox){
        document.getElementById("check"+i).checked=false;
        i++;
        
    }
    document.getElementById(clickedId).checked=true;
}

const inputValidation=()=>{
    typed = event.srcElement.id;
    var id= document.getElementById(typed);
    var value= document.getElementById(typed).value;
    if(isNaN(value)){
        errorStyling(id);
    }
    else if(value==="")
    {
        errorStyling(id);
    }
    else if(value>100 || value<0){
        errorStyling(id);
    }
    else if(value=== '-0')
        id.value=0;
    
}
const inputValidation1=()=>{
    typed = event.srcElement.id;
    var id= document.getElementById(typed);
    var value= document.getElementById(typed).value;
    if(isNaN(value)){
        errorStyling(id);
    }
    if(value==="")
    {
        errorStyling(id);
    }
    if(value<0){
        errorStyling(id);
    }
    else if(value=== '-0')
        id.value=0;
}
const clearFields =()=>{
    var id = event.srcElement.id;
    var elem = document.getElementById(id);
    elem.style="none";
    elem.value="";
}

const errorStyling =(id)=>{
    id.style.border="2px solid";
    id.style.borderColor="red";
    id.value="Err!"
    id.style.color="red";
}
