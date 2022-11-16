import { Action } from "redux";

interface TypedAnyAction<Type = any> extends
	Action<Type>,
	Record<string, any> {}

export type {
	TypedAnyAction,
};
