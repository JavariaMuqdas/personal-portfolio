import { projects } from "../components/data/projects.js";
import { useReveal } from "../hooks/useReveal.js";

const pinLayout = [
  { rotate: "-rotate-6", top: "0%", left: "4%", size: "h-40 w-32" },
  { rotate: "rotate-3", top: "14%", left: "48%", size: "h-32 w-36" },
  { rotate: "rotate-6", top: "46%", left: "2%", size: "h-28 w-32" },
  { rotate: "-rotate-3", top: "58%", left: "44%", size: "h-36 w-32" },
];

const pins = pinLayout.map((layout, i) => {
  const project = projects[i];
  return {
    ...layout,
    title: project.title,
    sub: project.stack.slice(0, 2).join(" · "),
    image: project.images && project.images[0],
  };
});

export default function Hero() {
  const textRef = useReveal();
  const artRef = useReveal();

  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:pb-28 lg:pt-24"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div ref={textRef} className="reveal">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-rose-700">
            React JS · Laravel · MySQL
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Building{" "}
            <span className="italic text-rose-700">
              {" "}
              modern web applications{" "}
            </span>{" "}
            from frontend to backend.
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted">
            I design and build full-stack applications — React interfaces on top
            of Laravel and MySQL backends — with a focus on clean structure and
            products that actually run in production.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-rose-700 px-6 py-3 text-sm font-semibold text-white shadow-pin transition hover:bg-rose-600"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink transition hover:bg-surfaceHover"
            >
              Hire me as a freelancer
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8">
            <div>
              <dt className="font-display text-3xl font-semibold text-ink">
                5
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-faint">
                Products shipped
              </dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-semibold text-ink">
                2
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-faint">
                Core stacks
              </dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-semibold text-ink">
                100%
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-faint">
                Built from scratch
              </dd>
            </div>
          </dl>
        </div>

        {/* Signature element: tilted pinboard collage of real project screenshots */}
        <div
          ref={artRef}
          className="reveal relative mx-auto h-[420px] w-full max-w-md lg:h-[460px]"
        >
          <div className="absolute inset-0 rounded-pin border border-line bg-surface/60"></div>
          {pins.map((pin) => (
            <div
              key={pin.title}
              className={`absolute overflow-hidden ${pin.size} ${pin.rotate} rounded-2xl border border-line bg-surface shadow-pin transition duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-pinHover`}
              style={{ top: pin.top, left: pin.left }}
            >
              {pin.image ? (
                <>
                  <img
                    src={pin.image}
                    alt={pin.title}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent p-2.5">
                    <p className="font-display text-xs font-semibold leading-tight text-ink">
                      {pin.title}
                    </p>
                    <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wide text-muted">
                      {pin.sub}
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex h-full flex-col justify-between p-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-bloodRed"></span>
                  <div>
                    <p className="font-display text-sm font-semibold leading-tight text-ink">
                      {pin.title}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-muted">
                      {pin.sub}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
