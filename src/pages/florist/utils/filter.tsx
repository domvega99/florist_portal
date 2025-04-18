export type FloristFilter = {
    id: string
    title: string
    options: FloristOption[]
}

type FloristOption = {
    label: string
    value: string
}

export const floristFilters: FloristFilter[] = [
    {
        id: "city",
        title: "City",
        options: [],
    },

    {
        id: "province",
        title: "Province",
        options: [],
    },
    {
        id: "status",
        title: "Status",
        options: [],
    },
    {
        id: "florist_rep",
        title: "Florist Rep",
        options: [],
    },
]
