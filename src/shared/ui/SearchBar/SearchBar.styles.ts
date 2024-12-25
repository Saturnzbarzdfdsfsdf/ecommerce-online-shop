export const searchBarStyles = {
	root: {
		position: 'relative',
		width: '100%',
	},
	input: {
		display: 'block',
		maxWidth: '380px',
		margin: '0 auto',
		background: 'transparent',
		backdropFilter: 'blur(10px)',
		borderRadius: '10px',
		transition: 'all 0.3s ease',
		'& .MuiOutlinedInput-root': {
			transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
			'&.Mui-focused fieldset': {
				borderColor: '#6c3eb8',
				boxShadow: '0 0 5px rgba(108, 62, 184, 0.5)',
			},
		},
	},
	inputContent: {
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
		overflowY: 'auto',
		padding: 1,
		'&::-webkit-scrollbar': {
			width: '8px',
		},
		'&::-webkit-scrollbar-track': {
			backgroundColor: 'rgba(255, 255, 255, 0.1)',
			borderRadius: '4px',
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: '#888',
			borderRadius: '4px',
		},
		'&::-webkit-scrollbar-thumb:hover': {
			backgroundColor: '#555',
		},
	},
	inputText: {
		display: 'flex',
		alignItems: 'center',
		gap: 2,
		padding: 1,
		textWrap: 'wrap',
		color: 'white',
	},
	
};
