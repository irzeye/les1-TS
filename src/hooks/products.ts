import React, {useEffect, useState} from 'react'
import {IProduct} from '../models'
import axios, { Axios, AxiosError } from 'axios'

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
	const [loading, setLoading] = useState(false) 
	const [error, setError] = useState('')

	function addProduct(product: IProduct) {
		setProducts(prev => [...prev, product])
	}

	async function fetchProducts() {
		try {
	setError('')	
	setLoading(true)
		const respons = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
	setProducts(respons.data)
	setLoading(false)
		} catch (e: unknown) {
			const error = e as AxiosError
	setLoading(false)
	setError(error.message)	
	}
}

useEffect( () => {
	fetchProducts()
}, [])

return { products, error, loading, addProduct }

}