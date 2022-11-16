import { Action } from "@reduxjs/toolkit";

interface TypedAnyAction<Type = any> extends
	Action<Type>,
	Record<string, any> {}

export type {
	TypedAnyAction,
};
