import type { BenefitProps } from "@/types";
import { motion } from "framer-motion";

export function BenefitCard({
    icon,
    title,
    description,
    className,
}: BenefitProps) {
    return (
        <motion.div
            className={`relative group ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="absolute inset-0 z-0 hidden rounded-lg transition-all duration-500 group-hover:opacity-100 bg-melon dark:bg-melon/80 sm:block"></div>
            <div className="relative p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between dark:bg-melon bg-light">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-full bg-slate-100 dark:bg-black flex items-center justify-center mb-4"
                >
                    {icon}
                </motion.div>
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-semibold text-slate-900 dark:text-black mb-2"
                >
                    {title}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-slate-600 flex-grow"
                >
                    {description}
                </motion.p>
            </div>
        </motion.div>
    );
}
