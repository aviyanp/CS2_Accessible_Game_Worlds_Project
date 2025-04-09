class basicCrop {
    constructor(name, growthStages, growthTime, sellPriceMin, sellPriceMax, buyPriceMin, buyPriceMax) {
      this.name = name;
      this.growthStages = growthStages; // num stages left for it to grow
      this.growthTime = growthTime; // days per growth stage
      this.sellPriceMin = sellPriceMin;
      this.sellPriceMax = sellPriceMax;
      this.buyPriceMin = buyPriceMin;
      this.buyPriceMax = buyPriceMax;
    }
  }

  const CROPS = {
    WHEAT: new basicCrop("wheat", 3, 1, 8, 12, 4, 7),
    POTATO: new basicCrop("potato", 4, 1, 12,  16, 6, 11),
    CARROT: new basicCrop("carrot", 3, 1, 13, 17, 7, 12),
    BEETROOT: new basicCrop("beetroot", 4, 2, 14, 20, 9, 14),
    PUMPKIN: new basicCrop("pumpkin", 5, 3, 30, 37, 17, 20),
    MELON: new basicCrop("melon", 5, 3, 33,  45, 18, 22)
  };