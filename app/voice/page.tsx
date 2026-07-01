import type { Metadata } from "next";
import { cases, ContactBand, PageHero, PageShell } from "../guide/_components";

export const metadata: Metadata = {
  title: "お客様の声｜人生の相談窓口",
  description: "人生の相談窓口に寄せられる相談事例と、お客様の声をご紹介します。",
};

export default function VoicePage() {
  return (
    <PageShell active="/voice">
      <PageHero
        title="お客様の声"
        description="実際にご相談いただいた方のお声を、個人が特定されない形でご紹介します。相談前の不安が少しでも軽くなるきっかけになれば嬉しいです。"
      />
      <section className="bg-white px-5 py-14 sm:px-8 sm:py-18 lg:px-9">
        <div className="mx-auto grid max-w-[1080px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-[0_14px_36px_rgba(31,58,86,0.055)] ring-1 ring-brand-navy/6"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-ivory text-brand-navy">
                  <Icon />
                </div>
                <h2 className="mt-5 text-center text-xl font-bold text-brand-navy">{item.title}</h2>
                <p className="mt-2 text-center text-sm font-medium text-brand-navy/82">{item.person}</p>
                <div className="mt-7 rounded-xl bg-brand-ivory/65 p-5">
                  <p className="text-sm font-bold text-brand-beige">相談前に抱えていたこと</p>
                  <p className="mt-3 text-[15px] font-medium leading-8 text-brand-ink/82">
                    {item.concern}
                  </p>
                </div>
                <div className="mt-4 rounded-xl bg-white p-5 ring-1 ring-brand-navy/7">
                  <p className="text-sm font-bold text-[#128c36]">話して感じたこと</p>
                  <p className="mt-3 text-[15px] font-medium leading-8 text-brand-ink/82">{item.voice}</p>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm font-medium leading-7 text-brand-ink/58">
          ※内容はプライバシー保護のため、一部表現を調整しています。感じ方には個人差があります。
        </p>
      </section>
      <ContactBand title="あなたのお話も、安心してお聞かせください。" />
    </PageShell>
  );
}
