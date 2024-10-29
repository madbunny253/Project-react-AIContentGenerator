import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
    return (
        <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
            <div className='flex gap-2 items-center p-2 rounded-md max-w-xl '>
                <h2 className='bg-primary p-1 rounded-3xl text-md text-white'>
                    🔥Join Membership just for $9.99/Month
                </h2>
            </div>
            <div className='flex gap-5 items-center'>
                <UserButton 
                    appearance={{
                        elements: {
                            userButtonAvatarBox: 'w-10 h-10', // Set custom width and height
                            userButtonTrigger: 'w-10 h-10',    // Adjust trigger button size if needed
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default Header
