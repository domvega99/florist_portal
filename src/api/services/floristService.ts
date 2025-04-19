import { Florist } from "@/shared/interfaces/florist.interface";
import { PaginatedResponse } from "@/shared/interfaces/list.interface";
import { GET } from "../restRequest";

interface FloristParams {
    page?: number;
    per_page?: number;
    sort?: string;
    order?: "asc" | "desc";
    search?: string;
    city?: string;
    province?: string;
    status?: string;
    florist_rep?: string;
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
    if (params.province) query.append("province", params.province);
    if (params.status) query.append("status", params.status);
    if (params.florist_rep) query.append("florist_rep", params.florist_rep);
    
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

