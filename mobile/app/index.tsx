import { ScrollView } from "react-native";
import AuthNav from "@/components/AuthNav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Journey from "@/components/Journey";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <ScrollView>
      <AuthNav />
      <Hero />
      <Features />
      <Journey />
      <CallToAction />
      <Footer />
    </ScrollView >
  );
}
