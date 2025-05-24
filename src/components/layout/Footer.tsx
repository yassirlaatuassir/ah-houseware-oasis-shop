
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-sky-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AH</span>
              </div>
              <span className="text-xl font-bold">AH Houseware</span>
            </div>
            <p className="text-gray-300 mb-4">
              Peralatan rumah tangga berkualitas premium dengan harga terjangkau untuk rumah impian Anda.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer" />
              <Instagram className="w-6 h-6 text-pink-400 hover:text-pink-300 cursor-pointer" />
              <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kategori Produk</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400">Peralatan Masak</a></li>
              <li><a href="#" className="hover:text-blue-400">Elektronik Dapur</a></li>
              <li><a href="#" className="hover:text-blue-400">Peralatan Makan</a></li>
              <li><a href="#" className="hover:text-blue-400">Storage & Organizer</a></li>
              <li><a href="#" className="hover:text-blue-400">Cleaning Tools</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Informasi</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#tentang" className="hover:text-blue-400">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-blue-400">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-blue-400">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-blue-400">Panduan Belanja</a></li>
              <li><a href="#reseller" className="hover:text-blue-400">Program Reseller</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span>info@ahhouseware.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>Jl. Raya Dapur No. 123, Jakarta Selatan</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Jam Operasional</h4>
              <p className="text-sm text-gray-300">Senin - Sabtu: 08:00 - 17:00</p>
              <p className="text-sm text-gray-300">Minggu: 09:00 - 15:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AH Houseware. All rights reserved. | Designed with ❤️ for Indonesian Families
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
