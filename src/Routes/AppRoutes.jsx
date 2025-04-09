import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../features/Landing/Landing'
import Tipos from '../features/Tipos/Tipos'
import Funciones from '../features/FuncionesLen/Funciones'
import NoVerbal from '../features/NoVerbal/NoVerbal'
import Equipo from '../features/Equipo/Equipo'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={ <Landing/>}/>
        <Route path='/tipos' element={ <Tipos/>}/>
        <Route path='/funciones' element={ <Funciones/>}/>
        <Route path='/no-verbal' element={ <NoVerbal/>}/>
        <Route path='/equipo' element={ <Equipo/>}/>
    </Routes>
  )
}

export default AppRoutes