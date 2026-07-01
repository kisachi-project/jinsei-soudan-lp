import type { Metadata } from "next";
import { ContactBand, flow, LineButton, PageHero, PageShell } from "../guide/_components";

export const metadata: Metadata = {
  title: "ご利用の流れ｜人生の相談窓口",
  description: "LINE追加から相談、必要な方への継続サポートまでの流れをご案内します。",
};

export default function FlowPage() {
  return (
    <PageShell active="/flow">
      <PageHero
        title="ご利用の流れ"
        description="LINEでのご相談は、簡単なステップでご利用いただけます。初めての方にも分かりやすくご案内します。"
      />
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-9">
        <div className="mx-auto grid max-w-[1220px] gap-5 lg:grid-cols-5">
          {flow.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.step} className="relative rounded-2xl bg-white p-7 text-center shadow-[0_18px_45px_rgba(31,58,86,0.07)] ring-1 ring-brand-navy/8">
                <p className="text-sm font-bold tracking-[0.08em] text-[#128c36]">{item.step}</p>
                <div className="mx-auto mt-5 flex h-24 w-24 items-center justify-center rounded-full bg-brand-ivory text-brand-navy">
                  <Icon />
                </div>
                <h2 className="mt-6 text-2xl font-bold leading-tight text-brand-navy">{item.title}</h2>
                <div className="mx-auto mt-5 h-px w-24 bg-brand-navy/10" />
                <p className="mt-5 text-base font-medium leading-8 text-brand-ink/82">{item.text}</p>
                {index < flow.length - 1 && (
                  <span className="absolute -right-4 top-1/2 z-10 hidden text-2xl font-bold text-brand-navy lg:block">
                    ▶
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </section>
      <section className="px-5 pb-8 sm:px-8 lg:px-9">
        <div className="mx-auto max-w-[1220px] rounded-2xl bg-brand-ivory px-6 py-9 text-center shadow-[0_16px_45px_rgba(31,58,86,0.05)]">
          <h2 className="text-2xl font-bold tracking-[0.08em] text-brand-navy">ご相談方法をお選びいただけます</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {["電話で相談", "Webで相談", "LINEで相談"].map((title) => (
              <div key={title} className="rounded-xl bg-white px-6 py-6 text-left">
                <h3 className="text-xl font-bold text-brand-navy">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-brand-ink/76">
                  {title === "LINEで相談"
                    ? "LINEのメッセージだけでご相談いただけます。気軽に相談したい方におすすめです。"
                    : title === "Webで相談"
                      ? "ビデオ通話などでご相談いただけます。顔を見て話したい方に。"
                      : "お電話で直接お話しいただけます。じっくりお話ししたい方におすすめです。"}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <LineButton />
          </div>
        </div>
      </section>
      <ContactBand />
    </PageShell>
  );
}
