'use client'

import { useState } from 'react'
import { Button } from './ui/Button'
import { Textarea } from './ui/Textarea'
import { UserAvatar } from './UserAvatar'
import { Card } from './ui/Card'

interface Comment {
    id: string
    author: string
    content: string
    createdAt: string
    likes: number
}

export function CommentSection() {
    const [comments, setComments] = useState<Comment[]>([
        {
            id: '1',
            author: '0x123...abc',
            content: 'Can\'t wait for this event! Who else is going?',
            createdAt: new Date().toISOString(),
            likes: 5
        }
    ])
    const [newComment, setNewComment] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newComment.trim()) return

        const comment: Comment = {
            id: Math.random().toString(36).substr(2, 9),
            author: 'You',
            content: newComment,
            createdAt: new Date().toISOString(),
            likes: 0
        }

        setComments([comment, ...comments])
        setNewComment('')
    }

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Comments ({comments.length})</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Leave a comment..."
                    className="min-h-[100px]"
                />
                <div className="flex justify-end">
                    <Button type="submit" disabled={!newComment.trim()}>
                        Post Comment
                    </Button>
                </div>
            </form>

            <div className="space-y-4">
                {comments.map((comment) => (
                    <Card key={comment.id} className="p-4">
                        <div className="flex gap-4">
                            <UserAvatar size="sm" />
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium text-white">{comment.author}</span>
                                    <span className="text-sm text-gray-400">
                                        {new Date(comment.createdAt).toLocaleDateString()}
                                    </span>
                                </div>
                                <p className="text-gray-300">{comment.content}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
