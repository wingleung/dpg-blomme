import BaseItem from './_BaseItem'

class AgedBrieItem extends BaseItem {
  constructor(item) {
    super(item)
  }

  updateQuality() {
    this.sellIn--
    this.quality += this.isExpired() ? 2 : 1
    this.quality = Math.min(50, this.quality)
  }
}

export default AgedBrieItem
