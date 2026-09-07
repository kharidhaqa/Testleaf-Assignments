class Order{
    productName: String;
    orderId: string;
    price: number;

    constructor(productName: String, orderId: string, price: number){
        this.productName = productName;
        this.orderId = orderId;
        this.price = price;

        console.log(`order created successfully for ${this.productName}`)
    }

        placeOrder(){
            console.log(`Order placed for ${this.productName} with order id ${this.orderId}`)
        }
        cancelOrder(){
            console.log(`Order cancelled for ${this.productName}`)
        }   

}
const order1 = new Order('iPhone16', 'ORD001', 20000)
order1.placeOrder()
order1.cancelOrder()
