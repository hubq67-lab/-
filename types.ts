export interface Product {
  id: string;
  name: string;
  description: string;
  iconName: 'tool' | 'home' | 'shield' | 'zap';
}

export interface StoreInfo {
  name: string;
  address: string;
  phone: string;
  phoneFormatted: string;
  blogUrl: string;
  kakaoMapUrl: string;
  naverMapUrl: string;
}

export interface Feature {
  title: string;
  description: string;
}