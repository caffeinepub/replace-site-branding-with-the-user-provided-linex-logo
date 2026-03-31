import type { Inquiry, InquiryStatus } from "@/backend";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteInquiry,
  useListInquiries,
  useMarkInquiryAsSeen,
  useUpdateInquiryStatus,
} from "@/hooks/useAdminInquiries";
import { useSeo } from "@/hooks/useSeo";
import {
  Building2,
  Eye,
  EyeOff,
  Loader2,
  Mail,
  MessageSquare,
  Trash2,
} from "lucide-react";
import { useState } from "react";

export default function AdminInquiriesPage() {
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useSeo({
    title: "Admin Inquiries Dashboard - LINEX AUTOMATION",
    description: "Manage customer inquiries and track their status.",
    robots: "noindex",
  });

  const { data: inquiries, isLoading, error } = useListInquiries(0, 100);
  const markAsSeen = useMarkInquiryAsSeen();
  const deleteInquiry = useDeleteInquiry();
  const updateStatus = useUpdateInquiryStatus();

  const handleViewInquiry = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setDialogOpen(true);

    // Mark as seen when viewing
    if (!inquiry.seenByAdmin) {
      markAsSeen.mutate(inquiry.id);
    }
  };

  const handleDelete = async (id: bigint) => {
    if (confirm("Are you sure you want to delete this inquiry?")) {
      try {
        await deleteInquiry.mutateAsync(id);
        if (selectedInquiry?.id === id) {
          setDialogOpen(false);
          setSelectedInquiry(null);
        }
      } catch (error) {
        console.error("Error deleting inquiry:", error);
      }
    }
  };

  const handleStatusChange = async (id: bigint, status: InquiryStatus) => {
    try {
      await updateStatus.mutateAsync({ id, status });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadgeVariant = (
    status: InquiryStatus,
  ): "default" | "secondary" | "outline" => {
    switch (status) {
      case "open":
        return "default";
      case "pending":
        return "secondary";
      case "closed":
        return "outline";
      default:
        return "default";
    }
  };

  if (error) {
    return (
      <div className="container py-12">
        <Alert variant="destructive">
          <AlertDescription>
            {error instanceof Error
              ? error.message
              : "Failed to load inquiries"}
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Inquiries Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Manage customer inquiries and track their status
        </p>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : inquiries && inquiries.length > 0 ? (
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Topic</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Seen</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inquiries.map((inquiry) => (
                <TableRow
                  key={inquiry.id.toString()}
                  className={!inquiry.seenByAdmin ? "bg-muted/30" : ""}
                >
                  <TableCell>
                    <Select
                      value={inquiry.status}
                      onValueChange={(value) =>
                        handleStatusChange(inquiry.id, value as InquiryStatus)
                      }
                    >
                      <SelectTrigger className="w-[110px] h-8">
                        <SelectValue>
                          <Badge
                            variant={getStatusBadgeVariant(inquiry.status)}
                          >
                            {inquiry.status}
                          </Badge>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="open">Open</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="font-medium">{inquiry.name}</TableCell>
                  <TableCell className="text-sm">
                    {inquiry.emailOrPhone}
                  </TableCell>
                  <TableCell className="text-sm">
                    {inquiry.inquiryTopic}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {formatDate(inquiry.createdAt)}
                  </TableCell>
                  <TableCell>
                    {inquiry.seenByAdmin ? (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <EyeOff className="h-4 w-4 text-industrial-accent" />
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewInquiry(inquiry)}
                      >
                        View
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(inquiry.id)}
                        disabled={deleteInquiry.isPending}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <Alert>
          <MessageSquare className="h-4 w-4" />
          <AlertDescription>
            No inquiries yet. When customers submit the contact form, they will
            appear here.
          </AlertDescription>
        </Alert>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedInquiry && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  Inquiry Details
                  <Badge
                    variant={getStatusBadgeVariant(selectedInquiry.status)}
                  >
                    {selectedInquiry.status}
                  </Badge>
                </DialogTitle>
                <DialogDescription>
                  Submitted on {formatDate(selectedInquiry.createdAt)}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-sm font-semibold mb-1">Name</h3>
                  <p className="text-sm">{selectedInquiry.name}</p>
                </div>
                {selectedInquiry.company && (
                  <div>
                    <h3 className="text-sm font-semibold mb-1 flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      Company
                    </h3>
                    <p className="text-sm">{selectedInquiry.company}</p>
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-semibold mb-1 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact
                  </h3>
                  <p className="text-sm">{selectedInquiry.emailOrPhone}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">Inquiry Topic</h3>
                  <p className="text-sm">{selectedInquiry.inquiryTopic}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Message
                  </h3>
                  <p className="text-sm whitespace-pre-wrap bg-muted/50 p-4 rounded-md">
                    {selectedInquiry.message}
                  </p>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(selectedInquiry.id)}
                    disabled={deleteInquiry.isPending}
                  >
                    {deleteInquiry.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Deleting...
                      </>
                    ) : (
                      <>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Inquiry
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
