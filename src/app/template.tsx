import { ViewTransition } from "react";

/**
 * Templates remount on every navigation (layouts don't), so this is where page
 * enter/exit transitions fire. The header and footer live in the layout and stay put.
 * Animations are in globals.css (.page-enter / .page-exit).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
