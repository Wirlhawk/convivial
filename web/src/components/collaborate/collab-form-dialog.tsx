"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";

interface CollabFormDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    serviceTitle: string;
}

export default function CollabFormDialog({
    open,
    onOpenChange,
    serviceTitle,
}: CollabFormDialogProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
    const { toast } = useToast();

    const validateForm = () => {
        const newErrors: { name?: string; email?: string } = {};
        let isValid = true;

        if (!name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Here you would typically call your API to submit the form
            // For example: await api.orders.create({ name, email, service: serviceTitle });

            // Simulate API call with timeout
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setSubmitSuccess(true);
            toast({
                title: "Collaboration request sent!",
                description: `Thank you for your interest in ${serviceTitle}. We'll be in touch soon.`,
                variant: "default",
            });

            setTimeout(() => {
                onOpenChange(false);
                setSubmitSuccess(false);
                setName("");
                setEmail("");
                setErrors({});
            }, 2000);
        } catch (error) {
            console.error("Error submitting form:", error);
            toast({
                title: "Something went wrong",
                description: "Failed to send your request. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bowlby">
                        Collaborate on {serviceTitle}
                    </DialogTitle>
                </DialogHeader>

                {submitSuccess ? (
                    <div className="py-6 text-center">
                        <p className="text-lg font-medium text-green-600 mb-2">
                            Thank you for your interest!
                        </p>
                        <p>We'll be in touch with you soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 py-4">
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`w-full rounded-md border ${
                                    errors.name
                                        ? "border-red-500"
                                        : "border-input"
                                } bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
                                placeholder="Enter your name"
                            />
                            {errors.name && (
                                <p className="text-xs text-red-500">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full rounded-md border ${
                                    errors.email
                                        ? "border-red-500"
                                        : "border-input"
                                } bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
                                placeholder="Enter your email"
                            />
                            {errors.email && (
                                <p className="text-xs text-red-500">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <DialogFooter className="pt-4">
                            <DialogClose asChild>
                                <Button type="button" variant="outline">
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </Button>
                        </DialogFooter>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}
