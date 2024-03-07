import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white">
      <Loader className="h-[70px] w-[70px] animate-spin object-contain text-black" />
    </div>
  );
}
