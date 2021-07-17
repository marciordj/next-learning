import styles from './styles.module.scss';

interface IProps {
  priceId: string
}

const SubscribeButton = ({ priceId }: IProps) => {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
}


export default SubscribeButton;