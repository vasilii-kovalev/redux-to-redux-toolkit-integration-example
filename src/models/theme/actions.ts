import { TypedAnyAction } from "redux/types";

const TOGGLE_THEME_ACTION_TYPE = "TOGGLE_THEME";

type ToggleThemeAction = TypedAnyAction<typeof TOGGLE_THEME_ACTION_TYPE>;

const toggleThemeAction = (): ToggleThemeAction => {
	return {
		type: TOGGLE_THEME_ACTION_TYPE
	};
};

type PossibleActions = ToggleThemeAction;

export {
	toggleThemeAction,
	TOGGLE_THEME_ACTION_TYPE,
};
export type {
	PossibleActions,
};
