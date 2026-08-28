import { redirect } from "react-router";
import { defaultLanguage } from "~/locales/dictionary";

export function loader() {
  return redirect(`/${defaultLanguage}`);
}

export default function Index() {
  return null;
}
