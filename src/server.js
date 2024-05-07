// Import Hapi package
const Hapi = require('@hapi/hapi');

// Inisialisasi server dengan port dan host
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  // Tambahkan contoh rute GET sebagai uji coba
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => ({ message: 'Halo, dunia! Selamat datang di RESTful API Hapi!' })

      
  });

  // Mulai server
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

// Jalankan fungsi inisialisasi
init();
