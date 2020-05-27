import React from 'react';
import '../styles/Header.css'

export default () => {
    return (
        <nav>
            <div className='navleft'>
                <div>
                    <a href='#home' className='name underline'>PHILIP RYAN</a>
                </div>
            </div>
            <div className='navright'>
                <td className='navlinks underline' style={{cursor: 'pointer'}} onClick={()=> window.open("https://docdro.id/mzT7FCp", "_blank")}>RESUME</td>
                <a href='#work' className='navlinks underline'>WORK</a>
                <a href='#contact' className='navlinks underline'>CONTACT</a>
            </div>
        </nav>
    )
}

