import { List, X } from 'phosphor-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logocar.png';

const Header = () => {
    const links = [
        {name: "Home"},
        {name: "Loja"},
        {name: "Contato"},
        {name: "Pedidos"},
        {name: "Perfil"},
    ]

    const [toggleNav, setToggleNav] = useState(false);
    const handleToggleNav = () => setToggleNav(!toggleNav);
   
    const [isOpen, setIsOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() =>{
        let handle = (e) =>{
            if(!menuRef.current.contains(e.target)){
                setToggleNav(false)
            }
        };
        document.addEventListener('mousedown',handle)
        return() => {
            document.removeEventListener('mousedown', handle)
        }    
    })

    useEffect(() => {
        let handleClickOutside = (event) => {    
            setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    });
    
  return (
<>
    <div className='w-full fixed top-0 z-40 text-gray-100 bg-[#14172C] px-5'>

        <div className='relative w-full max-w-[1440px] m-auto h-full flex items-center justify-center'>
            <header className='max-w-[1440px] w-full flex justify-between items-center z-50 max-md:h-full p-2 max-md:flex-col'>
                    
                <div className='flex items-center justify-between w-full'>
                    <img src={logo} alt="" className='w-48' />
                    <div onClick={handleToggleNav} className='hidden cursor-pointer max-md:block hover:bg-gray-300  rounded-md'>
                        {toggleNav ? <X size={30}/> : <List size={30}/> }
                    </div>
                </div>

                <div ref={menuRef} className={`max-md:pt-5 max-md:w-full flex max-md:items-end max-md:justify-end max-md:flex-col gap-2 justify-around md:flex ${ toggleNav ? "visible" : "hidden"}`}>
                    <div className='w-full m-auto md:max-w-lg max-md:flex-col flex justify-around gap-2'>
                        {links.map((link, index) => 
                            <Link  key={index} to='' className='w-24 hover:border-gray-100 border-transparent border-b-2 py-2 max-md:py-4 max-md:justify-start max-md:pl-4 max-md:bg-gradient-to-r from-[#dcdbdb] to-gray-800 max-md:w-full flex  justify-center'>
                                <p>{link.name}</p>
                            </Link>
                        )}
                    </div>
                </div>

            </header>
        </div>
    </div>
    </>
  )
}

export default Header;