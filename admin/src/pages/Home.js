import React from 'react'
import Header from '../components/layout/Sidebar'

function Home() {
  return (
    <div>

      <div className='d-flex'>

        <div className='col-2'>

          <Header/>

        </div>

        <div className='col-10 mt-3'>

          <h1 className='text-center mt-5'> Dashborad</h1>
        </div>

      </div>

    </div>
  )
}

export default Home