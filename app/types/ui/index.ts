import { JSX } from "react";

export interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export interface SpreedProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export interface TextProps {
  className?: string;
  children: string;
}
