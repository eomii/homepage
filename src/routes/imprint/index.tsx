import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div>
        <h1 class="text-center text-transparent text-7xl pb-5">Imprint</h1>
        <p class="text-center text-xl text-transparent mb-3">
          eomii UG
          <br />
          Jordanstr. 47
          <br />
          60486 Frankfurt am Main
          <br />
          Germany
          <br />
          <br />
          Hesse District Court Frankfurt am Main HRB 110247
          <br />
          <br />
          Represented by Aaron Siddhartha Mondal and Jannis Marcel Fengler
          <br />'{"aaron,jannis"}'@eomii.org
          <br />
          <br />
          The source code for this website is available on
          <a
            class="text-ii-mediumpink"
            href="https://github.com/eomii/homepage"
          >
            {" "}
            GitHub
          </a>
          .<br />
        </p>

        <h2 class="text-center text-transparent text-4xl mt-10">
          Limitation of liability for internal content
        </h2>
        <p class="text-center text-xl text-transparent mb-3">
          The content of our website has been compiled with meticulous care and
          to the best of our knowledge. However, we cannot assume any liability
          for the up-to-dateness, completeness or accuracy of any of the pages.
          Pursuant to section 7, para. 1 of the TMG (Telemediengesetz – Tele
          Media Act by German law), we as service providers are liable for our
          own content on these pages in accordance with general laws. However,
          pursuant to sections 8 to 10 of the TMG, we as service providers are
          not under obligation to monitor external information provided or
          stored on our website. Once we have become aware of a specific
          infringement of the law, we will immediately remove the content in
          question. Any liability concerning this matter can only be assumed
          from the point in time at which the infringement becomes known to us.
        </p>

        <h2 class="text-center text-transparent text-4xl mt-10">
          Limitation of liability for external links
        </h2>
        <p class="text-center text-xl text-transparent mb-3">
          Our website contains links to the websites of third parties (“external
          links”). As the content of these websites is not under our control, we
          cannot assume any liability for such external content. In all cases,
          the provider of information of the linked websites is liable for the
          content and accuracy of the information provided. At the point in time
          when the links were placed, no infringements of the law were
          recognisable to us. As soon as an infringement of the law becomes
          known to us, we will immediately remove the link in question.
        </p>

        <h2 class="text-center text-transparent text-4xl mt-10">Copyright</h2>
        <p class="text-center text-xl text-transparent mb-3">
          The content and works published on this website are governed by the
          copyright laws of Germany. Any duplication, processing, distribution
          or any form of utilisation beyond the scope of copyright law shall
          require the prior written consent of the author or authors in
          question.
        </p>

        <h2 class="text-center text-transparent text-4xl mt-10">
          Data protection
        </h2>
        <p class="text-center text-xl text-transparent mb-3">
          A visit to our website can result in the storage on our server of
          information about the access (date, time, page accessed). This does
          not represent any analysis of personal data (e.g., name, address or
          e-mail address). If personal data are collected, this only occurs – to
          the extent possible – with the prior consent of the user of the
          website. Any forwarding of the data to third parties without the
          express consent of the user shall not take place. We would like to
          expressly point out that the transmission of data via the Internet
          (e.g., by e-mail) can offer security vulnerabilities. It is therefore
          impossible to safeguard the data completely against access by third
          parties. We cannot assume any liability for damages arising as a
          result of such security vulnerabilities. The use by third parties of
          all published contact details for the purpose of advertising is
          expressly excluded. We reserve the right to take legal steps in the
          case of the unsolicited sending of advertising information; e.g., by
          means of spam mail.
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "eomii - imprint",
  meta: [
    {
      name: "description",
      content: "eomii imprint",
    },
  ],
};
