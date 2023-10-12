/*
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2023-10-13 00:44:07
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2023-10-13 01:40:00
 * @Description: file content
 * @FilePath: /JS/src/gilded_rose.js
 */
class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
    this.items.forEach((item) => { ////forEach to map all items in the shop
      switch (item.name) {
        case 'Aged Brie':
          this.updateAgedBrie(item); //Separate function for each sepecific item
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstagePasses(item);
          break;
        case 'Sulfuras, Hand of Ragnaros':
          break;
        default:
          this.updateStandardItem(item);
      }
      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        item.sellIn--;
      }
    });
  

    return this.items
  }

  updateAgedBrie(item) {
    if (item.quality < 50) {
      item.quality++;
    }
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality++;
    }
  }

  updateBackstagePasses(item) {
    if (item.quality < 50) {
      item.quality++;
      if (item.sellIn < 11 && item.quality < 50) {
        item.quality=item.quality+2;
      }
      if (item.sellIn < 6 && item.quality < 50) {
        item.quality=item.quality+3;
      }
    }
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  updateStandardItem(item) {
    if (item.quality > 0) {
      item.quality--;
      if (item.name === 'Conjured Mana Cake' && item.quality > 0) {
        item.quality--; 
      }
    }
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality--;
    }
  }
}
module.exports = {
  Item,
  Shop,
}
