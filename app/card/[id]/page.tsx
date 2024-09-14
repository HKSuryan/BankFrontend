import { useRouter } from 'next/router';
import styles from '../../../styles/CardDetail.module.css';

const CardDetail = ({ params }: { params: { id: string } }) => {
  return (
    <div className={styles.detail}>
      <h1>Card Detail for ID: {params.id}</h1>
      <p>More Details about the selected Card</p>
    </div>
  );
};

export default CardDetail;
