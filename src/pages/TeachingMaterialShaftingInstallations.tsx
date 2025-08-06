import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormativeQuiz from '@/components/FormativeQuiz';
import { Button } from '@/components/ui/button';
import { BookText } from 'lucide-react';
import TeachingContentDisplay from '@/components/TeachingContentDisplay';

const TeachingMaterialShaftingInstallations = () => {
  const topicId = "shafting-installations";

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Materi Pembelajaran / Teaching Material
      </h1>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Topik: Shafting Installations and Propeller</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Materi ini mencakup pengantar sistem poros, glosarium, penjelasan komponen utama, jenis-jenis baling-baling, dan contoh percakapan.
          </p>
        </CardContent>
      </Card>

      <TeachingContentDisplay topicId={topicId} />

      <div className="text-center">
        <Button asChild variant="outline" className="w-full md:w-auto">
          <Link to="/grammar-reference">
            <BookText className="mr-2 h-4 w-4" />
            Lihat Referensi Tata Bahasa Lengkap
          </Link>
        </Button>
      </div>

      <FormativeQuiz topic={topicId} />
    </div>
  );
};

export default TeachingMaterialShaftingInstallations;