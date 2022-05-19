import { useState } from 'react';

export default function useToggle() {
  const [toggle, setToggle] = useState(false);

  function handleToggleClick() {
    setToggle(!toggle);
  }

  return { toggle, handleToggleClick };
}
