'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EventCard } from './EventCard'
import { Icons } from './ui/icons'
import { Button } from './ui/Button'

interface Event {
    id: string
    title: string
    description: string
    date: string
    location: string
    price: string
    category: string
}

interface EventCarouselProps {
    events: Event[]
}

export function EventCarousel({ events }: EventCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    }

    const swipe = (newDirection: number) => {
        setDirection(newDirection)
        let newIndex = currentIndex + newDirection
        if (newIndex < 0) newIndex = events.length - 1
        if (newIndex >= events.length) newIndex = 0
        setCurrentIndex(newIndex)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            swipe(1)
        }, 5000)
        return () => clearInterval(timer)
    }, [currentIndex])

    if (!events.length) return null

    return (
        <div className="relative w-full max-w-4xl mx-auto h-[500px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-between z-10 px-4 pointer-events-none">
                <Button
                    variant="glass"
                    size="sm"
                    onClick={() => swipe(-1)}
                    className="pointer-events-auto rounded-full p-2"
                >
                    <Icons.chevronLeft className="h-6 w-6" />
                </Button>
                <Button
                    variant="glass"
                    size="sm"
                    onClick={() => swipe(1)}
                    className="pointer-events-auto rounded-full p-2"
                >
                    <Icons.chevronRight className="h-6 w-6" />
                </Button>
            </div>

            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute w-full max-w-md"
                >
                    <EventCard {...events[currentIndex]} />
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {events.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1)
                            setCurrentIndex(index)
                        }}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/30'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
