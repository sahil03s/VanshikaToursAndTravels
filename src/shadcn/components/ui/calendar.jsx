"use client";
import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { DayPicker } from "react-day-picker"

import { cn } from "@/shadcn/lib/utils"
import { buttonVariants } from "@/shadcn/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {

  const today = new Date();
  const startMonth = new Date(today.getFullYear(), 0);
  const endMonth = new Date(today.getFullYear()+5, 11);

  return (
    (<DayPicker
      showOutsideDays={showOutsideDays}
      defaultMonth={today}
      startMonth={startMonth}
      endMonth={endMonth}
      disabled={{ before: today }}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col pt-2 sm:space-x-4 space-y-0",
        month: "space-y-4 flex flex-col items-center",
        month_caption: "flex justify-center pt-1 relative items-center max-w-fit mr-2",
        caption_label: "text-sm font-medium hidden",
        chevron:"h-4 w-auto",
        dropdowns:"text-sm",
        months_dropdown:"mr-2",
        years_dropdown:"",
        nav: "flex justify-center items-center ml-4",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "absolute top-5 left-4 sm:left-8 h-7 w-7 p-0 opacity-50 hover:opacity-100"
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "absolute top-5 right-6 h-7 w-7 p-0 opacity-50 hover:opacity-100",
        ),
        month_grid: "w-full space-y-1",
        weekdays: "flex",
        weekday:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        week: "flex w-full mt-2",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "relative h-8 w-8 p-0 d font-normal aria-selected:opacity-100 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        range_start: "day-range-start",
        range_end: "day-range-end",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today: "bg-accent text-accent-foreground",
        outside :
          "day-outside invisible text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        disabled: "text-muted-foreground opacity-50",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRightIcon className="h-4 w-4" />,
      }}
      {...props} 
      />)
  );
}
Calendar.displayName = "Calendar"

export { Calendar }
