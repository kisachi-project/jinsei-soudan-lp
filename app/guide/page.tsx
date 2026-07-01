import type { Metadata } from "next";
import { ContactBand, PageHero, PageShell, tabs } from "./_components";

export const metadata: Metadata = {
  title: "安心ガイド｜人生の相談窓口",
  description: "お客様の声、サポート内容、ご利用の流れ、よくある質問への入口ページです。",
};

export default function GuidePage() {
  return (
    <PageShell active="">
      <PageHero
        title="安心ガイド"
        description="相談する前に知っておきたいことを、見やすくまとめました。気になるページからご覧ください。"
      />
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-9">
        <div className="mx-auto grid max-w-[980px] gap-5 sm:grid-cols-2">
          {tabs.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              className="rounded-2xl bg-brand-ivory p-8 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(31,58,86,0.08)]"
            >
              <h2 className="text-2xl font-bold text-brand-navy">{tab.label}</h2>
              <p className="mt-4 text-sm font-medium leading-7 text-brand-ink/72">
                相談前に気になる内容を、安心して確認できます。
              </p>
            </a>
          ))}
        </div>
      </section>
      <ContactBand />
    </PageShell>
  );
}
