import React from 'react'

import { Link } from 'react-router-dom'

import styles from './SearchBar.module.css'

interface Product {
	id: string
	title: string
	images: string[]
}

interface SearchBarProps {
	searchValue: string
	setSearchValue: (value: string) => void
	isLoading: boolean
	data: Product[]
}

const SearchBar: React.FC<SearchBarProps> = ({
	searchValue,
	setSearchValue,
	isLoading,
	data,
}) => {
	
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}

	return (
		<form className={styles.form}>
			<div className={styles.icon}>
				<svg className='icon'>
					<use xlinkHref={'sprite.svg#search'} />
				</svg>
			</div>
			<div className={styles.input}>
				<input
					type='search'
					name='search'
					placeholder='search for anything'
					autoCapitalize='on'
					value={searchValue}
					onChange={handleSearchChange}
				/>
			</div>

			{searchValue && (
				<div className={styles.box}>
					{isLoading
						? 'Loading'
						: !data.length
						? 'No results'
						: data.map(({ title, images, id }) => (
								<Link
									onClick={() => setSearchValue('')}
									className={styles.item}
									to={`products/${id}`}
									key={id}
								>
									<div
										className={styles.image}
										style={{ backgroundImage: `url(${images[0]})` }}
									></div>
									<div className={styles.title}>{title}</div>
								</Link>
						  ))}
				</div>
			)}
		</form>
	)
}

export default SearchBar
