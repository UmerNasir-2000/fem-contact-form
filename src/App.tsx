import { Toaster } from "react-hot-toast";
import ContactForm from "./components/contactForm";

function App() {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <Toaster />
      <ContactForm />
    </section>
  );
}

export default App;
