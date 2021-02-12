# Responsive_Validation_Form
### A Full Responsive Validation Form using HTML,CSS and JavaScript.
Form validation normally used to occur at the server, after the client had entered all the necessary data and then pressed the Submit button. If the data entered by a client was incorrect or was simply missing, the server would have to send all the data back to the client and request that the form be resubmitted with correct information. This was really a lengthy process which used to put a lot of burden on the server.
JavaScript provides a way to validate form's data on the client's computer before sending it to the web server. Form validation generally performs two functions.

Basic Validation  − First of all, the form must be checked to make sure all the mandatory fields are filled in. It would require just a loop through each field in the form and check for data.

Data Format Validation − Secondly, the data that is entered must be checked for correct form and value. Your code must include appropriate logic to test correctness of data.
![form_1](https://user-images.githubusercontent.com/54896331/107805216-0b283c00-6d8b-11eb-8eca-31e4e0e258b5.png)

### First let us see how to do a basic form validation. In the above form, we are calling validate() to validate data when onsubmit event is occurring. If the Form is empty setErrorMsg function will be called and submitted then condition for the empty gets true and there will be RED BORDER around the boxes to show it is INVALID Action.
![form_2](https://user-images.githubusercontent.com/54896331/107805807-e6809400-6d8b-11eb-8dc1-9c0a6340f683.png)
### If the entered details follow the given conditon setSuccesMsg will be called , there will be the GREEN BORDER around the box and a TICK representing it is Correct and Accepted.
There are criteria for each elements like name should more than 3 characters and  An email address must contain at least a ‘@’ sign and a dot (.). Also, the ‘@’ must not be the first character of the email address, and the last dot must at least be one character after the ‘@’ sign, otherwise a Message will Pop-up for the same invalid action.
![form_3](https://user-images.githubusercontent.com/54896331/107806780-47f53280-6d8d-11eb-935b-f908749bde18.png)
### For Password Validation the minimum lenght is set is 8 characters otherwise the Error message is displayed (Minimum 8 characters).
if(passwordval == ""){
        setErrorMsg(password, 'Password cannot be blank');
    }else if(passwordval.length<=8)
    {
        setErrorMsg(password, 'Minimum 8 character');
    }else
    {
        setSuccessMsg(password);
    }
### Same Conditons will be followed for the Confirm Password.
![form_4](https://user-images.githubusercontent.com/54896331/107807888-d0280780-6d8e-11eb-99b6-6349b4befb9f.png)
### If all the Fields have satisfied the Condition and valid the After clicking the Submit button all the fields will have GREEN BORDER and GREEN TICK.
![form_5](https://user-images.githubusercontent.com/54896331/107808396-84299280-6d8f-11eb-92df-d4537e5fea43.png)
### This Validation Form is Responsive.
 A mobile responsive form, or responsive form, provides an optimal viewing and interaction experience across a wide range of devices, from desktop to mobile. Responsive forms offer easy reading and navigation. In short, responsive forms look and work seamlessly across all devices that your customers or form viewers may be using.
 


