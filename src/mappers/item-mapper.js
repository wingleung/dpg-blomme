import AgedBrieItem from '../decorators/items/AgedBrie'
import BackStageItem from '../decorators/items/BackStage'
import SulfurasItem from '../decorators/items/Sulfuras'
import ConjuredItem from '../decorators/items/Conjured'
import DefaultItem from '../decorators/items/Default'

const mapToDecoratedItem = (item) => {
  switch (item.name) {
    case 'Aged Brie':
      return new AgedBrieItem(item)

    case 'Backstage passes to a TAFKAL80ETC concert':
      return new BackStageItem(item)

    case 'Conjured':
      return new ConjuredItem(item)

    case 'Sulfuras, Hand of Ragnaros':
      return new SulfurasItem(item)

    default:
      return new DefaultItem(item)
  }
}

export { mapToDecoratedItem }
