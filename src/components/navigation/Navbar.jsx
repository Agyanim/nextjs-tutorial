import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex relative'>
            <div className='absolute top-5 left-10'>photo</div>
        <div className="navbar bg-base-100 justify-center gap-[2rem]">
            <a className="btn btn-ghost text-xl">daisyUI</a>
            <a className="btn btn-ghost text-xl">home</a>
            <a className="btn btn-ghost text-xl">about</a>
            <a className=" btn  btn-ghost text-xl">contack</a>

        </div>
    </nav>
  )
}

export default Navbar