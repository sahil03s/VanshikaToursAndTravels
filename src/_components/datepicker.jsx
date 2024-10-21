"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/shadcn/lib/utils"
import { Button } from "@/shadcn/components/ui/button"
import { Calendar } from "@/shadcn/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn/components/ui/popover"

export default function DatePicker({details, setDetails, calendarIconRight, height, preferenceFlag}) {
  const [open, setOpen] = React.useState(false);

  const handleInput = (val) => {
    setDetails({
        ...details,
        traveldate: val 
    })
    setOpen(false);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full relative justify-start text-left font-normal focus:border-black hover:border-black",
            !details.traveldate && "text-muted-foreground",
            preferenceFlag ? 'h-8' : 'h-12 border-black',
          )}
        >
          {details.traveldate ? format(details.traveldate, "PPP") : <span>Start date of Journey</span>}
          <CalendarIcon className={`mr-2 h-4 w-4 absolute right-2 `} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={details.traveldate}
          onSelect={handleInput}
          initialFocus
          captionLayout='dropdown'
        />
      </PopoverContent>
    </Popover>
  )
}
