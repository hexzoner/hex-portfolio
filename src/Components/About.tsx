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
      <p className="text-3xl font-semibold mt-16">{aboutMe.get(language)}</p>
      <div className="bg-base-100 flex justify-center mt-16 gap-12 flex-wrap">
        <div className="text-left md:w-1/3 w-3/4 flex flex-col justify-center">
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
        <img className="h-96 lg:w-1/4 lg:h-full object-cover rounded-3xl mb-6" src={me} alt="Serhii Tyshchenko" />
      </div>
    </div>
  );
}
