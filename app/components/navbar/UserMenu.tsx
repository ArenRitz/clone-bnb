'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useState, useCallback } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import useRentModal from '@/app/hooks/useRentModal';

interface UserMenuProps {
	currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const rentModal = useRentModal();
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	const onRent = useCallback(() => {
		if (!currentUser) {
			return loginModal.onOpen();
		}
		
		rentModal.onOpen();

	}, [currentUser, loginModal, rentModal]);

	return (
		<div className='relative'>
			<div className='flex flex-row items-center gap-3'>
				<div
					onClick={onRent}
					className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
				>
					Airbnb Your home
				</div>
				<div
					onClick={toggleOpen}
					className='p-4 md:py-1 mx:px-2 border-[1px] border-neutral-200 rounded-full flex flex-row items-center gap-3 cursor-pointer hover:shadow-md transition'
				>
					<AiOutlineMenu />
					<div className='hidden md:block'>
						<Avatar src={currentUser?.image}/>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className='absolute rounded-xl shadow-md w-[40wv] md:w-3/4 overflow-hidden bg-white right-0 top-12 text-sm'>
					<div className='flex flex-col cursor-pointer'>
						{currentUser ? (
							<>
                            <MenuItem label='My Trips' onClick={()=>{}}/>
                            <MenuItem label='My Listings' onClick={()=>{}}/>
                            <MenuItem label='My Reservations' onClick={()=>{}}/>
                            <MenuItem label='My Properties' onClick={()=>{}}/>
                            <MenuItem label='Airbnb my home' onClick={rentModal.onOpen}/>
                            <hr/>
                            <MenuItem label='Logout' onClick={()=> signOut()}/>
                            </>
						) : (
							<>
								<MenuItem label='Login' onClick={loginModal.onOpen} />
								<MenuItem label='Sign Up' onClick={registerModal.onOpen} />
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
