import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, InputAdornment } from '@mui/material';

// import styles from './SearchBar.module.css';

interface Product {
	id: string;
	title: string;
	images: string[];
}

interface SearchBarProps {
	searchValue: string;
	setSearchValue: (value: string) => void;
	isLoading: boolean;
	data: Product[];
}

const SearchBar: React.FC<SearchBarProps> = ({
	searchValue,
	setSearchValue,
	isLoading,
	data,
}) => {
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	return (
		<Box sx={{ position: 'relative', width: '100%' }} component='form'>
			<TextField
				fullWidth
				type='text'
				variant='outlined'
				placeholder='Search'
				value={searchValue}
				onChange={handleSearchChange}
				slotProps={{
					input: {
						endAdornment: searchValue && (
							<InputAdornment position='end'>
								<IconButton
									aria-label='clear search'
									onClick={() => setSearchValue('')}
									edge='end'
								>
									<ClearIcon />
								</IconButton>
							</InputAdornment>
						),
					},
				}}
				sx={{
					display: 'block',
					maxWidth: '380px',
					margin: '0 auto',
					background: 'transparent',
					backdropFilter: 'blur(10px)',
					borderRadius: '10px',
					transition: 'all 0.3s ease', // Плавная анимация для общих изменений
					'& .MuiOutlinedInput-root': {
						transition: 'border-color 0.3s ease, box-shadow 0.3s ease', // Плавная анимация рамки

						'&.Mui-focused fieldset': {
							borderColor: '#6c3eb8', // Цвет рамки при фокусе
							boxShadow: '0 0 5px rgba(108, 62, 184, 0.5)', // Добавление подсветки при фокусе
						},
					},
				}}
			/>

			{searchValue && (
				<Paper
					elevation={3}
					sx={{
						position: 'absolute',
						top: '100%',
						left: '50%',
						transform: 'translateX(-50%)',
						mt: 1,
						zIndex: 10,
						background: 'transparent',
						backdropFilter: 'blur(11px)',
						width: '50%',
						maxHeight: 300,
						overflowY: 'auto', // Меняем на 'auto' для скроллинга
						padding: 1,
						'&::-webkit-scrollbar': {
							width: '8px', // Ширина скроллбара
						},
						'&::-webkit-scrollbar-track': {
							backgroundColor: 'rgba(255, 255, 255, 0.1)', // Цвет трека
							borderRadius: '4px', // Радиус трека
						},
						'&::-webkit-scrollbar-thumb': {
							backgroundColor: '#888', // Цвет ползунка
							borderRadius: '4px', // Радиус ползунка
						},
						'&::-webkit-scrollbar-thumb:hover': {
							backgroundColor: '#555', // Цвет ползунка при наведении
						},
					}}
					onWheel={event => {
						// Останавливаем скролл страницы, если в списке есть скроллируемый контент
						const target = event.currentTarget;
						if (
							(event.deltaY > 0 &&
								target.scrollHeight > target.scrollTop + target.clientHeight) ||
							(event.deltaY < 0 && target.scrollTop > 0)
						) {
							event.stopPropagation();
						}
					}}
				>
					{isLoading ? (
						<Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
							<CircularProgress size={24} />
						</Box>
					) : !data.length ? (
						<Typography sx={{ p: 2, textAlign: 'center' }}>
							No results
						</Typography>
					) : (
						data.map(({ title, images, id }) => (
							<MenuItem
								key={id}
								component={Link}
								to={`products/${id}`}
								onClick={() => setSearchValue('')}
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: 2,
									padding: 1,
									textWrap: 'wrap',
									color: 'white',
								}}
							>
								<Box
									sx={{
										marginRight: '5px',
										width: 60,
										height: 60,
										backgroundImage: `url(${images[0]})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
										borderRadius: '8px',
									}}
								/>
								<Typography>{title}</Typography>
							</MenuItem>
						))
					)}
				</Paper>
			)}
		</Box>
	);
};

export default SearchBar;
