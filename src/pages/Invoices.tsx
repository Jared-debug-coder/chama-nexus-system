
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText } from "lucide-react";

const Invoices = () => {
  // Sample invoice data - would be fetched from API in a real application
  const invoices = [
    { id: 'INV-001', member: 'John Doe', type: 'Contribution', amount: 650, date: '2023-05-10', status: 'Paid' },
    { id: 'INV-002', member: 'Jane Smith', type: 'Loan Interest', amount: 240, date: '2023-05-12', status: 'Pending' },
    { id: 'INV-003', member: 'Michael Johnson', type: 'Contribution', amount: 650, date: '2023-05-15', status: 'Paid' },
    { id: 'INV-004', member: 'Sarah Williams', type: 'Penalty', amount: 100, date: '2023-05-16', status: 'Overdue' },
    { id: 'INV-005', member: 'James Brown', type: 'Contribution', amount: 650, date: '2023-05-18', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Invoices</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <span>Recent Invoices</span>
          </CardTitle>
          <CardDescription>
            View and manage all invoices for member contributions, loans, and other payments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice #</TableHead>
                <TableHead>Member</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount (KES)</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.member}</TableCell>
                  <TableCell>{invoice.type}</TableCell>
                  <TableCell>{invoice.amount.toLocaleString()}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      invoice.status === 'Paid' 
                        ? 'bg-green-100 text-green-800' 
                        : invoice.status === 'Pending' 
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                    }`}>
                      {invoice.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Invoices;
