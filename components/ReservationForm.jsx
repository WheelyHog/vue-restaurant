import {format} from "date-fns"
import {Calendar as CalendarIcon} from "lucide-react"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import Link from 'next/link'
import {Input} from './ui/input'
import {Label} from "@/components/ui/label";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {useState} from "react";

function ReservationForm(props) {
    const [date, setDate] = useState()
    return (
        <form className="flex flex-col gap-y-10">
            <div className="grid gap-[30px]">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    <div>
                        <Label htmlFor="firstname">first name</Label>
                        <Input id="firstname" type="text"/>
                    </div>
                    <div>
                        <Label htmlFor="lastname">last name</Label>
                        <Input id="lastname" type="text"/>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {/*calendar*/}
                    <div>
                        <Label>date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"input"}
                                    className={cn(
                                        "w-full justify-start text-left font-normal")}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4"/>
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    {/*select*/}
                    <div>
                        <Label>person</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="How many people?"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <Button className="uppercase w-full xl:w-auto xl:self-end">Book a table</Button>
        </form>
    );
}

export default ReservationForm;