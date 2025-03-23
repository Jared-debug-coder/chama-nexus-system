
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { BarChart3 } from "lucide-react";

const Reports = () => {
  // Sample data for charts - would be fetched from API in a real application
  const loanData = [
    { month: 'Jan', amount: 24000 },
    { month: 'Feb', amount: 35000 },
    { month: 'Mar', amount: 28000 },
    { month: 'Apr', amount: 32000 },
    { month: 'May', amount: 40000 },
    { month: 'Jun', amount: 42000 },
  ];

  const contributionData = [
    { month: 'Jan', amount: 18000 },
    { month: 'Feb', amount: 19500 },
    { month: 'Mar', amount: 19500 },
    { month: 'Apr', amount: 21000 },
    { month: 'May', amount: 20000 },
    { month: 'Jun', amount: 19500 },
  ];

  const savingsDistribution = [
    { name: 'Active Savings', value: 70 },
    { name: 'Dormant Accounts', value: 15 },
    { name: 'Loans Outstanding', value: 15 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
      </div>

      <Tabs defaultValue="loans">
        <TabsList className="w-full justify-start mb-4">
          <TabsTrigger value="loans">Loans Report</TabsTrigger>
          <TabsTrigger value="contributions">Contributions Report</TabsTrigger>
          <TabsTrigger value="savings">Savings Distribution</TabsTrigger>
        </TabsList>
        
        <TabsContent value="loans">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                <span>Monthly Loan Disbursements</span>
              </CardTitle>
              <CardDescription>
                Total amount of loans disbursed per month (KES)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer 
                config={{ loans: { color: '#6366F1' } }}
                className="h-80"
              >
                <BarChart data={loanData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="amount" fill="var(--color-loans)" name="Loan Amount" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contributions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                <span>Monthly Member Contributions</span>
              </CardTitle>
              <CardDescription>
                Total contributions collected per month (KES)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer 
                config={{ contributions: { color: '#10B981' } }}
                className="h-80"
              >
                <BarChart data={contributionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="amount" fill="var(--color-contributions)" name="Contribution Amount" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="savings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                <span>Savings Distribution</span>
              </CardTitle>
              <CardDescription>
                Distribution of member savings across different categories
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ChartContainer 
                config={{ 
                  savings: { color: '#0088FE' },
                  dormant: { color: '#00C49F' },
                  loans: { color: '#FFBB28' }
                }}
                className="h-80"
              >
                <PieChart>
                  <Pie
                    data={savingsDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {savingsDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;
