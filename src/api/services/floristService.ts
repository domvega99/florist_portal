import { Florist } from "@/shared/interfaces/florist.interface";
import { GET } from "../restRequest";
import { PaginatedResponse } from "@/shared/interfaces/list.interface";

interface FloristParams {
    page?: number;
    per_page?: number;
    sort?: string;
    order?: "asc" | "desc";
    search?: string;
    city?: string;
}

export const fetchFlorists = (
    params: FloristParams
): Promise<PaginatedResponse<Florist>> => {
    const query = new URLSearchParams();

    if (params.page) query.append("page", String(params.page));
    if (params.per_page) query.append("per_page", String(params.per_page));
    if (params.sort) query.append("sort", params.sort);
    if (params.order) query.append("order", params.order);
    if (params.search) query.append("search", params.search);
    if (params.city) query.append("city", params.city);
    
    return GET<PaginatedResponse<Florist>>(`/florists?${query.toString()}`).then(
        (res) => {
            return res.data;
        }
    );
};

export const fetchFilterCities = (): Promise<any> => {
    return GET<any>("/florists-cities").then((res) => res.data);
};

export const fetchFilterProvinces = (): Promise<any> => {
    return GET<any>("/florists-provinces").then((res) => res.data);
};

export const fetchFilterStatuses = (): Promise<any> => {
    return GET<any>("/florists-statuses").then((res) => res.data);
};

export const fetchFilterRepresentatives = (): Promise<any> => {
    return GET<any>("/florists-representatives").then((res) => res.data);
};

