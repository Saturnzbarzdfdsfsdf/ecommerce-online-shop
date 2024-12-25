import React from 'react';

import { Link } from 'react-router-dom';
import { useWheelScroll } from '../../lib/Hook/index';

import { IProduct } from '../../api/product/index';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, InputAdornment } from '@mui/material';

import { searchBarStyles, imageBoxStyles } from './SearchBar.styles';

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
 const onWheelScroll = useWheelScroll();

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
					onWheel={onWheelScroll}
				>
					{isLoading ? (
						<Box sx={searchBarStyles.progressBar}>
							<CircularProgress size={24} />
						</Box>
					) : !data.length ? (
						<Typography sx={searchBarStyles.noResult}>No results</Typography>
					) : (
						data.map(({ title, images, id }) => (
							<MenuItem
								key={id}
								component={Link}
								to={`products/${id}`}
								onClick={() => setSearchValue('')}
								sx={searchBarStyles.inputText}
							>
								<Box sx={imageBoxStyles(images[0])} />
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
