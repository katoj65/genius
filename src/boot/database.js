import { createClient } from '@supabase/supabase-js';
 const database = createClient('https://ycmlubeulbufsfrvbmal.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbWx1YmV1bGJ1ZnNmcnZibWFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMDUwMjYsImV4cCI6MjA2NjY4MTAyNn0.huBZHp-BKJyXEp6MyZAHx4tWpgSjs5zLcirznn3MeNI');

 export default database;