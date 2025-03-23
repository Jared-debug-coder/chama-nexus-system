
import { 
  PiggyBank, BarChart3, ArrowUpRight, 
  Calendar, ArrowUp, ArrowDown, DollarSign
} from 'lucide-react';
import { cn } from '@/lib/utils';
import DataCard from '@/components/ui/data-card/DataCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProgressRing from '@/components/ui/charts/ProgressRing';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Button } from '@/components/ui/button';

const savingsData = [
  { month: 'Jan', amount: 235000 },
  { month: 'Feb', amount: 320000 },
  { month: 'Mar', amount: 450000 },
  { month: 'Apr', amount: 520000 },
  { month: 'May', amount: 750000 },
  { month: 'Jun', amount: 920000 },
  { month: 'Jul', amount: 1125000 },
];

const recentTransactions = [
  {
    id: 'T001',
    member: 'John Doe',
    type: 'deposit',
    amount: 'KES 15,000',
    date: 'Jul 10, 2023',
  },
  {
    id: 'T002',
    member: 'Jane Smith',
    type: 'deposit',
    amount: 'KES 10,000',
    date: 'Jul 9, 2023',
  },
  {
    id: 'T003',
    member: 'Michael Johnson',
    type: 'withdrawal',
    amount: 'KES 5,000',
    date: 'Jul 8, 2023',
  },
  {
    id: 'T004',
    member: 'Sarah Williams',
    type: 'deposit',
    amount: 'KES 12,500',
    date: 'Jul 7, 2023',
  },
  {
    id: 'T005',
    member: 'David Brown',
    type: 'deposit',
    amount: 'KES 8,000',
    date: 'Jul 6, 2023',
  },
];

const Savings = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <PiggyBank className="mr-3 h-8 w-8 text-primary" />
            Savings & Shares
          </h1>
          <p className="text-muted-foreground mt-1">
            Track member savings, shares, and financial growth
          </p>
        </div>
        
        <div className="flex gap-2">
          <div className="glass px-3 py-1.5 rounded-lg text-sm flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">July 2023</span>
          </div>
          <Button className="gap-2">
            <DollarSign className="h-4 w-4" />
            Record Transaction
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DataCard
          title="Total Savings"
          value="KES 3,250,000"
          icon={<PiggyBank className="h-5 w-5" />}
          trend={{ value: 8.2, isPositive: true }}
        />
        
        <DataCard
          title="Monthly Contributions"
          value="KES 350,000"
          icon={<ArrowUp className="h-5 w-5" />}
          trend={{ value: 12.5, isPositive: true }}
        />
        
        <DataCard
          title="Monthly Withdrawals"
          value="KES 120,000"
          icon={<ArrowDown className="h-5 w-5" />}
          trend={{ value: 5.3, isPositive: false }}
        />
        
        <DataCard
          title="Average Savings"
          value="KES 72,222"
          icon={<BarChart3 className="h-5 w-5" />}
          trend={{ value: 4.8, isPositive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2 glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-medium flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-primary" />
              Savings Growth
            </CardTitle>
            <CardDescription>
              Total savings accumulation over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="monthly" className="w-full">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="monthly" className="mt-0">
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={savingsData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tickFormatter={(value) => `KES ${value / 1000}K`}
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
              
              <TabsContent value="quarterly" className="mt-0">
                <div className="h-[300px] w-full flex items-center justify-center">
                  <p className="text-muted-foreground">Quarterly data visualization coming soon</p>
                </div>
              </TabsContent>
              
              <TabsContent value="yearly" className="mt-0">
                <div className="h-[300px] w-full flex items-center justify-center">
                  <p className="text-muted-foreground">Yearly data visualization coming soon</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-medium flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-primary" />
              Savings Distribution
            </CardTitle>
            <CardDescription>
              Breakdown of total savings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col items-center justify-center gap-4">
                <ProgressRing 
                  value={45} 
                  maxValue={100} 
                  size={120} 
                  strokeWidth={8}
                  valueSuffix="%" 
                  animationDuration={2}
                />
                <div className="text-center">
                  <h4 className="text-sm font-medium">Regular Savings</h4>
                  <p className="text-sm text-muted-foreground">KES 1,462,500</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center gap-4">
                <ProgressRing 
                  value={55} 
                  maxValue={100} 
                  size={120} 
                  strokeWidth={8}
                  valueSuffix="%" 
                  color="stroke-blue-500"
                  animationDuration={2}
                />
                <div className="text-center">
                  <h4 className="text-sm font-medium">Share Capital</h4>
                  <p className="text-sm text-muted-foreground">KES 1,787,500</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Interest Earned (YTD)</p>
                <p className="text-sm font-medium">KES 238,750</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm font-medium">Projected Dividends</p>
                <p className="text-sm font-medium">KES 325,000</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="glass-card overflow-hidden">
        <div className="p-6 flex justify-between items-center">
          <h3 className="text-xl font-medium">Recent Transactions</h3>
          <ArrowUpRight className="h-5 w-5 text-primary" />
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Transaction ID</th>
                <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Member</th>
                <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Type</th>
                <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Amount</th>
                <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-mono text-sm">{transaction.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.member}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={cn(
                      "inline-flex rounded-full px-2.5 py-1 text-xs font-medium",
                      transaction.type === 'deposit' ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    )}>
                      {transaction.type === 'deposit' ? 'Deposit' : 'Withdrawal'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{transaction.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                      {transaction.date}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Savings;
