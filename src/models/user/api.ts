import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User } from "./types";

const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com"
	}),
	endpoints: (builder) => {
		return {
			getUser: builder.query<User, void>({
				query: () => {
					return "/users/1";
				},
				// Just for adding a delay.
				transformResponse: async (response: User) => {
					return new Promise(resolve => {
						setTimeout(
							() => {
								resolve(response);
							},
							3_000
						);
					});
				},
			}),
		};
	},
});

const { useGetUserQuery } = userApi;

export {
	userApi,
	useGetUserQuery,
};
