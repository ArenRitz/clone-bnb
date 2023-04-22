'use client';
import Modal from './Modal';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Heading from '../Heading';
import Input from '../inputs/Input';


import useRegisterModal from '@/app/hooks/useRegisterModal';

const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true);

		axios
			.post('/api/register', data)
			.then(() => {
				registerModal.onClose();
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const bodyContent = (
		<div className='flex flex-col gap-4'>
				<Heading title='Welcome to Clonebnb!' subtitle='Create an Account'/>
				<Input id="email"
					label="Email"
					register={register}
					errors={errors}
					required
				/>
				<Input id="name"
					label="Name"
					register={register}
					errors={errors}
					required
				/>
				<Input id="password"
					label="Password"
					type="password"
					register={register}
					errors={errors}

					required
				/>
		</div>
	);
    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            actionLabel='Continue'
            title='Register'
			body={bodyContent}
           ></Modal>
                
        
        );
};

export default RegisterModal;
