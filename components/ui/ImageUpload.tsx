'use client'

import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Icons } from './icons'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface ImageUploadProps {
    value?: string | File
    onChange: (file: File) => void
    className?: string
}

export function ImageUpload({ value, onChange, className }: ImageUploadProps) {
    const [preview, setPreview] = useState<string | null>(null)

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0]
        if (file) {
            onChange(file)
            setPreview(URL.createObjectURL(file))
        }
    }, [onChange])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.png', '.webp', '.gif']
        },
        maxFiles: 1
    })

    return (
        <div
            {...getRootProps()}
            className={cn(
                'border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors',
                isDragActive ? 'border-purple-500 bg-purple-500/10' : 'border-white/20 hover:border-white/40',
                className
            )}
        >
            <input {...getInputProps()} />

            {preview || (typeof value === 'string' && value) ? (
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                        src={preview || (value as string)}
                        alt="Upload preview"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <p className="text-white font-medium">Click or drag to change</p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center gap-2 text-gray-400">
                    <Icons.upload className="h-10 w-10 mb-2" />
                    <p className="font-medium text-white">
                        {isDragActive ? 'Drop image here' : 'Click or drag image to upload'}
                    </p>
                    <p className="text-sm">SVG, PNG, JPG or GIF (max. 5MB)</p>
                </div>
            )}
        </div>
    )
}
