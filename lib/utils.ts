import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges and combines multiple class names using clsx and Tailwind CSS merge utility.
 *
 * This utility function takes a variable number of class value inputs, processes them
 * through clsx for conditional class name handling, and then applies Tailwind CSS
 * merge logic to resolve conflicting utility classes.
 *
 * @param inputs - Variable length array of class values that can be strings, objects,
 *                 arrays, or other ClassValue types supported by clsx.
 * @returns A merged string of CSS class names with Tailwind conflicts resolved.
 *
 * @example
 * // Basic usage with strings
 * cn('px-2', 'py-1', 'bg-red-500')
 *
 * @example
 * // Conditional classes
 * cn('px-2', isActive && 'bg-blue-500', isDisabled && 'opacity-50')
 *
 * @example
 * // Resolving Tailwind conflicts
 * cn('px-2', 'px-4') // Returns 'px-4' (rightmost wins)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
