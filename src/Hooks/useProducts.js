import { useEffect, useState } from "react";

const useProducts = () => {
    const axios = require('axios').default;
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('https://vast-lowlands-94702.herokuapp.com/products') 
        .then(function (response) {  
            setProducts(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
          }) 
    },[])
return [products, setProducts];
}
export default useProducts;