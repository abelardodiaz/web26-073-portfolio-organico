import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button-variants";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
} & VariantProps<typeof buttonVariants>;

export function ButtonLink({ href, children, variant, size }: ButtonLinkProps) {
  return (
    <Button variant={variant} size={size} nativeButton={false} render={<Link href={href} />}>
      {children}
    </Button>
  );
}
