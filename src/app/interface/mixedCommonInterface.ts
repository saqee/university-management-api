export type IPagination = {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'desc' | 'asc'
}

export type IGenericResponse<T> = {
  meta: {
    page?: number
    limit?: number
    total?: number
  }
  data: T
}
