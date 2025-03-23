
import { 
  BarChart3, CreditCard, DollarSign, 
  Users, PiggyBank, ArrowUpRight, Percent, Calendar
} from 'lucide-react';
import { cn } from '@/lib/utils';
import DataCard from '@/components/ui/data-card/DataCard';
import ProgressRing from '@/components/ui/charts/ProgressRing';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', amount: 1500 },
  { name: 'Feb', amount: 1800 },
  { name: 'Mar', amount: 2200 },
  { name: 'Apr', amount: 2600 },
  { name: 'May', amount: 3100 },
  { name: 'Jun', amount: 3500 },
  { name: 'Jul', amount: 4000 },
];

const loanData = [
  { 
    id: '1',
    member: 'John Doe',
    amount: 'KES 50,000',
    duration: '28 days',
    interest: '8%',
    status: 'Active',
  },
  { 
    id: '2',
    member: 'Jane Smith',
    amount: 'KES 75,000',
    duration: '28 days',
    interest: '8%',
    status: 'Pending',
  },
  { 
    id: '3',
    member: 'Michael Johnson',
    amount: 'KES 30,000',
    duration: '28 days',
    interest: '8%',
    status: 'Completed',
  },
  { 
    id: '4',
    member: 'Sarah Williams',
    amount: 'KES 45,000',
    duration: '28 days',
    interest: '8%',
    status: 'Active',
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-muted-foreground">Welcome back,</p>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        </div>
        
        <div className="flex gap-2">
          <div className="glass px-3 py-1.5 rounded-lg text-sm flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">July 2023</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DataCard
          title="Total Members"
          value="45"
          icon={<Users className="h-5 w-5" />}
          trend={{ value: 12, isPositive: true }}
        />
        
        <DataCard
          title="Total Savings"
          value="KES 3,250,000"
          icon={<PiggyBank className="h-5 w-5" />}
          trend={{ value: 8.2, isPositive: true }}
        />
        
        <DataCard
          title="Active Loans"
          value="KES 1,125,000"
          icon={<CreditCard className="h-5 w-5" />}
          trend={{ value: 3.1, isPositive: true }}
        />
        
        <DataCard
          title="Monthly Interest"
          value="KES 90,000"
          icon={<Percent className="h-5 w-5" />}
          trend={{ value: 5.4, isPositive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2 glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-medium flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-primary" />
              Financial Overview
            </CardTitle>
            <CardDescription>
              Total savings growth over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="savings" className="w-full">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="savings">Savings</TabsTrigger>
                  <TabsTrigger value="loans">Loans</TabsTrigger>
                  <TabsTrigger value="contributions">Contributions</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="savings" className="mt-0">
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tickFormatter={(value) => `KES ${value}`}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          background: 'rgba(255, 255, 255, 0.8)', 
                          border: 'none', 
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }}
                        formatter={(value) => [`KES ${value.toLocaleString()}`, 'Amount']}
                      />
                      <Bar 
                        dataKey="amount" 
                        fill="hsl(var(--primary))" 
                        radius={[4, 4, 0, 0]}
                        barSize={40}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              
              <TabsContent value="loans" className="mt-0">
                <div className="h-[300px] w-full flex items-center justify-center">
                  <p className="text-muted-foreground">Loan data visualization coming soon</p>
                </div>
              </TabsContent>
              
              <TabsContent value="contributions" className="mt-0">
                <div className="h-[300px] w-full flex items-center justify-center">
                  <p className="text-muted-foreground">Contribution data visualization coming soon</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-medium flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-primary" />
              Financial Health
            </CardTitle>
            <CardDescription>
              Current financial metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8 mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Loan Utilization</p>
                  <p className="text-2xl font-semibold">42%</p>
                </div>
                <ProgressRing 
                  value={42} 
                  maxValue={100} 
                  size={70} 
                  valueSuffix="%" 
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Repayment Rate</p>
                  <p className="text-2xl font-semibold">94%</p>
                </div>
                <ProgressRing 
                  value={94} 
                  maxValue={100} 
                  size={70} 
                  valueSuffix="%" 
                  color="stroke-green-500"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Member Growth</p>
                  <p className="text-2xl font-semibold">+12%</p>
                </div>
                <ProgressRing 
                  value={12} 
                  maxValue={100} 
                  size={70} 
                  valueSuffix="%" 
                  color="stroke-blue-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="p-6 flex justify-between items-center">
          <h3 className="text-xl font-medium">Recent Loan Applications</h3>
          <ArrowUpRight className="h-5 w-5 text-primary" />
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Member</th>
                <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Amount</th>
                <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Duration</th>
                <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Interest</th>
                <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {loanData.map((loan) => (
                <tr key={loan.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">{loan.member}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{loan.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{loan.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{loan.interest}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={cn(
                      "inline-flex rounded-full px-2 py-1 text-xs font-medium",
                      loan.status === 'Active' && "bg-green-100 text-green-800",
                      loan.status === 'Pending' && "bg-yellow-100 text-yellow-800",
                      loan.status === 'Completed' && "bg-blue-100 text-blue-800"
                    )}>
                      {loan.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
