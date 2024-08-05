import PropTypes from 'prop-types'
import getQuantityClasses from './getQuantityClasses'
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
        <p className={styles['item-title']}>{item.title}</p>
        <p className={styles['item-price']}>{item.price}</p>
        <p className={`${styles['item-quantity']} ${styles[getQuantityClasses(item.quantity)]}`}>{item.quantity}</p>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object,
}

export default Item
