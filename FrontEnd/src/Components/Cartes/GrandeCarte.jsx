import React from 'react'
import { AiOutlinePlus} from "react-icons/ai";
import {useState} from "react"
import {toast} from "react-toastify"
import axios from 'axios';

function GrandeCarte() {
  const [input, setInput] = useState("")
  const postCard = async () => {
    try {
      if(input.length <4) {
        return toast.warning('Plus de trois lettres ')
      }
      await axios.post('http://localhost:5000/Container/Ajouter', {titre: input})
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
    <div>
        <div className="card w-full bg-sky-900 shadow-xl mt-10 mb-10">
            <div className="card-body flex flex-row">
              <form onSubmit={onSubmit} className='w-full'>
                <input type="text" placeholder="Saisissez un titre" className="input input-ghost w-full" value={input} onChange={e => setInput(e.target.value)} />
                </form>
                <div className="card-actions justify-end">
                <button className="btn btn-square mr-2 bg-fuchsia-300">
                    <AiOutlinePlus/>
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GrandeCarte