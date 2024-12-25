export const searchBarStyles = {
	root: {
		position: 'relative',
		width: '100%',
	},
	input: {
		display: 'block',
		maxWidth: '380px',
		margin: '0 auto',
		textColor: 'while',
		background: 'transparent',
		backdropFilter: 'blur(10px)',
		borderRadius: '10px',
		transition: 'all 0.3s ease',
		'& .MuiOutlinedInput-root': {
			fontSize: '18px', // Размер текста input
			color: '#ffffff', // Цвет текста input
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
		background: 'transparent',
		backdropFilter: 'blur(15px)',
		width: '50%',
		maxHeight: 300,
		overflowY: 'auto',
		padding: 1,
		'&::-webkit-scrollbar': {
			width: '8px', // Ширина полосы прокрутки
		},
		'&::-webkit-scrollbar-track': {
			backgroundColor: 'rgba(255, 255, 255, 0.1)', // Цвет фона полосы прокрутки
			borderRadius: '4px', // Скругление углов полосы прокрутки
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: '#888', // Цвет ползунка полосы прокрутки
			borderRadius: '4px', // Скругление углов ползунка
		},
		'&::-webkit-scrollbar-thumb:hover': {
			backgroundColor: '#555', // Цвет ползунка при наведении
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
	progressBar: {
		display: 'flex',
		justifyContent: 'center',
		p: 2,
	},
	noResult: {
		p: 2,
		textAlign: 'center',
	},
};


export const imageBoxStyles = (imageUrl: string) => ({
	marginRight: '5px',
	width: 60,
	height: 60,
	backgroundImage: `url(${imageUrl})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	borderRadius: '8px',
});
