import BaseItem from './_BaseItem'

class ConjuredItem extends BaseItem {
  constructor(item) {
    super(item)
  }

  updateQuality() {
    this.sellIn--
    this.quality -= this.isExpired() ? 4 : 2
    this.quality = Math.max(0, this.quality)
  }
}

export default ConjuredItem
