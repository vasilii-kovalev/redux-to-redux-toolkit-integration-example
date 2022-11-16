import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { useDispatch } from "react-redux";

import { themeReducer } from "models/theme/slice";
import { userApi } from "models/user/api";

const store = configureStore({
	reducer: {
		[userApi.reducerPath]: userApi.reducer,
		/*
			Here we add the old school reducer that works with the plain action
			object, written manually, and it still works correctly.
		*/
		theme: themeReducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(userApi.middleware);
	},
});

setupListeners(store.dispatch);

type RootState = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;

const useTypedDispatch = useDispatch<Dispatch>;

export {
	store,
	useTypedDispatch as useDispatch
};
export type {
	RootState,
};
