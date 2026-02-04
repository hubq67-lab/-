import React from 'react';
import { Wrench, Home, Shield, Zap, Phone, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case 'tool': return <Wrench className={className} />;
    case 'home': return <Home className={className} />;
    case 'shield': return <Shield className={className} />;
    case 'zap': return <Zap className={className} />;
    case 'phone': return <Phone className={className} />;
    case 'map': return <MapPin className={className} />;
    case 'chevron': return <ChevronRight className={className} />;
    case 'check': return <CheckCircle2 className={className} />;
    default: return <Wrench className={className} />;
  }
};