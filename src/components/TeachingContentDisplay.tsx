import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from 'lucide-react';

interface TeachingContent {
  id: number;
  topic_id: string;
  section_order: number;
  section_title: string;
  section_title_en: string | null;
  content: any; // JSONB content
}

interface TeachingContentDisplayProps {
  topicId: string;
}

const TeachingContentDisplay: React.FC<TeachingContentDisplayProps> = ({ topicId }) => {
  const [content, setContent] = useState<TeachingContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error } = await supabase
          .from('teaching_content')
          .select('*')
          .eq('topic_id', topicId)
          .order('section_order', { ascending: true });

        if (error) throw error;
        setContent(data || []);
      } catch (err: any) {
        setError('Gagal memuat materi pembelajaran.');
        console.error("Error fetching teaching content:", err);
      } finally {
        setLoading(false);
      }
    };

    if (topicId) {
      fetchContent();
    }
  }, [topicId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="ml-4 text-muted-foreground">Memuat materi...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-destructive text-center">{error}</p>;
  }

  const renderContent = (section: TeachingContent) => {
    const { type } = section.content;

    switch (type) {
      case 'glossary':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.content.terms.map((item: any, index: number) => (
              <div key={index}>
                <p><strong>{item.term}:</strong> {item.def}</p>
                <p className="text-muted-foreground"><em>{item.def_en}</em></p>
              </div>
            ))}
          </div>
        );
      
      case 'concepts':
        return (
          <div className="space-y-6">
            {section.content.items.map((item: any, index: number) => (
              <React.Fragment key={index}>
                <div>
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  {item.paragraphs?.map((p: string, pIndex: number) => (
                    <p key={pIndex} className={pIndex % 2 === 1 ? "text-muted-foreground mb-2" : "mb-2"}><em>{p}</em></p>
                  ))}
                  {item.points && (
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {item.points.map((point: any, ptIndex: number) => (
                        <li key={ptIndex}>
                          <span dangerouslySetInnerHTML={{ __html: point.main }} />
                          {point.en && <em className="text-muted-foreground block"><span dangerouslySetInnerHTML={{ __html: point.en }} /></em>}
                          {point.sub_points && (
                            <ul className="list-circle list-inside ml-6">
                              {point.sub_points.map((sub: any, spIndex: number) => (
                                <li key={spIndex}>
                                  <span dangerouslySetInnerHTML={{ __html: sub.main }} />
                                  {sub.en && <em className="text-muted-foreground block"><span dangerouslySetInnerHTML={{ __html: sub.en }} /></em>}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.sub_sections && item.sub_sections.map((subSection: any, ssIndex: number) => (
                     <div key={ssIndex} className="mt-4">
                        <h4 className="font-semibold text-lg">{subSection.title}</h4>
                        {subSection.paragraphs?.map((p: string, pIndex: number) => (
                            <p key={pIndex} className={pIndex % 2 === 1 ? "text-muted-foreground mb-2" : "mb-2"}><em>{p}</em></p>
                        ))}
                        {subSection.points && (
                            <ul className="list-disc list-inside space-y-1 ml-4">
                            {subSection.points.map((point: any, ptIndex: number) => (
                                <li key={ptIndex}>
                                <span dangerouslySetInnerHTML={{ __html: point.main }} />
                                {point.en && <em className="text-muted-foreground block"><span dangerouslySetInnerHTML={{ __html: point.en }} /></em>}
                                </li>
                            ))}
                            </ul>
                        )}
                     </div>
                  ))}
                </div>
                {index < section.content.items.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        );

      case 'comparison_table':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-background border border-border">
              <thead>
                <tr>
                  {section.content.headers.map((header: string, index: number) => (
                    <th key={index} className="py-2 px-4 border-b border-border text-left">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.content.rows.map((row: string[], rIndex: number) => (
                  <tr key={rIndex}>
                    {row.map((cell: string, cIndex: number) => (
                      <td key={cIndex} className="py-2 px-4 border-b border-border">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'grammar':
        return (
          <div className="space-y-6">
            {section.content.items.map((item: any, index: number) => (
              <React.Fragment key={index}>
                <div>
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="mb-2">{item.explanation}</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 bg-muted p-4 rounded-md">
                    {item.examples.map((ex: string, exIndex: number) => (
                      <li key={exIndex} dangerouslySetInnerHTML={{ __html: ex }} />
                    ))}
                  </ul>
                </div>
                {index < section.content.items.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        );

      case 'conversation':
        return (
          <div className="space-y-4">
            <p className="font-semibold">{section.content.scenario}</p>
            <p className="font-semibold text-muted-foreground"><em>{section.content.scenario_en}</em></p>
            <div className="space-y-2">
              {section.content.lines.map((line: any, index: number) => (
                <p key={index}>
                  <strong>{line.speaker}:</strong> {line.dialogue}
                  <br />
                  <em className="text-muted-foreground">{line.dialogue_en}</em>
                </p>
              ))}
            </div>
          </div>
        );

      default:
        return <p>Tipe konten tidak dikenali.</p>;
    }
  };

  return (
    <div className="space-y-8">
      {content.map((section) => (
        <Card key={section.id} className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">{section.section_title}</CardTitle>
            {section.section_title_en && <p className="text-muted-foreground">{section.section_title_en}</p>}
          </CardHeader>
          <CardContent>
            {renderContent(section)}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TeachingContentDisplay;