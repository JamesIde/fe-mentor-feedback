import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="xl:w-3/5 md:w-4/5 w-full mx-auto xl:mt-24 md:mt-12">
      {children}
    </div>
  );
}
