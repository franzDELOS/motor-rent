import { useRouter } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  const activeStyles = {
    color: 'text-red-500' // Add your desired active styles here
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={isActive ? activeStyles : {}}>
      {children}
    </a>
  );
};

export default NavLink;
