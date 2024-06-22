import Link from 'next/link';

const Links = () => {
  const links = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Blog', path: '/blog' },
  ];
  return (
    <ul>
      {links.map((link) => (
        <li key={link.path}>
          <Link href={link.path}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
