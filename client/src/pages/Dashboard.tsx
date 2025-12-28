import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Package, TrendingUp, DollarSign, Clock, AlertCircle } from "lucide-react";
import { MOCK_DEALER } from "@/lib/mockData";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders (YTD)</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">1,248</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono text-destructive">
               {MOCK_DEALER.currency} {MOCK_DEALER.balance.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Due in 15 days</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Discount Group</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-heading">Group {MOCK_DEALER.group}</div>
            <p className="text-xs text-muted-foreground">Standard Dealer Rates</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">3</div>
            <p className="text-xs text-muted-foreground">Special order requests</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Orders */}
        <Card className="lg:col-span-2 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>You have 3 active orders in transit.</CardDescription>
            </div>
            <Link href="/orders">
              <Button variant="ghost" size="sm" className="gap-1 text-primary">View All <ArrowRight className="h-4 w-4"/></Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "ORD-2024-001", date: "2024-10-24", amount: "$1,240.00", status: "In Transit", items: 12 },
                { id: "ORD-2024-002", date: "2024-10-20", amount: "$5,320.50", status: "Processing", items: 45 },
                { id: "ORD-2024-003", date: "2024-10-18", amount: "$890.00", status: "Delivered", items: 5 },
              ].map((order, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50">
                   <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                        <Package className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-mono font-medium text-sm">{order.id}</p>
                        <p className="text-xs text-muted-foreground">{order.items} items • {order.date}</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="font-mono font-bold text-sm">{order.amount}</p>
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                        order.status === "Delivered" ? "bg-green-100 text-green-700" :
                        order.status === "In Transit" ? "bg-blue-100 text-blue-700" :
                        "bg-yellow-100 text-yellow-700"
                      }`}>
                        {order.status}
                      </span>
                   </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Announcements / Quick Actions */}
        <Card className="shadow-sm bg-sidebar text-sidebar-foreground border-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Announcements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-white/5 rounded border border-white/10">
              <h4 className="font-bold text-sm mb-1 text-primary">Price Update Notice</h4>
              <p className="text-xs text-sidebar-foreground/70">
                Effective Nov 1st, SKF product lines will see a 2% price adjustment due to raw material costs.
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded border border-white/10">
              <h4 className="font-bold text-sm mb-1 text-green-400">System Maintenance</h4>
              <p className="text-xs text-sidebar-foreground/70">
                Scheduled maintenance this Sunday from 2AM to 4AM.
              </p>
            </div>
            
            <div className="pt-4 mt-auto">
               <Link href="/products">
                 <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                   Create New Order
                 </Button>
               </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
