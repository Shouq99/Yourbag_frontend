export type Category = {

  categoryId: string
  name: string
  slug: number
  description: string
  products: Product[]
  
}
export type Product = {

  productId: string;
  name: string;
  slug: string
  image: string
  description: string
  price: number
  createdAt: Date
  categoryId: string
  category: Category
 // reviews: Review[] 
 // orderItems: OrderItem[] 
  }

  export type ProductState = {
    products:Product[],
    product: Product | null,
    totalPages: number,
    error: null | string,
    isLoading: boolean
}