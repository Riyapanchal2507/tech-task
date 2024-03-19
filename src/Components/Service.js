import React from 'react';

const Service = () => {
  return (
    <div>
      <div className='service'>
        <h1>Services</h1>
        <div className='row service-content'>
          <div className='col-lg-12 d-flex'>
            <div className='col-lg-4 text-center'>
              <i className="fa-solid fa-clipboard"></i>
              <h5>Audit & Account</h5>
              <p>rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className='col-lg-4 text-center'>
              <i className="fa-solid fa-sack-xmark"></i>
              <h5>Budget & Projections</h5>
              <p>rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className='col-lg-4 text-center'>
              <i className="fa-brands fa-stack-overflow"></i>
              <h5>Payroll & Bookkeeping</h5>
              <p>rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
          </div>
          <div className='col-lg-12 d-flex mt-5'>
            <div className='col-lg-4 text-center'>
              <i className="fa-solid fa-desktop"></i>
              <h5>Software Training & IT</h5>
              <p>rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className='col-lg-4 text-center'>
              <i className="fa-solid fa-table-list"></i>
              <h5>Tax planning & Returns</h5>
              <p>rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className='col-lg-4 text-center'>
              <i class="fa-solid fa-chart-column"></i>
              <h5>Management Information</h5>
              <p>rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
