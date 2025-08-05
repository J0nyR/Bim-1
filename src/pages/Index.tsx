{/* This comment is added to trigger a new sync to GitHub. */}
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teachingModules } from "@/data/modules";
import { Book, ClipboardCheck, Ship, BookOpen, BookText } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute top-4 right-4 z-30 hide-on-print">
        <ThemeToggle />
      </div>
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/engine-room-bg.svg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-background/80" />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center mb-4">
            <Ship className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            Perangkat Ajar Bahasa Inggris Maritim Teknika 1
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Teknika Kapal Niaga - Tingkat Operasional
          </p>
        </div>

        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Learning Modules Card */}
          <Card className="md:col-span-2 bg-card/80 backdrop-blur-sm border-border/20 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold">Modul Pembelajaran / Learning Modules</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teachingModules.map((module) => (
                <Button
                  key={module.id}
                  asChild
                  className="w-full py-3 text-base h-auto"
                  variant={module.status === 'coming-soon' ? 'secondary' : 'default'}
                  disabled={module.status === 'coming-soon'}
                >
                  <Link to={module.entryPath}>
                    <div className="flex flex-col items-center text-center">
                      <span>{module.title}</span>
                      <span className="text-xs font-normal opacity-80">
                        {module.englishTitle} {module.status === 'coming-soon' && '(Coming Soon)'}
                      </span>
                    </div>
                  </Link>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Student Handbook Card */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/20 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl font-semibold">Buku Saku Taruna</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant="default" className="w-full py-3 text-base h-auto">
                <Link to="/student-handbook">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Buka Buku Saku
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Grammar Reference Card */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/20 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl font-semibold">Referensi Tata Bahasa</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant="default" className="w-full py-3 text-base h-auto">
                <Link to="/grammar-reference">
                  <BookText className="mr-2 h-5 w-5" />
                  Buka Referensi
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Syllabus Card */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/20 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl font-semibold">Silabus</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full py-3 text-base h-auto">
                <Link to="/syllabus">
                  <Book className="mr-2 h-5 w-5" />
                  Lihat Silabus
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Assessment Card */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/20 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl font-semibold">Ujian Akhir</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full py-3 text-base h-auto">
                <Link to="/summative-test">
                  <ClipboardCheck className="mr-2 h-5 w-5" />
                  Mulai Ujian Sumatif
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="absolute bottom-0 hide-on-print">
          <MadeWithDyad />
        </div>
      </div>
    </div>
  );
};

export default Index;