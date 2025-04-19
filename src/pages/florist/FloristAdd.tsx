import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { ArrowLeft, Save } from "lucide-react"
import { Link } from "react-router-dom"
import FloristDetails from "./FloristDetails"
import FloristInfo from "./FloristInfo"
import FloristProducts from "./FloristProducts"

const FloristAdd = () => {
    return (
        <div className="p-5">
            <div className="flex justify-between items-center mb-2">
                <Link to="/florists">
                    <Button>
                        <ArrowLeft /> 
                        Back
                    </Button>
                </Link>
                <Button><Save /> Save</Button>
            </div>
            <Tabs defaultValue="detail">
                <TabsList className="grid grid-cols-3 w-full md:w-[600px]">
                    <TabsTrigger value="detail">Basic</TabsTrigger>
                    <TabsTrigger value="product">Products</TabsTrigger>
                    <TabsTrigger value="info">Marketing Info</TabsTrigger>
                </TabsList>
                <TabsContent value="detail">
                    <FloristDetails />
                </TabsContent>
                <TabsContent value="product">
                    <FloristProducts />
                </TabsContent>
                <TabsContent value="info">
                    <FloristInfo />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default FloristAdd