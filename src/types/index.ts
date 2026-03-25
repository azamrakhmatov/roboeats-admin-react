import type { UseMutationResult, UseQueryResult } from "@tanstack/react-query";

export type MutationResult<T> = UseMutationResult<void, Error, T, void>;

export type AxiosResponse<T = unknown>= {
    success: boolean;
    data: T;
    message: string | null;
};

export type QueryResult <T> =  UseQueryResult<T>;




