import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import "./card.css"

function Card() {
    let [data, setData] = useState([])
    useEffect(() => {
        let fetchdata = async () => {

            let resdata = await axios.post(`https://hoblist.com/api/movieList`,
                {

                    category: "movies",
                    genre: "all",
                    language: "kannada",
                    sort: "voting"
                }
            )
            // console.log(resdata.data);
            setData([...resdata.data.result]);
        }
        fetchdata()
    }, [])
    console.log(data);
    return (
        <div className='main-card'>
            {
                data.length !== 0 ?
                    data.map((ele) => {
                        return (
                            <div className='card-container'>
                                <div className="vote">
                                    <img src="/images/9652.png" className='img' />
                                    {ele.voting}
                                    <img src="/images/down.png" className='img-2' />
                                    votes
                                </div>
                                <div className="image">
                                    <img src={ele.poster} />
                                </div>
                                <div className="content">
                                    <h3>{ele.title}</h3>
                                    <div><span>Genre:{ ele.genre}</span></div>
                                    <div><span>Director:{ele.director}</span></div>
                                    <div><span>Starring:{ele.stars}</span></div>
                                    <div><span>Min |</span><span>Kannada |</span>2Apr<span></span></div>
                                    <div><span>{ele.pageViews} views |</span><span>Voted by {ele.totalVoted} People </span></div>


                                </div>
                                <button>Watch Trailer</button>
                            </div>
                        )
                    })
                    :<div>NO MOVIE LIST .......!</div>
          }

        </div>
    )
}

export default Card