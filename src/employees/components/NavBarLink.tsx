import { Link, useRoute } from 'wouter';

interface Props extends React.PropsWithChildren {
  href: string;
}

export const NavBarLink: React.FC<Props> = ({ href, children }) => {
  const [isActive] = useRoute(href);

  return (
    <Link href={href}>
      <a className={isActive ? 'text-neutral-50 font-bold underline' : 'text-neutral-200 hover:text-neutral-50'}>{children}</a>
    </Link>
  );
};
