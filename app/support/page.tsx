import type { Metadata } from "next";
import { ContactBand, PageHero, PageShell, supports } from "../guide/_components";

export const metadata: Metadata = {
  title: "サポート内容｜人生の相談窓口",
  description: "初回相談、継続サポート、メッセージ相談など、人生の相談窓口のサポート内容をご案内します。",
};

export default function SupportPage() {
  return (
    <PageShell active="/support">
      <PageHero
        title="サポート内容"
        description="あなたの状況に合わせたサポートを行います。話を聞き、整理し、必要な一歩を一緒に考えます。"
      />
      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-9">
        <div className="relative mx-auto max-w-[880px] space-y-5">
          {supports.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl bg-white p-7 shadow-[0_14px_36px_rgba(31,58,86,0.055)] ring-1 ring-brand-navy/6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand-ivory text-brand-navy">
                    <Icon />
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
                      {item.title}
                      {item.title === "初回相談" && <span className="ml-3 text-xl">（30分 2,980円）</span>}
                    </h2>
                    <p className="mt-3 text-base font-bold text-brand-beige">{item.lead}</p>
                    <p className="mt-3 text-base font-medium leading-8 text-brand-ink/82">{item.text}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <ContactBand />
    </PageShell>
  );
}
