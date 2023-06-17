import React from 'react'
import Navbar from '../navbar/Navbar'
import logo from './../../logo.svg'
export default function Dashboard() {
  return (
    <div>
        <Navbar/>
            <div className='p-4 sm:ml-64'>
                <div className='md:w-3/4 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
                    <h1 className='flex items-center justify-center mt-4 font-semibold'> Bienvenidos a CarShop</h1>
                  <div className='container horizontal mt-5 app-header h-full flex items-center justify-center'>
                    <img src={logo} className="App-logo" alt="logo"/>
                  </div>
                </div>            
            </div>
    </div>
  )
}
