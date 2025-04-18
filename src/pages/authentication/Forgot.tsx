import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MoveLeft } from 'lucide-react'

const Forgot = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative p-6">
            <div className="mb-8 md:mb-0 flex items-center justify-between">
                <div className="text-left flex items-center">
                    <p className="text-xl">🌸</p>
                    <h1 className=" text-md font-semibold">FLORIST PORTAL</h1>
                </div>
                <a
                    href="/login"
                    className="text-sm underline-offset-4 hover:underline flex items-center gap-2"
                >
                    <MoveLeft />
                    Go back
                </a>
            </div>

            <div className="mt-10 md:mt-0 md:absolute md:top-1/2 md:left-0 md:w-full md:px-6 md:-translate-y-1/2">
                <div className="w-full max-w-md mx-auto">
                    <h1 className=' text-4xl font-medium'>Forgot Password</h1>
                    <p className='text-md font-normal'>Enter your username and email.</p>
                    <form className='mt-10'>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" type="text" required />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="email">Email</Label>
                                </div>
                                <Input id="email" type="email" required />
                            </div>
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="hidden md:block md:w-1/2 bg-gray-100">
            <div className="w-full h-full flex items-center justify-center">
                <p className="text-2xl text-gray-400">Big Picture</p>
            </div>
        </div>
    </div>
  )
}

export default Forgot