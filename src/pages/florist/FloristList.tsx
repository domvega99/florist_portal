import {
    fetchFilterCities,
    fetchFilterProvinces,
    fetchFilterRepresentatives,
    fetchFilterStatuses,
    fetchFlorists,
} from "@/api/services/floristService"
import { DataTable } from "@/components/table/data-table"
import { Button } from "@/components/ui/button"
import { useDebounce } from "@/hooks/useDebounce"
import { Florist } from "@/shared/interfaces/florist.interface"
import { SortingState } from "@tanstack/react-table"
import { useEffect, useState } from "react"
import { floristColumn } from "./utils/column"
import { floristFilters } from "./utils/filter"

const FloristList = () => {
    const [data, setData] = useState<Florist[]>([])
    const [total, setTotal] = useState<number>(0)
    const [pageIndex, setPageIndex] = useState<number>(0)
    const [pageSize, setPageSize] = useState<number>(20)
    const [sorting, setSorting] = useState<SortingState>([])
    const [searchValue, setSearchValue] = useState<string>("")
    const [filterValues, setFilterValues] = useState<{
        city?: string
        province?: string
        status?: string
        florist_rep?: string
    }>({})
    const debouncedSearchValue = useDebounce(searchValue, 300)

    const [cityOptions, setCityOptions] = useState<{ label: string; value: string }[]>([])
    const [provinceOptions, setProvinceOptions] = useState<{ label: string; value: string }[]>([])
    const [statusOptions, setStatusOptions] = useState<{ label: string; value: string }[]>([])
    const [representativeOptions, setRepresentativeOptions] = useState<{ label: string; value: string }[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const sortField = sorting[0]?.id
            const order = sorting[0]?.desc ? "desc" : "asc"

            try {
                const res = await fetchFlorists({
                    page: pageIndex, 
                    per_page: pageSize,
                    sort: sortField,
                    order: sorting.length > 0 ? order : undefined,
                    search: debouncedSearchValue,
                    city: filterValues.city,
                    province: filterValues.province,
                    status: filterValues.status,
                    florist_rep: filterValues.florist_rep
                })
                setData(res.data)
                setTotal(res.total ?? res.data.length)
            } catch (error) {
                console.error("Failed to fetch florists:", error)
            }
        }

        fetchData()
    }, [pageIndex, pageSize, sorting, debouncedSearchValue, filterValues]) 

    useEffect(() => {
        const fetchFilters = async () => {
            try {
                const [cities, provinces, statuses, representatives] = await Promise.all([
                    fetchFilterCities(),
                    fetchFilterProvinces(),
                    fetchFilterStatuses(),
                    fetchFilterRepresentatives(),
                ])

                const mappedCities = cities.map((item: any) => ({
                    label: item.city,
                    value: item.city,
                }))

                const mappedProvinces = provinces.map((item: any) => ({
                    label: item.province,
                    value: item.province,
                }))

                const mappedStatuses = statuses.map((item: any) => ({
                    label: item.status,
                    value: item.status,
                }))

                const mappedRepresentatives = representatives.map((item: any) => ({
                    label: item.florist_rep,
                    value: item.florist_rep,
                }))

                setCityOptions(mappedCities)
                setProvinceOptions(mappedProvinces)
                setStatusOptions(mappedStatuses)
                setRepresentativeOptions(mappedRepresentatives)
            } catch (error) {
                console.error("Failed to fetch filter data:", error)
            }
        }

        fetchFilters()
    }, [])

    const handleFilterChange = (columnId: string, value: string | undefined) => {
        setFilterValues((prev) => ({
            ...prev,
            [columnId]: value,
        }))
        setPageIndex(0)
    }

    const handleResetFilters = () => {
        setFilterValues({})
        setPageIndex(0)
    }

    const updatedFilters = floristFilters.map((filter) => {
        if (filter.id === "city") {
            return {
                ...filter,
                options: cityOptions,
                value: filterValues.city,
            }
        }
        if (filter.id === "province") {
            return {
                ...filter,
                options: provinceOptions,
                value: filterValues.province,
            }
        }
        if (filter.id === "status") {
            return {
                ...filter,
                options: statusOptions,
                value: filterValues.status,
            }
        }
        if (filter.id === "florist_rep") {
            return {
                ...filter,
                options: representativeOptions,
                value: filterValues.florist_rep,
            }
        }
        return filter
    })

    return (
        <div className="p-5">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold tracking-tight">Florists</h1>
                <Button>Create Florist</Button>
            </div>

            <DataTable
                columns={floristColumn}
                data={data}
                total={total}
                pageIndex={pageIndex}
                pageSize={pageSize}
                onPageChange={setPageIndex}
                onPageSizeChange={setPageSize}
                showCheckbox={false}
                sorting={sorting}
                onSortingChange={setSorting}
                filterableColumns={updatedFilters}
                searchValue={searchValue}
                onSearchChange={setSearchValue}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters} 
            />
        </div>
    )
}

export default FloristList
