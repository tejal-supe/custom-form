import {
  DragHandleDots2Icon,
  BarChartIcon,
} from "@radix-ui/react-icons";
import { GitPullRequestClosedIcon } from "lucide-react";

const FeatureSection = () => {
  return (
    // <section className="w-full py-12 md:py-24 lg:py-32 bg-card text-card-foreground">
    //   <div className="container px-4 md:px-6">
    //     <div className="flex flex-col items-center justify-center space-y-4 text-center">
    //       <div className="space-y-2">
    //         <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
    //           Powerful Features
    //         </div>
    //         <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-balance">
    //           Everything you need to build amazing forms.
    //         </h2>
    //         <p className="max-w-[900px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-pretty">
    //           From simple contact forms to complex surveys, our platform
    //           provides the tools to capture the data you need.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
    //       <div className="grid gap-1">
    //         <div className="flex items-center gap-2">
    //           <DragHandleDots2Icon className="h-6 w-6 text-primary" />
    //           <h3 className="text-lg font-bold">Drag-and-Drop Builder</h3>
    //         </div>
    //         <p className="text-sm text-secondary">
    //           Visually design your forms with an intuitive drag-and-drop
    //           interface. No coding required.
    //         </p>
    //       </div>
    //       <div className="grid gap-1">
    //         <div className="flex items-center gap-2">
    //           <GitPullRequestClosedIcon className="h-6 w-6 text-primary" />
    //           <h3 className="text-lg font-bold">Conditional Logic</h3>
    //         </div>
    //         <p className="text-sm text-secondary">
    //           Create dynamic forms that adapt to user input with powerful
    //           conditional logic.
    //         </p>
    //       </div>
    //       <div className="grid gap-1">
    //         <div className="flex items-center gap-2">
    //           <BarChartIcon className="h-6 w-6 text-primary" />
    //           <h3 className="text-lg font-bold">Response Dashboard</h3>
    //         </div>
    //         <p className="text-sm text-secondary">
    //           Analyze and manage your form responses with a comprehensive
    //           dashboard and analytics.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card text-card-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
              Powerful Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-balance">
              Everything you need to build amazing forms.
            </h2>
            <p className="max-w-[900px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-pretty">
              From simple contact forms to complex surveys, our platform
              provides the tools to capture the data you need.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <DragHandleDots2Icon className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-bold">Drag-and-Drop Builder</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Visually design your forms with an intuitive drag-and-drop
              interface. No coding required.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <GitPullRequestClosedIcon className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-bold">Conditional Logic</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Create dynamic forms that adapt to user input with powerful
              conditional logic.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <BarChartIcon className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-bold">Response Dashboard</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Analyze and manage your form responses with a comprehensive
              dashboard and analytics.
            </p>
          </div>
        </div>
        <section className="py-16 bg-background text-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose FormBuilder?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Drag & Drop Builder
                </h3>
                <p className="text-muted-foreground">
                  Create forms with ease using our intuitive drag-and-drop
                  interface. Choose from text, email, dropdown, checkbox, and
                  date fields.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Conditional Logic
                </h3>
                <p className="text-muted-foreground">
                  Add smart logic to show or hide fields based on user input,
                  making your forms dynamic and user-friendly.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Shareable Forms</h3>
                <p className="text-muted-foreground">
                  Publish your forms with a single click and share them via
                  unique, secure links with anyone, anywhere.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Response Dashboard
                </h3>
                <p className="text-muted-foreground">
                  View and analyze responses with a clean dashboard, complete
                  with submission counts and timestamps.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Premium Features</h3>
                <p className="text-muted-foreground">
                  Unlock custom branding, higher response limits, and advanced
                  analytics with our premium plan.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Seamless Integrations
                </h3>
                <p className="text-muted-foreground">
                  Connect your forms to tools like Zapier and CRMs (premium) for
                  automated workflows.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FeatureSection;
