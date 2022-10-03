import React, { useEffect, useState } from 'react';
import Players from '../PLayers/Players';
import Selected from '../Selected/Selected';
import './Home.css'

const Home = () => {
    const[players,setPlayers]=useState([]);
    const [search,setSearch]=useState('');
    const [found,setFound]=useState(false);

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then((res)=>{
            if(!res.ok){
                 throw Error("Data not found");
            }
            else{
                return res.json();
            }
        })
        .then((data)=>{
            console.log("Data",data);
            setPlayers(data);
        })

    //    if(players?.player?.length>0){
    //     console.log("Length is greater than 0",players?.player?.length);
    //    }
    //    else if(players?.player?.length<=0){
    //     console.log("Length is less than 0",players?.player?.length);
    //    }
       
        
    },[search])

  
   
    const getText=(e)=>{
       
            // console.log("Input Text",e.target.value)
            
            
            setSearch(e.target.value)
            // console.log("Players length",players?.length);
           
        
    }
    
    const [selecPlayer,setSelectPlayer]=useState([])
    const getSelectCaptain=(player)=>{
        console.log("THIS IS FROM HOME",player);
        setSelectPlayer(player);
    }

    const [getPlayer,setGetPlayer]=useState([])
    const getAddPlayerBtn = (playerObj) =>{
        // console.log("This is FROM HOME Player obj received",playerObj);
        const newArray=[...getPlayer,playerObj]
        setGetPlayer(newArray);
    }
    console.log("This is FROM HOME Player getPlayer received",getPlayer);
    // const{player}=players
    // console.log("players",player.length);
    // console.log("Players",players.player?.length)
  

    return (
        <div className='container-fluid px-0 '>
            <div className="search-bar py-5 bg-light">
            <form class="d-flex justify-content-center" role="search">
           <input onChange={getText} class="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search"/>
           <button class="btn btn-outline-success" type="submit" >Search</button>
           </form>
            </div>
            {
                // found ? <p></p>: <h1 className='text-center text-uppercase'>Not Found Any Player</h1> 
                players?.player?.length ? <p></p> :
                <h1 className='text-center text-primary'>Search Result Not Found</h1>
            }
            <div className="row gx-0">
                
                <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                    <div className="">
                      <Players
                      players={players}
                      getSelectCaptain={getSelectCaptain}
                      getAddPlayerBtn={getAddPlayerBtn}
                      >

                      </Players>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 right-side">
                    <div className="row  gx-0">
                    <Selected
                    selecPlayer={selecPlayer}
                    getPlayer={getPlayer}
                    ></Selected>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;