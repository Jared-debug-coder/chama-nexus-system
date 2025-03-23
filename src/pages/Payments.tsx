
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Landmark } from "lucide-react";

const Payments = () => {
  // Sample payment data - would be fetched from API in a real application
  const payments = [
    { id: 'PMT-001', member: 'John Doe', method: 'MPesa', amount: 650, date: '2023-05-10', reference: 'KCB76543' },
    { id: 'PMT-002', member: 'Jane Smith', method: 'Bank Transfer', amount: 1200, date: '2023-05-12', reference: 'EQT98765' },
    { id: 'PMT-003', member: 'Michael Johnson', method: 'MPesa', amount: 650, date: '2023-05-15', reference: 'KCB12345' },
    { id: 'PMT-004', member: 'Sarah Williams', method: 'Cash', amount: 750, date: '2023-05-16', reference: 'CSH00123' },
    { id: 'PMT-005', member: 'James Brown', method: 'Bank Transfer', amount: 5000, date: '2023-05-18', reference: 'EQT56789' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Landmark className="h-5 w-5" />
            <span>Recent Payments</span>
          </CardTitle>
          <CardDescription>
            Track all payments received from members through various payment methods.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Member</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Amount (KES)</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Reference</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.id}</TableCell>
                  <TableCell>{payment.member}</TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell>{payment.amount.toLocaleString()}</TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>{payment.reference}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payments;
