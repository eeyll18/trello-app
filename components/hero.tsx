import LandingActions from "./landingActions";

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-24 md:py-32 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          Your Team's <span className="text-blue-600">Visual Workspace</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          TrelloClone helps teams move work forward. Collaborate, manage
          projects, and reach new productivity peaks with our intuitive, visual
          boards.
        </p>

        <LandingActions location="hero" />
      </div>
    </section>
  );
}
