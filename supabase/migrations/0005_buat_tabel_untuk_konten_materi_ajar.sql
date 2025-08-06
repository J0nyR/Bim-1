-- 1. Create a table to hold the main teaching content for each module
CREATE TABLE public.teaching_content (
  id SERIAL PRIMARY KEY,
  topic_id TEXT NOT NULL,
  section_order INT NOT NULL,
  section_title TEXT NOT NULL,
  section_title_en TEXT,
  content JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable Row Level Security on the table
ALTER TABLE public.teaching_content ENABLE ROW LEVEL SECURITY;

-- 3. Create a policy that allows ANYONE to READ data from this table
CREATE POLICY "Allow public read access" ON public.teaching_content
FOR SELECT USING (true);