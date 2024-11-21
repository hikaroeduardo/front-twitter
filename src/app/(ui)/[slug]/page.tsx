import Link from "next/link";

import { user } from "@/data/user";

import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
    const isMe = true;

    return (
        <div>
            <GeneralHeader backHref="/">
                <div className="font-bold text-lg">{user.name}</div>
                <div className="text-xs text-gray-500">
                    {user.postCount} posts
                </div>
            </GeneralHeader>

            <section className="border-b-2 border-gray-900">
                <div
                    className="bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${user.cover})` }}
                />

                <div className="flex justify-between items-end -mt-12">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="rounded-full size-24"
                    />

                    <div className="w-32">
                        {isMe && (
                            <Link href={`/${user.slug}/edit`}>
                                <Button label="Editar Perfil" size={2} />
                            </Link>
                        )}

                        {!isMe && <Button label="Seguir" size={2} />}
                    </div>
                </div>

                <div className="px-6 mt-4">
                    <div className="text-xl font-bold">{user.name}</div>
                    <div className="text-gray-500">@{user.slug}</div>
                    <div className="py-5 text-lg text-gray-500">{user.bio}</div>
                    {user.link && (
                        <div className="flex gap-2 items-center">
                            <FontAwesomeIcon icon={faLink} className="size-5" />
                            <Link
                                href={user.link}
                                className="text-blue-300"
                                target="_blank"
                            >
                                {user.link}
                            </Link>
                        </div>
                    )}

                    <div className="my-5 flex gap-6">
                        <div className="text-xl text-gray-500">
                            <span className="text-white">99</span> Seguindo
                        </div>

                        <div className="text-xl text-gray-500">
                            <span className="text-white">99</span> Seguidores
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
