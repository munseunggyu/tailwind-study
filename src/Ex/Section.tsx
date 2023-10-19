import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title: string;
}

export default function Section({ children, title }: SectionProps) {
  return (
    <section className="border p-2 m-2">
      <h2 className="font-bold mb-2 text-center">{title}</h2>
      {children}
    </section>
  );
}
