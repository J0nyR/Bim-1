import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import FormativeQuiz from '@/components/FormativeQuiz';
import { Button } from '@/components/ui/button';
import { BookText } from 'lucide-react';

const TeachingMaterialOtherAuxiliaries = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Materi Pembelajaran / Teaching Material
      </h1>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Topik: Mesin Bantu Lainnya / Other Auxiliaries</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            Materi ini mencakup penjelasan tentang berbagai mesin bantu penting di kamar mesin, termasuk pompa, kompresor udara, pemurni, generator air tawar, penukar panas, dan sistem pendukung lainnya.
          </p>
          <p className="text-lg">
            This material covers various essential auxiliary machinery in the engine room, including pumps, air compressors, purifiers, fresh water generators, heat exchangers, and other support systems.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Glosarium & Kosakata / Glossary & Vocabulary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><p><strong>Pump:</strong> Pompa, alat untuk memindahkan fluida.</p><p className="text-muted-foreground"><em>A device used to move fluids.</em></p></div>
            <div><p><strong>Impeller:</strong> Roda berputar di dalam pompa sentrifugal yang mendorong fluida.</p><p className="text-muted-foreground"><em>The rotating part of a centrifugal pump that moves the fluid.</em></p></div>
            <div><p><strong>Separator:</strong> Mesin yang memisahkan zat berdasarkan massa jenis menggunakan gaya sentrifugal.</p><p className="text-muted-foreground"><em>A machine that separates substances of different densities using centrifugal force.</em></p></div>
            <div><p><strong>Compressor:</strong> Mesin yang menaikkan tekanan udara atau gas.</p><p className="text-muted-foreground"><em>A machine that increases the pressure of air or gas.</em></p></div>
            <div><p><strong>Heat Exchanger:</strong> Alat untuk mentransfer panas antara dua fluida tanpa mencampurnya.</p><p className="text-muted-foreground"><em>A device to transfer heat between two fluids without mixing them.</em></p></div>
            <div><p><strong>Distillation:</strong> Proses pemurnian cairan dengan pemanasan dan pendinginan (penyulingan).</p><p className="text-muted-foreground"><em>The process of purifying a liquid by heating and cooling.</em></p></div>
            <div><p><strong>Refrigerant:</strong> Zat yang digunakan dalam siklus pendinginan untuk menyerap dan melepaskan panas.</p><p className="text-muted-foreground"><em>A substance used in a refrigeration cycle to absorb and release heat.</em></p></div>
            <div><p><strong>Gravity Disc:</strong> Cincin di dalam purifier yang menentukan posisi antarmuka air-oli.</p><p className="text-muted-foreground"><em>A ring inside a purifier that determines the position of the water-oil interface.</em></p></div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Penjelasan Konsep / Concept Explanation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div>
            <h3 className="text-xl font-medium mb-2">1. Pompa-pompa / Pumps</h3>
            <p>Pompa sangat penting untuk memindahkan berbagai jenis cairan di sekitar kapal untuk berbagai sistem. / Pumps are essential for moving various types of liquids around the ship for numerous systems.</p>
            
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-semibold text-lg">A. Pompa Sentrifugal / Centrifugal Pump</h4>
                <p className="text-muted-foreground mb-2">Prinsip kerjanya menggunakan impeler (impeller) yang berputar cepat untuk melemparkan fluida ke luar karena gaya sentrifugal. Fluida kemudian dikumpulkan di dalam rumah pompa (casing) dan diarahkan ke saluran keluar (discharge).</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Karakteristik:</strong> Ideal untuk memindahkan volume cairan yang besar pada tekanan yang relatif rendah. Alirannya lancar dan tidak berdenyut.</li>
                  <li><strong>Aplikasi Umum:</strong> Pompa Pendingin Air Laut (Sea Water Cooling Pumps), Pompa Ballast (Ballast Pumps), Pompa Pemadam Kebakaran (Fire Pumps).</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg">B. Pompa Perpindahan Positif / Positive Displacement Pump</h4>
                <p className="text-muted-foreground mb-2">Prinsip kerjanya adalah "menjebak" sejumlah volume fluida dan "memaksanya" pindah dari sisi isap (suction) ke sisi keluar (discharge). Alirannya hampir konstan terlepas dari tekanan.</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Karakteristik:</strong> Mampu menghasilkan tekanan tinggi, cocok untuk cairan kental (viscous), dan seringkali dapat menghisap sendiri (self-priming).</li>
                  <li><strong>Sub-jenis & Aplikasi Umum:</strong>
                    <ul className="list-circle list-inside ml-6">
                      <li><strong>Pompa Roda Gigi (Gear Pump):</strong> Digunakan untuk oli pelumas dan transfer bahan bakar.</li>
                      <li><strong>Pompa Ulir (Screw Pump):</strong> Digunakan untuk transfer bahan bakar dan oli pelumas, menghasilkan aliran yang sangat halus.</li>
                      <li><strong>Pompa Piston (Piston Pump):</strong> Digunakan untuk aplikasi tekanan sangat tinggi seperti sistem hidrolik.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator />

          <div>
            <h3 className="text-xl font-medium mb-2">2. Kompresor Udara / Air Compressor</h3>
            <p>Menghasilkan udara bertekanan tinggi yang disimpan dalam tabung udara (air receivers) untuk berbagai keperluan.</p>
            <p className="text-muted-foreground mb-2"><em>Produces high-pressure air stored in air receivers for various purposes.</em></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Udara Start (Starting Air):</strong> Tekanan sangat tinggi (sekitar 30 bar) untuk menyalakan mesin diesel utama dan generator.</li>
              <li><strong>Udara Servis/Kerja (Service/Working Air):</strong> Tekanan lebih rendah (sekitar 7-10 bar) untuk peralatan pneumatik, pembersihan, dll.</li>
              <li><strong>Udara Kontrol (Control Air):</strong> Udara yang sangat kering dan bersih untuk sistem kontrol otomatis.</li>
            </ul>
          </div>
          <Separator />

          <div>
            <h3 className="text-xl font-medium mb-2">3. Pemisah Sentrifugal (Purifier & Clarifier) / Centrifugal Separator</h3>
            <p>Mesin ini menggunakan gaya sentrifugal (ribuan kali gaya gravitasi) untuk memisahkan zat dengan massa jenis berbeda. Tujuan utamanya adalah membersihkan bahan bakar dan oli pelumas dari kontaminan berbahaya seperti air dan lumpur (sludge).</p>
            <p className="text-muted-foreground mb-2"><em>This machine uses centrifugal force (thousands of times gravity) to separate substances of different densities. Its main purpose is to clean fuel and lubricating oil from harmful contaminants like water and sludge.</em></p>
            
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Komponen Utama / Main Components</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Bowl:</strong> Komponen berputar berkecepatan tinggi tempat pemisahan terjadi.</li>
                  <li><strong>Disc Stack:</strong> Tumpukan piringan berbentuk kerucut di dalam bowl untuk memperluas area permukaan dan meningkatkan efisiensi pemisahan.</li>
                  <li><strong>Motor & Gear:</strong> Menggerakkan bowl pada kecepatan tinggi (misalnya 6.000 - 10.000 RPM).</li>
                  <li><strong>Gravity Disc (atau Dam Ring):</strong> Komponen kunci yang digunakan dalam mode purifier untuk mengatur posisi antarmuka (interface) antara oli dan air.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Persamaan & Perbedaan / Similarities & Differences</h4>
                <p className="text-muted-foreground mb-2">Mesin yang sama dapat diatur sebagai Purifier atau Clarifier.</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Persamaan:</strong> Keduanya menggunakan prinsip sentrifugal, memiliki konstruksi dasar yang sama, dan bertujuan untuk membersihkan cairan.</li>
                  <li><strong>Perbedaan (Mode Operasi):</strong>
                    <ul className="list-circle list-inside ml-6">
                      <li><strong>Mode Purifier:</strong> Dikonfigurasi untuk memisahkan <strong>dua cairan</strong> yang tidak dapat bercampur (misalnya, oli dan air) dan sejumlah kecil padatan. Memiliki <strong>dua saluran keluar cairan</strong> (satu untuk oli bersih, satu untuk air) dan satu saluran keluar padatan. Menggunakan <strong>gravity disc</strong>.</li>
                      <li><strong>Mode Clarifier:</strong> Dikonfigurasi untuk memisahkan sejumlah kecil <strong>padatan</strong> dari <strong>satu cairan</strong>. Hanya memiliki <strong>satu saluran keluar cairan</strong> dan satu saluran keluar padatan. Tidak menggunakan gravity disc.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator />

          <div>
            <h3 className="text-xl font-medium mb-2">4. Generator Air Tawar / Fresh Water Generator (FWG)</h3>
            <p>Membuat air tawar dari air laut, biasanya menggunakan metode distilasi vakum suhu rendah untuk efisiensi energi.</p>
            <p className="text-muted-foreground mb-2"><em>Produces fresh water from sea water, typically using low-temperature vacuum distillation for energy efficiency.</em></p>
            <h4 className="font-semibold text-lg mt-4">Proses Distilasi Vakum / Vacuum Distillation Process</h4>
            <ol className="list-decimal list-inside space-y-1 ml-4 mt-2">
              <li><strong>Pemanasan:</strong> Panas buangan dari air pendingin jaket mesin utama (sekitar 70-80°C) dialirkan ke evaporator.</li>
              <li><strong>Penguapan Vakum:</strong> Air laut diumpankan ke evaporator yang dijaga dalam kondisi vakum tinggi. Dalam vakum, air mendidih pada suhu rendah (misalnya 40-60°C), bukan 100°C.</li>
              <li><strong>Pemisahan Uap:</strong> Uap air murni naik, melewati demister (pemisah tetesan) untuk menghilangkan tetesan air garam.</li>
              <li><strong>Kondensasi:</strong> Uap murni kemudian mengalir ke kondensor, yang didinginkan oleh air laut dingin. Uap mengembun menjadi air tawar murni (distilat).</li>
              <li><strong>Ekstraksi:</strong> Air tawar yang dihasilkan dipompa ke tangki penyimpanan. Air garam pekat (brine) yang tersisa di evaporator dibuang ke laut.</li>
            </ol>
          </div>
          <Separator />

          <div>
            <h3 className="text-xl font-medium mb-2">5. Penukar Panas / Heat Exchanger</h3>
            <p>Mentransfer panas dari satu fluida ke fluida lain tanpa mencampurnya. Di kamar mesin, ini biasanya digunakan untuk mendinginkan atau memanaskan fluida. / Transfers heat from one fluid to another without mixing them. In the engine room, this is usually used to cool or heat a fluid.</p>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-semibold text-lg">A. Konsep Dasar Perpindahan Panas / Basic Concepts of Heat Transfer</h4>
                 <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Pendinginan (Cooling):</strong> Proses yang paling umum, membuang panas dari fluida kerja. Contoh: mendinginkan oli pelumas.</li>
                  <li><strong>Pemanasan (Heating):</strong> Menambahkan panas ke fluida untuk mengubah propertinya. Contoh: memanaskan bahan bakar berat (HFO) agar viskositasnya turun.</li>
                  <li><strong>Penguapan (Evaporation):</strong> Mengubah cairan menjadi gas dengan menambahkan panas. Contoh: evaporator pada sistem AC atau generator air tawar.</li>
                  <li><strong>Pengkondensasian (Condensation):</strong> Mengubah gas menjadi cairan dengan membuang panas. Contoh: kondensor pada sistem AC atau generator air tawar.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg">B. Jenis-jenis Penukar Panas / Types of Heat Exchangers</h4>
                <p className="text-muted-foreground mb-2">Dua jenis yang paling umum di kapal adalah:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Jenis Pelat (Plate Type):</strong> Terdiri dari tumpukan pelat logam tipis bergelombang. Sangat efisien, kompak, dan mudah dibersihkan, tetapi rentan terhadap kebocoran paking (gasket).</li>
                  <li><strong>Jenis Shell & Tube:</strong> Terdiri dari sebuah bejana (shell) dengan sekelompok pipa (tube bundle) di dalamnya. Sangat kuat, andal untuk tekanan tinggi, tetapi lebih besar dan kurang efisien dibandingkan jenis pelat.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg">C. Alat/Mesin Penukar Panas di Kapal / Heat Exchanger Equipment on Ships</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Pendingin Oli Pelumas (Lube Oil Cooler):</strong> Mendinginkan oli pelumas panas dari mesin.</li>
                  <li><strong>Pendingin Air Tawar Jaket (Jacket Water Cooler):</strong> Pendingin utama untuk sistem pendingin mesin, biasanya menggunakan air laut sebagai media pendingin.</li>
                  <li><strong>Pemanas Bahan Bakar (Fuel Oil Heater):</strong> Memanaskan HFO menggunakan uap atau oli termal agar mudah dipompa dan disemprotkan.</li>
                  <li><strong>Kondensor (Condenser):</strong> Mendinginkan uap (misalnya uap refrigerant di sistem AC) menjadi cairan.</li>
                  <li><strong>Evaporator / Generator Air Tawar:</strong> Menggunakan panas untuk menguapkan air laut.</li>
                </ul>
              </div>
            </div>
          </div>
          <Separator />

          <div>
            <h3 className="text-xl font-medium mb-2">6. Sistem Refrigerasi & Pendingin Provisi / Refrigeration & Provision Cooling Systems</h3>
            <p>Sistem ini penting untuk mengawetkan makanan bagi kru selama pelayaran. Sistem ini menggunakan siklus kompresi uap untuk memindahkan panas dari dalam ruang penyimpanan ke luar.</p>
            <p className="text-muted-foreground mb-2"><em>This system is essential for preserving food for the crew during voyages. It uses a vapor compression cycle to move heat from inside the storage rooms to the outside.</em></p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg">Ruang Chiller vs. Freezer</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Chiller (Ruang Pendingin):</strong> Untuk menyimpan sayuran, buah, dan produk susu. Suhu dijaga sekitar <strong>+2°C hingga +4°C</strong>.</li>
                  <li><strong>Freezer (Ruang Pembeku):</strong> Untuk menyimpan daging dan ikan. Suhu dijaga sangat rendah, sekitar <strong>-18°C hingga -25°C</strong>.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Siklus Kompresi Uap / Vapor Compression Cycle</h4>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li><strong>Kompresor:</strong> Menghisap refrigerant gas bertekanan rendah dan memampatkannya menjadi gas bertekanan & bersuhu tinggi.</li>
                  <li><strong>Kondensor:</strong> Gas panas dari kompresor didinginkan (biasanya oleh air laut) dan berubah menjadi cairan bertekanan tinggi.</li>
                  <li><strong>Katup Ekspansi:</strong> Cairan bertekanan tinggi melewati katup ini, tekanannya turun drastis, membuatnya menjadi campuran cairan-gas yang sangat dingin.</li>
                  <li><strong>Evaporator:</strong> Campuran dingin ini mengalir melalui pipa-pipa di dalam ruang Chiller/Freezer. Ia menyerap panas dari ruangan, menyebabkan cairan refrigerant mendidih menjadi gas dan mendinginkan ruangan. Gas ini kemudian kembali ke kompresor.</li>
                </ol>
              </div>
            </div>
          </div>
          <Separator />

          <div>
            <h3 className="text-xl font-medium mb-2">7. Sistem AC & Ventilasi / Air-Conditioning & Ventilation Systems</h3>
            <p>Sistem ini memastikan lingkungan kerja dan hidup yang aman dan nyaman di atas kapal.</p>
            <p className="text-muted-foreground mb-2"><em>These systems ensure a safe and comfortable working and living environment on board.</em></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Ventilasi (Ventilation):</strong> Tujuannya adalah pertukaran udara.
                <ul className="list-circle list-inside ml-6">
                  <li><strong>Kamar Mesin:</strong> Memasok udara segar untuk pembakaran mesin dan membuang udara panas untuk mendinginkan ruangan.</li>
                  <li><strong>Akomodasi & Palka:</strong> Menghilangkan udara pengap, bau, dan gas berbahaya, serta memasok oksigen.</li>
                </ul>
              </li>
              <li><strong>Pendingin Udara (Air-Conditioning - AC):</strong> Ini adalah sistem kontrol iklim total.
                <ul className="list-circle list-inside ml-6">
                  <li><strong>Fungsi:</strong> Tidak hanya mendinginkan, tetapi juga mengontrol <strong>kelembaban (dehumidify)</strong>, <strong>membersihkan (filter)</strong>, dan <strong>mensirkulasikan</strong> udara.</li>
                  <li><strong>Aplikasi:</strong> Ruang akomodasi, anjungan, dan ruang kontrol mesin untuk kenyamanan kru dan melindungi peralatan elektronik.</li>
                  <li><strong>Prinsip Kerja:</strong> Menggunakan siklus refrigerasi yang sama dengan pendingin provisi untuk mendinginkan udara.</li>
                </ul>
              </li>
            </ul>
          </div>
          <Separator />

          <div>
            <h3 className="text-xl font-medium mb-2">8. Pembangkit Listrik (Generator) / Electrical Power Generation (Generators)</h3>
            <p>Generator di kapal, sering disebut genset (generator set), menghasilkan semua tenaga listrik yang dibutuhkan untuk mengoperasikan seluruh mesin, sistem navigasi, pencahayaan, dan akomodasi.</p>
            <p className="text-muted-foreground mb-2"><em>Shipboard generators, often called gensets, produce all the electrical power required to operate all machinery, navigation systems, lighting, and accommodation.</em></p>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Komponen Utama / Main Components</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Prime Mover:</strong> Penggerak utama, hampir selalu berupa mesin diesel 4-tak (four-stroke diesel engine) yang andal.</li>
                  <li><strong>Alternator:</strong> Bagian yang mengubah energi mekanik (putaran) dari mesin diesel menjadi energi listrik AC (arus bolak-balik).</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Sinkronisasi (Paralleling Generators)</h4>
                <p className="text-muted-foreground mb-2">Kapal memiliki beberapa genset. Menjalankannya secara paralel (bersama-sama) sangat penting untuk:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Pembagian Beban (Load Sharing):</strong> Ketika kebutuhan listrik melebihi kapasitas satu generator (misalnya saat manuver menggunakan bow thruster), generator lain dapat dijalankan secara paralel untuk berbagi beban.</li>
                  <li><strong>Redundansi & Keamanan (Redundancy & Safety):</strong> Jika satu generator gagal, generator lain dapat mengambil alih beban, mencegah pemadaman total (blackout).</li>
                </ul>
                <p className="mt-2">Untuk menyinkronkan generator ke switchboard utama (busbar), <strong>empat kondisi</strong> harus terpenuhi secara tepat:</p>
                <ol className="list-decimal list-inside space-y-1 ml-4 mt-2">
                  <li><strong>Tegangan Sama (Same Voltage):</strong> Tegangan generator yang akan masuk harus sama dengan tegangan busbar.</li>
                  <li><strong>Frekuensi Sama (Same Frequency):</strong> Frekuensi generator (diatur oleh kecepatan mesin) harus sama persis dengan frekuensi busbar.</li>
                  <li><strong>Urutan Fasa Sama (Same Phase Sequence):</strong> Urutan fasa (misalnya, R-Y-B) harus cocok. Ini sudah diatur saat instalasi.</li>
                  <li><strong>Sudut Fasa Sama (Same Phase Angle):</strong> Gelombang sinus dari tegangan generator harus sejajar (in-phase) dengan gelombang sinus busbar. Ini diperiksa menggunakan alat yang disebut synchroscope.</li>
                </ol>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Fokus Tata Bahasa / Grammar Focus</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">1. Gerunds as Subjects (Verb-ing)</h3>
            <p className="mb-2">Kita dapat menggunakan bentuk -ing dari kata kerja (gerund) sebagai subjek kalimat untuk menjelaskan suatu tindakan atau proses. / We can use the -ing form of a verb (a gerund) as the subject of a sentence to describe an action or process.</p>
            <ul className="list-disc list-inside space-y-1 ml-4 bg-muted p-4 rounded-md">
              <li>"<strong>Pumping</strong> liquids is the main function of a pump."</li>
              <li>"<strong>Separating</strong> water from fuel is the purpose of a purifier."</li>
              <li>"<strong>Synchronizing</strong> generators requires careful attention."</li>
            </ul>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">2. Clauses of Purpose (to + verb)</h3>
            <p className="mb-2">Kita menggunakan 'to + verb' (infinitive) untuk menjelaskan tujuan dari suatu tindakan atau komponen. / We use 'to + verb' (infinitive) to explain the purpose of an action or a component.</p>
            <ul className="list-disc list-inside space-y-1 ml-4 bg-muted p-4 rounded-md">
              <li>"A compressor is used <strong>to provide</strong> high-pressure air."</li>
              <li>"We use a heat exchanger <strong>to cool</strong> the lube oil."</li>
              <li>"The engineer started another generator <strong>to share</strong> the load."</li>
            </ul>
          </div>
          <Separator />
          <div className="text-center">
            <Button asChild variant="outline" className="w-full md:w-auto">
              <Link to="/grammar-reference">
                <BookText className="mr-2 h-4 w-4" />
                Lihat Referensi Tata Bahasa Lengkap
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Contoh Percakapan / Conversation Example</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="font-semibold">Skenario: Second Engineer dan Oiler sedang melakukan pengecekan rutin di kamar mesin.</p>
          <p className="font-semibold text-muted-foreground"><em>Scenario: The Second Engineer and an Oiler are on a routine check in the engine room.</em></p>

          <div className="space-y-2">
            <p><strong>Second Engineer:</strong> "Oiler, let's start our rounds. First, check the main sea water pump. What's the discharge pressure and are there any leaks from the mechanical seal?"</p>
            <p className="text-muted-foreground"><em>"Oiler, mari kita mulai keliling. Pertama, periksa pompa air laut utama. Berapa tekanan keluarnya dan apakah ada kebocoran dari perapat mekanisnya?"</em></p>
            <p><strong>Oiler:</strong> "The pump pressure is steady at 2.5 bar, sir. The seal is dry, no leaks detected. The motor temperature feels normal."</p>
            <p className="text-muted-foreground"><em>"Tekanan pompa stabil di 2,5 bar, Pak. Perapatnya kering, tidak ada kebocoran. Suhu motor terasa normal."</em></p>
            <p><strong>Second Engineer:</strong> "Good. Now, over to the purifiers. How is the fuel oil purifier running? Did it complete its last de-sludge cycle correctly?"</p>
            <p className="text-muted-foreground"><em>"Bagus. Sekarang, kita ke pemurni. Bagaimana kondisi pemurni bahan bakar? Apakah siklus pembuangan lumpur terakhirnya berjalan dengan benar?"</em></p>
            <p><strong>Oiler:</strong> "Yes, sir. It de-sludged about 15 minutes ago. The operating water pressure was correct, and the bowl is running quietly. The flow rate is also stable."</p>
            <p className="text-muted-foreground"><em>"Ya, Pak. Proses de-sludge berjalan 15 menit yang lalu. Tekanan air operasi sudah benar, dan bowl-nya berputar dengan tenang. Laju alirannya juga stabil."</em></p>
            <p><strong>Second Engineer:</strong> "Excellent. Let's check the Fresh Water Generator. What's the vacuum reading and how much fresh water are we producing per hour?"</p>
            <p className="text-muted-foreground"><em>"Bagus sekali. Mari kita periksa Generator Air Tawar. Berapa pembacaan vakumnya dan berapa banyak air tawar yang kita produksi per jam?"</em></p>
            <p><strong>Oiler:</strong> "The vacuum is holding strong at about 92% on the gauge. Production is good, around 1.2 tons per hour, sir."</p>
            <p className="text-muted-foreground"><em>"Vakumnya kuat, sekitar 92% pada alat ukur. Produksi bagus, sekitar 1,2 ton per jam, Pak."</em></p>
            <p><strong>Second Engineer:</strong> "Perfect. Now, let's check the power situation. How's number two generator running? What's the load in kilowatts?"</p>
            <p className="text-muted-foreground"><em>"Sempurna. Sekarang, mari kita periksa situasi kelistrikan. Bagaimana kondisi generator nomor dua? Berapa bebannya dalam kilowatt?"</em></p>
            <p><strong>Oiler:</strong> "Number two generator is running smoothly, sir. The load is about 250 kW. All parameters are normal."</p>
            <p className="text-muted-foreground"><em>"Generator nomor dua berjalan lancar, Pak. Bebannya sekitar 250 kW. Semua parameter normal."</em></p>
            <p><strong>Second Engineer:</strong> "Okay. The bridge just called, they will start cargo operations in about an hour. That means the cranes will be running. We'll need more power. Go and prepare number one generator for start-up. We will need to synchronize it."</p>
            <p className="text-muted-foreground"><em>"Oke. Anjungan baru saja menelepon, mereka akan memulai operasi kargo sekitar satu jam lagi. Itu artinya crane akan beroperasi. Kita akan butuh daya lebih. Pergi dan siapkan generator nomor satu untuk dinyalakan. Kita perlu menyinkronkannya."</em></p>
            <p><strong>Oiler:</strong> "Understood, sir. I will perform the pre-start checks on number one generator and have it ready for synchronization."</p>
            <p className="text-muted-foreground"><em>"Dimengerti, Pak. Saya akan melakukan pemeriksaan pra-start pada generator nomor satu dan menyiapkannya untuk sinkronisasi."</em></p>
          </div>
        </CardContent>
      </Card>

      <FormativeQuiz topic="other-auxiliaries" />
    </div>
  );
};

export default TeachingMaterialOtherAuxiliaries;