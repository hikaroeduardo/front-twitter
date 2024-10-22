"use client";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faEyeSlash,
    IconDefinition,
} from "@fortawesome/free-regular-svg-icons";

type Props = {
    placeholder: string;
    password?: boolean;
    filled?: boolean;
    icon?: IconDefinition;
    value?: string;
    onChange?: (newValue: string) => void;
};

export const Input = ({
    placeholder,
    value,
    password,
    icon,
    onChange,
    filled,
}: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div
            className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${
                filled && "bg-gray-700"
            }`}
        >
            {icon && (
                <FontAwesomeIcon
                    icon={icon}
                    className=" ml-4 size-6 text-gray-500"
                />
            )}
            <input
                className="flex-1 outline-none bg-transparent h-full p-4"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange && onChange(e.target.value)}
                type={password && !showPassword ? "password" : "text"}
            />
            {password && (
                <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash}
                    className="cursor-pointer mr-4 size-6 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                />
            )}
        </div>
    );
};
