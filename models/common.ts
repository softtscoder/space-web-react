import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface Planet {
  name: string;
  content: string;
  distance: string;
  travel_time: string;
}
