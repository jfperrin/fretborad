import { Suspense } from "react";
import CustomLogin from "@/app/dashboard/periods/customLogin";
import List from "@/app/dashboard/periods/list";

export default async function Page() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Periods</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
        <Suspense fallback={<CustomLogin />}>
          <List />
        </Suspense>
      </div>
    </main>
  );
}
