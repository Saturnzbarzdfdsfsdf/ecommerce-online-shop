import { useState } from 'react'

const ProductPagination = () => {

  const [totalCount, setTotalCount] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>ProductPagination</div>
  )
}

export default ProductPagination