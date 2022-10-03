import React from 'react';
import './Playerselect.css'

const Playerselect = (props) => {
    // console.log("Selcetplayer js file",props);
    // const[player]=props.getPlayer
    console.log("Selcetplayer js file",props.player);
    const errorImage="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
    return (
        <div className='col'>
           <div className="card shadow-sm p-2">
           <img src={props.player?.strThumb?props.player.strThumb :errorImage} alt="This is...." className='add-player'/>
            <h3 className='text-center'>{props.player.strPlayer}</h3>
           </div>
        </div>
    );
};

export default Playerselect;