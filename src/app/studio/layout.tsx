import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "ArtDent Studio",
  robots: { index: false, follow: false },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The Studio layout must use the full viewport
  return <>{children}</>;
}
