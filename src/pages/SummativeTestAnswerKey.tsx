import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Home, Loader2 } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import AppFooter from '@/components/AppFooter';
import { supabase } from '@/integrations/supabase/client';
import { Question } from './SummativeTest'; // Import the Question type

const SummativeTestAnswerKey = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data, error } = await supabase
          .from('summative_questions')
          .select('*')
          .order('id', { ascending: true });

        if (error) {
          throw error;
        }
        setQuestions(data);
      } catch (err: any) {
        setError('Gagal memuat kunci jawaban. Silakan coba lagi nanti.');
        console.error("Error fetching questions for answer key:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const topics = [...new Set(questions.map(q => q.topic))];

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">Memuat kunci jawaban...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-2xl font-semibold text-destructive mb-4">Terjadi Kesalahan</h2>
        <p className="text-muted-foreground mb-6">{error}</p>
        <Button asChild>
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Kembali ke Home
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col min-h-screen">
        <div className="absolute top-6 right-6 z-50 hide-on-print">
            <ThemeToggle />
        </div>
        <div className="flex-1 container mx-auto p-6 space-y-8">
            <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
                <h1 className="text-4xl font-bold text-primary">
                Kunci Jawaban Ujian Sumatif
                </h1>
                <Button asChild variant="outline">
                <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Kembali ke Home
                </Link>
                </Button>
            </div>

            {topics.map(topic => {
                const topicQuestions = questions.filter(q => q.topic === topic);
                if (topicQuestions.length === 0) return null;
                return (
                <Card key={topic} className="bg-card text-card-foreground shadow-lg">
                    <CardHeader>
                    <CardTitle className="text-2xl font-semibold">{topic} ({topicQuestions.length} questions)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                    {topicQuestions.map((q) => (
                        <div key={q.id} className="border-b pb-2">
                        <p className="font-semibold">
                            {q.id}. {q.question}
                        </p>
                        <p className="text-green-600 dark:text-green-400">
                            <strong>Jawaban: {q.answer}.</strong> {q.options[q.answer].text}
                        </p>
                        <p className="text-green-600 dark:text-green-400 italic text-sm">
                            <em>Answer: {q.answer}. {q.options[q.answer].text_en}</em>
                        </p>
                        </div>
                    ))}
                    </CardContent>
                </Card>
                );
            })}
        </div>
        <AppFooter />
    </div>
  );
};

export default SummativeTestAnswerKey;