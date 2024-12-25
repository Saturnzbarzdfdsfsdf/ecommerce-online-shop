import React from 'react';
import { Link } from 'react-router-dom';

import { IProduct } from '../../api/product/index';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, InputAdornment } from '@mui/material';

import { searchBarStyles } from './SearchBar.styles';

interface ISearchBarProps {
	searchValue: string;
	setSearchValue: (value: string) => void;
	isLoading: boolean;
	data: IProduct[];
}

const SearchBar: React.FC<ISearchBarProps> = ({
	searchValue,
	setSearchValue,
	isLoading,
	data,
}) => {
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	return (
		<Box sx={searchBarStyles.root} component='form'>
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
				sx={searchBarStyles.input}
			/>

			{searchValue && (
				<Paper
					elevation={3}
					sx={searchBarStyles.inputContent}
					onWheel={event => {
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
								sx={searchBarStyles.inputText}
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
