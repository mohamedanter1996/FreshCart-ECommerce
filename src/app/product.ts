export interface Product {
    imageCover:string,
    price:number,
    title:string,
    category:category,
    ratingsAverage:number,
    id:StaticRange
}

export interface category {
   _id:string,
   name:string,
   slug:string,
   image:string
}