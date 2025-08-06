-- 1. Create the table to store formative questions
CREATE TABLE public.formative_questions (
  id TEXT PRIMARY KEY,
  topic TEXT NOT NULL,
  question TEXT NOT NULL,
  question_en TEXT,
  options JSONB NOT NULL,
  answer TEXT NOT NULL,
  explanation TEXT,
  explanation_en TEXT
);

-- 2. Enable Row Level Security on the table
ALTER TABLE public.formative_questions ENABLE ROW LEVEL SECURITY;

-- 3. Create a policy that allows ANYONE to READ data from this table
CREATE POLICY "Allow public read access" ON public.formative_questions
FOR SELECT USING (true);