import React, { useEffect, useState } from 'react';
import Singleplayer from '../Singleplayer/Singleplayer';
import './Player.css'

const Players = (props) => {
    const{players}=props
    const[modal,setModal]=useState([])
    // const [disable, setDisable] =useState(false);
    // console.log("Single Player" ,players);
  
    const selectCaptain=(player)=>{
     props.getSelectCaptain(player);
    }

    const showDataModal=(modalData)=>{
   
      setModal(modalData)
      // setDisable(true)
      
      // e.currentTarget.disabled = true;
    }
    
    console.log("Modal State",modal)
    const errorImage="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
    return (
       <div>
         <div className='row g-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 mx-1 px-2 bg-light'>
           {
            players.player?.map((player)=>{
                return(
                    <Singleplayer
                    player={player}
                    showDataModal={showDataModal}
                    selectCaptain={selectCaptain}
                    // disable={disable}
                    ></Singleplayer>
                )
             })
           }
        </div>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-center" id="exampleModalLabel">{modal?.strPlayer}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <img src={modal.strFanart1 ? modal.strFanart1 :errorImage} alt='Modal pictures'className='img-fluid modal-image'/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
       </div>
    );
};

export default Players;