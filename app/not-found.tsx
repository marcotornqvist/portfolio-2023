import Link from "next/link";
import React, { FC } from "react";

const NotFound: FC = () => {
  return (
    <div className="container flex min-h-[calc(100vh_-_4rem)] flex-col items-center justify-center md:min-h-[calc(100vh_-_5rem)]">
      <div className="mx-auto pb-16 text-center">
        Page not found
        {/* <h1 className="text-h2 mb-8">{t("title")}</h1>
        <p className="text-body1 mx-auto mb-12 max-w-prose md:max-w-[800px]">
          {t("description")}
        </p>
        <Link
          href={"/" + locale}
          className={buttonVariants({ size: "full", borderRadius: "full" })}
        >
          {t("cta-text")}
        </Link> */}
      </div>
    </div>
  );
};

export default NotFound;
