import { AnimatedTabs } from "@/components/AnimatedTabs";
import Footer from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";

const tabs = [
  { label: "Home", value: "home" },
  { label: "About", value: "about" },
  { label: "Contact", value: "contact" },
  { label: "Danger Zone", value: "danger-zone" }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col items-center gap-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Animated Tabs
        </h1>
        <div className="w-full max-w-3xl">
          <AnimatedTabs tabs={tabs} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
