import * as React from "react";

import logo from "../images/logo.png";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <main className="flex flex-col lg:flex-row border h-full w-full px-20 justify-center gap-10 items-center lg:justify-evenly">
        <img src={logo} alt="Website logo" />
        <h1 className="lg:order-first text-5xl lg:text-6xl text-left font-display font-medium overflow-wrap: break-words">
          Website <br />
          Under <br />
          Construction
        </h1>
      </main>
    </Layout>
  );
}

export const Head = () => <title>Guilherme D. Müller | Mobile & Web Developer</title>;
