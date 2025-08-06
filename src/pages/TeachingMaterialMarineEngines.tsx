import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import FormativeQuiz from '@/components/FormativeQuiz';
import { Button } from '@/components/ui/button';
import { BookText } from 'lucide-react';

const TeachingMaterialMarineEngines = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Materi Pembelajaran / Teaching Material
      </h1>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Topik: Marine Diesel Engines, Marine Steam Turbine and Marine Gas Turbine</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            Materi ini mencakup pengantar, glosarium, penjelasan mendalam tentang mesin diesel laut, turbin uap laut, dan turbin gas laut, serta contoh percakapan.
          </p>
          <p className="text-lg">
            This material includes an introduction, glossary, in-depth explanations of marine diesel engines, marine steam turbines, and marine gas turbines, as well as conversation examples.
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
              <p><strong>Propulsion System:</strong> Sistem propulsi kapal yang menghasilkan daya dorong.</p>
              <p className="text-muted-foreground"><em>Ship's propulsion system that generates thrust.</em></p>
            </div>
            <div>
              <p><strong>Combustion:</strong> Proses pembakaran bahan bakar untuk menghasilkan energi.</p>
              <p className="text-muted-foreground"><em>The process of burning fuel to produce energy.</em></p>
            </div>
            <div>
              <p><strong>Cylinder:</strong> Ruang di mana piston bergerak dan pembakaran terjadi.</p>
              <p className="text-muted-foreground"><em>A chamber where the piston moves and combustion occurs.</em></p>
            </div>
            <div>
              <p><strong>Piston:</strong> Komponen yang bergerak naik-turun di dalam silinder.</p>
              <p className="text-muted-foreground"><em>A component that moves up and down inside the cylinder.</em></p>
            </div>
            <div>
              <p><strong>Crankshaft:</strong> Poros yang mengubah gerakan linear piston menjadi gerakan rotasi.</p>
              <p className="text-muted-foreground"><em>A shaft that converts the linear motion of the piston into rotational motion.</em></p>
            </div>
            <div>
              <p><strong>Turbine:</strong> Mesin rotasi yang mengekstrak energi dari aliran fluida (uap atau gas).</p>
              <p className="text-muted-foreground"><em>A rotary engine that extracts energy from a fluid flow (steam or gas).</em></p>
            </div>
            <div>
              <p><strong>Boiler:</strong> Perangkat yang menghasilkan uap dengan memanaskan air.</p>
              <p className="text-muted-foreground"><em>A device that generates steam by heating water.</em></p>
            </div>
            <div>
              <p><strong>Condenser:</strong> Penukar panas yang mengubah uap menjadi air.</p>
              <p className="text-muted-foreground"><em>A heat exchanger that converts steam into water.</em></p>
            </div>
            <div>
              <p><strong>Compressor:</strong> Perangkat yang meningkatkan tekanan gas.</p>
              <p className="text-muted-foreground"><em>A device that increases the pressure of a gas.</em></p>
            </div>
            <div>
              <p><strong>Combustion Chamber:</strong> Ruang di mana bahan bakar dibakar dengan udara bertekanan.</p>
              <p className="text-muted-foreground"><em>A chamber where fuel is burned with compressed air.</em></p>
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
            <h3 className="text-xl font-medium mb-2">1. Mesin Diesel Laut / Marine Diesel Engines</h3>
            <p>Mesin diesel laut adalah mesin pembakaran internal yang menggunakan kompresi udara untuk menyalakan bahan bakar. Mesin ini sangat umum digunakan pada kapal karena efisiensinya yang tinggi dan torsi yang kuat.</p>
            <p className="text-muted-foreground mb-2"><em>Marine diesel engines are internal combustion engines that use compressed air to ignite fuel. They are widely used in ships due to their high efficiency and strong torque.</em></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Prinsip Kerja / Working Principle:</strong> Udara dikompresi hingga suhu tinggi, kemudian bahan bakar disemprotkan dan terbakar secara spontan.</li>
              <li className="text-muted-foreground"><em>Air is compressed to a high temperature, then fuel is injected and ignites spontaneously.</em></li>
              <li><strong>Komponen Utama / Main Components:</strong> Silinder, Piston, Batang Penghubung (Connecting Rod), Poros Engkol (Crankshaft), Sistem Injeksi Bahan Bakar, Sistem Buang, Sistem Pendingin, Sistem Pelumasan.</li>
              <li className="text-muted-foreground"><em>Cylinder, Piston, Connecting Rod, Crankshaft, Fuel Injection System, Exhaust System, Cooling System, Lubrication System.</em></li>
              <li><strong>Jenis / Types:</strong>
                <ul className="list-circle list-inside ml-4">
                  <li>2-Tak (Two-Stroke): Pembakaran terjadi setiap putaran poros engkol. Lebih sederhana, lebih ringan, daya per volume lebih tinggi.</li>
                  <li className="text-muted-foreground"><em>2-Stroke: Combustion occurs every crankshaft revolution. Simpler, lighter, higher power-to-volume ratio.</em></li>
                  <li>4-Tak (Four-Stroke): Pembakaran terjadi setiap dua putaran poros engkol (Intake, Compression, Power, Exhaust). Lebih efisien bahan bakar, emisi lebih rendah.</li>
                  <li className="text-muted-foreground"><em>4-Stroke: Combustion occurs every two crankshaft revolutions (Intake, Compression, Power, Exhaust). More fuel-efficient, lower emissions.</em></li>
                </ul>
              </li>
              <li><strong>Kelebihan / Advantages:</strong> Efisiensi bahan bakar tinggi, torsi besar, keandalan.</li>
              <li className="text-muted-foreground"><em>High fuel efficiency, high torque, reliability.</em></li>
              <li><strong>Kekurangan / Disadvantages:</strong> Getaran dan kebisingan, perawatan lebih kompleks.</li>
              <li className="text-muted-foreground"><em>Vibration and noise, more complex maintenance.</em></li>
            </ul>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">2. Turbin Uap Laut / Marine Steam Turbines</h3>
            <p>Turbin uap laut menggunakan uap bertekanan tinggi yang dihasilkan oleh boiler untuk memutar bilah turbin, yang kemudian menggerakkan poros baling-baling. Umumnya ditemukan pada kapal besar seperti kapal tanker dan kapal induk.</p>
            <p className="text-muted-foreground mb-2"><em>Marine steam turbines use high-pressure steam generated by a boiler to rotate turbine blades, which then drive the propeller shaft. Commonly found in large vessels like tankers and aircraft carriers.</em></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Prinsip Kerja / Working Principle:</strong> Air dipanaskan di boiler menjadi uap, uap mengembang melalui turbin, memutar bilah, lalu uap dikondensasi kembali menjadi air.</li>
              <li className="text-muted-foreground"><em>Water is heated in a boiler to steam, steam expands through the turbine, rotating the blades, then the steam is condensed back into water.</em></li>
              <li><strong>Komponen Utama / Main Components:</strong> Boiler (Ketel Uap), Turbin, Kondensor, Pompa Air Umpan (Feed Pump).</li>
              <li className="text-muted-foreground"><em>Boiler, Turbine, Condenser, Feed Pump.</em></li>
              <li><strong>Kelebihan / Advantages:</strong> Operasi yang halus dan minim getaran, dapat menggunakan berbagai jenis bahan bakar, daya tinggi.</li>
              <li className="text-muted-foreground"><em>Smooth and low-vibration operation, can use various types of fuel, high power output.</em></li>
              <li><strong>Kekurangan / Disadvantages:</strong> Kompleksitas sistem, waktu start-up yang lebih lama, efisiensi lebih rendah pada beban parsial.</li>
              <li className="text-muted-foreground"><em>System complexity, longer start-up time, lower efficiency at partial loads.</em></li>
            </ul>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">3. Turbin Gas Laut / Marine Gas Turbines</h3>
            <p>Turbin gas laut adalah mesin pembakaran internal rotasi yang menggunakan gas panas bertekanan tinggi untuk memutar turbin. Sering digunakan pada kapal perang dan kapal pesiar cepat karena rasio daya terhadap beratnya yang tinggi.</p>
            <p className="text-muted-foreground mb-2"><em>Marine gas turbines are rotary internal combustion engines that use high-pressure hot gas to rotate a turbine. Often used in warships and fast cruise ships due to their high power-to-weight ratio.</em></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Prinsip Kerja / Working Principle:</strong> Udara dikompresi, dicampur dengan bahan bakar dan dibakar di ruang bakar, gas panas yang dihasilkan memutar turbin.</li>
              <li className="text-muted-foreground"><em>Air is compressed, mixed with fuel and burned in a combustion chamber, the resulting hot gas rotates the turbine.</em></li>
              <li><strong>Komponen Utama / Main Components:</strong> Kompresor, Ruang Bakar (Combustion Chamber), Turbin.</li>
              <li className="text-muted-foreground"><em>Compressor, Combustion Chamber, Turbine.</em></li>
              <li><strong>Kelebihan / Advantages:</strong> Rasio daya terhadap berat yang tinggi, start-up cepat, getaran rendah.</li>
              <li className="text-muted-foreground"><em>High power-to-weight ratio, fast start-up, low vibration.</em></li>
              <li><strong>Kekurangan / Disadvantages:</strong> Efisiensi bahan bakar lebih rendah pada beban parsial, sensitif terhadap kualitas udara, biaya bahan bakar lebih tinggi.</li>
              <li className="text-muted-foreground"><em>Lower fuel efficiency at partial loads, sensitive to air quality, higher fuel costs.</em></li>
            </ul>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">Perbandingan Sistem Propulsi / Comparison of Propulsion Systems</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-background border border-border">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-border text-left">Fitur / Feature</th>
                    <th className="py-2 px-4 border-b border-border text-left">Mesin Diesel / Diesel Engine</th>
                    <th className="py-2 px-4 border-b border-border text-left">Turbin Uap / Steam Turbine</th>
                    <th className="py-2 px-4 border-b border-border text-left">Turbin Gas / Gas Turbine</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-border">Efisiensi Bahan Bakar / Fuel Efficiency</td>
                    <td className="py-2 px-4 border-b border-border">Tinggi / High</td>
                    <td className="py-2 px-4 border-b border-border">Sedang / Moderate</td>
                    <td className="py-2 px-4 border-b border-border">Sedang-Rendah / Moderate-Low</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-border">Ukuran & Berat / Size & Weight</td>
                    <td className="py-2 px-4 border-b border-border">Besar & Berat / Large & Heavy</td>
                    <td className="py-2 px-4 border-b border-border">Sangat Besar & Berat / Very Large & Heavy</td>
                    <td className="py-2 px-4 border-b border-border">Kompak & Ringan / Compact & Light</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-border">Waktu Start-up / Start-up Time</td>
                    <td className="py-2 px-4 border-b border-border">Cepat / Fast</td>
                    <td className="py-2 px-4 border-b border-border">Lama / Long</td>
                    <td className="py-2 px-4 border-b border-border">Sangat Cepat / Very Fast</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-border">Getaran & Kebisingan / Vibration & Noise</td>
                    <td className="py-2 px-4 border-b border-border">Sedang-Tinggi / Moderate-High</td>
                    <td className="py-2 px-4 border-b border-border">Rendah / Low</td>
                    <td className="py-2 px-4 border-b border-border">Rendah / Low</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-border">Jenis Bahan Bakar / Fuel Type</td>
                    <td className="py-2 px-4 border-b border-border">Diesel, HFO / Diesel, HFO</td>
                    <td className="py-2 px-4 border-b border-border">Beragam (HFO, Gas, Nuklir) / Various (HFO, Gas, Nuclear)</td>
                    <td className="py-2 px-4 border-b border-border">Diesel, Gas / Diesel, Gas</td>
                  </tr>
                </tbody>
              </table>
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
            <h3 className="text-xl font-medium mb-2">1. Simple Present Tense (for Functions and Facts)</h3>
            <p className="mb-2">Kita menggunakan Simple Present Tense untuk menjelaskan fungsi komponen dan fakta umum tentang cara kerja mesin. / We use the Simple Present Tense to explain the function of components and general facts about how machinery works.</p>
            <ul className="list-disc list-inside space-y-1 ml-4 bg-muted p-4 rounded-md">
              <li>"A crankshaft <strong>converts</strong> the linear motion of the piston into rotational motion."</li>
              <li>"A two-stroke engine <strong>completes</strong> its power cycle in one revolution."</li>
              <li>"Steam turbines <strong>use</strong> high-pressure steam to rotate the blades."</li>
            </ul>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-medium mb-2">2. Passive Voice (for Processes)</h3>
            <p className="mb-2">Kita sering menggunakan Passive Voice (Subject + to be + Verb 3) ketika fokusnya adalah pada prosesnya, bukan siapa yang melakukan tindakan. / We often use the Passive Voice (Subject + to be + Verb 3) when the focus is on the process, not who is doing the action.</p>
            <ul className="list-disc list-inside space-y-1 ml-4 bg-muted p-4 rounded-md">
              <li>"Air <strong>is compressed</strong> to a high temperature."</li>
              <li>"Fuel <strong>is injected</strong> into the cylinder."</li>
              <li>"Water <strong>is heated</strong> in a boiler to become steam."</li>
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
          <p className="font-semibold">Skenario: Dua perwira mesin sedang mendiskusikan jenis mesin utama di kapal mereka.</p>
          <p className="font-semibold text-muted-foreground"><em>Scenario: Two engineering officers are discussing the main engine types on their vessel.</em></p>

          <div className="space-y-2">
            <p><strong>Officer A:</strong> "Good morning, Chief. I was reviewing the engine specifications. Our vessel is equipped with a two-stroke marine diesel engine, correct?"</p>
            <p className="text-muted-foreground"><em>"Selamat pagi, Chief. Saya sedang meninjau spesifikasi mesin. Kapal kita dilengkapi dengan mesin diesel laut dua tak, benar?"</em></p>
            <p><strong>Officer B:</strong> "That's right, Officer. It's a reliable unit. Do you know the main difference between a two-stroke and a four-stroke engine?"</p>
            <p className="text-muted-foreground"><em>"Betul, Officer. Ini unit yang handal. Apakah Anda tahu perbedaan utama antara mesin dua tak dan empat tak?"</em></p>
            <p><strong>Officer A:</strong> "Yes, Chief. A two-stroke engine completes its power cycle in one crankshaft revolution, while a four-stroke takes two revolutions. Two-strokes are generally more powerful for their size, but four-strokes are often more fuel-efficient."</p>
            <p className="text-muted-foreground"><em>"Ya, Chief. Mesin dua tak menyelesaikan siklus dayanya dalam satu putaran poros engkol, sedangkan empat tak membutuhkan dua putaran. Mesin dua tak umumnya lebih bertenaga untuk ukurannya, tetapi empat tak seringkali lebih hemat bahan bakar."</em></p>
            <p><strong>Officer B:</strong> "Excellent. And what about steam turbines? Have you studied them?"</p>
            <p className="text-muted-foreground"><em>"Bagus sekali. Dan bagaimana dengan turbin uap? Apakah Anda sudah mempelajarinya?"</em></p>
            <p><strong>Officer A:</strong> "Yes, Chief. Steam turbines use high-pressure steam from a boiler to turn the turbine blades. They are known for their smooth operation and are common on large vessels like LNG carriers or older tankers. Gas turbines, on the other hand, are more compact and offer quick start-up, often found on fast ferries or naval ships."</p>
            <p className="text-muted-foreground"><em>"Ya, Chief. Turbin uap menggunakan uap bertekanan tinggi dari boiler untuk memutar bilah turbin. Mereka dikenal karena operasinya yang halus dan umum ditemukan pada kapal besar seperti kapal pengangkut LNG atau tanker tua. Turbin gas, di sisi lain, lebih kompak dan menawarkan start-up cepat, sering ditemukan pada feri cepat atau kapal angkatan laut."</em></p>
            <p><strong>Officer B:</strong> "Very good, Officer. It's crucial to understand the characteristics of each propulsion system. Keep up the good work."</p>
            <p className="text-muted-foreground"><em>"Sangat bagus, Officer. Penting untuk memahami karakteristik setiap sistem propulsi. Teruslah bekerja dengan baik."</em></p>
          </div>
        </CardContent>
      </Card>

      <FormativeQuiz topic="marine-engines" />
    </div>
  );
};

export default TeachingMaterialMarineEngines;