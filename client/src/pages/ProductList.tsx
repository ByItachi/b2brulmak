import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Info,
  Check,
  XCircle,
  Clock,
  ChevronDown
} from "lucide-react";
import { MOCK_PRODUCTS, addToCart, Product, MOCK_DEALER } from "@/lib/mockData";
import { useToast } from "@/hooks/use-toast";

export default function ProductList() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleQuantityChange = (id: string, val: string) => {
    const num = parseInt(val);
    setQuantities(prev => ({ ...prev, [id]: isNaN(num) ? 0 : num }));
  };

  const handleAddToCart = (product: Product) => {
    const qty = quantities[product.id] || 1;
    if (qty > 0) {
      addToCart(product, qty);
      toast({
        title: "Added to cart",
        description: `${qty} x ${product.stockCodes[0]} added to your order.`,
      });
      setQuantities(prev => ({ ...prev, [product.id]: 0 })); // Reset input
    }
  };

  const filteredProducts = MOCK_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.stockCodes.some(code => code.toLowerCase().includes(searchQuery.toLowerCase())) ||
    p.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground">Product Search</h2>
            <p className="text-muted-foreground">Browse {MOCK_PRODUCTS.length} industrial items available for immediate dispatch.</p>
          </div>
        </div>

        {/* Filters Panel */}
        <div className="bg-card p-4 rounded-lg border border-border/50 shadow-sm space-y-4">
           <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                 <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                 <Input 
                   placeholder="Search by Stock Code, Dimensions, or Brand..." 
                   className="pl-10 h-10 border-border/60 bg-muted/20" 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                 />
              </div>
              <div className="flex gap-2">
                 <Button variant="outline" className="border-border/60 gap-2">
                   <Filter className="h-4 w-4" /> Filters
                 </Button>
                 <Button className="bg-destructive text-white hover:bg-destructive/90 w-32">
                   Search
                 </Button>
              </div>
           </div>
           
           <div className="flex flex-wrap gap-6 pt-2 border-t border-border/40">
              <div className="flex items-center gap-2">
                <Checkbox id="instock" />
                <label htmlFor="instock" className="text-sm font-medium leading-none cursor-pointer">In Stock Only</label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="campaign" />
                <label htmlFor="campaign" className="text-sm font-medium leading-none cursor-pointer">Campaign Items</label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="new" />
                <label htmlFor="new" className="text-sm font-medium leading-none cursor-pointer">New Arrivals</label>
              </div>
           </div>
        </div>

        {/* Products Table */}
        <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead className="w-[80px] text-center">Status</TableHead>
                <TableHead className="w-[180px]">Stock Code</TableHead>
                <TableHead>Product Description</TableHead>
                <TableHead className="w-[100px]">Brand</TableHead>
                <TableHead className="w-[120px] text-right">List Price</TableHead>
                <TableHead className="w-[120px] text-right">Your Price</TableHead>
                <TableHead className="w-[100px] text-center">Discount</TableHead>
                <TableHead className="w-[160px] text-center">Order Qty</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => {
                const discount = product.discountGroups[MOCK_DEALER.group];
                const finalPrice = product.price * (1 - discount / 100);

                return (
                  <TableRow key={product.id} className="hover:bg-muted/10">
                    <TableCell className="text-center">
                       {product.stockStatus === "in-stock" && (
                         <div className="flex flex-col items-center text-green-600">
                           <Check className="h-5 w-5" />
                           <span className="text-[10px] font-bold">{product.quantity > 50 ? "50+" : product.quantity}</span>
                         </div>
                       )}
                       {product.stockStatus === "low-stock" && (
                         <div className="flex flex-col items-center text-yellow-600">
                           <Clock className="h-5 w-5" />
                           <span className="text-[10px] font-bold">Low</span>
                         </div>
                       )}
                       {product.stockStatus === "out-of-stock" && (
                         <div className="flex flex-col items-center text-red-500">
                           <XCircle className="h-5 w-5" />
                           <span className="text-[10px] font-bold">0</span>
                         </div>
                       )}
                       {product.stockStatus === "pre-order" && (
                         <div className="flex flex-col items-center text-blue-500">
                           <Info className="h-5 w-5" />
                           <span className="text-[10px] font-bold">Pre</span>
                         </div>
                       )}
                    </TableCell>
                    <TableCell className="font-mono font-medium text-primary">
                      {product.stockCodes[0]}
                      {product.stockCodes.length > 1 && (
                        <div className="text-xs text-muted-foreground mt-1">
                          {product.stockCodes.slice(1).join(", ")}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-foreground">{product.name}</div>
                      <div className="flex gap-2 mt-1">
                        {product.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-[10px] h-5 px-1.5 font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>{product.brand}</TableCell>
                    <TableCell className="text-right text-muted-foreground line-through">
                       {product.currency} {product.price.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right font-bold text-foreground">
                       {product.currency} {finalPrice.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-center">
                       <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
                         %{discount}
                       </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 justify-end">
                        <Input 
                          type="number" 
                          min="0"
                          className="w-16 h-8 text-center" 
                          placeholder="1"
                          value={quantities[product.id] || ""}
                          onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                        />
                        <Button 
                          size="icon" 
                          variant="default" 
                          className="h-8 w-8"
                          disabled={product.stockStatus === "out-of-stock"}
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        
        <div className="text-center text-sm text-muted-foreground pt-4">
           Showing {filteredProducts.length} results.
        </div>
      </div>
    </DashboardLayout>
  );
}
