import { mapToDecoratedItem } from '../mappers/item-mapper'

class Shop {
  constructor(items = []) {
    this.items = items.map(mapToDecoratedItem)
  }

  updateQuality() {
    this.items.forEach((item) => {
      item.updateQuality && item.updateQuality()
    })

    return this.items
  }
}

export default Shop
