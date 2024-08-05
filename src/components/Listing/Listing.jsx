import PropTypes from 'prop-types'
import Item from '../Item/Item'
import styles from './Listing.module.css'

const Listing = ({ items = [] }) => {
  return (
    <div className={styles['item-list']}>
      {items.map((item) => (
        <Item
          key={item.listing_id}
          item={item}
        />
      ))}
    </div>
  )
}

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
}

export default Listing
