import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

const FloristInfo = () => {
  return (
    <div className="space-y-5 mt-5">
      <div className="space-y-1">
        <Label htmlFor="call_outcome">Call Outcome</Label>
        <Input id="call_outcome" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="social_media_link">Social Media Link</Label>
        <Input id="social_media_link" type="url" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="product_type">Product Type</Label>
        <Input id="product_type" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="product_price">Product Price</Label>
        <Input id="product_price" type="number" step="0.01" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="delivery_fee">Delivery Fee</Label>
        <Input id="delivery_fee" type="number" step="0.01" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="sell_extras">Do they sell extras (e.g., balloons, chocolates)?</Label>
        <Input id="sell_extras" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="flowers_popularity">Are flowers becoming more popular?</Label>
        <Input id="flowers_popularity" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="preferred_communication">Preferred Communication</Label>
        <Input id="preferred_communication" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="has_website">Has Website?</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select</SelectLabel>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label htmlFor="province">Province</Label>
        <Input id="province" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="member_of_networks">Member of Other Networks</Label>
        <Input id="member_of_networks" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="flower_supplier">Flower Supplier</Label>
        <Input id="flower_supplier" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="interested_free_website">Interested in Free Website?</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select</SelectLabel>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label htmlFor="florist_rep">Florist Rep</Label>
        <Input id="florist_rep" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="additional_info">Additional Info</Label>
        <textarea id="additional_info" className="w-full border rounded p-2" />
      </div>
    </div>
  )
}

export default FloristInfo