import { Reducer } from "@reduxjs/toolkit";

import { PossibleActions, TOGGLE_THEME_ACTION_TYPE } from "./actions";
import { Theme } from "./constants";

const themeReducer: Reducer<Theme, PossibleActions> = (
	state = Theme.LIGHT,
	action
) => {
	switch (action.type) {
		case TOGGLE_THEME_ACTION_TYPE: {
			return state === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
		}
		default: {
			return state;
		}
	}
};

export {
	themeReducer,
};
