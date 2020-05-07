import Shop from './modules/Shop'

class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

module.exports = {
  Item,
  Shop,
}
