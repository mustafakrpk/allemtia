import apiClient from './axios';

export interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  blogImg: string;
  date: string;
}

export const fetchBlogs = async (): Promise<Blog[]> => {
  const response = await apiClient.get<{ success: boolean; data: Blog[] }>('/home/blogs');
  return response.data.data;
};
