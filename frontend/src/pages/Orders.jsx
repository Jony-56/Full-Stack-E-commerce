import React, { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, cartItems, currency } = useContext(ShopContext);

  // Support both array and object cart shapes
  const itemsArray = useMemo(() => {
    if (Array.isArray(cartItems)) return cartItems;
    if (!cartItems || typeof cartItems !== "object") return [];

    // If cartItems is like { [productId]: { size, quantity } } or { [productId]: { ... } }
    // Try to normalize into [{ _id, size, quantity }]
    return Object.entries(cartItems).flatMap(([productId, value]) => {
      // value could be quantity number, or an object
      if (typeof value === "number") return [{ _id: productId, size: "—", quantity: value }];
      if (value && typeof value === "object") {
        // if it contains sizes map, you can adapt here
        const size = value.size ?? "—";
        const quantity = value.quantity ?? 1;
        return [{ _id: productId, size, quantity }];
      }
      return [];
    });
  }, [cartItems]);

  const orders = useMemo(() => {
    return itemsArray
      .map((item) => {
        const product = products?.find((p) => p._id === item._id);
        if (!product) return null;

        const qty = Number(item.quantity || 1);
        const price = Number(product.price || 0);

        return {
          id: `${item._id}-${item.size}-${qty}`,
          product,
          size: item.size,
          qty,
          total: price * qty,
          status: "Order placed",
          eta: "2–5 business days",
          date: new Date().toLocaleDateString(),
        };
      })
      .filter(Boolean);
  }, [itemsArray, products]);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-8 max-w-7xl mx-auto">
      <Title title="YOUR" desc="ORDERS" />

      {/* Header */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <p className="text-sm text-gray-600">
            {orders.length ? `You have ${orders.length} order${orders.length > 1 ? "s" : ""}.` : "No orders yet."}
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-2 text-sm border rounded-md hover:bg-gray-50 transition">
            Filter
          </button>
          <button className="px-3 py-2 text-sm border rounded-md hover:bg-gray-50 transition">
            Sort
          </button>
        </div>
      </div>

      {/* Empty state */}
      {orders.length === 0 ? (
        <div className="mt-8 bg-white border rounded-xl p-8 text-center">
          <div className="mx-auto w-12 h-12 rounded-full border flex items-center justify-center text-xl">
            🧾
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">You have no orders</h3>
          <p className="mt-1 text-sm text-gray-600">When you place an order, it’ll show up here.</p>
          <button className="mt-5 bg-black text-white px-5 py-2.5 rounded-md hover:bg-gray-800 transition text-sm">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {orders.map((o) => (
            <div
              key={o.id}
              className="bg-white border rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Left: image + details */}
                <div className="flex gap-4 min-w-0">
                  <img
                    src={o.product.image?.[0]}
                    alt={o.product.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border flex-shrink-0"
                  />

                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                      {o.product.name}
                    </h3>

                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
                      <span className="inline-flex items-center gap-1">
                        <span className="text-gray-500">Size:</span>
                        <span className="font-medium text-gray-800">{o.size}</span>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="text-gray-500">Qty:</span>
                        <span className="font-medium text-gray-800">{o.qty}</span>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="text-gray-500">Placed:</span>
                        <span className="font-medium text-gray-800">{o.date}</span>
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-green-600" />
                        {o.status}
                      </span>
                      <span className="text-sm text-gray-600">ETA: {o.eta}</span>
                    </div>
                  </div>
                </div>

                {/* Right: price + actions */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-2 sm:gap-3">
                  <div className="text-left sm:text-right">
                    <p className="text-xs text-gray-500">Total</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {currency} {o.total}
                    </p>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none px-4 py-2 text-sm border rounded-md hover:bg-gray-50 transition">
                      View
                    </button>
                    <button className="flex-1 sm:flex-none bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition text-sm">
                      Track Order
                    </button>
                  </div>
                </div>
              </div>

              {/* Optional: bottom divider row for order meta */}
              <div className="mt-4 pt-4 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-gray-600">
                <p className="truncate">Order ID: <span className="text-gray-800 font-medium">{o.id}</span></p>
                
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
