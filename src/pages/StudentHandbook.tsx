import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, BookOpen } from 'lucide-react';
import { teachingModules } from '@/data/modules';
import { ThemeToggle } from '@/components/ThemeToggle';
import TeachingContentDisplay from '@/components/TeachingContentDisplay';

type ChapterId = 'marine-engines' | 'marine-boiler' | 'shafting-installations' | 'other-auxiliaries';

const StudentHandbook = () => {
  const [activeChapter, setActiveChapter] = useState<ChapterId>('marine-engines');

  const activeModule = teachingModules.find(m => m.id === activeChapter);

  return (
    <div className="flex flex-1">
      {/* Sidebar / Table of Contents */}
      <aside className="hidden md:flex flex-col w-72 flex-shrink-0 border-r bg-card p-4 hide-on-print">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold tracking-tight px-4 flex items-center">
            <BookOpen className="mr-3 h-6 w-6" />
            Buku Saku
          </h2>
          <nav className="flex flex-col space-y-1">
            {teachingModules.map((module) => (
              <Button
                key={module.id}
                variant={activeChapter === module.id ? "secondary" : "ghost"}
                className="justify-start h-auto py-3"
                onClick={() => setActiveChapter(module.id as ChapterId)}
                disabled={module.status === 'coming-soon'}
              >
                <div className="flex flex-col items-start">
                  <span>{module.title}</span>
                  <span className="text-xs font-normal text-muted-foreground">{module.englishTitle}</span>
                </div>
              </Button>
            ))}
          </nav>
          <hr />
          <Button asChild variant="outline" className="justify-start">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Kembali ke Home
            </Link>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto relative">
        <div className="absolute top-6 right-8 z-50 hide-on-print">
            <ThemeToggle />
        </div>
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary">{activeModule?.title}</h1>
            <p className="text-xl text-muted-foreground">{activeModule?.englishTitle}</p>
          </div>
          <TeachingContentDisplay topicId={activeChapter} />
        </div>
      </main>
    </div>
  );
};

export default StudentHandbook;