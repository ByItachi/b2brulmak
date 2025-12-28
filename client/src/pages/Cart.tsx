import { useState } from "react";
import { Link } from "wouter";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { getCart, removeFromCart, clearCart, MOCK_DEALER } from "@/lib/mockData";
import { Trash2, ArrowRight, ArrowLeft } from "lucide-react";

export default function Cart() {
  // Simple force update hack since we aren't using real Context for this mock
  const [cartItems, setCartItems] = useState(getCart());

  const handleRemove = (id: string) => {
    removeFromCart(id);
    setCartItems([...getCart()]);
  };

  const handleClear = () => {
    clearCart();
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((acc, item) => {
    const discount = item.product.discountGroups[MOCK_DEALER.group];
    const finalPrice = item.product.price * (1 - discount / 100);
    return acc + (finalPrice * item.quantity);
  }, 0);

  const tax = subtotal * 0.18; // 18% VAT example
  const total = subtotal + tax;

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-heading font-bold">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-lg border border-dashed border-border">
            <h3 className="text-lg font-medium text-muted-foreground mb-4">Your cart is empty</h3>
            <Link href="/products">
              <Button>Browse Products</Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                   <div className="flex justify-between items-center">
                     <CardTitle className="text-lg">Order Items ({cartItems.length})</CardTitle>
                     <Button variant="ghost" size="sm" onClick={handleClear} className="text-destructive hover:text-destructive hover:bg-destructive/10">
                       Clear All
                     </Button>
                   </div>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead className="text-center">Qty</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cartItems.map((item) => {
                        const discount = item.product.discountGroups[MOCK_DEALER.group];
                        const finalPrice = item.product.price * (1 - discount / 100);
                        
                        return (
                          <TableRow key={item.product.id}>
                            <TableCell>
                              <div className="font-medium">{item.product.name}</div>
                              <div className="text-xs text-muted-foreground font-mono">{item.product.stockCodes[0]}</div>
                            </TableCell>
                            <TableCell className="text-center font-bold">
                              {item.quantity}
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="font-bold">{item.product.currency} {(finalPrice * item.quantity).toFixed(2)}</div>
                              <div className="text-xs text-muted-foreground">Unit: {finalPrice.toFixed(2)}</div>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="icon" onClick={() => handleRemove(item.product.id)}>
                                <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-1">
              <Card className="sticky top-24 shadow-sm border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-mono font-medium">{MOCK_DEALER.currency} {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">VAT (18%)</span>
                    <span className="font-mono font-medium">{MOCK_DEALER.currency} {tax.toFixed(2)}</span>
                  </div>
                  <Separator className="bg-primary/20" />
                  <div className="flex justify-between text-lg font-bold text-primary">
                    <span>Total</span>
                    <span>{MOCK_DEALER.currency} {total.toFixed(2)}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-3">
                  <Button className="w-full text-lg h-12 shadow-md shadow-primary/20">
                    Checkout Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="/products">
                    <Button variant="outline" className="w-full bg-transparent border-primary/20 text-primary hover:bg-primary/10">
                      <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
