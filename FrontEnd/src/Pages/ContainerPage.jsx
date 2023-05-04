import axios from "axios"
import { useEffect, useState } from 'react'
import {toast} from "react-toastify"
import ContainerCarte from "../Components/Cartes/ContainerCarte"


function ContainerPage({fetching, setFetching}) {
  const [data, setData] = useState([])
  const [loading,setLoading] = useState(true)
  const fetchData = async() => {
    try {
      const response = await axios.get('http://localhost:5000/Container/AfficherContainer')
      setData(response.data)
    } catch (error) {
      toast.error(error.message)
    } finally {
        setLoading(false)
        setFetching(!fetching)
    }

  }
    useEffect(() => {
        fetchData()
    }, [fetching])
    if(loading) return <h1 className='w-full h-full block  text-5xl font-bold text-blue-950   mt-16 text-center'>Loading...</h1>
    return (
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {data.length && data.map(element => (
            <ContainerCarte Titre={element.Titre} key={element._id} id={element._id} fetching={fetching} setFetching={setFetching} />
            ))}
        </div>
    )
}

export default ContainerPage