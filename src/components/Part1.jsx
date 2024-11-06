import React from "react";
import { GrDeliver } from "react-icons/gr";

export const Part1 = () => {
  const products = [
    {
      title: "Fastest Delivery",
      description: "Delivery in 24 hours",
      icon: <GrDeliver size={25} />,
    },
    {
      title: "Secure Payments",
      description: "100% safe payments",
      icon: <GrDeliver size={25} />,
    },
    {
      title: "Quality Assurance",
      description: "Top quality products",
      icon: <GrDeliver size={25} />,
    },
    {
      title: "Easy Returns",
      description: "Hassle-free returns",
      icon: <GrDeliver size={25} />,
    },
  ];

  return (
    <div className="border p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex gap-3 items-center p-3 sm:border-r sm:border-b-0 border-b last:border-none rounded"
        >
          <span>{product.icon}</span>
          <span>
            <p className="font-semibold uppercase">{product.title}</p>
            <p className="text-sm">{product.description}</p>
          </span>
        </div>
      ))}
    </div>
  );
};
