
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  content?: string;
  slug?: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'Tips Memilih Panci yang Tepat untuk Dapur Anda',
    excerpt: 'Panduan lengkap memilih panci berkualitas untuk berbagai jenis masakan yang akan membantu Anda memasak lebih efisien dan lezat.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=300&fit=crop',
    date: '15 Januari 2024',
    author: 'Tim AH Houseware',
    slug: 'tips-memilih-panci-tepat'
  },
  {
    id: 2,
    title: 'Cara Merawat Peralatan Dapur Stainless Steel',
    excerpt: 'Kiat-kiat praktis menjaga peralatan dapur tetap awet dan berkilau untuk jangka waktu yang lebih lama dengan metode pembersihan yang tepat.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=300&fit=crop',
    date: '12 Januari 2024',
    author: 'Tim AH Houseware',
    slug: 'cara-merawat-peralatan-stainless'
  },
  {
    id: 3,
    title: '10 Peralatan Wajib untuk Dapur Minimalis',
    excerpt: 'Daftar peralatan essential yang harus ada di dapur rumah modern untuk memastikan Anda bisa memasak dengan efisien meskipun dengan ruang terbatas.',
    image: 'https://images.unsplash.com/photo-1556909925-f509c5e51637?w=600&h=300&fit=crop',
    date: '8 Januari 2024',
    author: 'Tim AH Houseware',
    slug: 'peralatan-wajib-dapur-minimalis'
  }
];
