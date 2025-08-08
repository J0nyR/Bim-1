import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Home, BookText } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GrammarReference = () => {
  return (
    <div className="relative flex flex-col flex-1">
        <div className="absolute top-6 right-6 z-50 hide-on-print">
            <ThemeToggle />
        </div>
        <div className="flex-1 container mx-auto p-6 space-y-8">
            <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
                <h1 className="text-4xl font-bold text-primary flex items-center">
                    <BookText className="mr-4 h-10 w-10" />
                    Referensi Tata Bahasa Lengkap
                </h1>
                <Button asChild variant="outline">
                <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Kembali ke Home
                </Link>
                </Button>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              
              {/* Tenses Section */}
              <AccordionItem value="item-1" className="border rounded-lg">
                <AccordionTrigger className="p-4 text-lg font-semibold">English Tenses</AccordionTrigger>
                <AccordionContent className="p-4 pt-0 space-y-4">
                  
                  <Card>
                    <CardHeader><CardTitle>Simple Present Tense</CardTitle></CardHeader>
                    <CardContent>
                      <p className="mb-2"><strong>Penggunaan:</strong> Untuk fakta, kebiasaan, dan fungsi mesin. / For facts, routines, and machinery functions.</p>
                      <p className="mb-2"><strong>Struktur:</strong> Subject + Verb(s/es) + ...</p>
                      <ul className="list-disc list-inside ml-4 bg-muted p-3 rounded-md">
                        <li>"The main engine <strong>drives</strong> the propeller."</li>
                        <li>"The purifier <strong>removes</strong> water from the fuel."</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader><CardTitle>Present Continuous Tense</CardTitle></CardHeader>
                    <CardContent>
                      <p className="mb-2"><strong>Penggunaan:</strong> Untuk tindakan yang sedang berlangsung sekarang. / For actions happening right now.</p>
                      <p className="mb-2"><strong>Struktur:</strong> Subject + am/is/are + Verb-ing + ...</p>
                      <ul className="list-disc list-inside ml-4 bg-muted p-3 rounded-md">
                        <li>"The generator <strong>is running</strong> smoothly."</li>
                        <li>"The engineers <strong>are checking</strong> the pressure."</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader><CardTitle>Simple Past Tense</CardTitle></CardHeader>
                    <CardContent>
                      <p className="mb-2"><strong>Penggunaan:</strong> Untuk tindakan yang selesai di masa lalu. / For actions completed in the past.</p>
                      <p className="mb-2"><strong>Struktur:</strong> Subject + Verb 2 (past form) + ...</p>
                      <ul className="list-disc list-inside ml-4 bg-muted p-3 rounded-md">
                        <li>"We <strong>cleaned</strong> the filters yesterday."</li>
                        <li>"The alarm <strong>sounded</strong> five minutes ago."</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader><CardTitle>Future Tense (will)</CardTitle></CardHeader>
                    <CardContent>
                      <p className="mb-2"><strong>Penggunaan:</strong> Untuk tindakan atau keputusan di masa depan. / For future actions or decisions.</p>
                      <p className="mb-2"><strong>Struktur:</strong> Subject + will + Verb 1 + ...</p>
                      <ul className="list-disc list-inside ml-4 bg-muted p-3 rounded-md">
                        <li>"The Chief Engineer <strong>will inspect</strong> the engine tomorrow."</li>
                        <li>"We <strong>will start</strong> the second generator soon."</li>
                      </ul>
                    </CardContent>
                  </Card>

                </AccordionContent>
              </AccordionItem>

              {/* Passive Voice Section */}
              <AccordionItem value="item-2" className="border rounded-lg">
                <AccordionTrigger className="p-4 text-lg font-semibold">Active vs. Passive Voice</AccordionTrigger>
                <AccordionContent className="p-4 pt-0">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="mb-2"><strong>Active Voice:</strong> Subjek melakukan tindakan. Fokus pada pelaku. / The subject performs the action. Focus is on the doer.</p>
                      <p className="mb-4 ml-4 bg-muted p-3 rounded-md">"The turbocharger <strong>compresses</strong> the air."</p>
                      <p className="mb-2"><strong>Passive Voice:</strong> Subjek menerima tindakan. Fokus pada proses atau objek. / The subject receives the action. Focus is on the process or object.</p>
                      <p className="mb-2 ml-4 bg-muted p-3 rounded-md">"The air <strong>is compressed</strong> by the turbocharger."</p>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>

              {/* Modal Verbs Section */}
              <AccordionItem value="item-3" className="border rounded-lg">
                <AccordionTrigger className="p-4 text-lg font-semibold">Modal Verbs</AccordionTrigger>
                <AccordionContent className="p-4 pt-0 space-y-4">
                  <Card>
                    <CardHeader><CardTitle>Must / Should (Kewajiban & Rekomendasi)</CardTitle></CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside ml-4 bg-muted p-3 rounded-md">
                        <li>"You <strong>must</strong> wear PPE." (Kewajiban)</li>
                        <li>"You <strong>should</strong> check the oil level daily." (Rekomendasi)</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader><CardTitle>Can / Could (Kemampuan & Kemungkinan)</CardTitle></CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside ml-4 bg-muted p-3 rounded-md">
                        <li>"This pump <strong>can</strong> deliver 100 cubic meters per hour." (Kemampuan)</li>
                        <li>"The noise <strong>could</strong> be a sign of a bearing problem." (Kemungkinan)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>

              {/* Conditionals Section */}
              <AccordionItem value="item-4" className="border rounded-lg">
                <AccordionTrigger className="p-4 text-lg font-semibold">Conditional Sentences (If Clauses)</AccordionTrigger>
                <AccordionContent className="p-4 pt-0 space-y-4">
                  <Card>
                    <CardHeader><CardTitle>Zero Conditional (Fakta Ilmiah)</CardTitle></CardHeader>
                    <CardContent>
                      <p className="mb-2"><strong>Struktur:</strong> If + Simple Present, ... Simple Present.</p>
                      <p className="ml-4 bg-muted p-3 rounded-md">"If you <strong>heat</strong> water to 100 degrees, it <strong>boils</strong>."</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader><CardTitle>First Conditional (Kemungkinan Nyata di Masa Depan)</CardTitle></CardHeader>
                    <CardContent>
                      <p className="mb-2"><strong>Struktur:</strong> If + Simple Present, ... will + Verb 1.</p>
                      <p className="ml-4 bg-muted p-3 rounded-md">"If the alarm <strong>sounds</strong>, we <strong>will check</strong> the system."</p>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>

              {/* Other Structures Section */}
              <AccordionItem value="item-5" className="border rounded-lg">
                <AccordionTrigger className="p-4 text-lg font-semibold">Other Important Structures</AccordionTrigger>
                <AccordionContent className="p-4 pt-0 space-y-4">
                  <Card>
                    <CardHeader><CardTitle>Gerunds and Infinitives of Purpose</CardTitle></CardHeader>
                    <CardContent>
                      <p className="mb-2"><strong>Gerund (Verb-ing)</strong> sebagai subjek untuk menamai proses. / As a subject to name a process.</p>
                      <p className="mb-4 ml-4 bg-muted p-3 rounded-md">"<strong>Pumping</strong> liquids is the function of a pump."</p>
                      <p className="mb-2"><strong>Infinitive (to + verb)</strong> untuk menyatakan tujuan. / To state a purpose.</p>
                      <p className="mb-2 ml-4 bg-muted p-3 rounded-md">"We use a heat exchanger <strong>to cool</strong> the oil."</p>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
        </div>
    </div>
  );
};

export default GrammarReference;