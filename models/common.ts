import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface Product {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string,
}