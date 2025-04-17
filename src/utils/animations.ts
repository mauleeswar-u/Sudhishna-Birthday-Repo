
/**
 * Animation durations in milliseconds
 */
export const ANIMATION_DURATION = {
  fast: 300,
  medium: 500,
  slow: 800,
  extraSlow: 1200,
};

/**
 * Animation delay multipliers in milliseconds
 */
export const ANIMATION_DELAY = {
  none: 0,
  short: 100,
  medium: 200,
  long: 300,
};

/**
 * Get staggered animation delay based on index
 * @param index Element index
 * @param baseDelay Base delay in ms
 * @returns Delay in milliseconds
 */
export const getStaggeredDelay = (index: number, baseDelay = ANIMATION_DELAY.medium): number => {
  return index * baseDelay;
};

/**
 * Generates confetti pieces for the page
 * @param count Number of confetti pieces
 * @returns Array of confetti styles
 */
export const generateConfetti = (count: number) => {
  const colors = ['#FF5C8D', '#9B87F5', '#75C7F0', '#FFD166', '#06D6A0'];
  const confetti = [];

  for (let i = 0; i < count; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = `${Math.random() * 100}%`;
    const width = `${Math.random() * 10 + 5}px`;
    const height = `${Math.random() * 20 + 10}px`;
    const delay = `${Math.random() * 3}s`;
    const duration = `${Math.random() * 3 + 2}s`;
    
    confetti.push({
      backgroundColor: color,
      left,
      width,
      height,
      animationDelay: delay,
      animationDuration: duration,
    });
  }

  return confetti;
};

/**
 * Easing functions for animations
 */
export const EASING = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};
