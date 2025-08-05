import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { summativeQuestions, Question } from '@/data/summativeQuestions';
import { Home } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import Watermark from '@/components/Watermark';

const SummativeTest = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showAnswers, setShowAnswers] = useState(false);

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const getQuestionResultClass = (question: Question) => {
    if (!showAnswers) return "";
    if (answers[question.id] === undefined) return "border-gray-400";
    return answers[question.id] === question.answer ? "border-green-500" : "border-red-500";
  };
  
  const calculateScore = () => {
    if (!showAnswers) return null;
    const correctAnswers = summativeQuestions.filter(q => answers[q.id] === q.answer).length;
    const totalQuestions = summativeQuestions.length;
    const score = (correctAnswers / totalQuestions) * 100;
    return {
      correct: correctAnswers,
      total: totalQuestions,
      percentage: score.toFixed(2)
    };
  };

  const score = calculateScore();

  return (
    <div className="relative">
        <Watermark />
        <div className="absolute top-6 right-6 z-50 hide-on-print">
            <ThemeToggle />
        </div>
        <div className="container mx-auto p-6 space-y-8">
            <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
                <h1 className="text-4xl font-bold text-primary">
                Ujian Sumatif
                </h1>
                <Button asChild variant="outline">
                <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Kembali ke Home
                </Link>
                </Button>
            </div>

            {showAnswers && score && (
                <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold">Hasil Ujian Anda</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">
                    Anda menjawab dengan benar <strong>{score.correct}</strong> dari <strong>{score.total}</strong> pertanyaan.
                    </p>
                    <p className="text-2xl font-bold text-primary">
                    Skor Akhir: {score.percentage}%
                    </p>
                </CardContent>
                </Card>
            )}

            <div className="space-y-6">
                {summativeQuestions.map((q, index) => (
                <Card key={q.id} className={`bg-card text-card-foreground shadow-lg transition-all border-2 ${getQuestionResultClass(q)}`}>
                    <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                        Pertanyaan {index + 1}
                    </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="mb-1 font-medium">{q.question}</p>
                    <p className="text-muted-foreground mb-4 italic">{q.question_en}</p>
                    <RadioGroup onValueChange={(value) => handleAnswerChange(q.id, value)} value={answers[q.id] || ""} disabled={showAnswers}>
                        {Object.entries(q.options).map(([key, option]) => (
                        <div key={key} className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent">
                            <RadioGroupItem value={key} id={`${q.id}-${key}`} />
                            <Label htmlFor={`${q.id}-${key}`} className="flex-1 cursor-pointer">
                            {key}. {option.text} <em className="text-muted-foreground">({option.text_en})</em>
                            </Label>
                        </div>
                        ))}
                    </RadioGroup>
                    {showAnswers && (
                        <div className="mt-4 p-3 rounded-lg bg-muted">
                        <p className="font-bold">
                            Jawaban Benar: {q.answer}. {q.options[q.answer].text}
                        </p>
                        <p className="font-bold text-muted-foreground">
                            <em>Correct Answer: {q.answer}. {q.options[q.answer].text_en}</em>
                        </p>
                        </div>
                    )}
                    </CardContent>
                </Card>
                ))}
            </div>

            <div className="text-center mt-8 space-x-4">
                <Button onClick={() => setShowAnswers(!showAnswers)} size="lg">
                {showAnswers ? "Sembunyikan Jawaban" : "Koreksi & Lihat Jawaban"}
                </Button>
                <Button asChild variant="secondary" size="lg">
                <Link to="/summative-test-answer-key">
                    Buka Halaman Kunci Jawaban
                </Link>
                </Button>
            </div>
        </div>
    </div>
  );
};

export default SummativeTest;