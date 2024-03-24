import { Link } from 'react-router-dom';
import { LogoSvg } from '@/components/icons';

const Logo = () => {
  return (
    <Link to="/" className="flex gap-2 items-center">
      <LogoSvg />
      <span className="font-bold uppercase text-lg tracking-wider">
        Meteor<span className="pl-0.5 text-primary-600">Minder</span>
      </span>
    </Link>
  );
};

export default Logo;
