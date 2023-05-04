import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import axios from 'axios';



function MiniCartes() {
  const [input, setInput] = useState("")
  const postCard = async () => {
    try {
      if(input.length <4) {
        return toast.warning('Plus de trois lettres')
      }
      await axios.post('http://localhost:5000/Carte/AjouterCarte', {Contenu: input, Urgence: input})
      setInput('')
      toast.success('Ajouter avec succés')
    } catch (error) {
      toast.error(error)
    }
  }
  const onSubmit = (e) => {
    e.preventDefault()
    postCard()
  }
  return (
        <div className="card w-80 h-44 bg-sky-800 shadow-xl text-white rounded-xl">
            <div className="card-body flex flex-row">
            <form onSubmit={onSubmit} className='w-full'>
                <input type="text" placeholder="Saisissez le contenu " className="input input-ghost w-full" value={input} onChange={e => setInput(e.target.value)} />  
                <input type="text" placeholder="Ajouter une urgence " className="input input-ghost w-52 max-w-xs" value={input} onChange={e => setInput(e.target.value)}  />
              </form>
              <button className="btn btn-square  bg-fuchsia-300">
                <AiOutlinePlus/>
              </button>
              {/* Suuprimer */}
              {/* <button className="btn btn-square bg-fuchsia-300">
                <GoDash/>
            </button> */}
            </div>
        </div>
  )
}

export default MiniCartes