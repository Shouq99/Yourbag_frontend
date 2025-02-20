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
  image?: string
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

export type CategoryState = {
  categories:Category[],
  category :Category | null,
  totalPages: number,
  error: null | string,
  isLoading: boolean
}



export type CartState = {
  cartItem:Product[]
  
}


export type FilterType = {
  page: number
  limit: number
  keyword: string | undefined
  orderBy: number
  sortBy: number
  minPrice: number
  maxPrice: number
}



export type UserState ={
  error: string | null
  isLoading: boolean
  userData: User | null
  token: string | null
  isLoggedIn: boolean
   users: User[]
  // isLoading: boolean
  // error: string | null
  // isLoggedIn: boolean
  // userData?: null 
  // token: null
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

   export type LoginData = {
     userData: User | null
     token: string | null
     isLoggedIn: boolean
   }

   export type RegisterFormData = {
    fullName: string
    phone: number
    email: string
    password: string
    createdAt: Date
    role: number
    isBanned: boolean
  } 
    export type CreateProductFormData = {
      name: string
      slug: string
      image?: string
      description: string
      price: number
      createdAt: Date
      categoryId: string
      category: Category
  }
  
  export type UpdateProfileFormData = {
    fullName: string
    phone: number
   
  }
    export type CreateCategoryFormData = {
    fullName: string
    description: string
   
  }
  