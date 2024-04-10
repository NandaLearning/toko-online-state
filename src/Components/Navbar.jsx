import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className=" text-white bg-blue-500 w-full h-20">
        <div className=" p-5 flex justify-between">
            <Link to="/"><h1  className=" text-2xl font-bold">NandaStore.</h1></Link>
           <Link to="/cart"> <img src="cart.svg" className=" w-8" alt="" /></Link>

        </div>
    </div>
  )
}

export default Navbar
