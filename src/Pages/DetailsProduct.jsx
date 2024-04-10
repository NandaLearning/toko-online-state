import { useEffect, useState } from "react"
import Navbar from "../Components/Navbar"
import axios from "axios"
import { useParams } from "react-router-dom"

const DetailsProduct = () => {
    const [data,setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[id])
  return (
    <div>
        <Navbar/>

       <div key={data.id}>
         <img src={data.image} alt="" />
          

       </div>
      
    </div>
  )
}

export default DetailsProduct
