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
    }

    console.log(popular)

    useEffect(() => {
        getPopular()
    }, [])
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