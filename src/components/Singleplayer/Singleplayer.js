import React from 'react';


const Singleplayer = ({player,showDataModal,selectCaptain}) => {

    


//   console.log("This is From singlePlayer :",player)
  const{strDescriptionEN,strNationality,strThumb,strPosition,strPlayer,
  }=player

  const errorImage="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";

  const backupText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,";
    return (
        <div className='col '>
            <div className="card shadow-sm">
                <img src={strThumb?strThumb:errorImage}    
                // onError={
                //     (e)=>{
                //         e.currentTarget.src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
                //     }
                // }
                
                
                 alt='card-'/>
                <div className="card-body">
                    <h3>{strPlayer?strPlayer.slice(0,16):"N/A"}</h3>
                   <div className="card-info ">
                    <p>{strDescriptionEN ? strDescriptionEN.slice(0,100):backupText.slice(0,100)}</p>
                    <div className="card-info-two d-flex justify-content-between">
                    <h6>Nationality : {strNationality?strNationality.slice(0,6):"N/A"}</h6>
                   
                    <h6>Position : {strPosition?strPosition.slice(0,8):"N/A"}</h6>
                    </div>
                   </div>
                </div>
                <div className='my-2 px-3'>
                <button className='btn btn-danger text-uppercase fw-bold w-100' onClick={(e)=>selectCaptain(player,e.target.innerText="Selected As A Captain",e.target.disabled=true)}>Select As A Captain</button>
                </div>
                <div className="card-btn text-center d-flex justify-content-evenly py-3 px-2">
                    <button className='btn btn-primary '>Add Player</button>
                    <button className='btn btn-primary '  data-bs-toggle="modal" data-bs-target="#exampleModal"
                    onClick={
                        (e)=>showDataModal(player)
                        } 
                    >Deatails
                    </button>
                   
                    <button className='btn btn-primary '>Bookmark</button>
                </div>
                
            </div>
        </div>
    );
};




export default Singleplayer;