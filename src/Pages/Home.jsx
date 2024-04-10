import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Toaster from "../Components/Toaster";
import { Link } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState([]);
    const [buka,setBuka] = useState(false)

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleClick = () => {
        setBuka(true)
        setTimeout(() => {
            setBuka(false)
        }, 1500);
    }

    return (
        <div>
            <Navbar/>

            <div className="mt-10 grid grid-cols-4 gap-4 p-8">
                {
                data.length > 0 ?
                data.map((items) => (
                   <div key={items.id} >
                    <Link to={`/details/${items.id}`}> <div className="bg-white rounded-xl space-y-4 drop-shadow-xl flex flex-col justify-center items-center">
                        <img src={items.image} className="w-full h-auto max-h-48 object-contain" alt={items.title} />
                        <div className="flex flex-col items-center justify-center p-4 space-y-5">
                            <p className="text-center font-bold">{items.title}</p>
                            <p className="text-center">Price: ${items.price}</p>
                            <button onClick={handleClick} className=" bg-blue-500 text-white w-32 h-8 rounded-lg font-bold">Buy</button>
                        </div>
                    </div></Link>
                     </div>
                )) : 
                    <p className=" text-center text-4xl font-bold">Loading...</p>
                }
            </div>
            <div className=" justify-end items-end flex mr-5">
            {
                buka && <Toaster/>
            }
            </div>

        </div>
    );
}

export default Home;
