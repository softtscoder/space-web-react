import { LayoutProps } from "models";
import { BaseLayout } from "./Base";

export function EmptyLayout({ children }: LayoutProps) {
  return <BaseLayout>{children}</BaseLayout>;
}
