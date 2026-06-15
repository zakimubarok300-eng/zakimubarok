export interface SlideItem {
  id: number;
  title: string;
  subtitle?: string;
  type: 'cover' | 'split' | 'highlight' | 'grid' | 'table' | 'quote' | 'big-number' | 'bio' | 'penutup';
  coverData?: {
    title: string;
    subtitle: string;
    author: string;
    institution: string;
  };
  splitData?: {
    bullets: { title: string; desc: string }[];
    imageUrl: string;
    imageAlt: string;
  };
  highlightData?: {
    iconName: string;
    title: string;
    text: string;
    subText?: string;
  };
  gridData?: {
    items: {
      iconName: string;
      title: string;
      desc: string;
      accentBg?: boolean;
    }[];
  };
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  quoteData?: {
    text: string;
    source: string;
  };
  bigNumberData?: {
    numberStr: string;
    title: string;
    subtitle: string;
    description: string;
  };
  bioData?: {
    name: string;
    title: string;
    birth: string;
    nim: string;
    prodi: string;
    institusi: string;
    email: string;
    instagram: string;
    imageUrl: string;
  };
}

export interface Comment {
  id: string;
  name: string;
  role: string;
  text: string;
  timestamp: string;
  slideIndex: number;
}