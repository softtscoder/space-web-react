import { LayoutProps } from "models";
import { Navbar } from "components/common";
import { BaseLayout } from "./Base";

export function MainLayout({ children }: LayoutProps) {
  return (
    <BaseLayout>
      <Navbar />
      {children}
    </BaseLayout>
  );
}
