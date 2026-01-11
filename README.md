# WebsiteJadwalSholat
HTML berfungsi sebagai struktur utama halaman dan menyediakan elemen dengan id tertentu untuk menampilkan setiap waktu sholat.
JavaScript melakukan request ke API menggunakan fetch() untuk mengambil data jadwal sholat berdasarkan link https://api.myquran.com/v2/sholat/jadwal/1634/2025/11/15.
Setelah data diterima, JavaScript mengekstrak informasi waktu sholat dari response API.
Data tersebut kemudian dimasukkan ke elemen HTML yang sesuai menggunakan document.getElementById().textContent.
CSS digunakan untuk mengatur tampilan agar data tersusun rapi dalam satu baris dan mudah dibaca.
