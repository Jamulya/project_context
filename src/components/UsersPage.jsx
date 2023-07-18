import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const UsersPage = () => {
    const [userData, setUserData] = useState([])

    const navigate = useNavigate()
    const getUserData= () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp) => setUserData(resp.data))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getUserData()
    }, [])

    const goToUserPage = (id) => {
        navigate(`/user/${id}`)
    }

  return (
    <div>
        <h1>Users Page:</h1>
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Zip code</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {userData.map((item, index) => <tr key={index}>
                <th>{item.id}</th>
                    <tb>{item.name}</tb>
                    <tb>{item.address.city}</tb>
                    <tb>{item.address.zipcode}</tb>
                    <tb><button onClick={() => goToUserPage(item.id)}>know more</button></tb>
                    <th>Action</th>
                </tr>)}
            </tbody>
        </table>

    </div>
  )
}

export default UsersPage