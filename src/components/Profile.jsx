import { useState, useEffect } from "react"
import {Redirect} from "react-router-dom"
import axios from "axios"
import Login from "./Login"




export default function Profile(props) {

    // state is information from server
    const[message, setMessage] = useState('')
    const[favorites, setFavorites] = useState('')

    // hit the auth locked route on the backend
    useEffect(() => {
        const getPrivateMessage =async () => {
            try {
                // get the jwt from local storage
                const token = localStorage.getItem('jwtToken')

                // make up the auth headers
                const authHeaders = {
                    Authorization: token
                }

                // hit the auth locked endpoint
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, {headers: authHeaders})
                // set state with data from server
                setMessage(response.data.msg)
                
            } catch (err) {
                console.log(err)
                // log user out if error
                props.handleLogout()
            }
        }
        getPrivateMessage()

    }, [props])

    if(!props.currentUser) return <Redirect to='/login' component= {Login} currentUser={props.currentUser} />

    return(
        <div>
            <h4>Greetings {props.currentUser.name}</h4>
            <h5> Your email is: {props.currentUser.email}</h5>
           

            <div>
                <p>You have a message from an authorized user:</p>
                <p>{message}</p>
                <p>{favorites}</p>
            </div>

        </div>
    )
}