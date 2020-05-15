export class Goods {
    constructor(itemInfo, columns, shopInfo) {
        this.title = itemInfo.title;
        this.oldPrice = itemInfo.oldPrice;
        this.price = itemInfo.price;
        this.lowNowPrice = itemInfo.lowNowPrice;
        this.discountDesc = itemInfo.discountDesc;
        this.discountBgColor = itemInfo.discountBgColor;
        this.columns = columns;
        this.services = shopInfo.services;
    }
}

export class shopInfo {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.goods = shopInfo.cGoods;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
    }
}