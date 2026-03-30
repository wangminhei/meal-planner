import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Meal Planner',
  description: 'Thực đơn mỗi ngày chuẩn vị Nam Trung Bộ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
