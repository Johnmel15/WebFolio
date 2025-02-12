import { Document } from 'mongoose';

export interface TechStackDocument extends Document {
  _id: string;
  name: string;
  category?: string | null;
  icon: string;
  icon_color: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TechStackResponse {
  _id: string;
  name: string;
  category?: string | null;
  icon: string;
  icon_color: string;
}

export interface PaginationRow {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}