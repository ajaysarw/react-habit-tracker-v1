import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "danger"; // Example of a custom prop for styling variants

type ButtonProps = { 
  variant?: Variant; // Optional prop to specify the button variant
} & ComponentProps<"button">; // This includes all standard button props (like onClick, disabled, etc.)

export default function Button({variant = "primary", className, ...props}: ButtonProps) {
  return (

    <button 
      className=
      { twMerge(`
          ${getVariantStyles(variant)}, 
          transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed, 
          ${className}`
        )
      }
      {...props}
      >     

    </button>
  );
}


function getVariantStyles(variant: Variant) { 
  switch(variant) {
    case "primary":
      return "bg-violet-600 hover:bg-violet-800 text-white";
    case "secondary":
      return "bg-zinc-600 hover:bg-zinc-800 text-white text-zinc-400";
    case "danger":
      return "hover:bg-red-800 text-red-500 hover:text-red-200";
    default:
      throw new Error(`Unknown variant: ${variant satisfies never}`);
  }  
}