type IOption = {
  page?: number
  limit?: number
}
type IOptionReult = {
  page?: number
  limit?: number
  skip?: number
}
export const calculatePagination = (pagination: IOption): IOptionReult => {
  const page = Number(pagination.page || 1)
  const limit = Number(pagination.limit || 10)
  const skip = Number((page - 1) * limit)
  return {
    page,
    limit,
    skip,
  }
}
