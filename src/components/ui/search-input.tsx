"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { Input } from "./input";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type Props = {
    defaultValue?: string;
    hideOnSearch?: boolean;
};

export const SearchInput = ({ defaultValue, hideOnSearch }: Props) => {
    const [searchInput, setSearchInput] = useState(defaultValue ?? "");

    const pathname = usePathname();
    const router = useRouter();

    const handleSearchEnter = () => {
        if (searchInput) {
            // encodeURIComponent transforma o texto em algo compatível com URL
            // Trata situações como: espaços, entre outras
            router.push("/search?q=" + encodeURIComponent(searchInput));
        }
    };

    if(hideOnSearch && pathname === '/search') return null

    return (
        <Input
            placeholder="Buscar"
            icon={faMagnifyingGlass}
            filled
            value={searchInput}
            onChange={(t) => setSearchInput(t)}
            onEnter={handleSearchEnter}
        />
    );
};
