import type React from "react";

interface NiceLayoutProps {
  children: React.ReactNode;
}
const DefaultLayout: React.FC<NiceLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-svh flex-col dark:bg-secondary">
      <main className="mx-auto max-w-[950px] py-10 flex flex-col justify-center">
        {children}
      </main>
    </div>
  );
};
export default DefaultLayout;
