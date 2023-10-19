import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function TaskifySideBar() {
  return (
    <div className="h-screen w-18 bg-black">
      <div className="m-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default TaskifySideBar
