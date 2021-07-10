import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss';

const SignInButton = () => {
  const isUserLoggedIn = true;


  return isUserLoggedIn ? (
    <button type='button' className={styles.signInButto}>
      <FaGithub color="#04D361" />
      Marcio Rodrigues
      <FiX color="#737380" className={styles.logOutIcon}/>
    </button>
  ) : (
    <button type='button' className={styles.signInButto}>
      <FaGithub color="#EBA417" />
      Sing in with GitHub
    </button>
  )
}


export default SignInButton;