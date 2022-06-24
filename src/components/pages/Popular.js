import React from 'react';
import axios from 'axios';
import {useState, useEffect} from "react";
import {APIKEY} from "../../lib/ApiKey";


const Popular = () => {
    //https://api.themoviedb.org/3/movie/popular?api_key=f42c53f4f985e0480ab807c5d464b681&language=en-US&page=1
    let [popular, setPopular] = useState([])
    const [currentPage, setCurrrent] = useState(1)
    const [total, setTotal] = useState(null)
    const getPopular = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await url
        console.log(data)
        await setPopular(data.results)
        await setPopular(data.total_page)
        await setPopular(data.results)
    }

    console.log(popular)
let buttons=""
    useEffect(() => {
        getPopular( currentPage)
    }, [currentPage])
    if (total > 0 && currentPage===1){
        buttons = <>
            <button onClick={()=> setCurrrent(currentPage +1)}
            className="btn btn-primary mx-2 p-2 "
            >
            next
            </button>
        </>
    } else if (total > 0 && currentPage>1 && currentPage !== total){
        buttons = <>
            <button onClick={()=> setCurrrent(currentPage -1)}
                    className="btn btn-primary mx-3 p-2 "
            >
                next
            </button>
        </>
    } else if (total > 0 && currentPage === total ){
        buttons = <>
            <button onClick={()=> setCurrrent(currentPage -1)}
                    className="btn btn-primary mx-2 p-2 "
            >
                back
            </button>
        </>
    }













    return (
        <div className={'container'}>
            <div className={'row'}>
                {
                    popular.map((el) => (
                        <div className={'col-3'}>
                            <div>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.backdrop_path}`}
                                     alt=""/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Popular;