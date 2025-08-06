import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

export interface FormativeQuestion {
  id: string;
  topic: string;
  question: string;
  question_en: string;
  options: {
    [key: string]: {
      text: string;
      text_en: string;
    };
  };
  answer: string;
  explanation: string;
  explanation_en: string;
}

interface FormativeQuizProps {
  topic: string;
}

const FormativeQuiz: React.FC<FormativeQuizProps> = ({ topic }) => {
  const [questions, setQuestions] = useState<FormativeQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [revealedAnswers, setRevealedAnswers] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error } = await supabase
          .from('formative_questions')
          .select('*')
          .eq('topic', topic);

        if (error) {
          throw error;
        }
        setQuestions(data || []);
      } catch (err: any) {
        setError('Gagal memuat soal kuis. Silakan coba lagi.');
        console.error("Error fetching formative questions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [topic]);

  const handleValueChange = (questionId: string, value: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: value }));
    setRevealedAnswers(prev => ({ ...prev, [questionId]: true }));
  };

  const getOptionClass = (question: FormativeQuestion, optionKey: string) => {
    if (!revealedAnswers[question.id]) return "";
    if (optionKey === question.answer) return "bg-green-100 dark:bg-green-900/30";
    if (selectedAnswers[question.id] === optionKey) return "bg-red-100 dark:bg-red-900/30";
    return "";
  };

  const getIcon = (question: FormativeQuestion, optionKey: string) => {
    if (!revealedAnswers[question.id]) return null;
    if (optionKey === question.answer) return <CheckCircle2 className="h-5 w-5 text-green-600" />;
    if (selectedAnswers[question.id] === optionKey) return <XCircle className="h-5 w-5 text-red-600" />;
    return null;
  };

  return (
    <Card className="bg-card text-card-foreground shadow-lg mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Cek Pemahaman Anda / Check Your Understanding</CardTitle>
      </CardHeader>
      <CardContent>
        {loading && (
          <div className="flex items-center justify-center h-40">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-4 text-muted-foreground">Memuat soal...</p>
          </div>
        )}
        {error && <p className="text-destructive text-center">{error}</p>}
        {!loading && !error && (
          <div className="space-y-6">
            {questions.map((q, index) => (
              <div key={q.id}>
                <p className="font-semibold">{index + 1}. {q.question}</p>
                <p className="text-sm text-muted-foreground italic mb-3">{q.question_en}</p>
                <RadioGroup 
                  onValueChange={(value) => handleValueChange(q.id, value)} 
                  value={selectedAnswers[q.id] || ""}
                  disabled={revealedAnswers[q.id]}
                >
                  {Object.entries(q.options).map(([key, option]) => (
                    <div key={key} className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${getOptionClass(q, key)}`}>
                      <RadioGroupItem value={key} id={`${q.id}-${key}`} />
                      <Label htmlFor={`${q.id}-${key}`} className="flex-1 cursor-pointer">
                        {option.text} <em className="text-muted-foreground">({option.text_en})</em>
                      </Label>
                      {getIcon(q, key)}
                    </div>
                  ))}
                </RadioGroup>
                {revealedAnswers[q.id] && (
                  <div className="mt-3 p-3 rounded-lg bg-muted/50 border">
                    <p className="font-bold text-sm">Penjelasan / Explanation:</p>
                    <p className="text-sm">{q.explanation}</p>
                    <p className="text-sm text-muted-foreground italic">{q.explanation_en}</p>
                  </div>
                )}
              </div>
            ))}
            <div className="text-center">
                <Button variant="outline" onClick={() => {
                    setSelectedAnswers({});
                    setRevealedAnswers({});
                }}>
                    Coba Lagi / Try Again
                </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FormativeQuiz;