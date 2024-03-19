import { Spinner, Blockquote, Carousel } from "flowbite-react";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex-col justify-center items-center min-h-screen gap-4 bg-[#E5C8C0]">
      <Spinner
        className="text-[#BE887C] fill-[#813F3D]"
        aria-label="Extra large spinner example"
        size="xl"
      />
      <Blockquote className="text-3xl text-[#813F3D] text-center">
        Loading Adventures
      </Blockquote>
    </div>
  );
}
