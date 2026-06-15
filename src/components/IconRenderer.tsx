import { Target, Microscope, MapPin, Database, Brain, Heart, Users, Receipt, Sparkles, Radio, Wand2, Handshake, Megaphone, Quote, Compass, Mail, Instagram, Calendar, User, Hash, School, GraduationCap } from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
}

export function IconRenderer({ name, className = "w-6 h-6" }: IconRendererProps) {
  switch (name) {
    case 'Target':
      return <Target className={className} />;
    case 'Microscope':
      return <Microscope className={className} />;
    case 'MapPin':
      return <MapPin className={className} />;
    case 'Database':
      return <Database className={className} />;
    case 'Brain':
      return <Brain className={className} />;
    case 'Heart':
      return <Heart className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'Receipt':
      return <Receipt className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Radio':
      return <Radio className={className} />;
    case 'Wand2':
      return <Wand2 className={className} />;
    case 'Handshake':
      return <Handshake className={className} />;
    case 'Megaphone':
      return <Megaphone className={className} />;
    case 'Quote':
      return <Quote className={className} />;
    case 'Mosque':
      return <Compass className={className} />;
    case 'Mail':
      return <Mail className={className} />;
    case 'Instagram':
      return <Instagram className={className} />;
    case 'Calendar':
      return <Calendar className={className} />;
    case 'User':
      return <User className={className} />;
    case 'Hash':
      return <Hash className={className} />;
    case 'School':
      return <School className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}
