import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NewPasswordDialog() {
  return (
    <Dialog>
      <DialogTrigger className="w-full text-left text-sm p-2 rounded-sm hover:bg-accent">
        Update Password
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Update Password</DialogTitle>
          <DialogDescription>
            Try to create a complex password, hackers are getting smarter and
            you, dumber.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="old-password" className="text-right">
              Old Password
            </Label>
            <Input id="old-password" type="password" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="new-password" className="text-right">
              New Password
            </Label>
            <Input id="new-password" type="password" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="confirm-new-password" className="text-right">
              Confirm New Password
            </Label>
            <Input id="confirm-new-password" type="password" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Update Password</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
