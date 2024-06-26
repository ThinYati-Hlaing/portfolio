import React from 'react'
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className=' container mx-auto'>
                <div className='w-full gradient h-[70px] border backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-fuchsia-400' >
                    {/* <Link to='home'  smooth={true} spy={true} offset={-300} className='cursor-pointer active w-[60px] h-[60px] flex justify-center items-center'>
                        <BiHomeAlt />
                    </Link> */}
                    <Link to='home'  smooth={true} spy={true} offset={-300} className='cursor-pointer active w-[60px] h-[60px] flex justify-center items-center'>
                        <BiUser />
                    </Link>
                    <Link to='skill'  smooth={true} spy={true} className='cursor-pointer active w-[60px] h-[60px] flex justify-center items-center'>
                        <BsClipboardData />
                    </Link>
                    <Link to='project'  smooth={true} spy={true} className='cursor-pointer active w-[60px] h-[60px] flex justify-center items-center'>
                        <BsBriefcase />
                    </Link>
                    <Link to='contact'  smooth={true} spy={true} className='cursor-pointer active w-[60px] h-[60px] flex justify-center items-center'>
                        <BsChatSquare />
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default Navbar