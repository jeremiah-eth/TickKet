'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/ui/icons'
import { Modal } from '@/components/ui/Modal'
import 'react-day-picker/dist/style.css'

interface DatePickerProps {
    date?: Date
    setDate: (date: Date | undefined) => void
}

export function DatePicker({ date, setDate }: DatePickerProps) {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleSelect = (selected: Date | undefined) => {
        setDate(selected)
        setIsOpen(false)
    }

    return (
        <>
            <Button
                variant="glass"
                onClick={() => setIsOpen(true)}
                className={cn(
                    'w-full justify-start text-left font-normal',
                    !date && 'text-gray-400'
                )}
            >
                <Icons.calendar className="mr-2 h-4 w-4" />
                {date ? format(date, 'PPP') : <span>Pick a date</span>}
            </Button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Select Date">
                <div className="flex justify-center bg-white rounded-lg p-4 text-black">
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={handleSelect}
                        initialFocus
                        modifiersClassNames={{
                            selected: 'bg-purple-600 text-white hover:bg-purple-700',
                            today: 'text-purple-600 font-bold'
                        }}
                    />
                </div>
            </Modal>
        </>
    )
}
