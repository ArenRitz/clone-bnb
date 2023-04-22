'use client';
import Modal from './Modal';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, set, useForm } from 'react-hook-form';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import Button from '../Button';

const LoginModal = () => {
	const router = useRouter();
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true);

		signIn('credentials', {
			...data,
			redirect: false,
		})
		.then((callback) => {
			setIsLoading(false);

			if (callback?.ok) {
				toast.success('Logged in successfully!');
				router.refresh();
				loginModal.onClose();
			}
			if (callback?.error) {
				toast.error(callback.error);
			}
		});
	};

	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<Heading title='Welcome to back!' subtitle='Login to your Account' />
			<Input
				id='email'
				label='Email'
				register={register}
				errors={errors}
				required
			/>
			<Input
				id='password'
				label='Password'
				type='password'
				register={register}
				errors={errors}
				required
			/>
		</div>
	);

	const footerContent = (
		<div className='flex flex-col gap-4 mt-3'>
			<hr />
			<Button outline label='Continue with Google' icon={FcGoogle} onClick={() => signIn('google')}/>
			<Button outline label='Continue with Github' icon={AiFillGithub} onClick={() => signIn('github')}/>
			<div className=' text-neutral-500 text-center mt-4 font-light'>
				<div className='flex flex-row items-center gap-2 justify-center'>
					<div>
						Already have an account?
					</div>
					<div onClick={registerModal.onClose} className='text-neutral-800 cursor-pointer hover:underline'>
						Log in
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModal.isOpen}
			onClose={loginModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			actionLabel='Continue'
			title='Login'
			body={bodyContent}
			footer={footerContent}
		></Modal>
	);
};

export default LoginModal;
