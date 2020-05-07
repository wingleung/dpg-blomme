import BaseItem from './_BaseItem'

class DefaultItem extends BaseItem {
  constructor(item) {
    super(item)
  }

  updateQuality() {
    this.sellIn--
    this.quality -= this.isExpired() ? 2 : 1
    this.quality = Math.max(0, this.quality)
  }
}

export default DefaultItem
