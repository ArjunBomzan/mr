import React from "react";
import classNames from "classnames";

export enum BannerSize {
    small = "small", //for small banners like in contact page
    normal = "normal",
    big = "big", //for huge banners like in home page
}

type bannerType = "big" | "normal" | "small";
/**
 * only for height and background color with curved white in bottom
 *
 * @param {bannerType} size  for small banners like in contact page
 * @param {string} extendedClassName  for small banners like in contact page
 * @returns
 */

export default function BannerWrapper({
    size = "normal",
    children,
    extendedClassName,
}: {
    size?: bannerType;
    children: React.ReactNode;
    extendedClassName?: string;
}) {
    return (
        <>
            <div className="hidden ">
                <span className="inline-block !h-[182px] after:!h-[182px] after:content-[`_`] after:block "></span>
                <span className="inline-block !h-[140px] after:!h-[140px] after:content-[`_`] after:block"></span>
                <span className="inline-block !h-[100px] after:!h-[100px] after:content-[`_`] after:block"></span>

            </div>
            {/* TODO different sizes for differnt breakpoints. */}
            <div
                className={classNames(
                    `  banner-wrapper banner-b-white-curve  lg:blockk zz-10 relative flex items-center bg-primary-light py-[40px] ` /* TODO  change py accordinly and set heights automatically  */,
                    `
                    after:absolute 
                    after:bottom-0 
                    after:${
                        size === "big"
                            ? "!h-[182px]"
                            : size === "normal"
                              ? "!h-[140px]"
                              : "!h-[100px]"
                    }
                    after:w-full 
                    after:bg-cover 
                    after:bg-center
                    md:after:bg-top
                    after:bg-no-repeat 
                    after:content-["_"]
                    `,
                    { " h-[964px]": size == "big" },
                    { " h-[591px]": size == "normal" },
                    { "h-[364px] ": size == "small" },
                    { [extendedClassName]: true },
                )}
            >
                {children}
            </div>
        </>
    );
}
