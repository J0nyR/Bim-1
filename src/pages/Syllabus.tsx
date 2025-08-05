import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Home, BookCopy, Target, Calendar, Users, FileText, Percent, GraduationCap } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import Watermark from '@/components/Watermark';

const Syllabus = () => {
  return (
    <div className="relative">
        <Watermark />
        <div className="absolute top-6 right-6 z-50 hide-on-print">
            <ThemeToggle />
        </div>
        <div className="container mx-auto p-6 space-y-8">
            <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
                <h1 className="text-4xl font-bold text-primary">
                Silabus Mata Pelajaran
                </h1>
                <Button asChild variant="outline">
                <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Kembali ke Home
                </Link>
                </Button>
            </div>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl font-semibold"><BookCopy className="mr-3 h-6 w-6 text-primary" />Identitas Mata Pelajaran</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 pl-12">
                    <p><strong>Mata Pelajaran:</strong> Bahasa Inggris Maritim</p>
                    <p><strong>Program Studi:</strong> Teknika Kapal Niaga</p>
                    <p><strong>Kelas / Semester:</strong> X / Ganjil & Genap</p>
                    <p><strong>Alokasi Waktu:</strong> 17 Pertemuan @ 2 Jam Pelajaran (2 x 45 menit) per semester</p>
                </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl font-semibold"><Target className="mr-3 h-6 w-6 text-primary" />Kompetensi Inti (KI) & Kompetensi Dasar (KD)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pl-12">
                    <div>
                        <h3 className="text-lg font-medium">Kompetensi Inti (KI):</h3>
                        <ul className="list-disc list-inside space-y-1 mt-1 text-muted-foreground">
                            <li><strong>KI-3 (Pengetahuan):</strong> Memahami, menerapkan, menganalisis pengetahuan faktual, konseptual, prosedural dalam ilmu pengetahuan, teknologi, dan humaniora dengan wawasan kemanusiaan, kebangsaan, kenegaraan, dan peradaban terkait fenomena dan kejadian di lingkungan kerja permesinan kapal.</li>
                            <li><strong>KI-4 (Keterampilan):</strong> Mengolah, menalar, dan menyaji dalam ranah konkret dan abstrak terkait dengan pengembangan dari yang dipelajarinya di sekolah secara mandiri, dan mampu menggunakan metoda sesuai kaidah keilmuan dalam konteks komunikasi teknis di kamar mesin.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Kompetensi Dasar (KD):</h3>
                        <ul className="list-disc list-inside space-y-1 mt-1">
                            <li><strong>3.1</strong> Menerapkan penggunaan Bahasa Inggris Maritim untuk menjelaskan fungsi, komponen, dan operasi dasar permesinan kapal.</li>
                            <li><strong>4.1</strong> Melakukan komunikasi teknis sederhana menggunakan Bahasa Inggris Maritim terkait tugas-tugas di kamar mesin.</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl font-semibold"><GraduationCap className="mr-3 h-6 w-6 text-primary" />Materi Pembelajaran</CardTitle>
                </CardHeader>
                <CardContent className="pl-12">
                    <p>Kursus ini dibagi menjadi beberapa sub-topik utama sesuai IMO Model Course 7.04:</p>
                    <ul className="list-decimal list-inside space-y-2 mt-2">
                        <li>
                            <strong>Marine diesel engines, marine steam turbine and marine gas turbine:</strong>
                            <p className="text-sm text-muted-foreground ml-6">Mempelajari prinsip kerja, komponen, serta kelebihan dan kekurangan dari setiap jenis mesin penggerak utama.</p>
                        </li>
                        <li>
                            <strong>Marine boiler:</strong>
                            <p className="text-sm text-muted-foreground ml-6">Memahami jenis, komponen, perlengkapan keselamatan, dan operasi dasar ketel uap kapal.</p>
                        </li>
                        <li>
                            <strong>Shafting installations and propeller:</strong>
                            <p className="text-sm text-muted-foreground ml-6">Mempelajari sistem transmisi daya dari mesin ke baling-baling, termasuk komponen poros dan jenis-jenis baling-baling.</p>
                        </li>
                        <li>
                            <strong>Other auxiliaries:</strong>
                            <p className="text-sm text-muted-foreground ml-6">Mencakup berbagai mesin bantu vital seperti pompa, kompresor, pemurni, generator air tawar, penukar panas, sistem refrigerasi, dan pembangkit listrik.</p>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl font-semibold"><Calendar className="mr-3 h-6 w-6 text-primary" />Alokasi Waktu & Jadwal Pertemuan</CardTitle>
                </CardHeader>
                <CardContent className="pl-12 space-y-2">
                    <p><strong>Pertemuan 1:</strong> Pengantar, Kontrak Belajar, dan Pre-Test</p>
                    <p><strong>Pertemuan 2-3:</strong> Modul 1.1 - Marine Engines (Diesel, Steam, Gas)</p>
                    <p><strong>Pertemuan 4-5:</strong> Modul 1.2 - Marine Boiler</p>
                    <p><strong>Pertemuan 6:</strong> Review & Latihan Praktis Modul 1.1 & 1.2</p>
                    <p><strong>Pertemuan 7-8:</strong> Modul 1.3 - Shafting Installations & Propeller</p>
                    <p><strong>Pertemuan 9:</strong> Ujian Formatif Tengah Semester</p>
                    <p><strong>Pertemuan 10-11:</strong> Modul 1.4 - Other Auxiliaries (Part 1: Pumps, Compressors, Purifiers)</p>
                    <p><strong>Pertemuan 12-13:</strong> Modul 1.4 - Other Auxiliaries (Part 2: FWG, Heat Exchangers, Refrigeration)</p>
                    <p><strong>Pertemuan 14:</strong> Review & Latihan Praktis Modul 1.3 & 1.4</p>
                    <p><strong>Pertemuan 15-16:</strong> Studi Kasus Terintegrasi & Persiapan Ujian Akhir</p>
                    <p><strong>Pertemuan 17:</strong> Review Final & Pembahasan Kisi-kisi Ujian Sumatif</p>
                    <p><strong>Minggu ke-18:</strong> Ujian Sumatif Akhir Semester</p>
                </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl font-semibold"><Users className="mr-3 h-6 w-6 text-primary" />Metode Pembelajaran</CardTitle>
                </CardHeader>
                <CardContent className="pl-12 space-y-2">
                    <p>Pendekatan pembelajaran menggunakan metode <strong>Deep Learning</strong> dan <strong>Contextual Teaching and Learning (CTL)</strong>, yang mencakup:</p>
                    <ul className="list-disc list-inside space-y-1 mt-1">
                        <li><strong>Presentasi & Diskusi:</strong> Penjelasan konsep diikuti dengan diskusi kelas.</li>
                        <li><strong>Studi Kasus & Analisis Skenario:</strong> Menganalisis masalah operasional hipotetis.</li>
                        <li><strong>Pembelajaran Berbasis Perangkat Ajar Digital:</strong> Menggunakan aplikasi ini sebagai media utama untuk materi, latihan, dan penilaian.</li>
                        <li><strong>Kuis Formatif Interaktif:</strong> Pengecekan pemahaman di akhir setiap modul.</li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl font-semibold"><FileText className="mr-3 h-6 w-6 text-primary" />Sumber Belajar</CardTitle>
                </CardHeader>
                <CardContent className="pl-12 space-y-2">
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Utama:</strong> Perangkat Ajar Digital Bahasa Inggris Maritim Teknika 1 (Aplikasi ini).</li>
                        <li><strong>Referensi:</strong> IMO Model Course 7.04, SOLAS, STCW Manila Amendments 2010.</li>
                        <li><strong>Pendukung:</strong> Video animasi operasi mesin dari platform online (YouTube, dll.), diagram teknis, dan manual mesin.</li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl font-semibold"><Percent className="mr-3 h-6 w-6 text-primary" />Strategi & Bobot Penilaian</CardTitle>
                </CardHeader>
                <CardContent className="pl-12">
                    <p>Penilaian bersifat komprehensif, mencakup aspek pengetahuan, keterampilan, dan sikap dengan rincian sebagai berikut:</p>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                        <li><strong>Penilaian Formatif (40%):</strong>
                            <ul className="list-circle list-inside ml-6 text-muted-foreground">
                                <li>Pengerjaan Lembar Kerja Siswa (Worksheet) per modul.</li>
                                <li>Skor dari Kuis Pemahaman di setiap akhir materi ajar.</li>
                                <li>Ujian Formatif Tengah Semester.</li>
                            </ul>
                        </li>
                        <li><strong>Partisipasi & Sikap (20%):</strong>
                            <ul className="list-circle list-inside ml-6 text-muted-foreground">
                                <li>Keaktifan dalam diskusi dan analisis skenario.</li>
                                <li>Sikap dan etika selama proses pembelajaran.</li>
                            </ul>
                        </li>
                        <li><strong>Penilaian Sumatif (40%):</strong>
                            <ul className="list-circle list-inside ml-6 text-muted-foreground">
                                <li>Skor dari Ujian Akhir yang mencakup seluruh materi.</li>
                                <li>
                                    <Link to="/summative-test" className="text-blue-500 hover:underline">
                                        Klik di sini untuk menuju Ujian Sumatif
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    </div>
  );
};

export default Syllabus;