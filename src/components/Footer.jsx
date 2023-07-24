import React from "react";
import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="border-t-gray-200 border">
      <div className="w-full px-5 md:px-10 py-5 grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 ">
        {/* Footer top */}
        {/* About Column */}
        <div className="md:col-span-4">
          <h3 className="font-playfair text-xl font-bold text-black mb-5 text-center md:text-left">
            À propos
          </h3>
          <p className="text-[#444444] text-sm leading-6 text-center md:text-left">
            Bienvenue chez Essencia, votre destination ultime pour des
            fragrances exquises. Chez Essencia, nous croyons que le parfum est
            une forme puissante d'expression de soi et de style personnel.{" "}
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-playfair text-xl font-bold text-black mb-5 text-center md:text-left">
            Assistance
          </h3>
          <ul className="flex flex-col gap-2 items-center md:items-start">
            <li>
              <Link to="/" className="text-sm text-[#444444] hover:underline">
                Conditions générales
              </Link>
            </li>
            <li>
              <Link to="/" className="text-sm text-[#444444] hover:underline">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link to="/" className="text-sm text-[#444444] hover:underline">
                Politique d'expédition
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-playfair text-xl font-bold text-black mb-5 text-center md:text-left">
            Liens rapides
          </h3>
          <ul className="flex flex-col gap-2 items-center md:items-start">
            <li>
              <Link to="/" className="text-sm text-[#444444] hover:underline">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/" className="text-sm text-[#444444] hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="text-sm text-[#444444] hover:underline">
                Partenariat
              </Link>
            </li>
            <li>
              <Link to="/" className="text-sm text-[#444444] hover:underline">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/" className="text-sm text-[#444444] hover:underline">
                Contactez-nous
              </Link>
            </li>
            <li>
              <Link to="/" className="text-sm text-[#444444] hover:underline">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-playfair text-xl font-bold text-black mb-5 text-center md:text-left">
            Contact
          </h3>
          <p className="text-[#444444] text-sm leading-6 mb-2 flex items-center gap-2 justify-center md:justify-start">
            <EnvelopeIcon className="w-5 h-5" />
            info@essencia.com
          </p>
          <p className="text-[#444444] text-sm leading-6 mb-2 flex items-center gap-2 justify-center md:justify-start">
            <PhoneIcon className="w-5 h-5" />
            +33 1 23 45 67 89
          </p>
          <p className="text-[#444444] text-sm leading-6 mb-2 flex items-center gap-2 justify-center md:justify-start">
            <MapPinIcon className="w-5 h-5" />
            Maison Lacroix, 14 Rue du Château
          </p>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="w-full px-5 flex items-center justify-center py-5 border-t-gray-200 border">
        <p className="inline-block text-sm text-center">
          Tous droits réservés. © 2023{" "}
          <Link to="/" className="text-[#008080] underline">
            Essencia
          </Link>
          . Développé par{" "}
          <a
            target="_blank"
            href="https://www.facebook.com/loqman.axel.djefafla"
            className="text-[#008080] underline"
          >
            Loqman Djefafla.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
