import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageProvider";
import me from "../assets/meFullSize.jpg";
// import me from "../assets/me_resized_darker.jpg";
// import meDarkBg from "../assets/meDarkBg.jpg";

export default function About() {
  const { language } = useContext(LanguageContext);

  const aboutMe: Map<string, string> = new Map([
    ["EN", "About me"],
    ["DE", "Über mich"],
  ]);

  const intro: Map<string, string> = new Map([
    ["EN", "Hi, my name is Serhii Tyshchenko."],
    ["DE", "Hallo, ich heiße Serhii Tyshchenko."],
  ]);

  const introTank: Map<string, string> = new Map([
    ["EN", "Thank you for visiting my page."],
    ["DE", "Vielen Dank für Ihren Besuch auf meiner Seite."],
  ]);

  const aboutMeText1: Map<string, string> = new Map([
    ["EN", `I'm a web developer with strong knowledge of HTML5, CSS, JavaScript, React.js, Node.js, and Express. `],
    ["DE", `Ich bin ein Webentwickler mit fundierten Kenntnissen in HTML5, CSS, JavaScript, React.js, Node.js und Express.`],
  ]);

  const aboutMeText2: Map<string, string> = new Map([
    [
      "EN",
      `With a diverse background in IT, I
       bring a wealth of experience and a strong problem-solving approach, coupled with apassion for creating exceptional user experiences and
       exceeding customer expectations.`,
    ],
    [
      "DE",
      `Mit einem vielfältigen Hintergrund in der IT bringe ich umfassende Erfahrung und eine starke Problemlösungsfähigkeit mit,
      gepaart mit einer Leidenschaft für die Schaffung außergewöhnlicher Benutzererlebnisse und das Übertreffen der Kundenerwartungen.`,
    ],
  ]);

  const technologies: Map<string, string> = new Map([
    ["EN", "This page is built using: React.js + Typescript, TailwindCSS + DaisyUI"],
    ["DE", "Diese Seite ist erstellt mit: React.js + Typescript, TailwindCSS + DaisyUI"],
  ]);

  return (
    <div className="min-h-screen bg-base-100 ">
      <p className="text-3xl font-semibold pt-8">{aboutMe.get(language)}</p>
      <div className="bg-base-100 flex justify-evenly pt-12 flex-wrap mb-16">
        <div className="text-left flex flex-col justify-center px-8 max-w-xl">
          <p className="text-3xl text-primary">{intro.get(language)}</p> <br></br>
          <p className="text-xl">{introTank.get(language)}</p>
          <br />
          <p className="text-xl">{aboutMeText1.get(language)}</p>
          <br />
          <p className="text-xl">{aboutMeText2.get(language)}</p>
          <br />
          <p className="text-secondary">{technologies.get(language)}</p>
          <br />
        </div>
        <img className="max-w-64 md:max-w-md rounded-3xl " src={me} alt="Serhii Tyshchenko" />
      </div>
    </div>
  );
}
