'use client';

export function Philosophy() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Philosophy
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3">The AI Model is the New Algorithm</h3>
            <p className="text-muted-foreground leading-relaxed">
              Traditional SEO optimizes for Google's ranking algorithm. Today, brands need to optimize for how AI models—GPT-4, Claude, Gemini—understand and represent their content. These models are transforming how information is discovered, synthesized, and consumed.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Data-Driven Decisions Over Guesswork</h3>
            <p className="text-muted-foreground leading-relaxed">
              Too many digital strategies are based on assumptions rather than evidence. We believe in providing concrete data about your AI-readiness, allowing you to make informed decisions about where to invest your effort.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">E-E-A-T is the Foundation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Experience, Expertise, Authoritativeness, and Trustworthiness matter more than ever. These are the signals AI models rely on to evaluate credibility. Kasparro helps you demonstrate these qualities clearly.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Speed and Simplicity</h3>
            <p className="text-muted-foreground leading-relaxed">
              Complex tools create analysis paralysis. We deliver quick turnarounds and clear, prioritized insights so you can act fast without getting lost in technical jargon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
