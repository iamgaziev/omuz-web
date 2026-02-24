'use client';
import { useTranslations } from 'next-intl';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('error_page');
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background text-foreground">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-3xl" />
        <div className="relative bg-card p-4 rounded-full border border-border shadow-2xl">
          <AlertCircle className="w-12 h-12 text-destructive" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-4 text-center">{t('title')}</h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        {t('description')}
      </p>
      
      <div className="flex gap-4">
        <Button onClick={() => reset()} className="bg-sky-600 hover:bg-sky-700 text-white rounded-full">
          {t('retry')}
        </Button>
        <Button variant="outline" onClick={() => window.location.href = '/'} className="rounded-full">
          {t('go_home')}
        </Button>
      </div>
    </div>
  );
}
