import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import ProblemStatement from "~/components/Problem";
import SolutionOverview from "~/components/SolutionOverview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Customer Interactive Group" },
    { name: "description", content: "Customer Success Accelerator" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <>
        <Header />
        <Hero />
        <ProblemStatement />
        <SolutionOverview />
    </>;
}
