import {
  ContactBand,
  InstagramButton,
  LeafIcon,
  LineButton,
  PageShell,
  photos,
  SectionTitle,
  SparkleIcon,
  SproutIcon,
  worries,
  PeopleIcon,
} from "./guide/_components";

const consultItems = [
  "仕事・キャリアの悩み",
  "恋愛・パートナーシップの悩み",
  "人間関係の悩み",
  "家族・親子の悩み",
  "将来への不安や迷い",
  "自分の気持ちの整理　など",
];

const supportCards = [
  {
    title: "初回相談",
    lead: "まずはお気軽にご相談ください。",
    price: "2,980",
    pricePrefix: "30分",
    points: [
      "どんなお悩みでも大丈夫です。",
      "無理な勧誘は一切ありません。",
      "安心してご利用いただけます。",
    ],
    icon: LeafIcon,
  },
  {
    title: "継続サポート",
    lead: "必要な方にはご案内しております。",
    points: [
      "初回相談後、ご希望や状況に応じて",
      "継続的なサポートもご案内しています。",
      "あなたのペースに合わせて進めます。",
    ],
    icon: PeopleIcon,
  },
  {
    title: "オプション",
    lead: "ご希望に合わせたサポートをご用意。",
    points: [
      "必要に応じて、さまざまなサポートを",
      "ご用意しています。",
      "詳しくはLINEよりお問い合わせください。",
    ],
    icon: SparkleIcon,
  },
];

export default function Home() {
  return (
    <PageShell active="home">
      <section className="relative overflow-hidden bg-brand-ivory">
        <img
          src={photos.hero}
          alt="明るい窓辺で自分の気持ちと向き合う女性"
          className="absolute inset-y-0 right-0 hidden h-full w-[58%] object-cover object-center lg:block"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-[43%] to-white/0" />
        <div className="relative mx-auto grid min-h-[690px] max-w-[1220px] px-5 py-12 sm:px-8 lg:grid-cols-[0.48fr_0.52fr] lg:px-9 lg:py-20">
          <div className="flex flex-col justify-center">
            <h1 className="text-[clamp(3.2rem,7vw,5.6rem)] font-bold leading-[1.28] tracking-normal text-brand-navy">
              もう、
              <br />
              一人で悩まない。
            </h1>
            <p className="mt-8 max-w-md text-base font-medium leading-9 text-brand-navy sm:text-lg">
              相談したい。でも、誰に相談すればいいのか分からない。
              <br />
              そんな時の、最初の相談先です。
            </p>
            <div className="mt-8 max-w-[430px] space-y-3">
              <LineButton className="w-full sm:w-full" />
              <InstagramButton className="w-full sm:w-full" />
              <div className="rounded-xl bg-brand-ivory/90 p-5 shadow-[0_12px_30px_rgba(31,58,86,0.05)] ring-1 ring-brand-navy/5">
                <div className="flex gap-4">
                  <span className="mt-1 text-[#128c36]">
                    <SproutIcon />
                  </span>
                  <p className="text-sm font-medium leading-7 text-brand-ink/78">
                    電話やWebで話すことが苦手な方もご安心ください。
                    <br />
                    メッセージだけでのご相談も可能です。
                    <br />
                    あなたのペースで、無理なくお話しください。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 overflow-hidden rounded-[2rem] shadow-[0_22px_60px_rgba(31,58,86,0.10)] lg:hidden">
            <img src={photos.hero} alt="" className="h-[430px] w-full object-cover object-center" />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-9">
        <div className="mx-auto max-w-[1220px]">
          <SectionTitle title="こんなお悩みありませんか？" />
          <div className="mt-12 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
            {worries.map((worry, index) => {
              const Icon = worry.icon;
              return (
                <div key={worry.title} className="relative px-4 text-center lg:px-7">
                  {index > 0 && <div className="absolute left-0 top-8 hidden h-28 w-px bg-brand-navy/13 lg:block" />}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-ivory text-brand-navy">
                    <Icon />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-brand-navy">{worry.title}</h2>
                  <p className="mx-auto mt-3 whitespace-pre-line text-sm font-medium leading-7 text-brand-ink/78">
                    {worry.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-16 sm:px-8 sm:pb-20 lg:px-9">
        <div className="mx-auto grid max-w-[1060px] gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
          <div className="overflow-hidden rounded-xl">
            <img src={photos.table} alt="" className="h-[330px] w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-[0.08em] text-brand-navy">相談できること</h2>
            <ul className="mt-7 space-y-4 text-base font-medium leading-8 text-brand-ink/82">
              {consultItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-bold text-brand-navy">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm font-bold text-brand-ink/76">
              どんなお悩みでも、安心してご相談ください。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-16 sm:px-8 sm:pb-20 lg:px-9">
        <div className="mx-auto max-w-[1060px]">
          <SectionTitle title="サポートメニュー" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {supportCards.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="relative flex min-h-[330px] flex-col overflow-hidden rounded-2xl bg-brand-ivory p-7 shadow-[0_14px_36px_rgba(31,58,86,0.06)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="shrink-0 text-brand-navy">
                      <Icon />
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-xl font-bold leading-tight text-brand-navy sm:text-2xl">{item.title}</h2>
                      {"price" in item ? null : (
                        <p className="mt-1 text-xs font-bold leading-6 text-[#128c36] sm:text-sm">
                          {item.lead}
                        </p>
                      )}
                    </div>
                  </div>
                  {"price" in item ? (
                    <>
                      <ul className="mt-8 space-y-3 text-[13px] font-medium leading-7 text-brand-ink/78 sm:text-sm">
                        {item.points.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="shrink-0 font-bold text-brand-navy">✓</span>
                            <span className="min-w-0">{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-7 text-center">
                        <p className="text-base font-bold text-brand-navy">{item.pricePrefix}</p>
                        <p className="mt-2 whitespace-nowrap text-[2.45rem] font-bold leading-none tracking-normal text-[#128c36] sm:text-[2.75rem]">
                          {item.price}
                          <span className="ml-1 align-baseline text-sm sm:text-base">円</span>
                        </p>
                        <p className="mt-1 text-xs font-bold text-[#128c36]">税込</p>
                      </div>
                    </>
                  ) : (
                    <ul className="mt-8 space-y-3 text-[13px] font-medium leading-7 text-brand-ink/78 sm:text-sm">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="shrink-0 font-bold text-brand-navy">✓</span>
                          <span className="min-w-0">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="absolute -bottom-6 -right-6 text-brand-beige/25">
                    <Icon />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ContactBand />
    </PageShell>
  );
}
