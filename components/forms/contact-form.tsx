"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { toast } from "react-toastify";

export function ContactForm({ translations }: { translations: Record<string, string> }) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            surname: formData.get("surname"),
            study_location: formData.get("study_location"),
            phone: formData.get("phone"),
            message: formData.get("message"),
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
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="name">{translations.name}</Label>
                    <Input id="name" name="name" required placeholder="John" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="surname">{translations.surname}</Label>
                    <Input id="surname" name="surname" required placeholder="Doe" className="bg-background/50" />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="study_location">{translations.study_location}</Label>
                <Input id="study_location" name="study_location" required placeholder="University / School" className="bg-background/50" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone">{translations.phone}</Label>
                <Input id="phone" name="phone" required placeholder="+992 00 000 0000" className="bg-background/50" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">{translations.message}</Label>
                <textarea
                    id="message"
                    name="message"
                    required
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="How can we help you?"
                />
            </div>

            <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-sky-600 to-purple-600 hover:from-sky-700 hover:to-purple-700 text-white h-12 rounded-xl text-lg shadow-lg shadow-sky-500/20 disabled:opacity-50"
            >
                {loading ? "..." : <>{translations.submit} <Send className="w-4 h-4 ml-2" /></>}
            </Button>
        </form>
    );
}
