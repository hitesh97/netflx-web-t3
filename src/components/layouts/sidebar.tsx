
import {
    LayoutGrid,
    Library,
    ListMusic,
    Mic2,
    Music2,
    PlayCircle,
    Radio,
    User,
  } from "lucide-react"
  
  import { cn } from "@/lib/utils"
  import { Button } from "@/components/ui/button"
  import { ScrollArea } from "@/components/ui/scroll-area"


  interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    playlists: string[]
  }
  
  export function Sidebar({ className, playlists }: SidebarProps) {
    return (
      <div className={cn("relative ", className)}>
        <div className="space-y-4 py-4">
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 md:text-sm lg:text-lg font-semibold tracking-tight">
              Discover
            </h2>
            <div className="space-y-1">
              <Button
                variant="secondary"
                size="sm"
                className="md:w-12 lg:w-full md:justify-center lg:justify-start "
              >
                <PlayCircle className="md:mr-0 lg:mr-2 h-6 w-6 shrink-0 " />
              </Button>
              <Button variant="ghost" size="sm" className="md:w-12 lg:w-full md:justify-center lg:justify-start ">
                <LayoutGrid className="mr-2 h-6 w-6 shrink-0" />
              </Button>
              <Button variant="ghost" size="sm" className="md:w-12 lg:w-full md:justify-center lg:justify-start ">
                <Radio className="mr-2 h-6 w-6 shrink-0" />
              </Button>
            </div>
          </div>
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 md:text-sm lg:text-lg font-semibold tracking-tight">
              Library
            </h2>
            <div className="space-y-1">
              <Button variant="ghost" size="sm" className="md:w-12 lg:w-full md:justify-center lg:justify-start ">
                <ListMusic className="mr-2 h-6 w-6 shrink-0" />
              </Button>
              <Button variant="ghost" size="sm" className="md:w-12 lg:w-full md:justify-center lg:justify-start ">
                <Music2 className="mr-2 h-6 w-6 shrink-0" />
              </Button>
              <Button variant="ghost" size="sm" className="md:w-12 lg:w-full md:justify-center lg:justify-start ">
                <User className="mr-2 h-6 w-6 shrink-0" />
              </Button>
              <Button variant="ghost" size="sm" className="md:w-12 lg:w-full md:justify-center lg:justify-start ">
                <Mic2 className="mr-2 h-6 w-6 shrink-0" />
              </Button>
              <Button variant="ghost" size="sm" className="md:w-12 lg:w-full md:justify-center lg:justify-start ">
                <Library className="mr-2 h-6 w-6 shrink-0" />
              </Button>
            </div>
          </div>
          <div className="py-2">
            <h2 className="relative px-6 md:text-sm lg:text-lg font-semibold tracking-tight">
              Playlists
            </h2>
            <ScrollArea className="h-[300px] px-2">
              <div className="space-y-1 p-2">
                {playlists?.map((playlist, index) => (
                  <Button
                  key={`playlist-${index}`}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start font-normal"
                  >
                    <ListMusic className="mr-2 h-6 w-6 shrink-0" />
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    )
  }
  