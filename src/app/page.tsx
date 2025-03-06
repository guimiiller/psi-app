import { About } from "@/components/About";
import { Atuation } from "@/components/Atuation";
import { Banner } from "@/components/Banner";
import { Benefits } from "@/components/Benefits";
import { Contact } from "@/components/Contact";
import { Count } from "@/components/Count";
import { Faq } from "@/components/Faq";
import { Header } from "@/components/Header";
import { Patients } from "@/components/Patients";
import { Footer } from "@/components/Footer";
import { Whats } from "@/components/Whats";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Atuation />
      <About />
      <Patients />
      <Count />
      <Benefits />
      <Faq />
      <Contact />
      <Footer />
      <Whats />
    </div>
  );
}
