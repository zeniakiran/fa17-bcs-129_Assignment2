const  isChecked=()=>{
    noOfCheckbox = document.getElementsByClassName("form-check-input").length;
    chkInRow=Math.floor(noOfCheckbox/2);
    id= event.srcElement.id;
    elem= document.getElementById(id);
    elemId= parseInt(id);
    if(elemId >=chkInRow+1)
        elemToDisable = elemId-chkInRow;
    else
        elemToDisable = elemId+chkInRow;

    str= elemToDisable.toString();
    document.getElementById(str).disabled=true;
    document.getElementById("text "+ elemToDisable).disabled=true;
    if(elem.checked===false){
        document.getElementById(str).disabled=false;
        document.getElementById("text "+ elemToDisable).disabled=false;
    }
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
    id.style.color="red";
}
