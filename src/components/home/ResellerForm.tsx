
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

interface FormData {
  name: string;
  whatsapp: string;
  email: string;
  city: string;
  province: string;
}

const ResellerForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    whatsapp: '',
    email: '',
    city: '',
    province: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the message
    const message = `*PENDAFTARAN RESELLER BARU*\n\n` +
      `*Nama Lengkap:* ${formData.name}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*Email:* ${formData.email}\n` +
      `*Kota/Kabupaten:* ${formData.city}\n` +
      `*Provinsi:* ${formData.province}`;

    // Create WhatsApp URL
    const waURL = `https://wa.me/6281292851919?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(waURL, '_blank');

    // Reset form
    setFormData({
      name: '',
      whatsapp: '',
      email: '',
      city: '',
      province: '',
    });

    toast({
      title: "Form Terkirim!",
      description: "Anda akan diarahkan ke WhatsApp untuk mengirim data pendaftaran.",
    });
  };
  return (
    <section id="reseller" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Daftar Reseller</h2>
            <p className="text-xl text-gray-600">
              Bergabunglah dengan jaringan reseller kami dan dapatkan keuntungan menarik!
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="bg-blue-600 text-white text-center">
              <CardTitle className="text-2xl">Form Pendaftaran Reseller</CardTitle>
              <p className="text-blue-100">Keuntungan hingga 30% untuk setiap penjualan</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <Input
                      type="text"
                      required
                      className="w-full"
                      placeholder="Masukkan nama lengkap"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor WhatsApp *
                    </label>
                    <Input
                      type="tel"
                      required
                      className="w-full"
                      placeholder="08xxxxxxxxxx"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    required
                    className="w-full"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kota/Kabupaten *
                    </label>
                    <Input
                      type="text"
                      required
                      className="w-full"
                      placeholder="Masukkan kota"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Provinsi *
                    </label>
                    <Input
                      type="text"
                      required
                      className="w-full"
                      placeholder="Masukkan provinsi"
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                >
                  Daftar Sekarang
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResellerForm;
