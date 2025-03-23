
import { Shield, Plus, Settings, Clock, CalendarClock, DollarSign, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface PolicyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  value: string;
  editable?: boolean;
  onEdit?: () => void;
}

const PolicyCard = ({ title, description, icon, value, editable = true, onEdit }: PolicyCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3 items-center">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        
        {editable && (
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onEdit}>
            <Settings className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      <div className="mt-2">
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
};

const Policies = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  
  const handleOpenDialog = (policyId: string) => {
    setOpenDialog(policyId);
  };
  
  const handleCloseDialog = () => {
    setOpenDialog(null);
  };
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <Shield className="mr-3 h-8 w-8 text-primary" />
            Group Policies
          </h1>
          <p className="text-muted-foreground mt-1">
            Configure and manage group policies and rules
          </p>
        </div>
        
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Policy
        </Button>
      </div>
      
      <Tabs defaultValue="loans" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="loans">Loan Policies</TabsTrigger>
          <TabsTrigger value="savings">Savings Policies</TabsTrigger>
          <TabsTrigger value="membership">Membership Policies</TabsTrigger>
          <TabsTrigger value="general">General Policies</TabsTrigger>
        </TabsList>
        
        <TabsContent value="loans" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Dialog open={openDialog === 'interest-rate'} onOpenChange={() => handleCloseDialog()}>
              <PolicyCard
                title="Loan Interest Rate"
                description="Standard interest rate for all loans"
                icon={<DollarSign className="h-5 w-5" />}
                value="8% per 28 days"
                onEdit={() => handleOpenDialog('interest-rate')}
              />
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Loan Interest Rate</DialogTitle>
                  <DialogDescription>
                    Update the standard interest rate for all loans.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="interest-rate" className="text-right">
                      Interest Rate
                    </Label>
                    <Input
                      id="interest-rate"
                      defaultValue="8"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="interest-period" className="text-right">
                      Period
                    </Label>
                    <Input
                      id="interest-period"
                      defaultValue="28"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={handleCloseDialog}>Cancel</Button>
                  <Button onClick={handleCloseDialog}>Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            
            <Dialog open={openDialog === 'max-loan'} onOpenChange={() => handleCloseDialog()}>
              <PolicyCard
                title="Maximum Loan Amount"
                description="Maximum amount a member can borrow"
                icon={<DollarSign className="h-5 w-5" />}
                value="3x member's savings"
                onEdit={() => handleOpenDialog('max-loan')}
              />
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Maximum Loan Amount</DialogTitle>
                  <DialogDescription>
                    Update the maximum loan amount policy.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="loan-multiplier" className="text-right">
                      Multiplier
                    </Label>
                    <Input
                      id="loan-multiplier"
                      defaultValue="3"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="base-amount" className="text-right">
                      Base On
                    </Label>
                    <Input
                      id="base-amount"
                      defaultValue="Member's Savings"
                      className="col-span-3"
                      disabled
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={handleCloseDialog}>Cancel</Button>
                  <Button onClick={handleCloseDialog}>Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            
            <Dialog open={openDialog === 'loan-duration'} onOpenChange={() => handleCloseDialog()}>
              <PolicyCard
                title="Standard Loan Duration"
                description="Default duration for loans"
                icon={<CalendarClock className="h-5 w-5" />}
                value="28 days"
                onEdit={() => handleOpenDialog('loan-duration')}
              />
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Loan Duration</DialogTitle>
                  <DialogDescription>
                    Update the standard loan duration.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="duration-days" className="text-right">
                      Days
                    </Label>
                    <Input
                      id="duration-days"
                      defaultValue="28"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={handleCloseDialog}>Cancel</Button>
                  <Button onClick={handleCloseDialog}>Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            
            <Dialog open={openDialog === 'guarantors'} onOpenChange={() => handleCloseDialog()}>
              <PolicyCard
                title="Required Guarantors"
                description="Number of guarantors required for a loan"
                icon={<Users className="h-5 w-5" />}
                value="2 guarantors"
                onEdit={() => handleOpenDialog('guarantors')}
              />
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Guarantor Requirements</DialogTitle>
                  <DialogDescription>
                    Update the number of guarantors required for loans.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="guarantor-count" className="text-right">
                      Count
                    </Label>
                    <Input
                      id="guarantor-count"
                      defaultValue="2"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="guarantor-eligibility" className="text-right">
                      Eligibility
                    </Label>
                    <Input
                      id="guarantor-eligibility"
                      defaultValue="Active members with no outstanding loans"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={handleCloseDialog}>Cancel</Button>
                  <Button onClick={handleCloseDialog}>Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            
            <Dialog open={openDialog === 'loan-penalty'} onOpenChange={() => handleCloseDialog()}>
              <PolicyCard
                title="Late Payment Penalty"
                description="Penalty for late loan repayments"
                icon={<Clock className="h-5 w-5" />}
                value="5% of outstanding amount per week"
                onEdit={() => handleOpenDialog('loan-penalty')}
              />
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Late Payment Penalty</DialogTitle>
                  <DialogDescription>
                    Update the penalty for late loan repayments.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="penalty-rate" className="text-right">
                      Rate
                    </Label>
                    <Input
                      id="penalty-rate"
                      defaultValue="5"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="penalty-period" className="text-right">
                      Period
                    </Label>
                    <Input
                      id="penalty-period"
                      defaultValue="Week"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={handleCloseDialog}>Cancel</Button>
                  <Button onClick={handleCloseDialog}>Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            
            <Dialog open={openDialog === 'approval-process'} onOpenChange={() => handleCloseDialog()}>
              <PolicyCard
                title="Loan Approval Process"
                description="Steps required to approve a loan"
                icon={<Settings className="h-5 w-5" />}
                value="Secretary → Treasurer → Chairperson"
                onEdit={() => handleOpenDialog('approval-process')}
              />
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Loan Approval Process</DialogTitle>
                  <DialogDescription>
                    Update the loan approval workflow.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="approval-steps" className="text-right">
                      Steps
                    </Label>
                    <Input
                      id="approval-steps"
                      defaultValue="Secretary → Treasurer → Chairperson"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="approval-quorum" className="text-right">
                      Quorum
                    </Label>
                    <Input
                      id="approval-quorum"
                      defaultValue="All approvers must agree"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={handleCloseDialog}>Cancel</Button>
                  <Button onClick={handleCloseDialog}>Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </TabsContent>
        
        <TabsContent value="savings" className="mt-0">
          <Card className="glass-card flex justify-center items-center p-12">
            <div className="text-center">
              <p className="text-muted-foreground">Savings policies will appear here</p>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="membership" className="mt-0">
          <Card className="glass-card flex justify-center items-center p-12">
            <div className="text-center">
              <p className="text-muted-foreground">Membership policies will appear here</p>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="general" className="mt-0">
          <Card className="glass-card flex justify-center items-center p-12">
            <div className="text-center">
              <p className="text-muted-foreground">General policies will appear here</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Policies;
