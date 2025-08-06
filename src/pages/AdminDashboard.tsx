import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, Edit } from 'lucide-react';
import EditUserForm from '@/components/EditUserForm';

interface Profile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  role: string | null;
}

const AdminDashboard = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const fetchProfiles = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('profiles').select('*');

    if (error) {
      console.error('Error fetching profiles:', error);
    } else if (data) {
      setProfiles(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const handleEditClick = (profile: Profile) => {
    setSelectedProfile(profile);
    setIsEditDialogOpen(true);
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Memuat pengguna...</div>;
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <h1 className="text-4xl font-bold text-primary">Admin Dashboard</h1>
        <Button asChild variant="outline">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Kembali ke Home
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Pengguna Terdaftar</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Depan</TableHead>
                <TableHead>Nama Belakang</TableHead>
                <TableHead>Peran</TableHead>
                <TableHead className="text-right">Tindakan</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {profiles.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{p.first_name || 'N/A'}</TableCell>
                  <TableCell>{p.last_name || 'N/A'}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${p.role === 'admin' ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                      {p.role}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleEditClick(p)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedProfile && (
        <EditUserForm
          profile={selectedProfile}
          isOpen={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
          onSuccess={fetchProfiles}
        />
      )}
    </div>
  );
};

export default AdminDashboard;