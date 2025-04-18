import {
    ClipboardListIcon,
    HelpCircleIcon,
    LayoutDashboardIcon,
    MessageCircle,
    Package,
    SearchIcon,
    SettingsIcon,
    Store,
    User
} from "lucide-react"
import type * as React from "react"
import { Link } from "react-router-dom"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import { NavMain } from "./nav.main"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"

const data = {
    user: {
        name: "Dominic Vega",
        email: "dominic@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/",
            icon: LayoutDashboardIcon,
        },
        {
            title: "Florists",
            url: "/florists",
            icon: Store,
        },
        {
            title: "Responses",
            url: "#",
            icon: MessageCircle,
        },
    ],
    navSecondary: [
        {
            title: "Settings",
            url: "#",
            icon: SettingsIcon,
        },
        {
            title: "Get Help",
            url: "#",
            icon: HelpCircleIcon,
        },
        {
            title: "Search",
            url: "#",
            icon: SearchIcon,
        },
    ],
    managements: [
        {
            title: "Users",
            url: "/users",
            icon: User,
        },
        {
            title: "Roles & Permissions",
            url: "#",
            icon: Package,
        },
        {
            title: "Reports",
            url: "#",
            icon: ClipboardListIcon,
        },
    ],
    documents: [
        {
            name: "Users",
            url: "/users",
            icon: User,
        },
        {
            name: "Roles & Permissions",
            url: "#",
            icon: Package,
        },
        {
            name: "Reports",
            url: "#",
            icon: ClipboardListIcon,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
                            <Link to="/">
                                <span className="text-base font-semibold">🌸 Florist Portal</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavMain items={data.managements} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
