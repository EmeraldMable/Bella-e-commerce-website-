import { useParams } from "react-router-dom"

function Detailpage() {
    const params = useParams()
  return (
    console.log(params)
  )
}

export default Detailpage