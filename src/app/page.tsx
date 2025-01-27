import { About } from "@/components/About";
import { Atuation } from "@/components/Atuation";
import { Banner } from "@/components/Banner";
import { Count } from "@/components/Count";
import { Header } from "@/components/Header";
import { Patients } from "@/components/Patients";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Atuation />
      <Patients />
      <Count />
    </div>
  );
}
