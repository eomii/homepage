import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const AaronMondal: TeamMemberProps = {
  name: "Aaron",
  references: [
    {
      url: "https://github.com/aaronmondal",
      description: "GitHub @aaronmondal",
    },
    {
      url: "https://github.com/neqochan",
      description: "GitHub @neqochan",
    },
    {
      url: "https://www.linkedin.com/in/aaron-siddhartha-mondal-24b888233",
      description: "LinkedIn",
    },
  ],
};

const JannisFengler: TeamMemberProps = {
  name: "Jannis",
  references: [
    {
      url: "https://twitter.com/odysseytospace",
      description: "Twitter @odysseytospace",
    },
    {
      url: "https://linkedin.com/in/jannis-fengler-250a351b7",
      description: "LinkedIn",
    },
  ],
};

const JaroEichler: TeamMemberProps = {
  name: "Jaro",
  references: [
    {
      url: "https://github.com/jaroeichler",
      description: "GitHub @jaroeichler",
    },
    {
      url: "https://www.uni-frankfurt.de/115631621/M_Sc__Jaro_Eichler",
      description: "GoetheUniversity",
    },
    {
      url: "https://linkedin.com/in/jaro-eichler-95071a237",
      description: "LinkedIn",
    },
  ],
};

const RaphaelSenghaas: TeamMemberProps = {
  name: "Raphael",
  references: [
    {
      url: "https://www.thphys.uni-heidelberg.de/~senghaas",
      description: "HeidelbergUniversity",
    },
    {
      url: "https://www.linkedin.com/in/raphael-senghaas-3046061b9",
      description: "LinkedIn",
    },
  ],
};

const RulesLl: ProjectProps = {
  name: "rules_ll",
  description: "Upstream Clang/LLVM toolchain for heterogeneous C and C++",
  references: [
    {
      url: "https://github.com/eomii/rules_ll",
      description: "GitHub",
    },
    {
      url: "https://ll.eomii.org",
      description: "Docs",
    },
  ],
};

export default component$(() => {
  return (
    <>
      <div class="flex max-w-md py-2.5">
        <div>
          <h1 class="text-center text-transparent text-7xl">eomii</h1>
          <h4 class="text-right text-xl text-transparent -rotate-12">
            えおみい!
          </h4>
          <p class="rotate-6 text-center text-xl text-transparent mb-3">
            (/*.*)/ Bleeding Edge Software Infrastructure \(*.*\)
          </p>

          <h2 class="text-center text-transparent text-4xl mt-10">Projects</h2>

          <Project {...RulesLl} />

          <h2 class="text-center text-transparent text-4xl mt-10">Team</h2>

          <TeamMember {...AaronMondal} />
          <TeamMember {...JannisFengler} />
          <TeamMember {...JaroEichler} />
          <TeamMember {...RaphaelSenghaas} />

          <div class="text-center text-transparent mt-20 mb-2">
            <a href="imprint">Imprint↗</a>
          </div>
        </div>
      </div>
    </>
  );
});

interface ReferenceLinkProps {
  url: string;
  description: string;
}

const ReferenceLink = component$<ReferenceLinkProps>((props) => {
  return (
    <>
      <a
        class="text-sm text-center no-underline text-transparent"
        href={props.url}
      >
        {props.description}↗
      </a>
    </>
  );
});

interface TeamMemberProps {
  name: string;
  references: ReferenceLinkProps[];
}

interface ProjectProps {
  name: string;
  description: string;
  references: ReferenceLinkProps[];
}

const TeamMember = component$<TeamMemberProps>((props) => {
  return (
    <>
      <h3 class="text-left text-3xl text-transparent -rotate-6 mb-6">
        {props.name}
      </h3>
      {props.references.map((ref, index) => (
        <p class="text-center text-xl text-transparent mb-3" key={index}>
          <ReferenceLink url={ref.url} description={ref.description} />
        </p>
      ))}
    </>
  );
});

const Project = component$<ProjectProps>((props) => {
  return (
    <>
      <div>
        <h3 class="text-left text-3xl text-transparent -rotate-6 mb-6">
          {props.name}
        </h3>
        <p class="text-center text-xl text-transparent mb-3">
          {props.description}
        </p>
        <p class="text-center text-xl text-transparent mb-3">
          {props.references.map((ref, index) => (
            <ReferenceLink
              key={index}
              url={ref.url}
              description={ref.description}
            />
          ))}
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "eomii",
  meta: [
    {
      name: "description",
      content: "eomii homepage",
    },
  ],
};
