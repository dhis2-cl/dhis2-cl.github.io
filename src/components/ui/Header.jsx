import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      path: '/homepage-dhis2-health-informatics-consultancy',
      icon: 'Home'
    },
    {
      name: 'About',
      path: '/about-us-chilean-health-tech-pioneers',
      icon: 'Users'
    },
    {
      name: 'Training',
      path: '/training-academy-dhis2-certification-programs',
      icon: 'GraduationCap'
    },
    {
      name: 'Dhis2 Services',
      path: '/dhis2-implementation-services',
      icon: 'LaptopMinimalCheck'
    },
    {
      name: 'Dhis2 Custom Development',
      path: '/custom-development-portfolio',
      icon: 'Code2'
    }

  ];

  const moreItems = [
    
    {
      name: 'Knowledge Center',
      path: '/knowledge-center-dhis2-expertise-hub',
      icon: 'BookOpen'
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-glass shadow-elevation border-b border-border' 
          : 'bg-white/90 backdrop-blur-glass'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage-dhis2-health-informatics-consultancy" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
            onClick={closeMenu}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-dhis2-purple rounded-lg shadow-elevation-sm">
              <Icon name="Activity" size={24} color="white" strokeWidth={2.5} />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">DHIS2 Solutions</h1>
              <p className="text-xs text-text-secondary font-medium">Chile</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-elevation-sm'
                    : 'text-text-primary hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-text-primary hover:bg-muted hover:text-primary transition-all duration-300">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
                <Icon name="ChevronDown" size={14} />
              </button>
              
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-elevation-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {moreItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                        isActivePath(item?.path)
                          ? 'bg-primary/10 text-primary border-r-2 border-primary' :'text-text-primary hover:bg-muted hover:text-primary'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              iconName="Calendar"
              iconPosition="left"
              className="font-cta"
            >
              Schedule Assessment
            </Button>
            <Button 
              variant="default" 
              size="sm"
              iconName="Phone"
              iconPosition="left"
              className="bg-conversion-red hover:bg-conversion-red/90 font-cta"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-text-primary hover:bg-muted transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' :'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="px-4 py-4 bg-white/95 backdrop-blur-glass border-t border-border">
            <nav className="space-y-2">
              {[...navigationItems, ...moreItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-elevation-sm'
                      : 'text-text-primary hover:bg-muted hover:text-primary'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </nav>
            
            {/* Mobile CTA Buttons */}
            <div className="mt-6 space-y-3">
              <Button 
                variant="outline" 
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                className="font-cta"
              >
                Schedule Free Assessment
              </Button>
              <Button 
                variant="default" 
                fullWidth
                iconName="Phone"
                iconPosition="left"
                className="bg-conversion-red hover:bg-conversion-red/90 font-cta"
              >
                Contact Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;