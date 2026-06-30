const worries = [
  {
    title: "恋愛",
    text: "恋愛の悩みや\nパートナーとの関係",
    icon: HeartIcon,
  },
  {
    title: "仕事",
    text: "仕事の不安や\nキャリアのこと",
    icon: BriefcaseIcon,
  },
  {
    title: "お金",
    text: "お金の悩みや\n将来の不安",
    icon: YenIcon,
  },
  {
    title: "人間関係",
    text: "友人や職場の\n人間関係のこと",
    icon: PeopleIcon,
  },
  {
    title: "将来",
    text: "将来への不安や\n自分の進む道",
    icon: SproutIcon,
  },
  {
    title: "家族",
    text: "家族のことや\n親との関係",
    icon: HomeIcon,
  },
];

const flowSteps = [
  {
    number: "01",
    title: "話してみる",
    text: "まずは言葉にするところから。",
    image: "/brand/hero-window-woman.png",
    alt: "窓辺で自分の気持ちを見つめる女性",
  },
  {
    number: "02",
    title: "整理する",
    text: "気持ちや状況を一緒に整理します。",
    image: "/brand/consult-hero.png",
    alt: "相談員が話を丁寧に聞いている様子",
  },
  {
    number: "03",
    title: "方向性を見つける",
    text: "あなたの価値観や希望をもとに、進むべき方向性を見つけます。",
    image: "/brand/flow-direction.png",
    alt: "進む方向を考える分かれ道",
  },
  {
    number: "04",
    title: "一歩踏み出す",
    text: "あなたらしい次の一歩を応援します。",
    image: "/brand/flow-next-step.png",
    alt: "明るい公園で前を向く女性",
  },
  {
    number: "05",
    title: "継続サポート",
    text: "相談して終わりではなく、あなたの人生の相談役としてこれからも寄り添います。",
    image: "/brand/flow-support.png",
    alt: "穏やかな夕景の中で話す二人",
  },
];

