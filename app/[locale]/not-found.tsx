import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { SearchX } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('not_found');
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background text-foreground">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="relative bg-card p-6 rounded-full border border-border shadow-2xl">
          <SearchX className="w-16 h-16 text-sky-500" />
        </div>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center tracking-tight">{t('title')}</h2>
      <h3 className="text-2xl font-semibold mb-4 text-center">{t('subtitle')}</h3>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        {t('description')}
      </p>
      
      <Button asChild className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-8 h-12 text-lg">
        <Link href="/">{t('back_home')}</Link>
      </Button>
    </div>
  );
}
