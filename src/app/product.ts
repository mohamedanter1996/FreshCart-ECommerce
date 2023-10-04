export interface Product {
    imageCover:string,
    price:number,
    title:string,
    category:category,
    ratingsAverage:number,
    _id:string
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
    price:number

}