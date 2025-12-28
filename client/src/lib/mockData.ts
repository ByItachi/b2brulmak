import { useState } from "react";

export interface Product {
  id: string;
  name: string;
  brand: string;
  stockCodes: string[]; // Multiple stock codes as requested
  price: number;
  currency: "USD" | "EUR" | "TRY";
  stockStatus: "in-stock" | "low-stock" | "out-of-stock" | "pre-order";
  quantity: number;
  tags: string[];
  imageUrl?: string;
  discountGroups: Record<string, number>; // Group ID -> Discount %
}

export interface Dealer {
  id: string;
  name: string;
  group: "A" | "B" | "C"; // Discount group
  balance: number;
  currency: "USD" | "EUR" | "TRY";
}

export const MOCK_DEALER: Dealer = {
  id: "d1",
  name: "Caglayan Rulman Ltd.",
  group: "A",
  balance: 15420.50,
  currency: "USD"
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Deep Groove Ball Bearing 6205",
    brand: "SKF",
    stockCodes: ["6205-2RSH", "6205-2Z", "SKF-6205"],
    price: 12.50,
    currency: "USD",
    stockStatus: "in-stock",
    quantity: 1500,
    tags: ["Ball Bearing", "Deep Groove", "Sealed"],
    discountGroups: { "A": 15, "B": 10, "C": 5 }
  },
  {
    id: "p2",
    name: "Tapered Roller Bearing 30205",
    brand: "FAG",
    stockCodes: ["30205-A", "FAG-30205"],
    price: 18.75,
    currency: "USD",
    stockStatus: "low-stock",
    quantity: 45,
    tags: ["Roller Bearing", "Tapered"],
    discountGroups: { "A": 12, "B": 8, "C": 0 }
  },
  {
    id: "p3",
    name: "Spherical Roller Bearing 22212",
    brand: "NSK",
    stockCodes: ["22212-E1", "NSK-22212"],
    price: 85.00,
    currency: "USD",
    stockStatus: "in-stock",
    quantity: 200,
    tags: ["Spherical", "Heavy Duty"],
    discountGroups: { "A": 20, "B": 15, "C": 10 }
  },
  {
    id: "p4",
    name: "Needle Roller Bearing NK 20/20",
    brand: "INA",
    stockCodes: ["NK2020", "INA-NK-20"],
    price: 8.40,
    currency: "USD",
    stockStatus: "out-of-stock",
    quantity: 0,
    tags: ["Needle", "Compact"],
    discountGroups: { "A": 10, "B": 5, "C": 0 }
  },
  {
    id: "p5",
    name: "Cylindrical Roller Bearing NU 205",
    brand: "NTN",
    stockCodes: ["NU205-E", "NTN-NU205"],
    price: 24.30,
    currency: "USD",
    stockStatus: "pre-order",
    quantity: 0,
    tags: ["Cylindrical", "High Speed"],
    discountGroups: { "A": 18, "B": 12, "C": 5 }
  },
  {
    id: "p6",
    name: "Thrust Ball Bearing 51105",
    brand: "Timken",
    stockCodes: ["51105", "TIM-51105"],
    price: 15.20,
    currency: "USD",
    stockStatus: "in-stock",
    quantity: 320,
    tags: ["Thrust", "Axial Load"],
    discountGroups: { "A": 15, "B": 10, "C": 5 }
  },
  {
    id: "p7",
    name: "Angular Contact Ball Bearing 7205",
    brand: "SKF",
    stockCodes: ["7205-BEP", "SKF-7205"],
    price: 32.10,
    currency: "USD",
    stockStatus: "in-stock",
    quantity: 85,
    tags: ["Angular Contact", "Precision"],
    discountGroups: { "A": 15, "B": 10, "C": 5 }
  },
   {
    id: "p8",
    name: "Pillow Block Unit UCP 205",
    brand: "Asahi",
    stockCodes: ["UCP205", "ASA-UCP205"],
    price: 14.50,
    currency: "USD",
    stockStatus: "low-stock",
    quantity: 12,
    tags: ["Housing", "Mounted Unit"],
    discountGroups: { "A": 25, "B": 15, "C": 10 }
  }
];

// Simple cart store using React Context pattern simulation
export type CartItem = {
  product: Product;
  quantity: number;
};

let cart: CartItem[] = [];

export const getCart = () => cart;
export const addToCart = (product: Product, quantity: number) => {
  const existing = cart.find(item => item.product.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
};
export const removeFromCart = (productId: string) => {
  cart = cart.filter(item => item.product.id !== productId);
};
export const clearCart = () => {
  cart = [];
};
