export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-pink-900">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-white mb-4 font-heading">404</h1>
                <p className="text-2xl text-gray-300 mb-8">Page not found</p>
                <a
                    href="/"
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity inline-block"
                >
                    Go Home
                </a>
            </div>
        </div>
    )
}
