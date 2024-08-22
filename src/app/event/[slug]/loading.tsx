import Skeleton from "@/components/skeleton";

export default function Loading() {
  return (
    <div className="flex animate-pulse flex-col items-center gap-y-4 pt-28">
      <Skeleton className="max-w-[550px]" />
      <Skeleton className="max-w-[400px]" />
      <Skeleton className="max-w-[430px]" />
    </div>
  );
}
