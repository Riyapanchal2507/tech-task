import React from 'react';
import { useRef } from 'react';
import { checkValidData } from './Valid';

const Conatct = () => {
  const fname = useRef("")
  const lname = useRef("")
  const phone = useRef("")
  const email = useRef("")

  const submit=()=>{
    const fname1 = fname.current.value;
    const checkfname=checkValidData(fname1);
    console.log(checkfname);

    const lname1 = lname.current.value;
    const checklname=checkValidData(lname1);
    console.log(checklname);

    const phoneNo = phone.current.valueOf;
    const checkphoneNo=checkValidData(phoneNo);
    console.log(checkphoneNo);

    const mail = email.current.value;
    const checkmail=checkValidData(mail);
    console.log(checkmail);
  }

  return (
    <div className='contact mt-5'>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <br/> tempor invidunt
         ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
         <form>
          <input type='text' placeholder='Name'  ref={fname}/>
          <input type='text' placeholder='Last Name'  ref={ lname}/>
          <input type='email' placeholder='Email'  ref={ email}/>
          <input type='tel' placeholder='Phone'  ref={ phone}/>
          <input list="browsers" name="browser" id="browser" placeholder='Budget'/>
            <datalist id="browsers">
              <option value="Edge"/>
              <option value="Firefox"/>
              <option value="Chrome"/>
              <option value="Opera"/>
              <option value="Safari"/>
            </datalist>
          <input type='text' placeholder='Description'/>
          <button onClick={submit}>Submit</button>
         </form>
    </div>
  );
}

export default Conatct;
