import PropTypes from 'prop-types'
import getQuantityClass from './getQuantityClass'
import getFormattedDescription from './getFormattedDescription'
import styles from './Item.module.css'

const Item = ({ item }) => {
  return (
    <div className={styles.item}>
      <div className={styles['item-image']}>
        <a href={item.url}>
          <img
            src={item.MainImage.url_570xN}
            alt={item.title}
          />
        </a>
      </div>
      <div className={styles['item-details']}>
        <p className={styles['item-title']}>{getFormattedDescription(item.title)}</p>
        <p className={`${styles['item-price']} ${styles[item.currency_code]}`}>{item.price}</p>
        <p className={`${styles['item-quantity']} ${styles[getQuantityClass(item.quantity)]}`}>{item.quantity}</p>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    currency_code: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    MainImage: PropTypes.shape({
      url_570xN: PropTypes.string.isRequired,
    }),
  }),
}

export default Item
