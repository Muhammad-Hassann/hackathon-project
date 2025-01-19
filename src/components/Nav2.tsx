import Image from "next/image";
import Link from "next/link";

interface MenuSectionProps {
  heading: string;
  secondLinkText: string;
  secondLinkHref: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ heading, secondLinkText, secondLinkHref }) => {
  return (
    <section
      className="relative w-full h-[40vh] pt-10 bg-black"
      aria-label="Menu Section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/images/pages-bg.png" // Static background image
            alt="Decorative background representing menu"
            layout="fill"
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center bg-black bg-opacity-50 text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{heading}</h2>
        <nav
          className="flex items-center space-x-2 text-lg sm:text-xl"
          aria-label="Breadcrumb navigation"
        >
          {/* Static Home Link */}
          <Link href="/" passHref>
            <span className="text-white hover:underline">Home</span>
          </Link>
          {/* Separator */}
          <span className="mx-2">&gt;</span>
          {/* Dynamic Second Link */}
          <Link href={secondLinkHref} passHref>
            <span className="text-primary-yellow">{secondLinkText}</span>
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default MenuSection;
