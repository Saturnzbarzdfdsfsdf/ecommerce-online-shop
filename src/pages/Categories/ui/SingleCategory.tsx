import { FC } from 'react';
import { Poster } from '../../../widget/Poster';
import { Category } from '../../Category/index';

const SingleCategory: FC = () => {
	return (
		<>
			<Poster />
			<Category />
		</>
	);
};

export default SingleCategory;
