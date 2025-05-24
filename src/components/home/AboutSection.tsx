
const AboutSection = () => {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Tentang AH Houseware</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Komitmen Kami</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AH Houseware hadir sejak 2015 dengan misi menyediakan peralatan rumah tangga berkualitas tinggi 
                dengan harga yang terjangkau. Kami memahami pentingnya peralatan dapur yang baik untuk menciptakan 
                masakan lezat dan momen berharga bersama keluarga.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dengan pengalaman lebih dari 8 tahun, kami telah melayani ribuan pelanggan di seluruh Indonesia 
                dan membangun jaringan reseller yang kuat di berbagai kota.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600">8+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">5000+</div>
                  <div className="text-sm text-gray-600">Pelanggan Puas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">Kota Jangkauan</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                alt="Peralatan Dapur Berkualitas"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
