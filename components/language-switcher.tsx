"use client"

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter, routing } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { USFlag, RUFlag, TJFlag } from "@/components/icons/flags"

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (newLocale: string) => {
    router.replace(
      // @ts-expect-error -- pathname and params are compatible
      { pathname, params },
      { locale: newLocale }
    );
  };

  const languages = [
    { code: "en", name: "English", icon: USFlag },
    { code: "ru", name: "Русский", icon: RUFlag },
    { code: "tj", name: "Тоҷикӣ", icon: TJFlag }
  ];

  const CurrentIcon = languages.find(l => l.code === locale)?.icon || USFlag;

  return (
    <Select value={locale} onValueChange={onSelectChange}>
      <SelectTrigger className="w-[140px] h-9 bg-muted/50 border-input/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-slate-800 relative">
                <CurrentIcon className="w-full h-full object-cover scale-150" />
            </div>
            <span>{languages.find(l => l.code === locale)?.name || locale.toUpperCase()}</span>
        </div>
      </SelectTrigger>
      <SelectContent align="end">
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-slate-800 relative">
                    <lang.icon className="w-full h-full object-cover scale-150" />
                </div>
                <span>{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
