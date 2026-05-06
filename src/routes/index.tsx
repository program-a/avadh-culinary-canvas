import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/Loader";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Story } from "@/components/Story";
import { Brands } from "@/components/Brands";
import { Vision } from "@/components/Vision";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avadh Food & Beverages — Crafted by Passion. Inspired by Taste." },
      {
        name: "description",
        content:
          "Avadh Food & Beverages — a multi-brand culinary house from Gurgaon, India. Home of Asian Kitchen Bokchoy, Swooshi and Lil Buns.",
      },
      { property: "og:title", content: "Avadh Food & Beverages" },
      { property: "og:description", content: "A multi-brand culinary house from Gurgaon — Bokchoy, Swooshi, Lil Buns." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Loader />
      <Nav />
      <Hero />
      <Marquee />
      <Story />
      <Brands />
      <Vision />
      <WhyUs />
      <Contact />
    </main>
  );
}
