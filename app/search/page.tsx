import SearchResultsContent from "./SearchResultsContent";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  return <SearchResultsContent query={q} />;
}
