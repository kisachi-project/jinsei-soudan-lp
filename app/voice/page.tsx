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
        description="実際にご相談いただいた方の声をご紹介します。同じようなお悩みを抱える方の、安心のきっかけになれたら嬉しいです。"
      />
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-9">
        <div className="mx-auto grid max-w-[1220px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl bg-white p-7 shadow-[0_18px_45px_rgba(31,58,86,0.07)] ring-1 ring-brand-navy/8">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-ivory text-brand-navy">
                  <Icon />
                </div>
                <h2 className="mt-6 text-center text-2xl font-bold text-brand-navy">{item.title}</h2>
                <p className="mt-2 text-center text-sm font-medium text-brand-navy/82">{item.person}</p>
                <div className="mt-8">
                  <span className="rounded-md bg-brand-ivory px-3 py-2 text-sm font-bold text-brand-ink/76">
                    Before
                  </span>
                  <p className="mt-4 min-h-[5rem] text-base font-medium leading-8 text-brand-ink/82">
                    {item.before}
                  </p>
                </div>
                <p className="my-5 text-center text-3xl text-[#128c36]">↓</p>
                <div>
                  <span className="rounded-md bg-[#e8f3df] px-3 py-2 text-sm font-bold text-brand-ink/76">
                    After
                  </span>
                  <p className="mt-4 text-base font-medium leading-8 text-brand-ink/82">{item.after}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <ContactBand title="あなたのお話も、安心してお聞かせください。" />
    </PageShell>
  );
}
