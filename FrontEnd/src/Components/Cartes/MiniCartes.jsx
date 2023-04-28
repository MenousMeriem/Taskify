import React from 'react'
import { AiOutlinePlus,AiFillEdit } from "react-icons/ai";
import { GoDash} from "react-icons/go";



function MiniCartes() {
  return (
        <div className="card w-80 h-44 bg-sky-800 shadow-xl text-white rounded-xl">
            <div className="card-body flex flex-row">
              <input type="text" placeholder="Ajouter une note " className="input input-ghost w-52 max-w-xs" />
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