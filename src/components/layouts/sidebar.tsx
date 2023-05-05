import { BarChart, Edit, List } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: string[]
}

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn("w-16 xs:hidden sm:hidden md:block py-4", className)}>
      <div className="flex-row items-center justify-center pb-4">
        <h2 className="mb-2 px-2 text-center text-xs font-semibold tracking-tight">
          Actions
        </h2>
        <div className="flex flex-col items-center justify-center space-y-1">
          <Button variant="secondary" size="sm" className="w-12">
            <List className="h-6 w-6 shrink-0 " />
          </Button>
          <Button variant="ghost" size="sm" className="w-12">
            <Edit className="mr-2 h-6 w-6 shrink-0" />
          </Button>
          <Button variant="ghost" size="sm" className="w-12">
            <BarChart className="mr-2 h-6 w-6 shrink-0" />
          </Button>
        </div>
      </div>
      <div className="flex-row items-center justify-center pb-4">
        <h2 className="mb-2 px-2 text-center text-xs font-semibold tracking-tight">
          Actions
        </h2>
        <div className="flex flex-col items-center justify-center space-y-1">
          <Button variant="secondary" size="sm" className="w-12">
            <List className="h-6 w-6 shrink-0 " />
          </Button>
          <Button variant="ghost" size="sm" className="w-12">
            <Edit className="mr-2 h-6 w-6 shrink-0" />
          </Button>
          <Button variant="ghost" size="sm" className="w-12">
            <BarChart className="mr-2 h-6 w-6 shrink-0" />
          </Button>
        </div>
      </div>
    </div>
  )
}
