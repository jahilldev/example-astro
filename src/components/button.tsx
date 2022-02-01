import { h } from 'preact';
import { useState } from 'preact/hooks';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  className?: string;
  children?: any;
}

/* -----------------------------------
 *
 * Button
 *
 * -------------------------------- */

function Button({ className, children }: IProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <button class={className} onClick={onClick}>
      {children}
    </button>
  );

  function onClick() {
    setIsActive(!isActive);

    console.log('Button.onClick', { isActive });
  }
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Button };
