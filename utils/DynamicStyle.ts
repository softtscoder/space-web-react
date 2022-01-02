import { CSSObject } from "@chakra-ui/react";
import { nav } from "utils";

/**
 * @description CSSStyleObject for `_after, ::after` pseudo-element
 * @param condition Condition to generate underline
 * @returns
 *
 * _**NOTES**_
 *
 * * Element contain `_after` must have style: `position: relative`
 * @example
 * ```jsx
 * <Box
 *    position="relative"
 *    _after={_afterUnderlineStyle(your_condition)}
 * >
 * ```
 *
 * * To display animation, use `:hover:after` with `_sxHoverAfterUnderlineStyle`. See below.
 *
 * ---
 * * Basic usage
 * @example
 * ```jsx
 * _after={_afterUnderlineStyle(your_condition)}
 * ```
 * * Extend/Override style. If overrideStyle don't work, try to use `!important`
 * @example
 * ```jsx
 * _after={_afterUnderlineStyle(your_condition, {
 *    transition: "transform 1s ease-in-out !important",
 * })}
 * ```
 *
 * * Animation
 * @example
 * ```jsx
 * _after={_afterUnderlineStyle(your_condition)}
 * sx={{
 *    "&:hover:after": _sxHoverAfterUnderlineStyle()
 * }}
 * ```
 */
export function _afterUnderlineStyle(
  condition: boolean,
  overrideStyle?: CSSObject
) {
  const baseStyle: CSSObject = {
    content: `""`,
    width: "100%",
    height: "2px",
    position: "absolute",
    bottom: "0",
    overflow: "hidden",
    transition: "transform 275ms ease",
  };
  const conditionStyle: CSSObject = condition
    ? {
        // active state
        opacity: "1",
        backgroundColor: nav._bordorColor?.active,
        transform: "scaleX(1)",
      }
    : {
        // hover state
        opacity: "0.5",
        backgroundColor: nav._bordorColor?.hover,
        transform: "scaleX(0)",
      };

  return Object.assign(baseStyle, conditionStyle, overrideStyle);
}

/**
 * @description Animation for `_afterUnderlineStyle()`
 * @returns CSSObject
 *
 * ---
 *
 * * Basic usage
 * @example
 * ```jsx
 * _after={_afterUnderlineStyle(your_condition)}
 * sx={{
 *    "&:hover:after": _sxHoverAfterUnderlineStyle()
 * }}
 * ```
 *
 * * Extend/Override style. If overrideStyle don't work, try to use `!important`
 * @example
 * ```jsx
 * "&:hover:after": _sxHoverAfterUnderlineStyle({
 *    transform: "unset",
      transformOrigin: "0% 50% !important",
 * })
 * ```
 *
 * ---
 *
 * Animation example
 * @see https://stackoverflow.com/questions/28623446/hover-effect-expand-bottom-border
 */
export function _sxHoverAfterUnderlineStyle(overrideStyle?: CSSObject) {
  const baseStyle = {
    backgroundColor: nav._bordorColor?.hover,
    transform: "scaleX(1) !important",
    mixBlendMode: "normal",
    opacity: "0.5",
  };

  return Object.assign(baseStyle, overrideStyle);
}
