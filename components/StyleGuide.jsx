"use client"

import * as React from "react"
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


const StyleGuide = () => {
    const [date, setDate] = React.useState()
    return <>
        {/*typography*/}
        <div className="flex flex-col gap-y-4 p-24">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem consequatur, cumque dicta dolor
                ducimus et explicabo fugit hic minima neque nesciunt, officia placeat quaerat quasi quisquam suscipit
                tempora tempore vitae, voluptatibus. Adipisci ducimus ea, eaque ex, fugit illum in, itaque minima
                perferendis quasi quibusdam tempore. Ipsa laboriosam maxime voluptate?
            </p>
            <div className="bg-black p-24 flex flex-col gap-y-4">
                <Link href="/">Link</Link>
                {/*buttons*/}
                <Button variant="default">Button 1</Button>
                <Button variant="orange">Button 2</Button>
                <Button variant="input">Button 3</Button>
                <Button variant="orange" size="sm">Button 2</Button>
                {/*label & input */}
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <Input type="firstname" id="firstname"/>
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <Input type="lastname" id="lastname"/>
                </div>
                {/*calendar*/}
                <div>
                    <Label>Date</Label>
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
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>

            </div>

        </div>
    </>
}

export default StyleGuide