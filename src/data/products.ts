// Default products data file
// This file can be updated with exported data from the admin interface

export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  description: string;
  rating: number;
  sold: number;
}

// Default products that will be used when no localStorage data exists
const defaultProducts: Product[] = [
  {
    id: 1,
    name: 'Set Panci Stainless Steel 5 Pcs',
    price: 'Rp 459.000',
    originalPrice: 'Rp 650.000',
    description: 'Set panci premium dengan bahan stainless steel berkualitas tinggi. Terdiri dari 5 ukuran berbeda untuk berbagai kebutuhan memasak.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
    rating: 4.8,
    sold: 150
  },
  {
    id: 2,
    name: 'Blender Multifungsi 2L',
    price: 'Rp 325.000',
    originalPrice: 'Rp 450.000',
    description: 'Blender serbaguna dengan kapasitas 2L, cocok untuk smoothie, jus, dan menghaluskan bumbu. Dilengkapi dengan 3 kecepatan.',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop',
    rating: 4.7,
    sold: 89
  },
  {
    id: 3,
    name: 'Rice Cooker Digital 1.8L',
    price: 'Rp 285.000',
    originalPrice: 'Rp 380.000',
    description: 'Rice cooker digital dengan teknologi fuzzy logic. Menjaga nasi tetap hangat dan pulen hingga 24 jam.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    rating: 4.9,
    sold: 203
  },
  {
    id: 4,
    name: 'Set Pisau Dapur Premium 6 Pcs',
    price: 'Rp 189.000',
    originalPrice: 'Rp 250.000',
    description: 'Set pisau dapur premium dengan bahan stainless steel Jerman. Terdiri dari pisau chef, santoku, utility, paring, dan gunting.',
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=400&fit=crop',
    rating: 4.6,
    sold: 76
  },
  {
    id: 5,
    name: 'Wajan Anti Lengket 28cm',
    price: 'Rp 145.000',
    originalPrice: 'Rp 200.000',
    description: 'Wajan anti lengket dengan lapisan ceramic coating. Aman untuk kesehatan dan mudah dibersihkan.',
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400&h=400&fit=crop',
    rating: 4.5,
    sold: 112
  },
  {
    id: 6,
    name: 'Mixer Stand 5L Professional',
    price: 'Rp 1.250.000',
    originalPrice: 'Rp 1.500.000',
    description: 'Mixer stand profesional dengan mangkuk stainless steel 5L. Ideal untuk membuat roti, kue, dan berbagai adonan.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    rating: 4.9,
    sold: 34
  }
];

export default defaultProducts;
