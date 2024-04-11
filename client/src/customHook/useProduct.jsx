import { useEffect,useState } from "react";

function useProduct(url, option) {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)
   

    useEffect( () => {
        const Products = async () => {
          setLoading(true)
          try{
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data)
            setLoading(false)
          }catch(error) {
            console.log(error)
            setLoading(false)
          }
        }
        Products();
      },[url])
  return (
   {products , loading }
  )
}

export default useProduct