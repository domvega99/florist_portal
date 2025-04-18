import { fetchFilterCities, fetchFilterProvinces, fetchFilterRepresentatives, fetchFilterStatuses, fetchFlorists } from "@/api/services/floristService"
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
    const [pageSize, setPageSize] = useState<number>(10)
    const [sorting, setSorting] = useState<SortingState>([])
    const [searchValue, setSearchValue] = useState<string>("")
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
                })
                setData(res.data)
                setTotal(res.total ?? res.data.length)
            } catch (error) {
                console.error("Failed to fetch florists:", error)
            }
        }

        fetchData()
    }, [pageIndex, pageSize, sorting, debouncedSearchValue])

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

    const updatedFilters = floristFilters.map((filter) => {
        if (filter.id === "city") {
            return { ...filter, options: cityOptions }
        }
        if (filter.id === "province") {
            return { ...filter, options: provinceOptions }
        }
        if (filter.id === "status") {
            return { ...filter, options: statusOptions }
        }
        if (filter.id === "florist_rep") {
            return { ...filter, options: representativeOptions }
        }
        return filter
    })

    return (
        <div className="p-5">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold tracking-tight">Florist Management</h1>
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
            />
        </div>
    )
}

export default FloristList
