// sumber : https://data.jakarta.go.id/read-resource/json/data-persentase-penduduk-miskin-indeks-kedalaman-dan-indeks-keparahan-kemiskinan-menurut-provinsi/e7e054f9-f515-4238-aa49-a7f2c5d6fd2f
let data_kemiskinan = [
  {
    tahun: 2013,
    provinsi: "Aceh",
    klasifikasi: "P0",
    persentase: 17.72,
  },
  {
    tahun: 2013,
    provinsi: "Aceh",
    klasifikasi: "P1",
    persentase: 3.2,
  },
  {
    tahun: 2013,
    provinsi: "Aceh",
    klasifikasi: "P2",
    persentase: 0.83,
  },
  {
    tahun: 2013,
    provinsi: "Sumatera Utara",
    klasifikasi: "P0",
    persentase: 10.39,
  },
  {
    tahun: 2013,
    provinsi: "Sumatera Utara",
    klasifikasi: "P1",
    persentase: 1.72,
  },
  {
    tahun: 2013,
    provinsi: "Sumatera Utara",
    klasifikasi: "P2",
    persentase: 0.46,
  },
  {
    tahun: 2013,
    provinsi: "Sumatera Barat",
    klasifikasi: "P0",
    persentase: 7.56,
  },
  {
    tahun: 2013,
    provinsi: "Sumatera Barat",
    klasifikasi: "P1",
    persentase: 1.27,
  },
  {
    tahun: 2013,
    provinsi: "Sumatera Barat",
    klasifikasi: "P2",
    persentase: 0.3,
  },
  {
    tahun: 2013,
    provinsi: "Riau",
    klasifikasi: "P0",
    persentase: 8.42,
  },
  {
    tahun: 2013,
    provinsi: "Riau",
    klasifikasi: "P1",
    persentase: 1.18,
  },
  {
    tahun: 2013,
    provinsi: "Riau",
    klasifikasi: "P2",
    persentase: 0.24,
  },
  {
    tahun: 2013,
    provinsi: "Jambi",
    klasifikasi: "P0",
    persentase: 8.41,
  },
  {
    tahun: 2013,
    provinsi: "Jambi",
    klasifikasi: "P1",
    persentase: 1.12,
  },
  {
    tahun: 2013,
    provinsi: "Jambi",
    klasifikasi: "P2",
    persentase: 0.26,
  },
  {
    tahun: 2013,
    provinsi: "Sumatera Selatan",
    klasifikasi: "P0",
    persentase: 14.06,
  },
  {
    tahun: 2013,
    provinsi: "Sumatera Selatan",
    klasifikasi: "P1",
    persentase: 2.49,
  },
  {
    tahun: 2013,
    provinsi: "Sumatera Selatan",
    klasifikasi: "P2",
    persentase: 0.73,
  },
  {
    tahun: 2013,
    provinsi: "Bengkulu",
    klasifikasi: "P0",
    persentase: 17.75,
  },
  {
    tahun: 2013,
    provinsi: "Bengkulu",
    klasifikasi: "P1",
    persentase: 3.24,
  },
  {
    tahun: 2013,
    provinsi: "Bengkulu",
    klasifikasi: "P2",
    persentase: 0.89,
  },
  {
    tahun: 2013,
    provinsi: "Lampung",
    klasifikasi: "P0",
    persentase: 14.39,
  },
  {
    tahun: 2013,
    provinsi: "Lampung",
    klasifikasi: "P1",
    persentase: 2.23,
  },
  {
    tahun: 2013,
    provinsi: "Lampung",
    klasifikasi: "P2",
    persentase: 0.59,
  },
  {
    tahun: 2013,
    provinsi: "Kepulauan Bangka Belitung",
    klasifikasi: "P0",
    persentase: 5.25,
  },
  {
    tahun: 2013,
    provinsi: "Kepulauan Bangka Belitung",
    klasifikasi: "P1",
    persentase: 0.62,
  },
  {
    tahun: 2013,
    provinsi: "Kepulauan Bangka Belitung",
    klasifikasi: "P2",
    persentase: 0.12,
  },
  {
    tahun: 2013,
    provinsi: "Kepulauan Riau",
    klasifikasi: "P0",
    persentase: 6.35,
  },
  {
    tahun: 2013,
    provinsi: "Kepulauan Riau",
    klasifikasi: "P1",
    persentase: 1.02,
  },
  {
    tahun: 2013,
    provinsi: "Kepulauan Riau",
    klasifikasi: "P2",
    persentase: 0.26,
  },
  {
    tahun: 2013,
    provinsi: "DKI Jakarta",
    klasifikasi: "P0",
    persentase: 3.72,
  },
  {
    tahun: 2013,
    provinsi: "DKI Jakarta",
    klasifikasi: "P1",
    persentase: 0.39,
  },
  {
    tahun: 2013,
    provinsi: "DKI Jakarta",
    klasifikasi: "P2",
    persentase: 0.07,
  },
  {
    tahun: 2013,
    provinsi: "Jawa Barat",
    klasifikasi: "P0",
    persentase: 9.61,
  },
  {
    tahun: 2013,
    provinsi: "Jawa Barat",
    klasifikasi: "P1",
    persentase: 1.65,
  },
  {
    tahun: 2013,
    provinsi: "Jawa Barat",
    klasifikasi: "P2",
    persentase: 0.44,
  },
  {
    tahun: 2013,
    provinsi: "Jawa Tengah ",
    klasifikasi: "P0",
    persentase: 14.44,
  },
  {
    tahun: 2013,
    provinsi: "Jawa Tengah ",
    klasifikasi: "P1",
    persentase: 2.37,
  },
  {
    tahun: 2013,
    provinsi: "Jawa Tengah ",
    klasifikasi: "P2",
    persentase: 0.59,
  },
  {
    tahun: 2013,
    provinsi: "DAERAH ISTIMEWA YOGYAKARTA",
    klasifikasi: "P0",
    persentase: 15.03,
  },
  {
    tahun: 2013,
    provinsi: "DAERAH ISTIMEWA YOGYAKARTA",
    klasifikasi: "P1",
    persentase: 2.13,
  },
  {
    tahun: 2013,
    provinsi: "DAERAH ISTIMEWA YOGYAKARTA",
    klasifikasi: "P2",
    persentase: 0.46,
  },
  {
    tahun: 2013,
    provinsi: "Jawa Timur",
    klasifikasi: "P0",
    persentase: 12.73,
  },
  {
    tahun: 2013,
    provinsi: "Jawa Timur",
    klasifikasi: "P1",
    persentase: 2.07,
  },
  {
    tahun: 2013,
    provinsi: "Jawa Timur",
    klasifikasi: "P2",
    persentase: 0.5,
  },
  {
    tahun: 2013,
    provinsi: "Banten",
    klasifikasi: "P0",
    persentase: 5.89,
  },
  {
    tahun: 2013,
    provinsi: "Banten",
    klasifikasi: "P1",
    persentase: 1.02,
  },
  {
    tahun: 2013,
    provinsi: "Banten",
    klasifikasi: "P2",
    persentase: 0.29,
  },
  {
    tahun: 2013,
    provinsi: "Bali",
    klasifikasi: "P0",
    persentase: 4.49,
  },
  {
    tahun: 2013,
    provinsi: "Bali",
    klasifikasi: "P1",
    persentase: 0.7,
  },
  {
    tahun: 2013,
    provinsi: "Bali",
    klasifikasi: "P2",
    persentase: 0.16,
  },
  {
    tahun: 2013,
    provinsi: "Nusa Tenggara Barat",
    klasifikasi: "P0",
    persentase: 17.25,
  },
  {
    tahun: 2013,
    provinsi: "Nusa Tenggara Barat",
    klasifikasi: "P1",
    persentase: 2.72,
  },
  {
    tahun: 2013,
    provinsi: "Nusa Tenggara Barat",
    klasifikasi: "P2",
    persentase: 0.66,
  },
  {
    tahun: 2013,
    provinsi: "Nusa Tenggara Timur",
    klasifikasi: "P0",
    persentase: 20.24,
  },
  {
    tahun: 2013,
    provinsi: "Nusa Tenggara Timur",
    klasifikasi: "P1",
    persentase: 3.04,
  },
  {
    tahun: 2013,
    provinsi: "Nusa Tenggara Timur",
    klasifikasi: "P2",
    persentase: 0.69,
  },
  {
    tahun: 2013,
    provinsi: "Kalimantan Barat",
    klasifikasi: "P0",
    persentase: 8.74,
  },
  {
    tahun: 2013,
    provinsi: "Kalimantan Barat",
    klasifikasi: "P1",
    persentase: 1.3,
  },
  {
    tahun: 2013,
    provinsi: "Kalimantan Barat",
    klasifikasi: "P2",
    persentase: 0.32,
  },
  {
    tahun: 2013,
    provinsi: "Kalimantan Tengah",
    klasifikasi: "P0",
    persentase: 6.23,
  },
  {
    tahun: 2013,
    provinsi: "Kalimantan Tengah",
    klasifikasi: "P1",
    persentase: 1.02,
  },
  {
    tahun: 2013,
    provinsi: "Kalimantan Tengah",
    klasifikasi: "P2",
    persentase: 0.3,
  },
  {
    tahun: 2013,
    provinsi: "Kalimantan Selatan",
    klasifikasi: "P0",
    persentase: 4.76,
  },
  {
    tahun: 2013,
    provinsi: "Kalimantan Selatan",
    klasifikasi: "P1",
    persentase: 0.61,
  },
  {
    tahun: 2013,
    provinsi: "Kalimantan Selatan",
    klasifikasi: "P2",
    persentase: 0.11,
  },
  {
    tahun: 2013,
    provinsi: "Kalimantan Timur",
    klasifikasi: "P0",
    persentase: 6.38,
  },
  {
    tahun: 2013,
    provinsi: "Kalimantan Timur",
    klasifikasi: "P1",
    persentase: 1.25,
  },
  {
    tahun: 2013,
    provinsi: "Kalimantan Timur",
    klasifikasi: "P2",
    persentase: 0.39,
  },
  {
    tahun: 2013,
    provinsi: "Sulawesi Utara",
    klasifikasi: "P0",
    persentase: 8.5,
  },
  {
    tahun: 2013,
    provinsi: "Sulawesi Utara",
    klasifikasi: "P1",
    persentase: 1.16,
  },
  {
    tahun: 2013,
    provinsi: "Sulawesi Utara",
    klasifikasi: "P2",
    persentase: 0.28,
  },
  {
    tahun: 2013,
    provinsi: "Sulawesi Tengah",
    klasifikasi: "P0",
    persentase: 14.32,
  },
  {
    tahun: 2013,
    provinsi: "Sulawesi Tengah",
    klasifikasi: "P1",
    persentase: 2.28,
  },
  {
    tahun: 2013,
    provinsi: "Sulawesi Tengah",
    klasifikasi: "P2",
    persentase: 0.53,
  },
  {
    tahun: 2013,
    provinsi: "Sulawesi Selatan",
    klasifikasi: "P0",
    persentase: 10.32,
  },
  {
    tahun: 2013,
    provinsi: "Sulawesi Selatan",
    klasifikasi: "P1",
    persentase: 1.65,
  },
  {
    tahun: 2013,
    provinsi: "Sulawesi Selatan",
    klasifikasi: "P2",
    persentase: 0.4,
  },
  {
    tahun: 2013,
    provinsi: "Sulawesi Tenggara",
    klasifikasi: "P0",
    persentase: 13.73,
  },
  {
    tahun: 2013,
    provinsi: "Sulawesi Tenggara",
    klasifikasi: "P1",
    persentase: 1.83,
  },
  {
    tahun: 2013,
    provinsi: "Sulawesi Tenggara",
    klasifikasi: "P2",
    persentase: 0.43,
  },
  {
    tahun: 2013,
    provinsi: "Gorontalo",
    klasifikasi: "P0",
    persentase: 18,
  },
  {
    tahun: 2013,
    provinsi: "Gorontalo",
    klasifikasi: "P1",
    persentase: 3.22,
  },
  {
    tahun: 2013,
    provinsi: "Gorontalo",
    klasifikasi: "P2",
    persentase: 0.85,
  },
  {
    tahun: 2013,
    provinsi: "Sulawesi Barat",
    klasifikasi: "P0",
    persentase: 12.23,
  },
  {
    tahun: 2013,
    provinsi: "Sulawesi Barat",
    klasifikasi: "P1",
    persentase: 1.3,
  },
  {
    tahun: 2013,
    provinsi: "Sulawesi Barat",
    klasifikasi: "P2",
    persentase: 0.27,
  },
  {
    tahun: 2013,
    provinsi: "Maluku",
    klasifikasi: "P0",
    persentase: 19.27,
  },
  {
    tahun: 2013,
    provinsi: "Maluku",
    klasifikasi: "P1",
    persentase: 3.52,
  },
  {
    tahun: 2013,
    provinsi: "Maluku",
    klasifikasi: "P2",
    persentase: 0.93,
  },
  {
    tahun: 2013,
    provinsi: "Maluku Utara",
    klasifikasi: "P0",
    persentase: 7.64,
  },
  {
    tahun: 2013,
    provinsi: "Maluku Utara",
    klasifikasi: "P1",
    persentase: 0.89,
  },
  {
    tahun: 2013,
    provinsi: "Maluku Utara",
    klasifikasi: "P2",
    persentase: 0.16,
  },
  {
    tahun: 2013,
    provinsi: "Papua Barat",
    klasifikasi: "P0",
    persentase: 27.14,
  },
  {
    tahun: 2013,
    provinsi: "Papua Barat",
    klasifikasi: "P1",
    persentase: 5.89,
  },
  {
    tahun: 2013,
    provinsi: "Papua Barat",
    klasifikasi: "P2",
    persentase: 1.84,
  },
  {
    tahun: 2013,
    provinsi: "Papua",
    klasifikasi: "P0",
    persentase: 31.52,
  },
  {
    tahun: 2013,
    provinsi: "Papua",
    klasifikasi: "P1",
    persentase: 6.56,
  },
  {
    tahun: 2013,
    provinsi: "Papua",
    klasifikasi: "P2",
    persentase: 2.01,
  },
  {
    tahun: 2014,
    provinsi: "Aceh",
    klasifikasi: "P0",
    persentase: 16.98,
  },
  {
    tahun: 2014,
    provinsi: "Aceh",
    klasifikasi: "P1",
    persentase: 3.14,
  },
  {
    tahun: 2014,
    provinsi: "Aceh",
    klasifikasi: "P2",
    persentase: 0.86,
  },
  {
    tahun: 2014,
    provinsi: "Sumatera Utara",
    klasifikasi: "P0",
    persentase: 9.85,
  },
  {
    tahun: 2014,
    provinsi: "Sumatera Utara",
    klasifikasi: "P1",
    persentase: 1.71,
  },
  {
    tahun: 2014,
    provinsi: "Sumatera Utara",
    klasifikasi: "P2",
    persentase: 0.45,
  },
  {
    tahun: 2014,
    provinsi: "Sumatera Barat",
    klasifikasi: "P0",
    persentase: 6.89,
  },
  {
    tahun: 2014,
    provinsi: "Sumatera Barat",
    klasifikasi: "P1",
    persentase: 0.75,
  },
  {
    tahun: 2014,
    provinsi: "Sumatera Barat",
    klasifikasi: "P2",
    persentase: 0.15,
  },
  {
    tahun: 2014,
    provinsi: "Riau",
    klasifikasi: "P0",
    persentase: 7.99,
  },
  {
    tahun: 2014,
    provinsi: "Riau",
    klasifikasi: "P1",
    persentase: 1.2,
  },
  {
    tahun: 2014,
    provinsi: "Riau",
    klasifikasi: "P2",
    persentase: 0.29,
  },
  {
    tahun: 2014,
    provinsi: "Jambi",
    klasifikasi: "P0",
    persentase: 8.39,
  },
  {
    tahun: 2014,
    provinsi: "Jambi",
    klasifikasi: "P1",
    persentase: 1.12,
  },
  {
    tahun: 2014,
    provinsi: "Jambi",
    klasifikasi: "P2",
    persentase: 0.23,
  },
  {
    tahun: 2014,
    provinsi: "Sumatera Selatan",
    klasifikasi: "P0",
    persentase: 13.62,
  },
  {
    tahun: 2014,
    provinsi: "Sumatera Selatan",
    klasifikasi: "P1",
    persentase: 2.41,
  },
  {
    tahun: 2014,
    provinsi: "Sumatera Selatan",
    klasifikasi: "P2",
    persentase: 0.62,
  },
  {
    tahun: 2014,
    provinsi: "Bengkulu",
    klasifikasi: "P0",
    persentase: 17.09,
  },
  {
    tahun: 2014,
    provinsi: "Bengkulu",
    klasifikasi: "P1",
    persentase: 2.85,
  },
  {
    tahun: 2014,
    provinsi: "Bengkulu",
    klasifikasi: "P2",
    persentase: 0.75,
  },
  {
    tahun: 2014,
    provinsi: "Lampung",
    klasifikasi: "P0",
    persentase: 14.21,
  },
  {
    tahun: 2014,
    provinsi: "Lampung",
    klasifikasi: "P1",
    persentase: 2.3,
  },
  {
    tahun: 2014,
    provinsi: "Lampung",
    klasifikasi: "P2",
    persentase: 0.56,
  },
  {
    tahun: 2014,
    provinsi: "Kepulauan Bangka Belitung",
    klasifikasi: "P0",
    persentase: 4.97,
  },
  {
    tahun: 2014,
    provinsi: "Kepulauan Bangka Belitung",
    klasifikasi: "P1",
    persentase: 0.6,
  },
  {
    tahun: 2014,
    provinsi: "Kepulauan Bangka Belitung",
    klasifikasi: "P2",
    persentase: 0.12,
  },
  {
    tahun: 2014,
    provinsi: "Kepulauan Riau",
    klasifikasi: "P0",
    persentase: 6.4,
  },
  {
    tahun: 2014,
    provinsi: "Kepulauan Riau",
    klasifikasi: "P1",
    persentase: 0.74,
  },
  {
    tahun: 2014,
    provinsi: "Kepulauan Riau",
    klasifikasi: "P2",
    persentase: 0.18,
  },
  {
    tahun: 2014,
    provinsi: "DKI Jakarta",
    klasifikasi: "P0",
    persentase: 4.09,
  },
  {
    tahun: 2014,
    provinsi: "DKI Jakarta",
    klasifikasi: "P1",
    persentase: 0.6,
  },
  {
    tahun: 2014,
    provinsi: "DKI Jakarta",
    klasifikasi: "P2",
    persentase: 0.13,
  },
  {
    tahun: 2014,
    provinsi: "Jawa Barat",
    klasifikasi: "P0",
    persentase: 9.18,
  },
  {
    tahun: 2014,
    provinsi: "Jawa Barat",
    klasifikasi: "P1",
    persentase: 1.39,
  },
  {
    tahun: 2014,
    provinsi: "Jawa Barat",
    klasifikasi: "P2",
    persentase: 0.33,
  },
  {
    tahun: 2014,
    provinsi: "Jawa Tengah",
    klasifikasi: "P0",
    persentase: 13.58,
  },
  {
    tahun: 2014,
    provinsi: "Jawa Tengah",
    klasifikasi: "P1",
    persentase: 2.09,
  },
  {
    tahun: 2014,
    provinsi: "Jawa Tengah",
    klasifikasi: "P2",
    persentase: 0.51,
  },
  {
    tahun: 2014,
    provinsi: "DAERAH ISTIMEWA YOGYAKARTA",
    klasifikasi: "P0",
    persentase: 14.55,
  },
  {
    tahun: 2014,
    provinsi: "DAERAH ISTIMEWA YOGYAKARTA",
    klasifikasi: "P1",
    persentase: 2.35,
  },
  {
    tahun: 2014,
    provinsi: "DAERAH ISTIMEWA YOGYAKARTA",
    klasifikasi: "P2",
    persentase: 0.61,
  },
  {
    tahun: 2014,
    provinsi: "Jawa Timur",
    klasifikasi: "P0",
    persentase: 12.28,
  },
  {
    tahun: 2014,
    provinsi: "Jawa Timur",
    klasifikasi: "P1",
    persentase: 1.86,
  },
  {
    tahun: 2014,
    provinsi: "Jawa Timur",
    klasifikasi: "P2",
    persentase: 0.45,
  },
  {
    tahun: 2014,
    provinsi: "Banten",
    klasifikasi: "P0",
    persentase: 5.51,
  },
  {
    tahun: 2014,
    provinsi: "Banten",
    klasifikasi: "P1",
    persentase: 0.79,
  },
  {
    tahun: 2014,
    provinsi: "Banten",
    klasifikasi: "P2",
    persentase: 0.18,
  },
  {
    tahun: 2014,
    provinsi: "Bali",
    klasifikasi: "P0",
    persentase: 4.76,
  },
  {
    tahun: 2014,
    provinsi: "Bali",
    klasifikasi: "P1",
    persentase: 0.86,
  },
  {
    tahun: 2014,
    provinsi: "Bali",
    klasifikasi: "P2",
    persentase: 0.26,
  },
  {
    tahun: 2014,
    provinsi: "Nusa Tenggara Barat",
    klasifikasi: "P0",
    persentase: 17.05,
  },
  {
    tahun: 2014,
    provinsi: "Nusa Tenggara Barat",
    klasifikasi: "P1",
    persentase: 2.92,
  },
  {
    tahun: 2014,
    provinsi: "Nusa Tenggara Barat",
    klasifikasi: "P2",
    persentase: 0.72,
  },
  {
    tahun: 2014,
    provinsi: "Nusa Tenggara Timur",
    klasifikasi: "P0",
    persentase: 19.6,
  },
  {
    tahun: 2014,
    provinsi: "Nusa Tenggara Timur",
    klasifikasi: "P1",
    persentase: 3.25,
  },
  {
    tahun: 2014,
    provinsi: "Nusa Tenggara Timur",
    klasifikasi: "P2",
    persentase: 0.79,
  },
  {
    tahun: 2014,
    provinsi: "Kalimantan Barat",
    klasifikasi: "P0",
    persentase: 8.07,
  },
  {
    tahun: 2014,
    provinsi: "Kalimantan Barat",
    klasifikasi: "P1",
    persentase: 1.26,
  },
  {
    tahun: 2014,
    provinsi: "Kalimantan Barat",
    klasifikasi: "P2",
    persentase: 0.35,
  },
  {
    tahun: 2014,
    provinsi: "Kalimantan Tengah ",
    klasifikasi: "P0",
    persentase: 6.07,
  },
  {
    tahun: 2014,
    provinsi: "Kalimantan Tengah ",
    klasifikasi: "P1",
    persentase: 0.97,
  },
  {
    tahun: 2014,
    provinsi: "Kalimantan Tengah ",
    klasifikasi: "P2",
    persentase: 0.25,
  },
  {
    tahun: 2014,
    provinsi: "Kalimantan Selatan",
    klasifikasi: "P0",
    persentase: 4.81,
  },
  {
    tahun: 2014,
    provinsi: "Kalimantan Selatan",
    klasifikasi: "P1",
    persentase: 0.65,
  },
  {
    tahun: 2014,
    provinsi: "Kalimantan Selatan",
    klasifikasi: "P2",
    persentase: 0.15,
  },
  {
    tahun: 2014,
    provinsi: "Kalimantan Timur",
    klasifikasi: "P0",
    persentase: 6.31,
  },
  {
    tahun: 2014,
    provinsi: "Kalimantan Timur",
    klasifikasi: "P1",
    persentase: 0.79,
  },
  {
    tahun: 2014,
    provinsi: "Kalimantan Timur",
    klasifikasi: "P2",
    persentase: 0.18,
  },
  {
    tahun: 2014,
    provinsi: "Sulawesi Utara",
    klasifikasi: "P0",
    persentase: 8.26,
  },
  {
    tahun: 2014,
    provinsi: "Sulawesi Utara",
    klasifikasi: "P1",
    persentase: 1.28,
  },
  {
    tahun: 2014,
    provinsi: "Sulawesi Utara",
    klasifikasi: "P2",
    persentase: 0.3,
  },
  {
    tahun: 2014,
    provinsi: "Sulawesi Tengah",
    klasifikasi: "P0",
    persentase: 13.61,
  },
  {
    tahun: 2014,
    provinsi: "Sulawesi Tengah",
    klasifikasi: "P1",
    persentase: 2.11,
  },
  {
    tahun: 2014,
    provinsi: "Sulawesi Tengah",
    klasifikasi: "P2",
    persentase: 0.55,
  },
  {
    tahun: 2014,
    provinsi: "Sulawesi Selatan",
    klasifikasi: "P0",
    persentase: 9.54,
  },
  {
    tahun: 2014,
    provinsi: "Sulawesi Selatan",
    klasifikasi: "P1",
    persentase: 1.41,
  },
  {
    tahun: 2014,
    provinsi: "Sulawesi Selatan",
    klasifikasi: "P2",
    persentase: 0.32,
  },
  {
    tahun: 2014,
    provinsi: "Sulawesi Tenggara",
    klasifikasi: "P0",
    persentase: 12.77,
  },
  {
    tahun: 2014,
    provinsi: "Sulawesi Tenggara",
    klasifikasi: "P1",
    persentase: 2.09,
  },
  {
    tahun: 2014,
    provinsi: "Sulawesi Tenggara",
    klasifikasi: "P2",
    persentase: 0.52,
  },
  {
    tahun: 2014,
    provinsi: "Gorontalo",
    klasifikasi: "P0",
    persentase: 17.41,
  },
  {
    tahun: 2014,
    provinsi: "Gorontalo",
    klasifikasi: "P1",
    persentase: 3.13,
  },
  {
    tahun: 2014,
    provinsi: "Gorontalo",
    klasifikasi: "P2",
    persentase: 0.83,
  },
  {
    tahun: 2014,
    provinsi: "Sulawesi Barat",
    klasifikasi: "P0",
    persentase: 12.05,
  },
  {
    tahun: 2014,
    provinsi: "Sulawesi Barat",
    klasifikasi: "P1",
    persentase: 1.94,
  },
  {
    tahun: 2014,
    provinsi: "Sulawesi Barat",
    klasifikasi: "P2",
    persentase: 0.51,
  },
  {
    tahun: 2014,
    provinsi: "Maluku",
    klasifikasi: "P0",
    persentase: 18.44,
  },
  {
    tahun: 2014,
    provinsi: "Maluku",
    klasifikasi: "P1",
    persentase: 4.11,
  },
  {
    tahun: 2014,
    provinsi: "Maluku",
    klasifikasi: "P2",
    persentase: 1.37,
  },
  {
    tahun: 2014,
    provinsi: "Maluku Utara",
    klasifikasi: "P0",
    persentase: 7.41,
  },
  {
    tahun: 2014,
    provinsi: "Maluku Utara",
    klasifikasi: "P1",
    persentase: 1.16,
  },
  {
    tahun: 2014,
    provinsi: "Maluku Utara",
    klasifikasi: "P2",
    persentase: 0.24,
  },
  {
    tahun: 2014,
    provinsi: "Papua Barat",
    klasifikasi: "P0",
    persentase: 26.26,
  },
  {
    tahun: 2014,
    provinsi: "Papua Barat",
    klasifikasi: "P1",
    persentase: 5.92,
  },
  {
    tahun: 2014,
    provinsi: "Papua Barat",
    klasifikasi: "P2",
    persentase: 1.88,
  },
  {
    tahun: 2014,
    provinsi: "Papua",
    klasifikasi: "P0",
    persentase: 27.8,
  },
  {
    tahun: 2014,
    provinsi: "Papua",
    klasifikasi: "P1",
    persentase: 6.42,
  },
  {
    tahun: 2014,
    provinsi: "Papua",
    klasifikasi: "P2",
    persentase: 2.18,
  },
];
