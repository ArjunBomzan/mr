import React from "react"
import classNames from 'classnames';

export enum BannerSize {
    small = 'small', //for small banners like in contact page
    normal = 'normal',
    big = 'big', //for huge banners like in home page
}


type bannerType = "big" | "normal" | "small"
/**
 * only for height and background color with curved white in bottom
 * 
 * @param {bannerType} size  for small banners like in contact page
 * @returns 
 */


export default function BannerWrapper({ size = "normal", children }: { size?: bannerType, children: React.ReactNode }) {
    return (
        <>
        {/* TODO different sizes for differnt breakpoints. */}
            <div className={classNames(`border   banner-wrapper bg-primary-light banner-b-white-curve z-10 relative flex lg:blockk items-center py-[40px] `, /* TODO  change py accordinly and set heights automatically  */
                { "h-[964px]": size == "big" }, /* TODO different sizes for differnt breakpoints. */
                { "h-[591px]": size == "normal" },  
                { "h-[364px]": size == "small" })
            }>
                {children}
            </div>
        </>
    )
}