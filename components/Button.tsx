import Link from "next/link";

interface IProps {
  text: string;
  href: string;
  styles: string;
}

const Button = ({ text, href, styles }: IProps) => {
  return (
    <div className={styles}>
      <Link href={href}>{text}</Link>
    </div>
  );
};

export default Button;
