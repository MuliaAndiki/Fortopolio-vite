import { SpreedProps } from "@/app/types/ui";

export default function Spreed({
  orientation = "horizontal",
  className = "",
}: SpreedProps) {
  return (
    <div
      className={`
        bg-[var(--shapeV1-child)] 
        ${orientation === "horizontal" ? "w-full h-px" : "h-full w-px"} 
        ${className}
      `}
    ></div>
  );
}
