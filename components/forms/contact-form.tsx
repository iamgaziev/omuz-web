"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, User, Phone, Loader2 } from "lucide-react";
import { toast } from "react-toastify";

export function ContactForm({ translations }: { translations: Record<string, string> }) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            fullname: formData.get("fullname"),
            phone: formData.get("phone"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                toast.success(translations.success || "Message sent successfully!");
                (e.target as HTMLFormElement).reset();
            } else {
                toast.error(translations.error || "Failed to send message.");
            }
        } catch (err) {
            toast.error(translations.error || "An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="space-y-3">
                <Label htmlFor="fullname" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
                    {translations.fullname}
                </Label>
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 group-focus-within:text-sky-500 transition-colors">
                        <User className="w-5 h-5" />
                    </div>
                    <Input
                        id="fullname"
                        name="fullname"
                        required
                        placeholder={translations.fullname_placeholder || ""}
                        className="pl-12 h-14 text-base bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-muted-foreground/40"
                    />
                </div>
            </div>

            <div className="space-y-3">
                <Label htmlFor="phone" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
                    {translations.phone}
                </Label>
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 group-focus-within:text-sky-500 transition-colors">
                        <Phone className="w-5 h-5" />
                    </div>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder={translations.phone_placeholder || ""}
                        className="pl-12 h-14 text-base bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-muted-foreground/40"
                    />
                </div>
            </div>

            <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-sky-600 to-purple-600 hover:from-sky-500 hover:to-purple-500 text-white h-14 rounded-2xl text-lg font-semibold shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/30 disabled:opacity-50 transition-all duration-300 group"
            >
                {loading ? (
                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> ...</>
                ) : (
                    <>{translations.submit} <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></>
                )}
            </Button>
        </form>
    );
}
