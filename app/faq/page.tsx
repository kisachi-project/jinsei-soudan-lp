import type { Metadata } from "next";
import { ContactBand, faqs, PageHero, PageShell } from "../guide/_components";

export const metadata: Metadata = {
  title: "よくある質問｜人生の相談窓口",
  description: "相談方法、料金、秘密の扱いなど、人生の相談窓口によく寄せられる質問をまとめました。",
};

export default function FaqPage() {
  const left = faqs.filter((_, index) => index % 2 === 0);
  const right = faqs.filter((_, index) => index % 2 === 1);

  return (
    <PageShell active="/faq">
      <PageHero
        title="よくある質問"
        description="お客様からよくいただくご質問をまとめました。その他のご質問は、お気軽にお問い合わせください。"
      />
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-9">
        <div className="mx-auto grid max-w-[1220px] gap-6 lg:grid-cols-2">
          <FaqColumn items={left} />
          <FaqColumn items={right} />
        </div>
      </section>
      <ContactBand title="ご不明な点がございましたら、お気軽にご連絡ください。" />
    </PageShell>
  );
}

function FaqColumn({
  items,
}: {
  items: {
    question: string;
    answer: string;
  }[];
}) {
  return (
    <div className="space-y-5">
      {items.map((faq, index) => (
        <details
          key={faq.question}
          className="group rounded-xl bg-white p-6 shadow-[0_12px_32px_rgba(31,58,86,0.06)] ring-1 ring-brand-navy/8"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-center gap-4 text-brand-navy">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-ivory font-serif text-xl font-bold">
              Q
            </span>
            <span className="text-lg font-bold leading-7">{faq.question}</span>
            <span className="ml-auto text-xl font-bold transition group-open:rotate-180">⌄</span>
          </summary>
          <p className="mt-5 pl-16 text-base font-medium leading-8 text-brand-ink/78">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
