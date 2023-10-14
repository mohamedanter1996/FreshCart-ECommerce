export interface Product {
    imageCover:string,
    price:number,
    title:string,
    category:category,
    ratingsAverage:number,
    _id:string,
    brand:brand
}

export interface cartProduct{
    count:number,
    price:number,
    product:Product


}
export interface category {
   _id:string,
   name:string,
   slug:string,
   image:string
}

export interface specificProduct{
    images:string[],
    title:string,
    description:string,
    ratingsAverage:number,
    price:number,
_id:string
}

export interface productCategories{
    name:string,
    image:string,
    _id:string


}

export interface brand{
    _id:string,
    name:string,
    slug:string,
    image:string
}

export interface userAddress{
    name?:string,
    details:string,
    phone:string,
    city:string,
    _id?:string
}

export interface orderData{
    paymentMethodType:string,
    totalOrderPrice:number,
    cartItems:cartProduct[]


}



