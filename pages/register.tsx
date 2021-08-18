import {NextPage} from 'next';
import {useForm} from 'react-hook-form';
import {useMutation} from 'react-query';
import {post} from '../lib/fetch';

type RegisterFormFields = Pick<m3oCreateUserData, 'email' | 'password'>;

const Register: NextPage = () => {
  const mutation = useMutation((values: RegisterFormFields) =>
    post('user/sign-up', values),
  );

  const {register, handleSubmit} = useForm<RegisterFormFields>();

  function onSubmit(values: RegisterFormFields) {
    mutation.mutate(values);
  }

  return (
    <div className="h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register('email')} />
        <input type="password" {...register('password')} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
