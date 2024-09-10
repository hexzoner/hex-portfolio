export default function LanguageToggle() {
  return (
    <select className="select  w-full max-w-[6rem]" aria-label="Language Selector">
      {/* <option disabled selected>
        Select language
      </option> */}
      <option selected>EN</option>
      <option>DE</option>
    </select>
  );
}
