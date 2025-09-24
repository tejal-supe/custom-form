import Navbar from "../../common/Navbar.tsx";

const LandingPage = () => {
  return (
    <div className="font-sans">
      {/* Header */}
<Navbar/>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Create Custom Forms in Minutes
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Build powerful, customizable forms with our no-code drag-and-drop
            builder. Collect responses, analyze data, and share effortlessly.
          </p>
          <p className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition">
            Try It Free
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why Choose FormBuilder?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Drag & Drop Builder
              </h3>
              <p className="text-gray-600">
                Create forms with ease using our intuitive drag-and-drop
                interface. Choose from text, email, dropdown, checkbox, and date
                fields.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Conditional Logic
              </h3>
              <p className="text-gray-600">
                Add smart logic to show or hide fields based on user input,
                making your forms dynamic and user-friendly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Shareable ps
              </h3>
              <p className="text-gray-600">
                Publish your forms with a single click and share them via
                unique, secure links with anyone, anywhere.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Response Dashboard
              </h3>
              <p className="text-gray-600">
                View and analyze responses with a clean dashboard, complete with
                submission counts and timestamps.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Premium Features
              </h3>
              <p className="text-gray-600">
                Unlock custom branding, higher response limits, and advanced
                analytics with our premium plan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Seamless Integrations
              </h3>
              <p className="text-gray-600">
                Connect your forms to tools like Zapier and CRMs (premium) for
                automated workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            See It in Action
          </h2>
          <img
            src="/images/form-builder-screenshot.png"
            alt="FormBuilder Interface Screenshot"
            className="max-w-full rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* Pricing Teaser Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Free Plan
              </h3>
              <p className="text-gray-600 mb-4">Perfect for small projects</p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>100 responses per form</li>
                <li>Basic form fields</li>
                <li>Shareable links</li>
                <li>Response dashboard</li>
              </ul>
              <p className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                Start Free
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-blue-600">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Premium Plan
              </h3>
              <p className="text-gray-600 mb-4">
                Unlock advanced features for ₹499/month
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>Unlimited responses</li>
                <li>Custom branding</li>
                <li>Advanced analytics</li>
                <li>Third-party integrations</li>
                <li>Priority support</li>
              </ul>
              <p className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                Go Premium
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your First Form?
          </h2>
          <p className="text-lg mb-8">
            Join thousands of creators using FormBuilder to collect data
            effortlessly.
          </p>
          <p className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition">
            Get Started Now
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <img
              src="/images/logo.png"
              alt="FormBuilder Logo"
              className="h-8 inline"
            />
            <span className="ml-2 text-lg font-semibold">FormBuilder</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
