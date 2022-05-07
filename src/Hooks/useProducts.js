import { useEffect, useState } from "react";

const useProducts = () => {
    const axios = require('axios').default;
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/products') 
        .then(function (response) { 
            console.log(response.data);
            setProducts(response.data)
        }) 
    },[])
return [products, setProducts];
}
export default useProducts;