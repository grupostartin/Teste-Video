import { ReactNode } from 'react';

export interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface TestimonialItem {
  name: string;
  comment: string;
  rating: number;
  image: string;
}