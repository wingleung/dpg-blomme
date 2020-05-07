import Item from '../../modules/Item'

class BaseItem extends Item {
  constructor({ name, sellIn, quality }) {
    super(name, sellIn, quality)
  }

  isExpired() {
    return this.sellIn < 0
  }
}

export default BaseItem
