import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { type LucideIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export function NavMain({
    items,
}: {
    items: {
        title: string
        url: string
        icon?: LucideIcon
    }[]
}) {
    const location = useLocation()

    return (
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarGroupLabel>Menu</SidebarGroupLabel>
                <SidebarMenu>
                    {items.map((item) => {
                        const isActive = location.pathname === item.url
                        return (
                            <SidebarMenuItem key={item.title}>
                                <Link to={item.url} className="w-full">
                                    <SidebarMenuButton
                                        tooltip={item.title}
                                        className={cn(
                                            isActive && "bg-primary text-white hover:bg-primary hover:text-white"
                                        )}
                                    >
                                        {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        )
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
