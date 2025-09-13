import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white/5">
      {/* Main Content */}
      <main className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 text-balance">{"Let's Work Together"}</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto text-pretty">
              {"Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life."}
            </p>
          </div>

          {/* Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-card rounded-lg shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Send a Message</h2>
              {/* ContactForm */}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                {/*ContactInfo */}
              </div>

              {/* Quick Contact Cards */}
              <div className="grid gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-orange-100">kajhunain@gmail.com</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-orange-100">03078875026</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-orange-100">© 2024 Portfolio. Built with Next.js and</p>
        </div>
      </footer>
    </div>
  )
}
