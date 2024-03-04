// app/components/LoginForm.tsx
import {useForm, SubmitHandler} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button, Input} from '@shadcn/ui';
import {loginSchema} from '../schemas/loginSchema';

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input {...register('email')} placeholder='Email' />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <Input
          {...register('password')}
          type='password'
          placeholder='Password'
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <Button type='submit'>Login</Button>
    </form>
  );
}
