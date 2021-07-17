import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, useSession, signOut } from 'next-auth/client';

import styles from './styles.module.scss';

const SignInButton = () => {
  const [session] = useSession();

  console.log(session);


  return session ? (
    <button type='button' className={styles.signInButto} onClick={() => signOut()}>
      <FaGithub color="#04D361" />
      {session.user.name}
      <FiX color="#737380" className={styles.logOutIcon}/>
    </button>
  ) : (
    <button type='button' className={styles.signInButto} onClick={() => signIn('github')}>
      <FaGithub color="#EBA417" />
      Sing in with GitHub
    </button>
  )
}


export default SignInButton;