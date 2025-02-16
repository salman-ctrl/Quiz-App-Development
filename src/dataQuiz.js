export const dataQuiz = [
    {
        id: 1,
        nama: "Tantangan Matematika",
        gambar: "/DaftarQuiz/MTK.jpg",
        deskripsi: "Uji kemampuan matematika Anda dengan soal-soal menantang.",
        kategori: "Matematika",
        jumlahSoal: 15,
        batasWaktu: 20,
        soal: [
            // Easy
            { question: "Berapakah hasil dari 5 + 3?", kategori: "Matematika", option1: "6", option2: "7", option3: "8", option4: "9", answer: 3, level: "easy" },
            { question: "Hasil dari 9 - 4 adalah?", kategori: "Matematika", option1: "4", option2: "5", option3: "6", option4: "7", answer: 2, level: "easy" },
            { question: "Berapakah hasil dari 3 × 3?", kategori: "Matematika", option1: "6", option2: "7", option3: "8", option4: "9", answer: 4, level: "easy" },

            // Medium
            { question: "Akar kuadrat dari 64 adalah?", kategori: "Matematika", option1: "6", option2: "7", option3: "8", option4: "9", answer: 3, level: "medium" },
            { question: "Berapakah hasil 12 × 12?", kategori: "Matematika", option1: "120", option2: "124", option3: "144", option4: "148", answer: 3, level: "medium" },
            { question: "Jika x + 5 = 12, maka nilai x adalah?", kategori: "Matematika", option1: "5", option2: "6", option3: "7", option4: "8", answer: 3, level: "medium" },

            // Hard
            { question: "Berapakah hasil dari 25 × 4 ÷ 5?", kategori: "Matematika", option1: "15", option2: "20", option3: "25", option4: "30", answer: 2, level: "hard" },
            { question: "Jika 3x - 7 = 11, maka nilai x adalah?", kategori: "Matematika", option1: "4", option2: "5", option3: "6", option4: "7", answer: 2, level: "hard" },
            { question: "Jumlah sudut dalam segitiga adalah?", kategori: "Matematika", option1: "90°", option2: "120°", option3: "180°", option4: "360°", answer: 3, level: "hard" }
        ]
    },

    {
        id: 2,
        nama: "Quiz Pengetahuan Umum",
        gambar: "/DaftarQuiz/PengetahuanUmum.jpg",
        deskripsi: "Uji wawasan Anda dengan berbagai pertanyaan umum.",
        kategori: "Pengetahuan Umum",
        jumlahSoal: 10,
        batasWaktu: 15,
        soal: [
            // Easy
            { question: "Apa ibukota Indonesia?", kategori: "Pengetahuan Umum", option1: "Jakarta", option2: "Bandung", option3: "Surabaya", option4: "Medan", answer: 1, level: "easy" },
            { question: "Bendera Indonesia memiliki warna apa saja?", kategori: "Pengetahuan Umum", option1: "Merah dan Putih", option2: "Biru dan Kuning", option3: "Hijau dan Merah", option4: "Putih dan Hitam", answer: 1, level: "easy" },

            // Medium
            { question: "Berapa jumlah provinsi di Indonesia saat ini?", kategori: "Pengetahuan Umum", option1: "32", option2: "34", option3: "36", option4: "38", answer: 4, level: "medium" },
            { question: "Siapa penemu lampu pijar?", kategori: "Pengetahuan Umum", option1: "Nikola Tesla", option2: "Thomas Edison", option3: "Albert Einstein", option4: "Alexander Graham Bell", answer: 2, level: "medium" },

            // Hard
            { question: "Apa nama unsur kimia dengan simbol 'Au'?", kategori: "Pengetahuan Umum", option1: "Perak", option2: "Besi", option3: "Emas", option4: "Tembaga", answer: 3, level: "hard" },
            { question: "Siapa ilmuwan yang mengembangkan teori relativitas?", kategori: "Pengetahuan Umum", option1: "Galileo Galilei", option2: "Isaac Newton", option3: "Albert Einstein", option4: "Stephen Hawking", answer: 3, level: "hard" }
        ]
    },

    {
        id: 3,
        nama: "Pengetahuan Alam",
        gambar: "/DaftarQuiz/PengetahuanAlam.jpg",
        deskripsi: "Pelajari fakta menarik tentang dunia alam sekitar kita!",
        kategori: "Pengetahuan Alam",
        jumlahSoal: 10,
        batasWaktu: 15,
        soal: [
            // Easy
            { question: "Apa planet terbesar di Tata Surya?", kategori: "Pengetahuan Alam", option1: "Saturnus", option2: "Jupiter", option3: "Mars", option4: "Neptunus", answer: 2, level: "easy" },
            { question: "Apa nama gas yang digunakan tumbuhan untuk fotosintesis?", kategori: "Pengetahuan Alam", option1: "Oksigen", option2: "Karbon Dioksida", option3: "Nitrogen", option4: "Hidrogen", answer: 2, level: "easy" },

            // Medium
            { question: "Siapa ilmuwan yang menemukan gaya gravitasi?", kategori: "Pengetahuan Alam", option1: "Galileo Galilei", option2: "Albert Einstein", option3: "Isaac Newton", option4: "Nikola Tesla", answer: 3, level: "medium" },
            { question: "Apa unsur kimia terbanyak di kerak bumi?", kategori: "Pengetahuan Alam", option1: "Oksigen", option2: "Silikon", option3: "Aluminium", option4: "Besi", answer: 1, level: "medium" },

            // Hard
            { question: "Apa nama partikel subatomik dengan muatan negatif?", kategori: "Pengetahuan Alam", option1: "Proton", option2: "Elektron", option3: "Neutron", option4: "Positron", answer: 2, level: "hard" },
            { question: "Apa nama hukum fisika yang menyatakan 'Energi tidak dapat diciptakan atau dimusnahkan'?", kategori: "Pengetahuan Alam", option1: "Hukum Kekekalan Energi", option2: "Hukum Newton Ketiga", option3: "Hukum Termodinamika Kedua", option4: "Hukum Coulomb", answer: 1, level: "hard" }
        ]
    },
    {
        id: 4,
        nama: "Astronomi",
        gambar: "/DaftarQuiz/Astronomi.jpg",
        deskripsi: "Jelajahi luar angkasa dan ketahui lebih dalam tentang alam semesta.",
        kategori: "Astronomi",
        jumlahSoal: 12,
        batasWaktu: 17,
        soal: [
            // Easy
            { question: "Planet apa yang terdekat dengan Matahari?", kategori: "Astronomi", option1: "Venus", option2: "Mars", option3: "Merkurius", option4: "Bumi", answer: 3, level: "easy" },
            { question: "Apa nama satelit alami Bumi?", kategori: "Astronomi", option1: "Phobos", option2: "Deimos", option3: "Bulan", option4: "Io", answer: 3, level: "easy" },

            // Medium
            { question: "Bintang apa yang paling dekat dengan Bumi?", kategori: "Astronomi", option1: "Proxima Centauri", option2: "Sirius", option3: "Betelgeuse", option4: "Vega", answer: 1, level: "medium" },
            { question: "Apa sebutan untuk kelompok bintang yang membentuk pola tertentu?", kategori: "Astronomi", option1: "Nebula", option2: "Galaksi", option3: "Konstelasi", option4: "Komet", answer: 3, level: "medium" },

            // Hard
            { question: "Apa nama lubang besar yang memiliki gravitasi sangat kuat hingga cahaya pun tidak bisa lolos?", kategori: "Astronomi", option1: "Pulsar", option2: "Quasar", option3: "Lubang Hitam", option4: "Nebula", answer: 3, level: "hard" },
            { question: "Berapa jumlah planet dalam Tata Surya setelah Pluto tidak lagi dianggap planet?", kategori: "Astronomi", option1: "7", option2: "8", option3: "9", option4: "10", answer: 2, level: "hard" }
        ]
    },

    {
        id: 5,
        nama: "Teknologi",
        gambar: "/DaftarQuiz/Teknologi.jpg",
        deskripsi: "Tes wawasan Anda tentang perkembangan teknologi modern.",
        jumlahSoal: 15,
        batasWaktu: 20,
        soal: [
            // Easy
            { question: "Siapa penemu World Wide Web?", kategori: "Teknologi", option1: "Steve Jobs", option2: "Bill Gates", option3: "Tim Berners-Lee", option4: "Mark Zuckerberg", answer: 3, level: "easy" },
            { question: "Apa singkatan dari CPU?", kategori: "Teknologi", option1: "Central Processing Unit", option2: "Computer Personal Unit", option3: "Central Processor Unit", option4: "Core Processor Unit", answer: 1, level: "easy" },

            // Medium
            { question: "Apa fungsi utama dari RAM pada komputer?", kategori: "Teknologi", option1: "Menyimpan data secara permanen", option2: "Memproses grafik", option3: "Menyimpan data sementara", option4: "Mengontrol suhu komputer", answer: 3, level: "medium" },
            { question: "Siapa pendiri Microsoft?", kategori: "Teknologi", option1: "Steve Jobs", option2: "Bill Gates", option3: "Larry Page", option4: "Sundar Pichai", answer: 2, level: "medium" },

            // Hard
            { question: "Apa nama algoritma enkripsi yang umum digunakan untuk keamanan data?", kategori: "Teknologi", option1: "AES", option2: "HTTP", option3: "HTML", option4: "VPN", answer: 1, level: "hard" },
            { question: "Apa kepanjangan dari IoT dalam teknologi?", kategori: "Teknologi", option1: "Internet of Technology", option2: "Internet of Things", option3: "Interface of Technology", option4: "Input of Telecommunication", answer: 2, level: "hard" }
        ]
    },

    {
        id: 6,
        nama: "Pengetahuan Umum",
        gambar: "/DaftarQuiz/PengetahuanUmum.jpg",
        deskripsi: "Uji pengetahuan umum Anda dengan pertanyaan menarik!",
        kategori: "Pengetahuan Umum",
        jumlahSoal: 10,
        batasWaktu: 15,
        soal: [
            // Easy
            { question: "Ibukota Indonesia adalah?", option1: "Bandung", option2: "Jakarta", option3: "Surabaya", option4: "Medan", answer: 2, level: "easy" },
            { question: "Simbol kimia untuk air adalah?", option1: "O2", option2: "CO2", option3: "H2O", option4: "NaCl", answer: 3, level: "easy" },
            { question: "Pulau terbesar di dunia adalah?", option1: "Kalimantan", option2: "Greenland", option3: "Sumatera", option4: "Madagaskar", answer: 2, level: "easy" },
            { question: "Planet terdekat ke Matahari adalah?", option1: "Venus", option2: "Mars", option3: "Merkurius", option4: "Jupiter", answer: 3, level: "easy" },
            { question: "Bulan memiliki bentuk apa saat purnama?", option1: "Bulan Sabit", option2: "Penuh", option3: "Separuh", option4: "Bulan Baru", answer: 2, level: "easy" },
            { question: "Sutradara film 'Parasite' adalah?", option1: "Bong Joon-ho", option2: "Park Chan-wook", option3: "Kim Ki-duk", option4: "Lee Chang-dong", answer: 1, level: "easy" },
            { question: "Lambang negara Indonesia adalah?", option1: "Merpati Putih", option2: "Garuda Pancasila", option3: "Harimau Sumatera", option4: "Komodo", answer: 2, level: "easy" },
            { question: "Presiden pertama Indonesia adalah?", option1: "Soeharto", option2: "Sukarno", option3: "Habibie", option4: "Megawati", answer: 2, level: "easy" },
            { question: "Gunung tertinggi di dunia adalah?", option1: "K2", option2: "Kilimanjaro", option3: "Everest", option4: "Annapurna", answer: 3, level: "easy" },
            { question: "Benua terkecil di dunia adalah?", option1: "Afrika", option2: "Australia", option3: "Antartika", option4: "Eropa", answer: 2, level: "easy" },

            // Medium
            { question: "Siapakah penulis novel 'Laskar Pelangi'?", option1: "Tere Liye", option2: "Andrea Hirata", option3: "Dewi Lestari", option4: "Ahmad Tohari", answer: 2, level: "medium" },
            { question: "Mata uang resmi Jepang adalah?", option1: "Yuan", option2: "Won", option3: "Yen", option4: "Ringgit", answer: 3, level: "medium" },
            { question: "Sungai terpanjang di dunia adalah?", option1: "Amazon", option2: "Nil", option3: "Mississippi", option4: "Yangtze", answer: 2, level: "medium" },
            { question: "Bahasa resmi di Brasil adalah?", option1: "Spanyol", option2: "Portugis", option3: "Prancis", option4: "Italia", answer: 2, level: "medium" },
            { question: "Penyakit yang disebabkan oleh kekurangan vitamin C adalah?", option1: "Rakhitis", option2: "Scurvy", option3: "Anemia", option4: "Beri-beri", answer: 2, level: "medium" },
            { question: "Siapa penemu bola lampu?", option1: "Alexander Graham Bell", option2: "Thomas Edison", option3: "Nikola Tesla", option4: "Benjamin Franklin", answer: 2, level: "medium" },
            { question: "Negara dengan populasi terbanyak di dunia adalah?", option1: "India", option2: "Amerika Serikat", option3: "China", option4: "Indonesia", answer: 3, level: "medium" },
            { question: "Lukisan 'Mona Lisa' dibuat oleh?", option1: "Michelangelo", option2: "Leonardo da Vinci", option3: "Raphael", option4: "Vincent van Gogh", answer: 2, level: "medium" },
            { question: "Berapakah jumlah provinsi di Indonesia saat ini?", option1: "34", option2: "36", option3: "38", option4: "40", answer: 3, level: "medium" },
            { question: "Sistem operasi Linux yang paling populer adalah?", option1: "Ubuntu", option2: "Debian", option3: "Fedora", option4: "Red Hat", answer: 1, level: "medium" },

            // Hard
            { question: "Teori relativitas dikemukakan oleh?", option1: "Isaac Newton", option2: "Albert Einstein", option3: "Galileo Galilei", option4: "Stephen Hawking", answer: 2, level: "hard" },
            { question: "Siapa yang menemukan penisilin?", option1: "Louis Pasteur", option2: "Alexander Fleming", option3: "Robert Koch", option4: "Joseph Lister", answer: 2, level: "hard" },
            { question: "Ibukota Kazakhstan adalah?", option1: "Astana", option2: "Almaty", option3: "Tashkent", option4: "Bishkek", answer: 1, level: "hard" },
            { question: "Negara mana yang pertama kali mengirim manusia ke luar angkasa?", option1: "Amerika Serikat", option2: "Rusia (Uni Soviet)", option3: "Tiongkok", option4: "Jepang", answer: 2, level: "hard" },
            { question: "Siapakah filsuf yang dikenal dengan 'Cogito, ergo sum'?", option1: "Plato", option2: "Aristoteles", option3: "Rene Descartes", option4: "Immanuel Kant", answer: 3, level: "hard" },
            { question: "Apa nama satelit terbesar milik Saturnus?", option1: "Titan", option2: "Europa", option3: "Ganymede", option4: "Callisto", answer: 1, level: "hard" },
            { question: "Siapakah komposer dari 'Symphony No. 9'?", option1: "Wolfgang Amadeus Mozart", option2: "Ludwig van Beethoven", option3: "Johann Sebastian Bach", option4: "Franz Schubert", answer: 2, level: "hard" },
            { question: "Apa nama asli penulis George Orwell?", option1: "Eric Arthur Blair", option2: "Joseph Conrad", option3: "Charles Lutwidge Dodgson", option4: "Samuel Clemens", answer: 1, level: "hard" },
            { question: "Satuan SI untuk intensitas cahaya adalah?", option1: "Candela", option2: "Lumen", option3: "Lux", option4: "Joule", answer: 1, level: "hard" },
            { question: "Siapakah presiden Amerika Serikat ke-16?", option1: "Theodore Roosevelt", option2: "Abraham Lincoln", option3: "Thomas Jefferson", option4: "Andrew Jackson", answer: 2, level: "hard" }
        ]

    },
    {
        id: 7,
        nama: "Seni dan Budaya Indonesia",
        gambar: "/DaftarQuiz/SeniBudaya.jpg",
        deskripsi: "Kenali seni dan budaya Indonesia dari Sabang hingga Merauke.",
        kategori: "Seni dan Budaya Indonesia",
        jumlahSoal: 12,
        batasWaktu: 17,
    },
    {
        id: 8,
        nama: "Geografi",
        gambar: "/DaftarQuiz/Geografi.jpg",
        deskripsi: "Uji wawasan Anda tentang peta, benua, dan fenomena geografis dunia.",
        kategori: "Geografi",
        jumlahSoal: 12,
        batasWaktu: 17,
    },
    {
        id: 9,
        nama: "Sejarah Dunia",
        gambar: "/DaftarQuiz/SejarahDunia.jpg",
        deskripsi: "Jelajahi perjalanan sejarah dunia dari zaman kuno hingga modern.",
        kategori: "Sejarah",
        jumlahSoal: 20,
        batasWaktu: 25,
    }
];
