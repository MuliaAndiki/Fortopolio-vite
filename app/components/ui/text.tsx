import { TextProps } from "@/app/types/ui";
export default function Text({ children, className }: TextProps) {
  return <span className={className}>{children}</span>;
}
