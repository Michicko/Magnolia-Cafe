import Heading from "@/components/Typography/Heading";

export default function Home() {
  return (
    <>
      <h1>Home page!</h1>
      <Heading text={"About Magnolia"} type={1} color="secondary" />
      <Heading text={"Our coffee"} type={2} color="light" />
    </>
  );
}
