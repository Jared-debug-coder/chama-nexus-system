
import { useState } from 'react';
import { 
  Users, Plus, Search, Filter, 
  MoreHorizontal, UserPlus, Mail, Phone
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

const membersData = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+254 712 345 678',
    joinDate: 'Jan 15, 2023',
    savings: 'KES 125,000',
    loans: 'KES 50,000',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+254 723 456 789',
    joinDate: 'Feb 3, 2023',
    savings: 'KES 98,500',
    loans: 'KES 0',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Michael Johnson',
    email: 'michael.j@example.com',
    phone: '+254 734 567 890',
    joinDate: 'Mar 22, 2023',
    savings: 'KES 75,000',
    loans: 'KES 30,000',
    status: 'Active',
  },
  {
    id: '4',
    name: 'Sarah Williams',
    email: 'sarah.w@example.com',
    phone: '+254 745 678 901',
    joinDate: 'Apr 10, 2023',
    savings: 'KES 112,500',
    loans: 'KES 45,000',
    status: 'Active',
  },
  {
    id: '5',
    name: 'David Brown',
    email: 'david.b@example.com',
    phone: '+254 756 789 012',
    joinDate: 'May 5, 2023',
    savings: 'KES 87,000',
    loans: 'KES 0',
    status: 'Inactive',
  },
];

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  
  const filteredMembers = membersData.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <Users className="mr-3 h-8 w-8 text-primary" />
            Members
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage all members and their information
          </p>
        </div>
        
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <UserPlus className="h-4 w-4" />
              Add Member
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Member</DialogTitle>
              <DialogDescription>
                Enter member details to register them in the system.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="col-span-3"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="john.doe@example.com"
                  type="email"
                  className="col-span-3"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="phone"
                  placeholder="+254 712 345 678"
                  className="col-span-3"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="initial" className="text-right">
                  Initial Deposit
                </Label>
                <Input
                  id="initial"
                  placeholder="KES 5,000"
                  className="col-span-3"
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Register Member</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search by name, email, or phone..." 
            className="pl-10 bg-background/50 border-muted"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>
      
      <Card className="glass-card">
        <CardHeader className="px-6 py-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-medium">
              All Members ({filteredMembers.length})
            </CardTitle>
            <div className="text-sm text-muted-foreground">
              Showing {filteredMembers.length} of {membersData.length} members
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Member</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Contact</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Join Date</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Savings</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Loans</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Status</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Mail className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                          {member.email}
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                          {member.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{member.joinDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{member.savings}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{member.loans}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={cn(
                        "inline-flex rounded-full px-2.5 py-1 text-xs font-medium",
                        member.status === 'Active' ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      )}>
                        {member.status}
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
                          <DropdownMenuItem>Edit Member</DropdownMenuItem>
                          <DropdownMenuItem>Issue Loan</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
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
    </div>
  );
};

export default Members;
