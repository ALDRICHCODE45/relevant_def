import { SmoothScroll } from "@/components/SmoothScroll";

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <SmoothScroll />
    </>
  );
}
