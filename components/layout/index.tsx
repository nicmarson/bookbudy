import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <Meta {...meta} />
      <SignInModal />
      <div className="page">
        <nav>
          <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
            <Link href="/" className="flex items-center font-display text-2xl">
              <Image
                src="/logo.png"
                alt="BookBudy logo"
                width="94"
                height="48"
              ></Image>
              <p className="hidden">BookBudy</p>
            </Link>
            {/* <div>
              <AnimatePresence>
                {!session && status !== "loading" ? (
                  <motion.button
                    className="rounded-full border border-black bg-primary-700ß p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                    onClick={() => setShowSignInModal(true)}
                    {...FADE_IN_ANIMATION_SETTINGS}
                  >
                    Sign In
                  </motion.button>
                ) : (
                  <UserDropdown />
                )}
              </AnimatePresence>
            </div> */}
          </div>
        </nav>
        <main className="flex-auto">
          {children}
        </main>
        <footer>
          <div className="container mx-auto">
            <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
              <div className="flex items-center font-display text-2xl">
                <Image
                  src="/logo.png"
                  alt="BookBudy logo"
                  width="94"
                  height="48"
                ></Image>
                <p className="hidden">BookBudy</p>
              </div>
              <div>
                <div>Privacy</div>
                <div>Terms of Service</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
