import CharacterLinks from "@/components/CharacterLinks";
import NotFound from "@/components/NotFound";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { categories } from "@/lib/data";

export default function Category() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(false);

  useEffect(() => {
    if (router.query.category) {
      setActiveCategory(categories[router.query.category]);
    }
  }, [router.query]);

  if (!activeCategory) {
    return <NotFound />
  }

  return (
    <main className="category-page">
        <h1>{activeCategory.label}</h1>
        <p className="category-description">{activeCategory.description ?? ''}</p>
        <CharacterLinks category={router.query.category} />
    </main>
  );
}