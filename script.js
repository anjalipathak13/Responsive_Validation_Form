    
    const form= document.getElementById('form');
    const username= document.getElementById('username');
    const email= document.getElementById('email');
    const phone= document.getElementById('phone');
    const password= document.getElementById('password');
    const cpassword= document.getElementById('cpassword');
    //add event
    form.addEventListener('submit',(event) => {
     event.preventDefault();
     validate();
    })
    const sendData = (usernameval,SRate,count) => {
        if(sRate==count){
            alert('Registration Successfull');
            swal("Welcome!" + usernameval,"Registration Success","success");
        }
    }

    //final Data Validation
    const successMsg = (usernameval) =>{
     let formCon = document.getElementByClassName('form-control');
     var count = formCon.length-1;
     for(var i=0;i<formCon.length;i++){
         if(formCon[i].className=="form-control success"){
             var sRate=0+1;
             sendData(usernameval,sRate,count);
     }else{
         return false;
     }
    }
}
    const isEmail= (emailval) => {
      var atSymbol= emailval.indexOf("@");
      if(atSymbol<1)
      return false;
      var dot=emailval.lastIndexOf('.');
      if(dot<= atSymbol+2)
      return false;
     if(dot==emailval.length - 1)
     return false;
     return true;

    }
    //define the validate function
   const validate = () => {
    const usernameval= username.value.trim();
    const emailval= email.value.trim();
    const phoneval= phone.value.trim();
    const passwordval= password.value.trim();
    const cpasswordval= cpassword.value.trim();

    //validate username
    if(usernameval == ""){
        setErrorMsg(username,'username cannot be blank');
    }else if(usernameval.length<=2)
    {
        setErrorMsg(username,'usrername min 3 char');
    }else
    {
        setSuccessMsg(username);
    }
     //validate email
    if(emailval == ""){
        setErrorMsg(email, 'email cannot be blank');
    }else if(!isEmail(emailval))
    {
        setErrorMsg(email, 'not a valid email');
    }else
    {
        setSuccessMsg(email);
    }
    if(phoneval == ""){
        setErrorMsg(phone, 'Phone Number cannot be blank');
    }else if(phoneval.length!=10)
    {
        setErrorMsg(phoneval, 'not a valid Phone Number');
    }else
    {
        setSuccessMsg(phone);
    }
    
    if(passwordval == ""){
        setErrorMsg(password, 'Password cannot be blank');
    }else if(passwordval.length<=8)
    {
        setErrorMsg(password, 'Minimum 8 character');
    }else
    {
        setSuccessMsg(password);
    }
    if(cpasswordval == ""){
        setErrorMsg(cpassword, 'Confirm Password cannot be blank');
    }else if(cpasswordval!=passwordval)
    {
        setErrorMsg(cpassword, 'Password is not matching');
    }else
    {
        setSuccessMsg(cpassword);
    }
    successMsg(usernameval);
   }
    function setErrorMsg(input,errormsgs)
    {
        const formControl= input.parentElement;
        const small= formControl.querySelector('small');
        formControl.className="form-control error";
        small.innerText=errormsgs;
    }
    function setSuccessMsg(input)
    {
        const formControl= input.parentElement;

        formControl.className="form-control success";
    }

    