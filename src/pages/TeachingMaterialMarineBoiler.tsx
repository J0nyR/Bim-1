import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import FormativeQuiz from '@/components/FormativeQuiz';
import { Button } from '@/components/ui/button';
import { BookText } from 'lucide-react';

const TeachingMaterialMarineBoiler = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Materi Pembelajaran / Teaching Material
      </h1>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Topik: Marine Boiler (Ketel Uap Kapal)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            Materi ini mencakup pengantar, glosarium, penjelasan mendalam tentang jenis-jenis ketel uap kapal, komponen utama, perlengkapan keselamatan, dan contoh percakapan.
          </p>
          <p className="text-lg">
            This material includes an introduction, glossary, in-depth explanations of marine boiler types, main components, safety fittings, and a conversation example.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Glosarium & Kosakata / Glossary & Vocabulary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>Boiler:</strong> Perangkat tertutup untuk menghasilkan uap dengan memanaskan air.</p>
              <p className="text-muted-foreground"><em>A closed vessel for generating steam by heating water.</em></p>
            </div>
            <div>
              <p><strong>Furnace:</strong> Ruang di dalam boiler tempat bahan bakar dibakar.</p>
              <p className="text-muted-foreground"><em>The chamber within a boiler where fuel is burned.</em></p>
            </div>
            <div>
              <p><strong>Steam Drum:</strong> Bejana di bagian atas boiler tempat uap dipisahkan dari air.</p>
              <p className="text-muted-foreground"><em>A vessel at the top of the boiler where steam is separated from water.</em></p>
            </div>
            <div>
              <p><strong>Water Tubes:</strong> Pipa-pipa yang berisi air dan dipanaskan oleh gas panas dari luar.</p>
              <p className="text-muted-foreground"><em>Tubes that contain water and are heated by hot gases from the outside.</em></p>
            </div>
            <div>
              <p><strong>Fire Tubes:</strong> Pipa-pipa yang dialiri gas panas dan dikelilingi oleh air.</p>
              <p className="text-muted-foreground"><em>Tubes through which hot gases pass and are surrounded by water.</em></p>
            </div>
            <div>
              <p><strong>Safety Valve:</strong> Katup yang secara otomatis melepaskan tekanan berlebih.</p>
              <p className="text-muted-foreground"><em>A valve that automatically releases excess pressure.</em></p>
            </div>
            <div>
              <p><strong>Gauge Glass:</strong> Gelas penduga untuk menunjukkan level air di dalam boiler.</p>
              <p className="text-muted-foreground"><em>A glass tube to indicate the water level inside the boiler.</em></p>
            </div>
            <div>
              <p><strong>Feedwater:</strong> Air yang diumpankan ke dalam boiler untuk diubah menjadi uap.</p>
              <p className="text-muted-foreground"><em>Water that is fed into the boiler to be converted into steam.</em></p>
            </div>
            <div>
              <p><strong>Blowdown:</strong> Proses membuang sebagian air boiler untuk mengurangi konsentrasi kotoran.</p>
              <p className="text-muted-foreground"><em>The process of draining some boiler water to reduce impurity concentration.</em></p>
            </div>
             <div>
              <p><strong>Mountings / Fittings:</strong> Perlengkapan yang dipasang pada boiler untuk keselamatan dan operasi.</p>
              <p className="text-muted-foreground"><em>Fittings attached to the boiler for safety and operation.</em></p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Penjelasan Konsep / Concept Explanation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">1. Pengantar Ketel Uap Kapal / Introduction to Marine Boilers</h3>
            <p>Ketel uap kapal (boiler) adalah komponen vital di banyak kapal, terutama yang menggunakan turbin uap atau membutuhkan uap untuk berbagai layanan bantu (auxiliary services) seperti pemanasan kargo, pemanas bahan bakar, dan untuk keperluan akomodasi. Fungsi utamanya adalah mengubah air menjadi uap bertekanan tinggi melalui proses pembakaran bahan bakar.</p>
            <p className="text-muted-foreground mb-2"><em>A marine boiler is a vital component on many ships, especially those using steam turbines or requiring steam for various auxiliary services like cargo heating, fuel heating, and for accommodation purposes. Its primary function is to convert water into high-pressure steam through the process of fuel combustion.</em></p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">2. Jenis-jenis Ketel Uap / Types of Boilers</h3>
            <p>Dua jenis utama ketel uap yang digunakan di kapal adalah ketel uap pipa api (fire-tube) dan pipa air (water-tube).</p>
            <p className="text-muted-foreground mb-4"><em>The two main types of boilers used on ships are fire-tube and water-tube boilers.</em></p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold">A. Ketel Uap Pipa Api / Fire-Tube Boiler</h4>
                <p>Pada jenis ini, gas panas dari tungku pembakaran mengalir melalui pipa-pipa (fire tubes) yang terendam di dalam air di dalam sebuah shell (bejana). Panas dari gas ditransfer melalui dinding pipa ke air di sekitarnya, mengubahnya menjadi uap.</p>
                <p className="text-muted-foreground mb-2"><em>In this type, hot gases from the combustion furnace flow through tubes (fire tubes) that are submerged in water within a shell. Heat from the gases is transferred through the tube walls to the surrounding water, turning it into steam.</em></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Kelebihan / Advantages:</strong> Desain sederhana, kuat, biaya awal lebih rendah, perawatan lebih mudah.</li>
                  <li className="text-muted-foreground"><em>Simple design, robust, lower initial cost, easier maintenance.</em></li>
                  <li><strong>Kekurangan / Disadvantages:</strong> Tekanan uap terbatas (biasanya di bawah 20 bar), kapasitas uap lebih kecil, lebih berat untuk kapasitas yang sama, waktu start-up lebih lama.</li>
                  <li className="text-muted-foreground"><em>Limited steam pressure (usually below 20 bar), smaller steam capacity, heavier for the same capacity, longer start-up time.</em></li>
                  <li><strong>Aplikasi / Application:</strong> Umumnya digunakan sebagai ketel uap bantu (auxiliary boiler) pada kapal motor.</li>
                  <li className="text-muted-foreground"><em>Commonly used as auxiliary boilers on motor vessels.</em></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold">B. Ketel Uap Pipa Air / Water-Tube Boiler</h4>
                <p>Pada jenis ini, air mengalir di dalam pipa-pipa (water tubes), sementara gas panas dari pembakaran bersirkulasi di luar pipa-pipa tersebut. Desain ini memungkinkan produksi uap dengan tekanan dan suhu yang jauh lebih tinggi.</p>
                <p className="text-muted-foreground mb-2"><em>In this type, water flows inside the tubes (water tubes), while hot gases from combustion circulate outside these tubes. This design allows for the production of steam at much higher pressures and temperatures.</em></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Kelebihan / Advantages:</strong> Mampu menghasilkan uap bertekanan sangat tinggi (di atas 60 bar), kapasitas uap besar, start-up lebih cepat, lebih efisien.</li>
                  <li className="text-muted-foreground"><em>Capable of generating very high-pressure steam (above 60 bar), large steam capacity, faster start-up, more efficient.</em></li>
                  <li><strong>Kekurangan / Disadvantages:</strong> Desain lebih kompleks, biaya lebih tinggi, membutuhkan kualitas air umpan yang sangat baik.</li>
                  <li className="text-muted-foreground"><em>More complex design, higher cost, requires excellent feedwater quality.</em></li>
                  <li><strong>Aplikasi / Application:</strong> Digunakan sebagai ketel uap utama (main boiler) pada kapal bertenaga uap (misalnya, kapal tanker LNG) dan kapal perang.</li>
                  <li className="text-muted-foreground"><em>Used as main boilers on steam-powered ships (e.g., LNG carriers) and naval vessels.</em></li>
                </ul>
              </div>
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">3. Komponen Utama & Perlengkapan Keselamatan / Main Components & Safety Fittings</h3>
            <p>Setiap boiler dilengkapi dengan berbagai perlengkapan (mountings/fittings) untuk memastikan operasi yang aman dan efisien.</p>
            <p className="text-muted-foreground mb-2"><em>Every boiler is equipped with various mountings/fittings to ensure safe and efficient operation.</em></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Safety Valves (Katup Keselamatan):</strong> Untuk melepaskan tekanan uap berlebih secara otomatis. Biasanya ada dua.</li>
              <li className="text-muted-foreground"><em>To automatically release excess steam pressure. Usually, there are two.</em></li>
              <li><strong>Main Steam Stop Valve (Katup Stop Uap Utama):</strong> Untuk mengontrol aliran uap dari boiler ke sistem.</li>
              <li className="text-muted-foreground"><em>To control the flow of steam from the boiler to the system.</em></li>
              <li><strong>Feed Check Valves (Katup Cek Umpan):</strong> Untuk mengontrol pasokan air umpan ke boiler dan mencegah aliran balik.</li>
              <li className="text-muted-foreground"><em>To control the supply of feedwater to the boiler and prevent backflow.</em></li>
              <li><strong>Water Level Gauge (Gelas Penduga Level Air):</strong> Untuk memantau level air di dalam boiler secara visual.</li>
              <li className="text-muted-foreground"><em>To visually monitor the water level inside the boiler.</em></li>
              <li><strong>Pressure Gauge (Pengukur Tekanan):</strong> Untuk menunjukkan tekanan uap di dalam boiler.</li>
              <li className="text-muted-foreground"><em>To indicate the steam pressure inside the boiler.</em></li>
              <li><strong>Blowdown Valve (Katup Buang):</strong> Untuk membuang endapan dan lumpur dari bagian bawah boiler.</li>
              <li className="text-muted-foreground"><em>To discharge sludge and sediment from the bottom of the boiler.</em></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Fokus Tata Bahasa / Grammar Focus</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">1. Modal Verbs for Safety & Obligation (must, should)</h3>
            <p className="mb-2">Kita menggunakan 'must' untuk kewajiban yang sangat penting dan 'should' untuk rekomendasi atau praktik terbaik. / We use 'must' for critical obligations and 'should' for recommendations or best practices.</p>
            <ul className="list-disc list-inside space-y-1 ml-4 bg-muted p-4 rounded-md">
              <li>"You <strong>must</strong> shut down the burner if you cannot see the water level." (Kewajiban)</li>
              <li>"The safety valves <strong>must</strong> be tested regularly." (Peraturan)</li>
              <li>"You <strong>should</strong> wear your PPE before performing a blowdown." (Rekomendasi kuat)</li>
              <li>"The boiler water <strong>should</strong> be tested daily." (Praktik terbaik)</li>
            </ul>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">2. Prepositions of Place (in, on, inside, outside)</h3>
            <p className="mb-2">Preposisi membantu kita menjelaskan lokasi komponen secara akurat. / Prepositions help us describe the location of components accurately.</p>
            <ul className="list-disc list-inside space-y-1 ml-4 bg-muted p-4 rounded-md">
              <li>"In a fire-tube boiler, hot gas flows <strong>inside</strong> the tubes."</li>
              <li>"In a water-tube boiler, water is <strong>in</strong> the tubes and hot gas is <strong>outside</strong>."</li>
              <li>"The safety valves are located <strong>on</strong> top of the steam drum."</li>
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
          <p className="font-semibold">Skenario: Chief Engineer sedang memberikan instruksi kepada Junior Engineer tentang pemeriksaan boiler bantu.</p>
          <p className="font-semibold text-muted-foreground"><em>Scenario: The Chief Engineer is giving instructions to a Junior Engineer about checking the auxiliary boiler.</em></p>

          <div className="space-y-2">
            <p><strong>Chief Engineer:</strong> "Junior, before we start the cargo heating, I need you to perform a routine check on the auxiliary boiler. First, check the water level in the gauge glass. What do you see?"</p>
            <p className="text-muted-foreground"><em>"Junior, sebelum kita mulai pemanasan kargo, saya mau kamu melakukan pemeriksaan rutin pada boiler bantu. Pertama, periksa level air di gelas penduga. Apa yang kamu lihat?"</em></p>
            <p><strong>Junior Engineer:</strong> "Chief, the water level is normal, about halfway up the glass. The pressure gauge reads 7 bar."</p>
            <p className="text-muted-foreground"><em>"Chief, level air normal, sekitar setengah dari gelas. Pengukur tekanan menunjukkan 7 bar."</em></p>
            <p><strong>Chief Engineer:</strong> "Good. That's the correct operating pressure for this fire-tube boiler. Now, I want you to test the safety valves. Just ease the lifting gear, don't pop them fully. We need to ensure they are not stuck."</p>
            <p className="text-muted-foreground"><em>"Bagus. Itu tekanan operasi yang benar untuk boiler pipa api ini. Sekarang, saya mau kamu menguji katup keselamatan. Cukup angkat tuasnya sedikit, jangan dibuka penuh. Kita perlu memastikan katupnya tidak macet."</em></p>
            <p><strong>Junior Engineer:</strong> "Understood, Chief. After that, should I perform a quick blowdown?"</p>
            <p className="text-muted-foreground"><em>"Dimengerti, Chief. Setelah itu, apakah saya perlu melakukan blowdown singkat?"</em></p>
            <p><strong>Chief Engineer:</strong> "Yes, a short scum blowdown and then a bottom blowdown. Just for a few seconds each. It's important to remove any impurities from the water surface and the bottom of the shell. Safety first, always wear your PPE."</p>
            <p className="text-muted-foreground"><em>"Ya, lakukan scum blowdown singkat lalu bottom blowdown. Cukup beberapa detik saja masing-masing. Penting untuk membuang kotoran dari permukaan air dan dasar shell. Utamakan keselamatan, selalu kenakan APD-mu."</em></p>
          </div>
        </CardContent>
      </Card>

      <FormativeQuiz topic="marine-boiler" />
    </div>
  );
};

export default TeachingMaterialMarineBoiler;