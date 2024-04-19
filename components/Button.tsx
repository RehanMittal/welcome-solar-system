import Image from "next/image";

type ButtonProps = {
  type?: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  href?: string; // Add href prop for link
  onClick?: () => void;
  id?: string;
};

const Button = ({ type = 'button', title, icon, variant, full, href }: ButtonProps) => {
  // If href is provided, render an anchor tag instead of a button
  if (href) {
    return (
      <a
        href={href}
        className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      >
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
      </a>
    );
  }

  // If no href is provided, render a button tag
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
