import LinkedinSVG from "../assets/LinkedinSVG.tsx";
import GitHubSVG from "../assets/GitHubSVG.tsx";
import EmailAtSVG from "../assets/EmailAtSVG.tsx";
// import EmailRoundSVG from "../assets/EmailRoundSVG.tsx";
// import EmailSVG from "../assets/EmailSVG.tsx";

export default function Footer() {
  const markup: string = "hover:cursor-pointer hover:opacity-70";

  return (
    <div className="bg-neutral text-neutral-content p-10 ">
      <footer className="max-w-screen-xl m-auto flex justify-around">
        <aside>
          <div className="text-lg">
            Serhii Tyshchenko - Portfolio
            <br />
            <p className="font-bold">Copyright © {new Date().getFullYear()} - All right reserved</p>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <div
              className={markup}
              onClick={() => window.open("https://www.linkedin.com/in/serhii-tyshchenko-st/", "_blank")}
              title="Visit my LinkedIn profile">
              <LinkedinSVG />
            </div>
            <div className={markup} onClick={() => window.open("https://github.com/hexzoner", "_blank")} title="Visit my GitHub profile">
              <GitHubSVG />
            </div>
            <div className={markup} onClick={() => window.open("mailto:tyshchenko.serhii.st@gmail.com", "_blank")} title="Send me an E-Mail">
              <EmailAtSVG />
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
}
