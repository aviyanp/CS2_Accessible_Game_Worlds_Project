class basicTrader {
    constructor(lvl) {
        this.level = lvl;
        this.buyPrices = [];
        this.sellPrices = [];

        for(let i = 0; i < 6; i++){
            this.buyPrices.push(round(1 + i + random(1, lvl)));
            this.sellPrices.push(round(1 + random(1, lvl)));
        }

    }

    buy(item, lvl, balance){
        if(item.level > lvl){
            return 0;
        }
        if(this.sellPrices[item.level] > balance){
            return 0;
        }
        else{
            return -1 * this.buyPrices[item.level];
        }
    }

    sell(item, inventory){
        if(inventory[item.level] < 1){
            return 0;
        }
        else{
            return this.sellPrices[item.level];
        }
    }


}