import MsmePageClient from "@/app/msme/MsmePageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "For MSME",
  description:
    "Amplify sales for your business with PayNback. Grow visibility, trust, and long-term customer loyalty through our fintech ecosystem.",
  path: "/msme",
});

export default function MsmePage() {
  return <MsmePageClient />;
}
