import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../../redux/store'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetProductQuery } from '../../../redux/api/apiSlice'
import { getRelatedProducts } from '../../../redux/products/productsSlice'

import { ROUTES } from '../../../shared/consts/routes'

import { Product } from '../../Product/index'
import { Products } from '../../Products/index'

const SingleProduct: React.FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const { id } = useParams<{ id: string }>()

	const { list, related } = useSelector((state: RootState) => ({
		list: state.products.list,
		related: state.products.related,
	}))

	const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id })

	useEffect(() => {
		if (data && list.length) {
			dispatch(getRelatedProducts(data.category.id))
		}
	}, [data, dispatch, list.length])

	useEffect(() => {
		if (!isFetching && !isLoading && !isSuccess) {
			navigate(ROUTES.HOME)
		}
	}, [isLoading, isFetching, isSuccess, navigate])

	if (isLoading || isFetching) {
		return (
			<section className='preloader'>
				<div className='spinner'>Loading...</div>
			</section>
		)
	}

	return (
		<>
			<Product {...data} />
			<Products products={related} amount={5} title='Related Products' />
		</>
	)
}

export default SingleProduct
