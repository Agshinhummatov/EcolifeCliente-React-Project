import React from 'react'
import BlogInfo from '../component/blog/BlogInfo'
import BlogRecent from '../component/blog/BlogRecent'
import Category from '../component/category/Category'

function BlogDetail() {
  return (
    <>
      <div className='container'>

      <div className='row'>


     
       <div className='col-9'>

       <BlogInfo/>

       </div>

       <div className='col-3'>

       <BlogRecent/>
       </div>

       <div className='col-12'>

        <Category/>
       </div>
      
       </div>
       </div>
    </>
  )
}

export default BlogDetail