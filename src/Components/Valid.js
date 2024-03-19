export const checkValidData =(fname,lname,email,phone,budget)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isfNamevalid =/^[a-zA-Z\\s]*$/.test(fname)
    const islNamevalid =/^[a-zA-Z\\s]*$/.test(lname)
    const isPhonevalid =/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/.test(phone)
    // const isBudgetvalid =/^[a-zA-Z\\s]*$/.test(budget)
    
    if(!isfNamevalid) return "First Name id Not valid"
   
    if(!islNamevalid) return "Last Name id Not valid"
    
    if(!isEmailValid)return "Email Id is not valid"
   
    if(!isPhonevalid)return "Email Id is not valid"
    
    // if(!isBudegtValid)return "Email Id is not valid"
     
    return {
        FistName:"fname",
        LastName:"lname",
        PhoneNo:"phone",
        Email:"email",        
    }
    }