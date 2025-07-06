import { DesktopHeader } from "./parts/DesktopHeader";
import { MobileHeader } from "./parts/MobileHeader";

export default function Header({ navLinks, rootUrl, appName, imageSrc, mode }) {
  if (mode === "mobile") {
    return (
      <MobileHeader
        navLinks={navLinks}
        rootUrl={rootUrl}
        appName={appName}
        imageSrc={imageSrc}
      />
    );
  }
  return (
    <DesktopHeader
      navLinks={navLinks}
      rootUrl={rootUrl}
      appName={appName}
      imageSrc={imageSrc}
    />
  );
}
