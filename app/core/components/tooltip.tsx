import { TooltipProps } from "@/app/types/ui";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import Text from "@/app/components/ui/text";

export default function UseTooltip({
  children,
  content,
  ...props
}: TooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <Text className="font-semibold">{content}</Text>
      </TooltipContent>
    </Tooltip>
  );
}
