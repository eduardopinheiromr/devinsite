import PageTags from "@components/PageTags";
import Education from "@components/sections/Education";
import Experience from "@components/sections/Experience";
import Hero from "@components/sections/Hero";

const pageTagsProps = {
  title: "Page title",
  description: "Page description",
};

export default function Home() {
  return (
    <>
      <PageTags {...pageTagsProps} />
      <Hero />
      <Experience />
      <Education />
    </>
  );
}
