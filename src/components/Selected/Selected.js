import React from 'react';
import './Selected.css'

const Selected = (props) => {
    console.log("This is seleted components props",props)
    

    const errorImage="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
    return (
       <div className="row gx-0">
         <div className='row gx-0 px-2 mt-2'>
            <div>
            <div className="card shadow-sm">
               <div className="profile-card-images p-3">
               <img src={
                props.selecPlayer.strFanart1?props.selecPlayer.strFanart1:errorImage} alt='card-profile' className='select-profile'/>
               </div>
               <div className="card-info text-center">
                  <h4>Name : {props.selecPlayer.strPlayer}</h4>
                  <h6>Position : {props.selecPlayer.strPosition?props.selecPlayer.strPosition:"N/A"}</h6>
               </div>
               <div className="player-social-account d-flex justify-content-center my-2">
                <button className='btn text-primary fs-2 bg-light mx-2 rounded-circle bg-primary'>
                <i class="fa-brands fa-facebook"></i>
                </button>
                <button className='btn text-danger fs-2 bg-light mx-2 rounded-circle'>
                <i class="fa-brands fa-square-instagram"></i>
                </button>
                <button className='btn text-primary fs-2 bg-light mx-2 rounded-circle bg-primary'>
                <i class="fa-brands fa-twitter"></i>
                </button>
                <button className='btn text-primary fs-2 bg-light mx-2 rounded-circle bg-primary'>
                <i class="fa-brands fa-linkedin"></i>
                </button>
               
               
               </div>
            </div>
            </div>
        </div>
       </div>
    );
};

export default Selected;