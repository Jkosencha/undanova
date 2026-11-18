/**
 * Templates remount on every navigation (layouts don't), so each new page rises
 * gently into place while the header and footer stay put. Transform only (no
 * opacity), so the first paint isn't delayed. React's <ViewTransition> was tried
 * and dropped: it added seconds of main-thread work on mid-range phones.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in flex flex-1 flex-col">{children}</div>;
}
