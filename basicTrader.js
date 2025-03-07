class basicTrader {
    constructor(lvl) {
        this.level = lvl;
        this.buyPrices = [];
        this.sellPrices = [];

        for(let i = 0; i < 6; i++){
            this.buyPrices.push(round(1 + random(1, lvl)));
            this.sellPrices.push(round(1 + random(1, lvl)));
        }

    }

    trade(item, lvl, balance){
        if(item.level > lvl){
            return false;
        }
        if(this.sellPrices[item.level] > balance){
            return false;
        }
        else{
            return balance - this.sellPrices[item.level];
        }
    }

}