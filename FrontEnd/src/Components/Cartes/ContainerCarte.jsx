import React from 'react'
import MiniCartes from './MiniCartes'
import { AiOutlinePlus,AiFillEdit } from "react-icons/ai";
import { GoDash } from "react-icons/go";

function ContainerCarte() {
  return (
    <div className='bg-blue-950 w-fit p-8 flex flex-col gap-4 rounded-xl'>
        <div className='flex flex-row'>
            <input type="text" placeholder="Saisissez un titre" className="input input-ghost w-72 max-w-xs mr-2" />
            <button className="btn btn-square mr-2 bg-fuchsia-300">
                <AiOutlinePlus/>
            </button>
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