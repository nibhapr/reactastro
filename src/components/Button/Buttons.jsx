import React, { memo } from 'react'
import { Button } from 'react-bootstrap';
import "../../assets/scss/components/_button.scss"

const Buttons = (color,themeColor,href,type,target,size,className="",to,onClick,ariaLabel) => {
  const color1 = themeColor && themeColor[0];
  const color2 = themeColor && themeColor[1];
  const textcolor1 = color && color[0];
  const textcolor2 = color && color[1];
  const style = {
    "--gradient-color": typeof (themeColor) === "object" ? `linear-gradient(45deg, ${color1}, ${color2}, ${color1})` : themeColor,
    "--brand-color": typeof (themeColor) === "object" ? `linear-gradient(to right, ${color1}, ${color2}, ${color1})` : themeColor,
    "--text-color": typeof (color) === "object" ? `linear-gradient(to right, ${textcolor1}, ${textcolor2}, ${textcolor1})` : color,
  }
  return (
    (href || type === "submit") ? (
      <Button
        as={href ? "a" : (type === "submit" ? "button" : "a")}
        type={type === "submit" ? "submit" : undefined}
        style={style}
        className={`border-[2px] border-solid btn-${size}${className ? ' ' + className : ''}${typeof (themeColor) === "object" ? " btn-gradient" : ""}${typeof (color) === "object" ? " text-gradient" : ""}`}
        href={href}
        onClick={onClick}
        disabled={disabled}
        variant="secondary"
        aria-label={ariaLabel}
        target={target}
      >
        <ButtonInner  />
      </Button>
    ) : (
      <a
        style={style}
        target={target}
        className={`btn border-[2px] border-solid btn-${size}${className ? ' ' + className : ''}${typeof (themeColor) === "object" ? " btn-gradient" : ""}${typeof (color) === "object" ? " text-gradient" : ""} `}
        to={to ? to : "#"}
        onClick={onClick}
        aria-label={ariaLabel}>
        <ButtonInner  />
      </a>
    )
  )
}

const ButtonInner = (icon,iconPosition,title,theme) => {
  return (
    <>
      {(icon && iconPosition !== "after") && <i className={`${icon} left-icon`}></i>}
      {title}
      {(icon && iconPosition === "after") && <i className={`${icon} right-icon`}></i>}
      {(theme === "btn-link-gradient") && <span></span>}
    </>
  )
}




export default memo(Buttons)