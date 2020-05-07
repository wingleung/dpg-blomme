import BaseItem from './_BaseItem'

class BackStageItem extends BaseItem {
  constructor(item) {
    super(item)
  }

  updateQuality() {
    this.sellIn--

    if (this.isExpired()) {
      this.quality = 0
    } else {
      this.quality++
      this.sellIn < 10 && this.quality++
      this.sellIn < 5 && this.quality++
    }
  }
}

export default BackStageItem
