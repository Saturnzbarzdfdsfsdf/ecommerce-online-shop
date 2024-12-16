// import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';

export const selectCurrentUser = (state: RootState) => state.user.currentUser;


