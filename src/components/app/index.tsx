import { FC } from "react";

import { ThemeToggler } from "components/theme-toggler";
import { User } from "components/user";

import styles from "./app.module.css";

const App: FC = () => {
	return (
		<main className={styles.app}>
			<h2>User</h2>
			<User/>
			<br/>
			<h2>Theme Toggler</h2>
			<ThemeToggler/>
		</main>
	);
}

export default App;
