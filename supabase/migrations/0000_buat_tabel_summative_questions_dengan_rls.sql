-- 1. Create the table to store questions
CREATE TABLE public.summative_questions (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  question TEXT NOT NULL,
  question_en TEXT,
  options JSONB NOT NULL,
  answer TEXT NOT NULL,
  topic TEXT
);

-- 2. Enable Row Level Security on the table
ALTER TABLE public.summative_questions ENABLE ROW LEVEL SECURITY;

-- 3. Create a policy that allows ANYONE to READ data from this table
CREATE POLICY "Allow public read access" ON public.summative_questions
FOR SELECT USING (true);