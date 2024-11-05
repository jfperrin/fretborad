import { fetchPeriods } from "@/app/lib/data/periods";

export default async function List() {
  const periods = await fetchPeriods();

  if (!periods) return null;

  return periods.map((period) => (
    <div key={period.id}>
      {period.month}-{period.year}
    </div>
  ));
}
