
import { Facebook, Github, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/50 dark:bg-accent/50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Zenn<span className="text-primary">vita</span>
            </h3>
            <p className="text-foreground/70 mb-4">
              AI-powered holistic healthcare solution for modern wellness management. 
              Transforming health monitoring with advanced technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-foreground/70 hover:text-primary transition-colors">Features</a>
              </li>
              <li>
                <a href="#packages" className="text-foreground/70 hover:text-primary transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">About Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Documentation</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span className="text-foreground/70">info@zennvita.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span className="text-foreground/70">+1 (888) 555-1234</span>
              </li>
            </ul>
            <form className="mt-4">
              <label htmlFor="newsletter" className="block text-sm font-medium mb-2">Subscribe to our newsletter</label>
              <div className="flex">
                <input
                  type="email"
                  id="newsletter"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md border border-input bg-background"
                />
                <button type="submit" className="btn-primary rounded-l-none">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Zennvita. All rights reserved.</p>
          <p className="mt-2">
            Designed with <span className="text-primary">♥</span> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
