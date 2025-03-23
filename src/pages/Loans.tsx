
import { useState } from 'react';
import { 
  CreditCard, Plus, Search, Filter, 
  MoreHorizontal, Calendar, Clock, ArrowRight, DollarSign 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DataCard from '@/components/ui/data-card/DataCard';

const loansData = [
  {
    id: 'L001',
    member: {
      id: '1',
      name: 'John Doe',
    },
    amount: 'KES 50,000',
    issuedDate: 'Jun 15, 2023',
    dueDate: 'Jul 13, 2023',
    interest: '8%',
    status: 'Active',
    progress: 65,
  },
  {
    id: 'L002',
    member: {
      id: '2',
      name: 'Jane Smith',
    },
    amount: 'KES 75,000',
    issuedDate: 'Jun 20, 2023',
    dueDate: 'Jul 18, 2023',
    interest: '8%',
    status: 'Pending',
    progress: 0,
  },
  {
    id: 'L003',
    member: {
      id: '3',
      name: 'Michael Johnson',
    },
    amount: 'KES 30,000',
    issuedDate: 'May 22, 2023',
    dueDate: 'Jun 19, 2023',
    interest: '8%',
    status: 'Completed',
    progress: 100,
  },
  {
    id: 'L004',
    member: {
      id: '4',
      name: 'Sarah Williams',
    },
    amount: 'KES 45,000',
    issuedDate: 'Jun 10, 2023',
    dueDate: 'Jul 8, 2023',
    interest: '8%',
    status: 'Active',
    progress: 35,
  },
  {
    id: 'L005',
    member: {
      id: '5',
      name: 'David Brown',
    },
    amount: 'KES 60,000',
    issuedDate: 'Jun 5, 2023',
    dueDate: 'Jul 3, 2023',
    interest: '8%',
    status: 'Overdue',
    progress: 40,
  },
];

const Loans = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  
  const filteredLoans = loansData.filter(loan => 
    loan.member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loan.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const totalActiveLoans = loansData.filter(loan => loan.status === 'Active').length;
  const totalPendingLoans = loansData.filter(loan => loan.status === 'Pending').length;
  const totalOverdueLoans = loansData.filter(loan => loan.status === 'Overdue').length;
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <CreditCard className="mr-3 h-8 w-8 text-primary" />
            Loan Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage loans, applications, and repayments
          </p>
        </div>
        
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Loan
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Issue New Loan</DialogTitle>
              <DialogDescription>
                Create a new loan for a member with specific terms.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="member" className="text-right">
                  Member
                </Label>
                <Input
                  id="member"
                  placeholder="Search member..."
                  className="col-span-3"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right">
                  Loan Amount
                </Label>
                <Input
                  id="amount"
                  placeholder="KES 50,000"
                  className="col-span-3"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="interest" className="text-right">
                  Interest Rate
                </Label>
                <Input
                  id="interest"
                  value="8%"
                  disabled
                  className="col-span-3 bg-muted"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="duration" className="text-right">
                  Duration
                </Label>
                <Input
                  id="duration"
                  value="28 days"
                  disabled
                  className="col-span-3 bg-muted"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="guarantors" className="text-right">
                  Guarantors
                </Label>
                <Input
                  id="guarantors"
                  placeholder="Add guarantors..."
                  className="col-span-3"
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Create Loan</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DataCard
          title="Active Loans"
          value={totalActiveLoans.toString()}
          icon={<CreditCard className="h-5 w-5" />}
        />
        
        <DataCard
          title="Pending Approval"
          value={totalPendingLoans.toString()}
          icon={<Clock className="h-5 w-5" />}
        />
        
        <DataCard
          title="Overdue Loans"
          value={totalOverdueLoans.toString()}
          icon={<Calendar className="h-5 w-5" />}
          valueClassName="text-red-500"
        />
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="all">All Loans</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="overdue">Overdue</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search loans..." 
                className="pl-10 w-[250px] bg-background/50 border-muted"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <TabsContent value="all" className="mt-0">
          <Card className="glass-card">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Loan ID</th>
                      <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Member</th>
                      <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Amount</th>
                      <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Issued Date</th>
                      <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Due Date</th>
                      <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Progress</th>
                      <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Status</th>
                      <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLoans.map((loan) => (
                      <tr key={loan.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="font-mono text-sm">{loan.id}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-primary/10 text-primary">
                                {loan.member.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="ml-3">
                              <p className="font-medium">{loan.member.name}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">{loan.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                            {loan.issuedDate}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                            {loan.dueDate}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div 
                              className={cn(
                                "h-2.5 rounded-full",
                                loan.status === 'Active' && "bg-blue-500",
                                loan.status === 'Completed' && "bg-green-500",
                                loan.status === 'Overdue' && "bg-red-500",
                                loan.status === 'Pending' && "bg-yellow-500"
                              )}
                              style={{ width: `${loan.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-right mt-0.5 text-muted-foreground">
                            {loan.progress}%
                          </p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={cn(
                            "inline-flex rounded-full px-2.5 py-1 text-xs font-medium",
                            loan.status === 'Active' && "bg-blue-100 text-blue-800",
                            loan.status === 'Pending' && "bg-yellow-100 text-yellow-800",
                            loan.status === 'Completed' && "bg-green-100 text-green-800",
                            loan.status === 'Overdue' && "bg-red-100 text-red-800"
                          )}>
                            {loan.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Record Payment</DropdownMenuItem>
                              <DropdownMenuItem>Payment Schedule</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              {loan.status === 'Pending' && (
                                <DropdownMenuItem className="text-green-600">Approve Loan</DropdownMenuItem>
                              )}
                              {loan.status === 'Active' && (
                                <DropdownMenuItem className="text-blue-600">Mark as Paid</DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="active" className="mt-0">
          <Card className="glass-card flex justify-center items-center p-12">
            <div className="text-center">
              <p className="text-muted-foreground">Active loans will appear here</p>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="pending" className="mt-0">
          <Card className="glass-card flex justify-center items-center p-12">
            <div className="text-center">
              <p className="text-muted-foreground">Pending loans will appear here</p>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed" className="mt-0">
          <Card className="glass-card flex justify-center items-center p-12">
            <div className="text-center">
              <p className="text-muted-foreground">Completed loans will appear here</p>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="overdue" className="mt-0">
          <Card className="glass-card flex justify-center items-center p-12">
            <div className="text-center">
              <p className="text-muted-foreground">Overdue loans will appear here</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Loans;
