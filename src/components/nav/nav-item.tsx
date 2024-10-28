"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    label: string;
    icon: IconDefinition;
    href: string;
    active?: boolean;
};

export const NavItem = ({ href, icon, label, active }: Props) => {
    const pathName = usePathname();

    const isMe = pathName === href;

    return (
        <Link
            href={href}
            className={`flex items-center gap-6 py-3 ${
                active || isMe ? "opacity-100" : "opacity-70"
            } hover:opacity-100`}
        >
            <FontAwesomeIcon icon={icon} className="size-6" />

            <div className="text-lg">{label}</div>
        </Link>
    );
};
