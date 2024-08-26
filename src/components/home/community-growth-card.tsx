import { TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@components/ui/card';

export const CommunityGrowthCard = () => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Crecimiento</CardTitle>
      <TrendingUp className="h-4 w-4 text-muted-foreground" />
    </CardHeader>

    <CardContent>
      <div className="text-2xl font-bold">15%</div>
      <p className="text-xs text-muted-foreground">Aumento de miembros.</p>
    </CardContent>
  </Card>
);
