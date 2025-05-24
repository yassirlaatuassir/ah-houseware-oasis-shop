
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ResellerFormProps {
  handleResellerSubmit: (e: React.FormEvent) => void;
}

const ResellerForm = ({ handleResellerSubmit }: ResellerFormProps) => {
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
              <form onSubmit={handleResellerSubmit} className="space-y-6">
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
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pengalaman Bisnis
                  </label>
                  <Textarea
                    className="w-full"
                    rows={4}
                    placeholder="Ceritakan pengalaman bisnis atau penjualan Anda (opsional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motivasi Bergabung *
                  </label>
                  <Textarea
                    required
                    className="w-full"
                    rows={4}
                    placeholder="Mengapa Anda ingin menjadi reseller AH Houseware?"
                  />
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
