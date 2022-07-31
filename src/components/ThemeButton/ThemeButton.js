import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

export default function ThemeButton(props) {
  const theme = useContext(ThemeContext);
  return (
    <button {...props} style={{ background: theme.background, color: theme.foreground }} />
  );
}