import classNames from "classnames"

type swooshType = "primary" | "secondary"

/**
 * @param {swooshType} type primary | secondary
 * @returns 
 */
export default function Swoosh({ hideInMob, children, type = "primary" }: { type?: swooshType, hideInMob?: boolean, children: string }) {
    return (
        <span className="relative z-20">
            {children}
            <span className={classNames(
                `${type == "primary" ? "swoosh-h" : "swoosh-h-secondary"} `,
                { "hide hidden md:inline-block": hideInMob }
            )}></span>
        </span>
    )
}