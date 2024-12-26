import apiClient from './axios';

// Ürün modelinin TypeScript arayüzü
export interface Product {
    prd_id: number;
    prd_name: string;
    prd_price: number;
}

// Ürünlerle ilgili API çağrıları
export const fetchProducts = async (): Promise<Product[]> => {
    const response = await apiClient.get<{ success: boolean; data: Product[] }>('/home');
    return response.data.data;
};


//Başka API endpoint'leriniz varsa benzer bir yapı
//  kullanarak farklı fonksiyonlar tanımlayabilirsiniz.