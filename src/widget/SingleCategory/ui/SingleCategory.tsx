import { FC } from 'react';
import { Poster } from '../../Poster/index';
import { Category } from '../../../features/categories';

const SingleCategory: FC = () => {
	return (
		<>
			<Poster />
			<Category />
		</>
	);
};

export default SingleCategory;
