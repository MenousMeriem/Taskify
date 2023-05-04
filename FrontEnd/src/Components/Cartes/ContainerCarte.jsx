import React from 'react'
import MiniCartes from './MiniCartes'
// import { AiOutlinePlus,AiFillEdit } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import axios from 'axios'

function ContainerCarte({Titre, id, fetching, setFetching}) {
  const onDelete = async () => {
    const confirmation = confirm('Etes vous sur de supprimer cette carte ?')
    if(!confirmation) return
   try {
    await axios.delete('http://localhost:5000/Container/SupprimerContainer/'+id)
  } catch (error) {
    toast.error(error.message)    
  } finally {
    setFetching(!fetching)
   }
  }
  return (
    <div className='bg-blue-950 w-fit p-4 flex flex-col gap-4 rounded-xl'>
      <AiOutlineClose onClick={onDelete} className=' text-2xl text-white cursor-pointer hover:text-red-600 hover:rotate-180 transition-all duration-300' />
        <div className='flex flex-row'>
          <h1 className=' text-2xl font-bold text-white'>{Titre.toUpperCase()}</h1>
            {/* Modifier */}
            {/* <button className="btn btn-square bg-fuchsia-300">
                <AiFillEdit/>
            </button> */}
            
        </div>
        <MiniCartes/>
    </div>
  )
}

export default ContainerCarte