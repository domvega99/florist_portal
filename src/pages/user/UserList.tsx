import { DataTable } from '@/components/table/data-table'
import { Button } from '@/components/ui/button'
import { UserColumns } from './utils/column'
import { UserFilters } from './utils/filter'
import { Plus } from 'lucide-react'
import { users } from './utils/data'

const UserList = () => {
    return (
        <div className="p-5">
            <div className='flex items-center justify-between mb-4'>
                <h1 className="text-2xl font-bold tracking-tight mb-4">Users Management</h1>
                <Button> 
                    <Plus /> 
                    Add New User
                </Button>
            </div>
            <DataTable columns={UserColumns} data={users} showCheckbox={true} filterableColumns={UserFilters} />
        </div>
    )
}

export default UserList