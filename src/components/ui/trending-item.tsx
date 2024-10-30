import Link from "next/link";

type Props = {
    label: string;
    count: number;
};

export const TrendingItem = ({ label, count }: Props) => {
    return (
        <Link href={`/search?q=${encodeURIComponent(label)}`} className="group">
            <div className="group-hover:underline font-bold">{label}</div>
            <div className="text-gray-400 text-sm">{count} posts</div>
        </Link>
    );
};

export const TrendingItemSkeleton = () => {
    return (
        <div className="animate-pulse flex flex-col gap-1">
            <div className="bg-gray-600 h-4 w-3/4" />
            <div className="bg-gray-600 h-4 w-1/4" />
        </div>
    )
}