const photos = {
  hero: "/brand/hero-window-woman.png",
  story: "/brand/consult-story.png",
  contact: "/brand/consult-contact.png",
  logo: "/brand/logo-mark.png",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-brand-ink">
      <header className="fixed left-0 right-0 top-0 z-30 bg-white/72 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1220px] items-center justify-between px-5 py-4 sm:px-8 lg:px-9">
          <a href="#top" className="flex items-center gap-3 text-brand-navy">
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl">
              <img src={photos.logo} alt="" className="h-10 w-10 object-contain" />
            </span>
            <span className="text-base font-bold tracking-normal sm:text-xl">人生の相談窓口</span>
          </a>
          <nav className="hidden items-center gap-9 text-sm font-bold text-brand-navy sm:flex">
            <a href="#story" className="transition hover:text-brand-beige">
              Story
            </a>
            <a href="#flow" className="transition hover:text-brand-beige">
              Flow
            </a>
            <a
              href="/guide"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-brand-beige"
            >
              相談事例
            </a>
            <a href="#contact" className="transition hover:text-brand-beige">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-brand-ivory">
        <img
          src={photos.hero}
          alt="窓辺で考える女性"
          className="absolute inset-y-0 right-0 hidden h-full w-[64%] object-cover object-right lg:block"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/94 via-[44%] to-white/0" />
        <div className="relative mx-auto flex min-h-[680px] max-w-[1220px] flex-col justify-center px-5 pb-14 pt-28 sm:px-8 lg:min-h-[690px] lg:px-9">
          <div className="max-w-[580px] animate-soft-fade">
            <p className="text-sm font-bold text-brand-beige">人生の相談窓口</p>
            <h1 className="mt-6 max-w-[34rem] text-[clamp(3.05rem,6.4vw,4.7rem)] font-bold leading-[1.24] tracking-normal text-brand-navy">
              もう、
              <br />
              一人で悩まない。
            </h1>
            <p className="mt-8 max-w-md text-base font-medium leading-9 text-brand-navy sm:text-lg">
              相談したい。
              <br />
              でも、誰に相談すればいいのか分からない。
              <br />
              そんな時の、最初の相談先です。
            </p>
            <a
              href="#contact"
              className="mt-9 inline-flex min-h-14 items-center gap-5 rounded-full bg-brand-navy px-9 py-4 text-base font-bold text-white shadow-[0_18px_34px_rgba(31,58,86,0.18)] transition duration-300 hover:bg-brand-navy/88 focus:outline-none focus:ring-4 focus:ring-brand-beige/45"
            >
              相談してみる
              <span aria-hidden="true" className="text-xl leading-none">
                →
              </span>
            </a>
          </div>
          <div className="mt-12 overflow-hidden rounded-[2rem] shadow-[0_22px_60px_rgba(31,58,86,0.10)] lg:hidden">
            <img src={photos.hero} alt="" className="h-[390px] w-full object-cover object-center" />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-18 sm:px-8 sm:py-20 lg:px-9">
        <div className="mx-auto max-w-[1220px]">
          <SectionTitle title="こんなお悩みありませんか？" />
          <div className="mt-12 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
            {worries.map((worry, index) => {
              const Icon = worry.icon;
              return (
                <div
                  key={worry.title}
                  className="relative px-4 text-center lg:min-h-44 lg:px-7"
                >
                  {index > 0 && (
                    <div className="absolute left-0 top-8 hidden h-28 w-px bg-brand-navy/13 lg:block" />
                  )}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-ivory text-brand-navy shadow-[0_12px_28px_rgba(31,58,86,0.05)]">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-brand-navy">{worry.title}</h3>
                  <p className="mx-auto mt-3 whitespace-pre-line text-sm font-medium leading-7 text-brand-ink/78">
                    {worry.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="story" className="overflow-hidden bg-brand-ivory">
        <div className="mx-auto grid max-w-[1220px] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex items-center px-5 py-16 sm:px-8 sm:py-20 lg:px-9">
            <div className="max-w-xl">
              <p className="text-sm font-bold text-brand-beige">Brand Story</p>
              <h2 className="mt-5 text-3xl font-bold leading-[1.55] tracking-normal text-brand-navy sm:text-4xl sm:leading-[1.55]">
                人生には、
                <br />
                誰にも相談できないことがあります。
              </h2>
              <div className="mt-8 space-y-3 text-base font-medium leading-8 text-brand-ink/84">
                <p>相談したい。</p>
                <p>でも、誰に相談すればいいのか分からない。</p>
                <p>そんな人が、最初に安心して相談できる場所。</p>
              </div>
              <p className="mt-7 text-lg font-bold leading-8 text-brand-beige">
                それが「人生の相談窓口」です。
              </p>
            </div>
          </div>
          <div className="relative min-h-[330px] overflow-hidden sm:min-h-[430px] lg:min-h-[480px]">
            <img
              src={photos.story}
              alt="男性相談員が女性相談者の話を落ち着いて聞いている相談シーン"
              className="h-full min-h-[330px] w-full object-cover object-center sm:min-h-[430px] lg:min-h-[480px]"
            />
            <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-brand-ivory to-transparent lg:block" />
          </div>
        </div>
      </section>

      <section id="flow" className="bg-brand-ivory px-5 py-18 sm:px-8 sm:py-20 lg:px-9">
        <div className="mx-auto max-w-[1220px]">
          <SectionTitle title="相談の流れ" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {flowSteps.map((step, index) => (
              <article
                key={step.number}
                className="relative overflow-visible rounded-xl bg-white/78 p-6 shadow-[0_18px_45px_rgba(31,58,86,0.06)]"
              >
                <p className="font-serif text-4xl italic leading-none text-brand-beige sm:text-5xl">
                  {step.number}
                </p>
                <h3 className="mt-4 text-xl font-bold leading-tight text-brand-navy">
                  {step.title}
                </h3>
                <p className="mt-4 min-h-[4.4rem] text-sm font-medium leading-7 text-brand-ink/78">
                  {step.text}
                </p>
                <div className="mt-5 overflow-hidden rounded-lg">
                  <img src={step.image} alt={step.alt} className="h-44 w-full object-cover" />
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="absolute -right-5 top-[57%] z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-brand-beige shadow-[0_12px_28px_rgba(31,58,86,0.10)] lg:flex">
                    →
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-5 pb-10 pt-9 sm:px-8 lg:px-9">
        <div className="mx-auto grid max-w-[1220px] overflow-hidden rounded-xl bg-brand-ivory shadow-[0_18px_45px_rgba(31,58,86,0.06)] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="min-h-[260px] overflow-hidden">
            <img
              src={photos.contact}
              alt="安心感を伝えるように手を添えている写真"
              className="h-full min-h-[260px] w-full object-cover object-center"
            />
          </div>
          <div className="flex items-center px-6 py-12 sm:px-10 lg:px-16">
            <div>
              <h2 className="text-3xl font-bold leading-[1.45] text-brand-navy sm:text-5xl">
                まずは話してみませんか。
              </h2>
              <p className="mt-6 text-base font-medium leading-9 text-brand-navy/82 sm:text-lg">
                ひとりで抱え込まず、
                <br />
                言葉にするところから始めてみてください。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.instagram.com/jinsei_soudan_madoguchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-navy px-7 py-3 text-base font-bold text-white transition duration-300 hover:bg-brand-navy/88 focus:outline-none focus:ring-4 focus:ring-brand-beige/45"
                >
                  Instagramで相談する
                </a>
                <a
                  href="https://lin.ee/q9gkE9I"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#2dbd4f] px-7 py-3 text-base font-bold text-white transition duration-300 hover:bg-[#26a944] focus:outline-none focus:ring-4 focus:ring-[#2dbd4f]/25"
                >
                  LINEで相談する
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white px-5 py-8 sm:px-8 lg:px-9">
        <div className="mx-auto flex max-w-[1220px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-brand-navy">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl">
              <img src={photos.logo} alt="" className="h-11 w-11 object-contain" />
            </span>
            <div>
              <p className="text-lg font-bold">人生の相談窓口</p>
              <p className="text-xs text-brand-ink/58">もう、一人で悩まない。</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-sm font-bold text-brand-navy sm:flex-row sm:items-center sm:gap-8">
            <a href="#top">Story</a>
            <a href="#flow">Flow</a>
            <a href="/guide" target="_blank" rel="noopener noreferrer">
              相談事例
            </a>
            <a href="#contact">Contact</a>
            <p className="font-medium text-brand-ink/58">© 2026 人生の相談窓口</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold leading-tight tracking-[0.08em] text-brand-navy sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 h-px w-10 bg-brand-beige" />
    </div>
  );
}

function HeartIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20s-7-4.4-9.2-9A5.1 5.1 0 0 1 12 6.3 5.1 5.1 0 0 1 21.2 11C19 15.6 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7m-10 4h14M5 7h14v12H5V7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function YenIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path
        d="m7 5 5 7 5-7M8 12h8m-8 4h8m-4-4v7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path
        d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.5 19a5 5 0 0 1 10 0m-1.2-4.2A4.6 4.6 0 0 1 20.5 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SproutIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20V10m0 0C9 7 6.5 6.5 4 7c.2 3 2.2 5.2 8 3Zm0 0c3-3 5.5-3.5 8-3-.2 3-2.2 5.2-8 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
      <path
        d="m4 11 8-7 8 7m-14-1v10h12V10M10 20v-6h4v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
