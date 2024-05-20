export type Category = {

  categoryId: string
  name: string
  slug: number
  description: string
  products: Product[]
  
}
export type Product = {

  productId: string;
  name: string
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

export type FilterType = {
  currentPage: number
  itemsPerPage: number
  keyword: string | undefined
  orderBy: number
  sortBy: number
  minPrice: number
  maxPrice: number
}



export type UserState ={
  error: null | string
  isLoading: boolean

}

export type LoginFormData = {
  email:  string
  password: string
}

export type User = {
  fullName: string
  phone:  string
  email:  string
  password: string
  createdAt?:  string
  

}