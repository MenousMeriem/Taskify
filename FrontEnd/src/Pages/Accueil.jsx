import React from 'react'
import Layout from '../Components/Layout/Layout'
import GrandeCarte from '../Components/Cartes/GrandeCarte'
import ContainerPage from './ContainerPage'
import {useState} from "react"
function Accueil() {
  const [fetching, setFetching] = useState(true)
  return (
    <div className='px-16'>
        <Layout/>
        <GrandeCarte fetching={fetching} />
        <ContainerPage fetching={fetching} setFetching={setFetching} />
    </div>
  )}


export default Accueil