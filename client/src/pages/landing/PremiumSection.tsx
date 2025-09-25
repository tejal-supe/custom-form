import { Check } from 'lucide-react';
import React from 'react'

const PremiumSection = () => {
  const plans = {
    free: {
      name: "Free",
      price: 0,
      description: "Perfect for getting started",
      features: [
        "Up to 5 forms",
        "Up to 100 responses per form",
        "Basic field types",
        "Email notifications",
        "Basic analytics",
      ],
    },
    premium: {
      name: "Premium",
      price: 29,
      description: "Full access to all features",
      features: [
        "Unlimited forms",
        "Unlimited responses",
        "All field types",
        "Advanced conditional logic",
        "Custom branding",
        "Advanced analytics",
        "Third-party integrations",
        "Priority support",
        "Export to CSV/Excel",
        "Custom themes",
        "API access",
      ],
      popular: true,
    },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-balance">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that's right for you. Start with our free plan or
              upgrade for unlimited forms and advanced features.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2 mt-12">
          {/* Free Plan */}
          <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="grid gap-4">
              <h3 className="text-2xl font-bold text-card-foreground">
                {plans.free.name}
              </h3>
              <p className="text-muted-foreground">{plans.free.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-card-foreground">
                  ${plans.free.price}
                </span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                {plans.free.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#"
              className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground px-8 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            //   prefetch={false}
            >
              Get Started Free
            </a>
          </div>

          {/* Premium Plan */}
          <div className="relative flex flex-col justify-between rounded-lg border-2 border-primary bg-card p-6 shadow-lg transition-all hover:shadow-xl">
            {plans.premium.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Most Popular
              </div>
            )}
            <div className="grid gap-4">
              <h3 className="text-2xl font-bold text-card-foreground">
                {plans.premium.name}
              </h3>
              <p className="text-muted-foreground">
                {plans.premium.description}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-card-foreground">
                  ${plans.premium.price}
                </span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                {plans.premium.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#"
              className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground px-8 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            //   prefetch={false}
            >
              Upgrade to Premium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PremiumSection