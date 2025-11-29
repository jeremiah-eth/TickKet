'use client'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-pink-900">
            <div className="text-center max-w-md px-4">
                <h1 className="text-6xl font-bold text-white mb-4 font-heading">Oops!</h1>
                <p className="text-xl text-gray-300 mb-2">Something went wrong</p>
                <p className="text-gray-400 mb-8 text-sm">{error.message}</p>
                <button
                    onClick={reset}
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                    Try again
                </button>
            </div>
        </div>
    )
}
