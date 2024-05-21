export type Category = {

  categoryId: string
  name: string
  slug: string
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
    product :Product | null,
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
  users: User[]
  user: User | null
  isLoading: boolean
  error: string | null
  isLoggedIn: boolean
  userData: null
  token: null


}

export type LoginFormData= {
  email:  string
  password: string
}

export type User = {
  userId?: string
  fullName: string
  phone: number
  email: string
  password: string
  createdAt?: Date
  role: number
  isBanned: boolean
}
  
  export type FormRegister = {
    fullName: string
    phone: number
    email: string
    password: string
    
  }
  
  export type FormLogin = {
    email: string
    password: string
  }

