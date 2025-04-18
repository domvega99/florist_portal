import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_CONFIG } from "./apiConfig";

const createAuthConfig = (config?: AxiosRequestConfig): AxiosRequestConfig => {
    const token = API_CONFIG.getToken();
    return {
        ...config,
        headers: {
            ...config?.headers,
            Authorization: token ? `Bearer ${token}` : "",
            "Content-Type": "application/json",
        },
    };
};

export const GET = <T = any>(
    path: string,
    config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
        return axios.get<T>(
            `${API_CONFIG.BASE_URL}${path}`,
            createAuthConfig(config)
        );
};

export const POST = <T = any>(
    path: string,
    data: any,
    config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
        return axios.post<T>(
            `${API_CONFIG.BASE_URL}${path}`,
            data,
            createAuthConfig(config)
        );
};

export const PUT = <T = any>(
    path: string,
    data: any,
    config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
        return axios.put<T>(
            `${API_CONFIG.BASE_URL}${path}`,
            data,
            createAuthConfig(config)
        );
};

export const DELETE = <T = any>(
    path: string,
    config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
        return axios.delete<T>(
            `${API_CONFIG.BASE_URL}${path}`,
            createAuthConfig(config)
        );
};
