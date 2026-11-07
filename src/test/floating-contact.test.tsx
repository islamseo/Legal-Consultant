import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FloatingContact } from "@/components/floating-contact";
import { internationalPhone, phoneNumber } from "@/lib/site-content";

describe("Floating contact actions", () => {
  it("offers a direct call to the office number", () => {
    render(<FloatingContact />);

    const call = screen.getByRole("link", { name: `اتصل بالمكتب على ${phoneNumber}` });

    expect(call).toHaveAttribute("href", `tel:+${internationalPhone}`);
  });

  it("offers a WhatsApp message to the office number", () => {
    render(<FloatingContact />);

    const whatsapp = screen.getByRole("link", { name: "راسل المكتب على واتساب" });

    expect(whatsapp.getAttribute("href")).toBe(
      `https://wa.me/${internationalPhone}?text=${encodeURIComponent(
        "مرحبًا، أرغب في الاستفسار عن خدمات مكتب المحاماة.",
      )}`,
    );
    expect(whatsapp).toHaveAttribute("target", "_blank");
  });
});
