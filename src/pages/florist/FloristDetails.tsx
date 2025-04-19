import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const FloristDetails = () => {
  return (
    <div className="space-y-5 mt-5">
      <div className="space-y-1">
        <Label htmlFor="florist_name">Florist Name</Label>
        <Input id="florist_name" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="contact">Contact</Label>
        <Input id="contact" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="address">Address</Label>
        <Input id="address" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="city">City</Label>
        <Input id="city" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="province">Province</Label>
        <Input id="province" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="postcode">Postcode</Label>
        <Input id="postcode" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="delivery_fee">Delivery Fee</Label>
        <Input id="delivery_fee" type="number" step="0.01" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="extras">Extras</Label>
        <Input id="extras" />
      </div>
    </div>
  )
}

export default FloristDetails