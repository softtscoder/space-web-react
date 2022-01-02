import { LayoutProps } from "models";
// import { Box } from "@chakra-ui/react";

export function BaseLayout({ children }: LayoutProps) {
  return (
    <div
      style={{
        position: "relative", // for Navbar in MainLayout
      }}
    >
      {children}
    </div>
  );
}
