import React, { useEffect, useState } from 'react';
import Players from '../PLayers/Players';
import Selected from '../Selected/Selected';
import './Home.css'

const Home = () => {
    const[players,setPlayers]=useState([])
    const [search,setSearch]=useState('')

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
            // console.log("Data",data);
            setPlayers(data);
        })
    },[search])
    // console.log("Players",players);

    const getText=(e)=>{
        return(
            // console.log("Input Text",e.target.value)
            
            setSearch(e.target.value)
        )
    }
    const [selecPlayer,setSelectPlayer]=useState([])
    const getSelectCaptain=(player)=>{
        console.log("THIS IS FROM HOME",player);
        setSelectPlayer(player);
    }

    return (
        <div className='container-fluid px-0'>
            <div className="search-bar py-5 bg-light">
            <form class="d-flex justify-content-center" role="search">
           <input onChange={getText} class="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search"/>
           <button class="btn btn-outline-success" type="submit">Search</button>
           </form>
            </div>
            <div className="row gx-0">
                
                <div className="col-lg-8 col-md-8 col-sm-12 col-12 border border-3 border-primary">
                    <div className="">
                      <Players
                      players={players}
                      getSelectCaptain={getSelectCaptain}
                      >

                      </Players>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 border border-danger border-2 right-side">
                    <div className="row  gx-0">
                    <Selected
                    selecPlayer={selecPlayer}
                    ></Selected>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;