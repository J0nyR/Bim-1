import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { summativeQuestions } from '@/data/summativeQuestions';
import { Home } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import AppFooter from '@/components/AppFooter';

const SummativeTestAnswerKey = () => {
  const topics = ['Marine Engines', 'Marine Boiler', 'Shafting & Propeller', 'Other Auxiliaries'];

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
                const topicQuestions = summativeQuestions.filter(q => q.topic === topic);
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