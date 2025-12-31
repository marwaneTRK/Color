import { forwardRef } from 'react';

const TemplateImgs = forwardRef(({
  Component,
  src,
  alt = "Decorative element",
  top,
  bottom,
  left,
  right,
  width,
  className = "",
  style: customStyle = {},
  ...props
}, ref) => {
  const style = { ...customStyle };
  if (top !== undefined) style.top = top;
  if (bottom !== undefined) style.bottom = bottom;
  if (left !== undefined) style.left = left;
  if (right !== undefined) style.right = right;

  return (
    <div
      ref={ref}
      className={`absolute z-0 pointer-events-none ${width || ""} ${className}`}
      style={style}
      {...props}
    >
      {Component ? (
        <Component className="w-full h-auto object-contain" aria-label={alt} />
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain"
        />
      )}
    </div>
  );
});

TemplateImgs.displayName = 'TemplateImgs';

export default TemplateImgs;
