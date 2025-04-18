import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    type ColumnDef,
    type ColumnFiltersState,
    FilterFn,
    type SortingState,
    type VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { X } from "lucide-react"
import * as React from "react"
import { DataTableFacetedFilter } from "../../components/table/data-table-faceted-filter"
import { DataTableViewOptions } from "../../components/table/data-table-view-options"
import { DataTablePagination } from "./data-table-pagination"

export interface FacetedFilterOption {
    label: string
    value: string
    icon?: React.ComponentType<{ className?: string }>
}

export interface FilterableColumn {
    id: string
    title: string
    options: FacetedFilterOption[]
}

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    showCheckbox?: boolean
    searchableColumn?: string
    filterableColumns?: FilterableColumn[]
}

const includesSome: FilterFn<unknown> = (row, columnId, filterValue: string[]) => {
    const rowValue = row.getValue<string>(columnId)
    return filterValue.includes(rowValue)
}

export function DataTable<TData, TValue>({
    columns,
    data,
    showCheckbox = true,
    searchableColumn = "name",
    filterableColumns = [],
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const filteredColumns = React.useMemo(() => {
        if (!showCheckbox) {
            return columns.filter((column) => column.id !== "select")
        }
        return columns
    }, [columns, showCheckbox])

    const table = useReactTable({
        data,
        columns: filteredColumns,
        filterFns: {
            includesSome,
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
        enableRowSelection: showCheckbox,
    })

    const isFiltered = table.getState().columnFilters.length > 0
    const searchColumn = table.getColumn(searchableColumn ?? "")

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex flex-1 items-center space-x-2">
                    {searchColumn && (
                        <Input
                            placeholder={`Filter by ${searchableColumn}...`}
                            value={(searchColumn.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                                searchColumn.setFilterValue(event.target.value)
                            }
                            className="h-8 w-[250px]"
                        />
                    )}

                    {filterableColumns.map((col) => {
                        const column = table.getColumn(col.id)
                        return (
                            column && (
                                <DataTableFacetedFilter
                                    key={col.id}
                                    column={column}
                                    title={col.title}
                                    options={col.options}
                                />
                            )
                        )
                    })}

                    {isFiltered && (
                        <Button
                            variant="ghost"
                            onClick={() => table.resetColumnFilters()}
                            className="h-8 px-2 lg:px-3"
                        >
                            Reset
                            <X className="ml-2 h-4 w-4" />
                        </Button>
                    )}
                </div>
                <DataTableViewOptions table={table} />
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <DataTablePagination table={table} />
        </div>
    )
}
