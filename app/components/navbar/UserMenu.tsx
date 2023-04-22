'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useState, useCallback } from 'react';
import MenuItem from './MenuItem';


const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);


	return (
		<div className='relative'>
			<div className='flex flex-row items-center gap-3'>
				<div
					onClick={() => {}}
					className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
				>
					Airbnb Your home
				</div>
				<div
					onClick={toggleOpen}
					className='p-4 md:py-1 mx:px-2 border-[1px] border-neutral-200 rounded-full flex flex-row items-center gap-3 cursor-pointer hover:shadow-md transition'
				>
                    <AiOutlineMenu/>
                    <div className='hidden md:block'>
                        <Avatar/>

                    </div>
                </div>
			</div>

            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40wv] md:w-3/4 overflow-hidden bg-white right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <>
                            <MenuItem label='Login' onClick={() => {}} />
                            <MenuItem label='Sign Up' onClick={() => {}} />
                        </>
                    </div>
                </div>
            )}
		</div>
	);
};

export default UserMenu;