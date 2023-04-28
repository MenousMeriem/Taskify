import React from 'react'
import image from '../../assets/avatar.png'

function Layout() {
  return (
    <div>
        <div className="navbar bg-slate-100 mb-10">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Logo</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                <input type="text" placeholder="Recherches" className="input input-bordered" />
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img className='' src={image}/>
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                    </a>
                    </li>
                    <li><a>Paramètres</a></li>
                    <li><a>Se deconnecter </a></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout