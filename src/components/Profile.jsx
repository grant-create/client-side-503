import { useState, useEffect } from "react"
import {Redirect} from "react-router-dom"
import axios from "axios"
import Login from "./Login"
import '../App.css'

import {Button, Dropdown, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import kb2 from '../resources/images/Kachemak_Bay_2.png'
import {FaHeart} from 'react-icons/fa'

// import {Button, Dropdown, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCommentsDollar } from "react-icons/fa"

let API_KEY = process.env.REACT_APP_API_KEY


export default function Profile(props) {

    // state is information from server
    const [message, setMessage] = useState([])
   console.log("😁",message)

    // hit the auth locked route on the backend
    useEffect(() => {
        const getPrivateMessage = async () => {
            try {
                // get the jwt from local storage
                const token = localStorage.getItem('jwtToken')

                // make up the auth headers
                const authHeaders = {
                    Authorization: token
                }

                // hit the auth locked endpoint
<<<<<<< HEAD
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, {headers: authHeaders})
                
                // setMessage(response.data.myFavs)
                const finalMessage = response.data.myFavs.map((favs) => 
                <>
                   <hr/>
                    <div className="d-flex flex-column align-items-center justify-content-start">

                        <img src={kb2} height="200" width="400" alt="Visit parknameHere"/>
                           <h3 className="mt-3">Sitka More Text Here National Park - Sitka AK</h3>
                           
                        </div>


                    <div className="mt-3 mb-3">
                    <Button className="btn btn-primary btn-sm mb-2"><FaHeart/> &nbsp; Remove Sitka National Park From Your Favorites</Button> <Button className="btn btn-primary btn-sm mb-2">Go To Sitka National Park's Main Page</Button> 

                    </div>
                    </>
                )

                setMessage(finalMessage)
                
            } catch (err) {
                console.log(err)
=======
                await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, {headers: authHeaders})
                .then((res) => {
                    console.log(res)

                    let ansArray = []
                    res.data.myFavs.map((fav) => {
                        ansArray.push(fav.title)
                        console.log(fav.title)
                    })
                    console.log(ansArray)
                        let apiAnsArray = []
                        async function favsAPICall() {
                            for await (let park of ansArray){
                                try{
                                    await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${park}&api_key=${API_KEY}`)
                                    .then((val) => { 
                                        let ans = {fullName: val.data.data[0].fullName, description: val.data.data[0].description}
                                        apiAnsArray.push(ans)
                                    })
                                } catch(err){
                                    console.log(err)
                                }
                            } 
                        }
                        favsAPICall()
                        setMessage(apiAnsArray)
                        
                })





            
            


            
        } catch (err) {
            console.log(err)
>>>>>>> 412523c2e114ebdd666de9c60877009ba1014655
                // log user out if error
                props.handleLogout()
            }
        
        }
            getPrivateMessage()
    }, [])

    if(!props.currentUser) return <Redirect to='/login' component= {Login} currentUser={props.currentUser} />

    return(

        <div className="container text-center mt-5 align-center" >
            <div style={{display: 'grid', placeItems: 'center'}}>
                 <h1 className="fs-1 text-center fs-1 fw-bold">Greetings, {props.currentUser.name}!</h1>
            </div>
            <div style={{display: 'grid', placeItems: 'center'}} className="row">
                <p> Your email is: <span style={{fontStyle: 'italic', color: 'gray'}}>{props.currentUser.email}</span></p>
            </div>   
            <div style={{display: 'grid', placeItems: 'center'}} className="row mb-3"> 
            <h2>{props.currentUser.name}'s Favorite National Parks:</h2>
            </div>
            <ul className="list-unstyled">
                <li className="list-unstyled border-danger">
                        {message.map((lm) => {
                            return (
                                <>
                                                                     <hr/>
                                                     <div className="d-flex flex-column align-items-center justify-content-start">
                                
                                                         <img src={kb2} height="200" width="400" alt="Visit parknameHere"/>
                                                            <h3 className="mt-3"> {lm.fullName}</h3>
                                   <p> {lm.description} </p>
                                
                                                         </div>
                                
                                
                                                     <div className="mt-3 mb-3">
                                                     <Button className="btn btn-primary btn-sm mb-2"><FaHeart/> &nbsp; Remove {lm.fullName} From Your Favorites</Button> <Button className="btn btn-primary btn-sm mb-2">Go To {lm.fullName}'s Main Page</Button> 
                            
                                                     </div>
                                                 </>
                                             )
                                
                            })}

                </li>
            </ul>
        </div>

    )
}
