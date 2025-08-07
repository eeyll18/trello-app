import { CheckSquare, Zap, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: CheckSquare,
      title: "Task Management",
      description: "Organize your tasks with intuitive drag-and-drop boards",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with Next.js 15 for optimal performance",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security with Clerk authentication",
    },
  ];
  return (
    <section id="features" className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          More Than Just a To-Do List
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Powerful features designed to supercharge your workflow.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex justify-center items-center h-12 w-12 rounded-full bg-blue-100 mb-5 mx-auto">
              <feature.icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">
              {feature.title}
            </h3>
            <p className="text-slate-500 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
