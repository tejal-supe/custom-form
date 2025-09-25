const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-balance">
                Build powerful forms, effortlessly.
              </h1>
              <p className="max-w-[600px] text-secondary md:text-xl text-pretty">
                Our drag-and-drop form builder helps you create beautiful,
                intelligent forms with conditional logic and a robust response
                dashboard.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                // prefetch={false}
              >
                Get Started Free
              </a>
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                // prefetch={false}
              >
                Learn More
              </a>
            </div>
          </div>
          <img
            src= "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/form-builder-illustration-36JiPNney4y9L7UFIwFiBS5Sj7cFA1.png"
            // "https://www.formbot.com/images/businesses-form-builder.png"
            width="600"
            height="400"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection