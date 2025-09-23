// app/(auth)/layout.tsx
import "@/app/globals.css";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-blue-100 via-blue-200 to-purple-300">
      {children}
    </div>
  );
}

