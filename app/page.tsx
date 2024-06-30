import Hero from "@/components/Hero";
import DescriptionCard from "@/components/DescriptionCard";

const data = [
  {
    title: "You get your medical records: First, you obtain your medical records from your healthcare provider. This might include lab results, imaging reports, prescriptions, and other health-related documents. You ensure all your medical data is up-to-date and accurate. Keeping a personal copy helps you manage and track your health history.",
    img: "/lottie/1.svg",
  },
  {
    title: "Any government-authorized body (health sector) uploads it into the blockchain on your behalf: Next, you approach a government-authorized health organization to securely upload your medical records onto the blockchain. This body verifies the authenticity of your records before uploading. The blockchain ensures that your data is tamper-proof and immutable. This step guarantees the integrity and security of your medical information.",
    img: "/lottie/2.svg",
  },
  {
    title: "After uploading, it gives you a private key: Upon successful upload, the authorized body provides you with a private key. This private key acts as your unique identifier and access point to your medical data on the blockchain. It is crucial to store this key securely, as it controls who can access your data. Losing the private key means losing access to your health records.",
    img: "/lottie/3.svg",
  },
  {
    title: "You can share the key with only desired organizations to share the data: Finally, you can selectively share this private key with organizations or individuals you trust, such as doctors, hospitals, or researchers. Sharing the key grants them access to view and utilize your medical records as needed. This ensures that your data is shared only with entities you approve, maintaining privacy and control over your health information.",
    img: "/lottie/4.svg",
  },
]

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="flex flex-col items-center w-full py-28 gap-32">
        <h1 id="description" className="text-4xl font-bold">Our simple workflow:</h1>
        {
          data.map((item, idx) => (

            <DescriptionCard key={idx} {...item} />
          ))
        }
      </div>
    </main>
  );
}
