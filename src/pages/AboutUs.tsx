import React from 'react';
import { Users, Award, Clock, MapPin, Phone, Mail } from 'lucide-react';

const AboutPage: React.FC = () => {
  const galleryImages = [
    {
      url: 'https://malia31.pythonanywhere.com/media/images/Front.jpeg',
      title: 'Interior Toko'
    },
    {
      url: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
      title: 'Smartphones Terbaru'
    },
    {
      url: 'https://malia31.pythonanywhere.com/media/images/customer.jpeg',
      title: 'Customer Service'
    },
    {
      url: 'https://malia31.pythonanywhere.com/media/images/display.jpeg',
      title: 'Product Display'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Store Image */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="https://malia31.pythonanywhere.com/media/images/RASYA.jpeg" 
          alt="Rasya Store Front" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5000+</div>
              <div className="text-gray-600">Pelanggan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Product</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Brand</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">12jam</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>

        {/* Our Story Section */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Tentang Kami</h2>
            <p className="text-gray-600 mb-8">
              Didirikan pada tahun 2010, Rasya dimulai dengan misi sederhana: 
              "Membuat teknologi premium agar dapat diakses oleh semua orang". 
              Apa yang dimulai sebagai toko hp sederhana telah berkembang menjadi salah satu 
              toko hp dan elektronik paling tepercaya di Temanggung.
            </p>
            <p className="text-gray-600">
              Kami bangga menawarkan bukan hanya produk, tetapi juga solusi teknologi lengkap bagi pelanggan kami. 
              Dari ponsel pintar terbaru hingga aksesori penting, kami memastikan setiap pembelian didukung oleh 
              komitmen kami terhadap kualitas dan layanan.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Galeri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-medium">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Why Choose Us */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Kenapa memilih kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Tim kami siap membantu Anda untuk menemukan perangkat yang tepat untuk kebutuhan Anda.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">
                Kami hanya menjual produk asli dari distributor dan produsen resmi.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Service</h3>
              <p className="text-gray-600">
                Respon cepat dan layanan efisien untuk mendapatkan apa yang Anda butuhkan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Kunjungi Toko Kami</h2>
            <div className="flex flex-col items-center space-y-4 mb-8">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-primary-600 mr-2" />
                <p className="text-gray-600">Jl. KH Subkhi, Besaran, Parakan Kauman, Kec. Parakan, Kabupaten Temanggung, Jawa Tengah</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-primary-600 mr-2" />
                <p className="text-gray-600">+62 856-4099-4441</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary-600 mr-2" />
                <p className="text-gray-600">rasyaacc@gmail.com</p>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://maps.google.com/maps?q=Rasya+Accesories%2C+Parakan%2C+Temanggung%2C+Jawa+Tengah&output=embed"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;