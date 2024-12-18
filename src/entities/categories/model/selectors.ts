import { RootState } from '../../../app/store';

const selectCategories = (state: RootState) => state.categories.list;

export { selectCategories };
