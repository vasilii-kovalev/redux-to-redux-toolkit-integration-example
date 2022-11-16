import { FC } from "react";
import { useSelector } from "react-redux";

import { toggleThemeAction } from "models/theme/actions";
import {
  RootState,
  useDispatch
} from "redux/store";

const ThemeToggler: FC = () => {
	const theme = useSelector((state: RootState) => {
		return state.theme;
	});

	const dispatch = useDispatch();

	const toggleTheme = (): void => {
		dispatch(toggleThemeAction());
	};

	return (
		<>
			Current theme: {theme}

			<button
				type="button"
				onClick={toggleTheme}
			>
				Toggle theme
			</button>
		</>
	);
};

export {
	ThemeToggler,
};
