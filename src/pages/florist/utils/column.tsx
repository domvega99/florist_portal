import { API_CONFIG } from "@/api/apiConfig"
import { DataTableColumnHeader } from "@/components/table/data-table-column-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Florist } from "@/shared/interfaces/florist.interface"
import type { ColumnDef } from "@tanstack/react-table"
import { UserRowActions } from "./row-actions"

export const floristColumn: ColumnDef<Florist>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "photo",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Logo" />,
        enableSorting: false,
        cell: ({ row }) => {
            const photo = row.getValue("photo"); 
            return (
                <Avatar>
                    <AvatarImage src={API_CONFIG.IMAGE_BASE_URL + `/` + photo} alt="@shadcn" />
                    <AvatarFallback>🌸</AvatarFallback>
                </Avatar>
            );
        },
    },
    {
        accessorKey: "floristcode",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Code" />,
    },
    {
        accessorKey: "florist_name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Florist" />,
    },
    {
        accessorKey: "contact_number",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Contact" />,
    },
    {
        accessorKey: "city",
        header: ({ column }) => <DataTableColumnHeader column={column} title="City" />,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "province",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Province" />,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "florist_rep",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Florist Rep" />,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "status",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
        cell: ({ row }) => {
            const status = row.getValue("status") as string

            return (
                <Badge variant={status === "active" ? "default" : status === "pending" ? "outline" : "secondary"}>
                    {status}
                </Badge>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "actions",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Actions" />,
        cell: ({ row }) => <UserRowActions row={row} />,
    },
]
