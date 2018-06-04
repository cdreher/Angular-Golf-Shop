import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemDatabaseService implements InMemoryDbService{
  createDb() {
    const users = [
        {
            id:1,
            username: "cdreher",
            password: "test",
            imageUrl: "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
        }
    ];
    const products = [
        {
            id: 1,
            name: "Callaway XR 16 Driver",
            brand: "Callaway",
            category: "Driver",
            price: 249.99,
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41amwMsAvrL._SX425_.jpg"
        },
        {
            id: 2,
            name: "TaylorMade 2017 M2 Driver",
            brand: "TaylorMade",
            category: "Driver",
            price: 299.99,
            imageUrl: "http://www.taylormadegolf.com/on/demandware.static/-/Sites-tmag-master-catalog/default/v1526026387206/zoom/WZ442_zoom_D.jpg"

        },
        {
            id: 3,
            name: "Titleist 716 AP1 Irons - Steel",
            brand: "Titleist",
            category: "Iron Set",
            price: 799.99,
            imageUrl: "https://acushnet.scene7.com/is/image/titleist/ap1-smoke-1200x1100?wid=600&qlt=75&resMode=sharp2"

        },
        {
            id: 4,
            name: "Tour Edge Hot Launch HL3 Triple Combo Set - Graphite",
            brand: "Tour Edge",
            category: "Iron Set",
            price: 599.99,
            imageUrl: "https://cdn0.globalgolf.com/images/product/large/1044000/1044060-2-1-7-0-0-0-0-0-13.jpg"

        },
        {
            id: 5,
            name: "Odyssey White Hot RX #1 SuperStroke Putter",
            brand: "Odyssey",
            category: "Putter",
            price: 129.99,
            imageUrl: "https://s7d2.scene7.com/is/image/dkscdn/16ODYMWHTHTRX1SSPTR_is/"

        },
        {
            id: 6,
            name: "Scotty Cameron 2018 Select Newport 1.5 Putter",
            brand: "Scotty Cameron",
            category: "Putter",
            price: 399.99,
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/614nVUtfd9L._SL1068_.jpg"
        },
        {
            id: 7,
            name: "TaylorMade M2 3H 19 Degree",
            brand: "Taylormade",
            category: "Hybrid",
            price: 179.99,
            imageUrl: "https://cdn0.globalgolf.com/images/product/large/1034000/1034423-aae.jpg"
        },
        {
            id: 8,
            name: "Cobra King '18 3 Iron Hybrid",
            brand: "Cobra",
            category: "Hybrid",
            price: 179.00,
            imageUrl: "https://www.cobragolf.com/media/catalog/product/f/6/f6-hyb-gold_1_2.jpg"
        },
        {
            id: 9,
            name: "Cleveland CBX Wedge Steel",
            brand: "Cleveland",
            category: "Wedge",
            price: 129.99,
            imageUrl: "http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/5/2017/08/Cleveland-CBX-wedge-hero.png"
        },
        {
            id: 10,
            name: "TaylorMade M3 Fairway Wood",
            brand: "TaylorMade",
            category: "Fairway Wood",
            price: 299.99,
            imageUrl: "https://imgs.2ndswing.com/images/clean-product/large/M3%20NEW%20FWG.jpg"
        },
        {
            id: 11,
            name: "Titleist Vokey SM7 Wedge - Jet Black",
            brand: "Titleist",
            category: "Wedge",
            price: 149.99,
            imageUrl: "http://cdn.shopify.com/s/files/1/0057/4162/products/SM7_TC_50_Jet_Black_600x.jpg?v=1516893827"
        },
        {
            id: 12,
            name: "Izzo Vintage Fairway Headcover",
            brand: "Izzo",
            category: "Headcover",
            price: 14.99,
            imageUrl: "https://static.golfonline.co.uk/media/img/vintage_xhyb_wht_nvy_red.300x400.jpg"
        },
        {
            id: 13,
            name: "Titleist AVX",
            brand: "Titleist",
            category: "Golf Balls",
            price: 47.99,
            imageUrl: "http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/5/2018/04/Titleist-AVX-Golf-Balls-Introduced-630x473.jpg"
        },
        {
            id: 14,
            name: "Srixon Z-STAR XV Golf Balls",
            brand: "Srixon",
            category: "Golf Balls",
            price: 39.99,
            imageUrl: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/5/2017/01/Z-star-XV-ball-plus-pack-630x473.jpg"
        },
        {
            id: 16,
            name: "Maxfli Deluze Zippered Iron Covers - 10 pack",
            brand: "Maxfli",
            category: "Headcover",
            price: 34.99,
            imageUrl: "https://s7d2.scene7.com/is/image/dkscdn/SS14MXFLDLXZIPIRNS_is/"
        }
    ]; 
    return {products, users};
  }
 

}
