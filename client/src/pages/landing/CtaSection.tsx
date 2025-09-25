import React from 'react'

const CtaSection = () => {
  return (
   <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
  <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
    <div className="space-y-3">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-balance">
        Ready to build your next great form?
      </h2>
      <p className="mx-auto max-w-[600px] text-primary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-pretty">
        Join thousands of users who are building smarter forms with our
        intuitive platform.
      </p>
    </div>
    <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
      <a
        href="#"
        className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        // prefetch={false}
      >
        Start Building Now
      </a>
    </div>
  </div>
</section>

  )
}

export default CtaSection