interface TechBadgeProps {
    name: string
    icon?: React.ReactNode
}

export function TechBadge({ name, icon }: TechBadgeProps) {
    return (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 hover:text-white hover:border-purple-500/50 transition-all">
            {icon && <span className="text-purple-400">{icon}</span>}
            <span>{name}</span>
        </div>
    )
}
