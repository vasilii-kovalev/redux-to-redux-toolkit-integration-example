import { FC } from "react";

import { useGetUserQuery } from "models/user/api";

const User: FC = () => {
	const {
		data: user,
		isFetching,
		error
	} = useGetUserQuery();

	if (isFetching) {
		return (
			<>
				Loading user...
			</>
		);
	}

	if (error !== undefined) {
		return (
			<>
				{error}
			</>
		);
	}

	return (
		<>
			User name is {user?.name}
		</>
	);
};

export {
	User,
};
