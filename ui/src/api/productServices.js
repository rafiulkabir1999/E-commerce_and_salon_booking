import axios from "axios"

const getproduct = async() => {
 const response =await axios.get('http://localhost:4000/product')
 return response;
}

const productServices = {
    getproduct
}
export default productServices;