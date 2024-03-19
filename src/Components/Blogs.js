import React from 'react';

const Blogs = () => {
  return (
    <div className='blogss'>
      <div className='row blogs'>
        <h1>Blogs</h1>
        <div className='col-lg-4 mt-5'>
          <img src='https://zephyrnet.com/wp-content/uploads/2023/08/salary-calculator-2023.jpg'/>
          <div className='blog-content'>
            <h5>Account Managment Tips</h5>
            <p>May 13 2019 by <span>Allison Fox</span></p>
            <p>rem ipsum dolor sit amet, consectetur adipiscing elit,</p>   
          </div>
         
        </div>
        <div className='col-lg-4 mt-5'>
          <img src='https://handandwristinstitute.com/wp-content/uploads/16993528795_f55214d252_c.jpg'/>
         <div className='blog-content'>
          <h5>Account Managment Tips</h5>
            <p>May 13 2019 by <span>Allison Fox</span></p>
            <p>rem ipsum dolor sit amet, consectetur adipiscing elit,rem ipsum dolor sit amet, consectetur adipiscing elit,
            rem ipsum dolor sit amet, consectetur adipiscing elit,
            rem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
         </div>
          
        </div>
        <div className='col-lg-4 mt-5'>
          <img src='https://images.picxy.com/cache/2019/9/4/34b9154594ac03c3e4ee0176df89ad1c.jpg'/>
          <div className='blog-content'>
            <h5>Account Managment Tips</h5>
            <p>May 13 2019 by <span>Allison Fox</span></p>
            <p>rem ipsum dolor sit amet, consectetur adipiscing elit,rem ipsum dolor sit amet, consectetur adipiscing elit,
            rem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Blogs;
